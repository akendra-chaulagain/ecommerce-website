const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json

// database
require("../connection/DB");

// Category Schema and models
const Category = require("../models/Category");
const verifyToken = require("../middleware/verifyToken");

// create Category(admin only)
router.post("/newCategory", verifyToken, async (req, res) => {
  const body = req.body;
  if (req.user.id === req.params.id || req.user.isAdmin) {
    const newCategory = new Category(body);
    try {
      const result = await newCategory.save();
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to create new Category");
  }
});

// update category
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const result = await Category.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to update other category");
  }
});

// get category acccording to id

router.get("/find/:id", async (req, res) => {
  // if (req.user.isAdmin) {
  try {
    const result = await Category.findById(req.params.id);
    return res.status(201).json(result);
  } catch (error) {
    res.status(400).json("ak");
  }
  // } else {
  //   return res.status(401).json("You are not allowed to get other category");
  // }
});

// delete category
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const result = await Category.findByIdAndDelete(req.params.id);
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to delete other category");
  }
});

// get all category

router.get("/", async (req, res) => {
  try {
    const list = await Category.find();
    return res.status(201).json(list);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
