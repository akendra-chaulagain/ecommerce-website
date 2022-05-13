const express = require("express");
const {
  searchproduct,
  getAllProduct,
  deleteProduct,
  getProductById,
  updateProduct,
  createProduct,
} = require("../controllers/product.controllers");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

// database
require("../connection/DB");

// import product model
const Product = require("../models/Product");

// create products ---Admin  (only admin can create product)
router.post("/newproduct", verifyToken, createProduct);

// update product   --Admin (only admin can update product)
router.put("/:id", verifyToken, updateProduct);

// get product according to id
router.get("/find/:id", getProductById);

// delete product   --Admin (only admin can delete product)
router.delete("/:id", verifyToken, deleteProduct);

// get all product
router.get("/getall", getAllProduct);

// search product from database according to name
router.get("/search", searchproduct);

module.exports = router;
