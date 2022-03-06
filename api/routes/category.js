const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json

// database
require("../connection/DB");

// Category Schema and models
const Category = require("../models/Category");

// create Category(admin only)
router.post("/", verifyToken, async (req, res) => {
  const body = req.body;
  if (req.user.isAdmin) {
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

router.get("/find/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const result = await Category.findById(req.params.id);
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to get other category");
  }
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

// get alll category

router.get("/", async (req, res) => {
  try {
    list = await Category.find();
    return res.status(201).json(list);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
