const express = require("express");
const bcrypt = require("bcrypt");


// database
require("../connection/DB");

// user Model
const User = require("../models/User");

// update user
const updateUser = async (req, res, next) => {
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
    res.status(201).json(updateUser);
  } catch (error) {
    next(error);
  }
};

// find by id
const getUserById = async (req, res, next) => {
  try {
    const getById = await User.findById(req.params.id);
    const { password, tokens, ...others } = getById._doc;
    res.status(201).json(others);
  } catch (error) {
    next(error);
  }
};

// update user
const deleteUser = async (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.status(201).json(deleteUser);
    } catch (error) {
      res.status(500).json(`Unablt to delete   user ${error}`);
    }
  } else {
    res.status(500).json("unable to get all users");
  }
};

// get all user
const getAllUser = async (req, res, next) => {
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
};

// get user stats
const getUserStats = async (req, res, next) => {
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
};

module.exports = {
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
  getUserStats,
};
