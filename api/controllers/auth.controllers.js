const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verify = require("../middleware/verifyToken");
const passport = require("passport");


// database
require("../connection/DB");

// usere schema and models
const User = require("../models/User");


const registerUser = async(req,res,next)=>{
     const { username, email, password,number } = req.body;
  if (!username || !email || !password) {
    return res.status(500).json("enter all the data ");
  }
  try {
    // if  email already exist in database then this statement will run
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res
        .status(500)
        .json("Email already exist. Please enter new email");
    }
    // if email is new then this will run
    const user = new User({ username, email, password,number });
    // generate salt to hash password
    const salt = await bcrypt.genSalt(12);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    // saving in cookie
    res.cookie("jsonwebToken", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
    const result = await user.save();
    return res.status(200).json({ result, token });
  } catch (error) {
    next(error)
  }

}

// login user
const loginUser = async(req,res,nest)=>{
    const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    // saving in cookie
    res.cookie("jsonwebToken", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
    if (isMatch) {
      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, token });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
}

// logout user
const logOutUser = async(req,res)=>{
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
}

module.exports = {loginUser,registerUser,logOutUser}