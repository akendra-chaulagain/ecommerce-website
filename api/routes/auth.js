const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// database
require("../connection/DB");

// user Model
const User = require("../models/User");
const verifyToken = require("../middleware/verifyToken");

// register user
router.post("/register", async (req, res) => {
  const { username, email, number, password } = req.body;
  if (!username || !email || !number || !password) {
    res.status(400).json("Enter all the data");
  }
  try {
    // if email already exist in database then this function will run
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(500).json("Email already exist.Please enter new email");
      // to compare password and confirm password
    } else {
      const user = new User({ username, email, password, number });

      // generate salt to hash password
      const salt = await bcrypt.genSalt(12);
      // now we set user password to hashed password
      user.password = await bcrypt.hash(user.password, salt);

      // generating register token
      // const token = await user.generateToken();
      // res.cookie("jsonwebToken", token, {
      //   expires: new Date(Date.now() + 86400000),
      //   httpOnly: true,
      // });
      const result = await user.save();
      return res.status(201).json({ success: true, result });
    }
  } catch (error) {
    return res.status(400).json("unable to register data");
  }
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json("enter all the data");
  }
  const user = await User.findOne({ email });
  try {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(password, user.password);

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1hr" }
      // { expiresIn: "1d" }
      // { expiresIn: "20s" }
      // { expiresIn: "15m" }
    );

    // saving in cookie
    res.cookie("jsonwebToken", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60),
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
    if (validPassword) {
      const { password, tokens, ...others } = user._doc;
      return res.status(201).json({ ...others, token });
    } else {
      return res.status(400).json("Invalid user data");
    }
  } catch (error) {
    return res.status(400).json("Invalid data");
  }
});

// logout user
router.post("/logout", verifyToken, async (req, res) => {
  const cookie = req.headers.cookie;
  if (cookie) {
    const token = cookie.split("=")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid !");
      req.user = user;
    });
    res.clearCookie("jsonwebToken");
    req.cookies[`jsonwebToken`] = "";
    return res.status(200).json("LogOut successfully..");
  }
});

module.exports = router;
