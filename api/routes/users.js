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
});

// get user according to id
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const getById = await User.findById(req.params.id);
    const { password, tokens, ...others } = getById._doc;
    res.status(201).json({ success: true, others });
  } catch (error) {
    res.status(500).json(`Unablt to update   user ${error}`);
  }
});

// delete user
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(201).json({ success: true, deleteUser });
  } catch (error) {
    res.status(500).json(`Unablt to delete   user ${error}`);
  }
});

// get all users(only admin)
router.get("/", verifyToken, async (req, res) => {
  const query = req.query.new;
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const getallUser = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(getallUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("unable to get all users");
  }
});

// user stats(only admin)
router.get("/stats", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    const date = new Date();
    const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
      // getting user according to  on the month
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastyear } } },
        { $project: { month: { $month: "$createdAt" } } },
        { $group: { _id: "$month", total: { $sum: 1 } } },
      ]);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(`Unablt to get stats  ${error}`);
    }
  } else {
    res.status(401).json("You are not allowed to do this stats");
  }
});

module.exports = router;
