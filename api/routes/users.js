const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const bcrypt = require("bcrypt");

// database
require("../connection/DB");

// user Model
const User = require("../models/User");

// update user
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(12);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(201).json({ success: true, updateUser });
    } catch (error) {
      res.status(500).json(`Unablt to update   user ${error}`);
    }
  } else {
    res.status(401).json("You are not allowed to update user");
  }
});



// get user according to id
router.get("/find/:id", async (req, res) => {
  try {
    const getById = await User.findById(req.params.id);
    const { password, tokens, ...others } = getById._doc;
    res.status(201).json({ success: true, others });
  } catch (error) {
    res.status(500).json(`Unablt to update   user ${error}`);
  }
});



// delete user   --Admin (only admin can delete product)
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.status(201).json({ success: true, deleteUser });
    } catch (error) {
      res.status(500).json(`Unablt to delete   user ${error}`);
    }
  } else {
    res.status(401).json("You are not allowed to do this process");
  }
});



// get all product

router.get("/", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const getAllUser = await User.find();
      res.status(201).json({ success: true, getAllUser });
    } catch (error) {
      res.status(500).json(`Unablt to get all user  ${error}`);
    }
  } else {
    res.status(401).json("You are not allowed to do this process");
  }
});

// logout user
router.get("/logout", verifyToken, async (req, res) => {
  try {
    res.cookie("jwtToken", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({ success: true, message: "Logged Out" });
  } catch (error) {
    res.status(500).json("Unable to logOut" + error);
  }
});

module.exports = router;
