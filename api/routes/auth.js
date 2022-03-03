const express = require("express")
const router = express.Router()


// database
require("../connection/DB")

// user Model
const User = require("../models/User")

// register user
router.post("/register", async (req, res) => {
    const {username,email,password,cpassword,phone} = req.body;
    // if (!body) {
    //     return res.status(400).json("Please enter all user data")
    // }
    try {
        const user = new User({ username, email, password, cpassword, phone });
        const result = await user.save();
        res.status(201).json(result)
    } catch (error) {
        res.status(401).json("Unable to register data")
    }
})


module.exports = router;