const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")


// database
require("../connection/DB")

// user Model
const User = require("../models/User")

// register user
router.post("/register", async (req, res) => {
    const { username, email, number, password, cpassword } = req.body;
    if (!username || !email || !number || !password || !cpassword) {
        res.status(400).json("Enter all the data")
    }
    try {
        // if email already exist in database then this function will run
        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return res.status(500).json("Email already exist.Please enter new email")
            // to compare password and confirm password
        } else if (password !== cpassword) {
            return res.status(500).json("Password does not match")
        } else {
            // 
            const user = new User({ username, email, password, number, password, cpassword })
            // generate salt to hash password
            const salt = await bcrypt.genSalt(12);
            // now we set user password to hashed password
            user.password = await bcrypt.hash(user.password, salt);
            user.cpassword = await bcrypt.hash(user.cpassword, salt);
            const result = await user.save();
            res.status(201).json(result)
        }

    } catch (error) {
        res.status(400).json("unable to register data")
    }
})



// login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json("enter all the data")
    }
    const user = await User.findOne({ email });
    try {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            const { password, cpassword, ...others } = user._doc;
            return res.status(201).json(others)
        } else {
            return res.status(400).json("Invalid data")
        }
    } catch (error) {
        return res.status(400).json("Unable to login")

    }
})


module.exports = router;