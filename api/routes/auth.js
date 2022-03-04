const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const verifyToken = require("../middleware/verifyToken")




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

            const user = new User({ username, email, password, number, cpassword })


            // generate salt to hash password
            const salt = await bcrypt.genSalt(12);
            // now we set user password to hashed password
            user.password = await bcrypt.hash(user.password, salt);
            user.cpassword = await bcrypt.hash(user.cpassword, salt);


            // jsonwebtoken  when register
            const token = await user.generateToken()
            res.cookie("jwtToken", token, {
                expires: new Date(Date.now + process.env.COOKI_EXPIRE * 24860 * 60 * 1000),
                httpOnly: true,
            })
            const result = await user.save();
            return res.status(201).json({ success: true, result })
        }

    } catch (error) {
        return res.status(400).json("unable to register data")
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

        // generating login token
        const token = await user.generateToken()
        res.cookie("jwtToken", token, {
            expires: new Date(Date.now + process.env.COOKI_EXPIRE * 24860 * 60 * 1000),
            httpOnly: true,
        })


        if (validPassword) {
            const { password, cpassword, tokens, ...others } = user._doc;
            return res.status(201).json({ success: true, others })
        } else {
            return res.status(400).json("Invalid data")
        }
    } catch (error) {
        return res.status(400).json("Invalid data")
    }
})


// logout user
router.get("/logout", verifyToken, async (req, res) => {
    try {
        res.cookie("jwtToken", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })

        res.status(200).json({ success: true, message: "Logged Out" })
    } catch (error) {
        res.status(500).json("Unable to logOut" + error)
    }
})


module.exports = router;