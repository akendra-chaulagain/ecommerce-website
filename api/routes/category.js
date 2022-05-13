const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json

// database
require("../connection/DB");

const verifyToken = require("../middleware/verifyToken");
const {
  createCategory,
  updateCategory,
  getCategoryById,
  deleteCategory,
  getALLCategory,
} = require("../controllers/category.controllers");

// create Category(admin only)
router.post("/newCategory", verifyToken, createCategory);

// update category
router.put("/:id", verifyToken, updateCategory);

// get category acccording to id

router.get("/find/:id", getCategoryById);

// delete category
router.delete("/:id", verifyToken, deleteCategory);

// get all category

router.get("/", getALLCategory);

module.exports = router;
