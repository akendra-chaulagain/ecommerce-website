
// database
require("../connection/DB");

// Category Schema and models
const Category = require("../models/Category");

// create category
const createCategory = async (req, res, next) => {
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
};

// update
const updateCategory = async (req, res, next) => {
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
};

// delete
const deleteCategory = async (req, res, next) => {
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
};

// get by id
const getCategoryById = async (req, res, next) => {
  // if (req.user.isAdmin) {
  try {
    const result = await Category.findById(req.params.id);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
  // } else {
  //   return res.status(401).json("You are not allowed to get other category");
  // }
};

// getall
const getALLCategory = async (req, res, next) => {
  try {
    const list = await Category.find();
    return res.status(201).json(list);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getALLCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
