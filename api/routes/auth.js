const express = require("express");
const router = express.Router();
const passport = require("passport");

const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controllers/auth.controllers");

// register user data
router.post("/register", registerUser);

// login user data
router.post("/login", loginUser);

// logout user
router.post("/logout", logOutUser);

// login with google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  function (req, res) {
    // Successful authentication, redirect success.
    res.redirect("http://localhost:3000/");
  }
);

module.exports = router;
