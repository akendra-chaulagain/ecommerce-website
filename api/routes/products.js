const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// database
require("../connection/DB");

// import product model
const Product = require("../models/Product");

// create products ---Admin  (only admin can create product)
router.post("/newproduct", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    const body = req.body;
    // creating new product
    try {
      const product = new Product(body);
      const result = await product.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(`Unablt to create product  ${error}`);
    }
  } else {
    res.status(401).json("You are not allowed to create product");
  }
});

// update product   --Admin (only admin can update product)
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(201).json(updateProduct);
    } catch (error) {
      res.status(500).json(`Unablt to update   product ${error}`);
    }
  } else {
    res.status(401).json("You are not allowed to update");
  }
});

// get product according to id
router.get("/find/:id", async (req, res) => {
  try {
    const getAccordingToId = await Product.findById(req.params.id);
    res.status(201).json(getAccordingToId);
  } catch (error) {
    res.status(500).json(`Unablt to get   product ${error}`);
  }
});

// delete product   --Admin (only admin can delete product)
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deleteProduct = await Product.findByIdAndDelete(req.params.id);
      res.status(201).json(deleteProduct);
    } catch (error) {
      res.status(500).json(`Unablt to delete   product ${error}`);
    }
  } else {
    res.status(401).json("You are not allowed to do this process");
  }
});

// get all product
router.get("/getall", async (req, res) => {
  const qnew = req.query.new;
  const qcategory = req.query.category;
  const qPrice = req.query.price;
  try {
    let product;
    // when we search for new product this gives latest five products
    if (qnew) {
      product = await Product.find().sort({ createdAt: -1 }).limit(10);
      // when we search for category section this else if function will run
    } else if (qcategory) {
      // search according to the price
      if (qPrice) {
        product = await Product.find({
          price: {
            $gte: 10,
            $lte: 500,
          },
        });
      } else {
        product = await Product.find({
          category: {
            $in: [qcategory],
          },
        });
      }
    } else {
      product = await Product.find();
    }
    res.status(201).json({ total: product.length, product });
  } catch (error) {
    res.status(500).json(`Unablt toget all  product  ${error}`);
  }
});

// pagination
router.get("/", async (req, res) => {
  try {
    const { page, limit } = req.query;
    const product = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.status(201).json({ tootal: product.length, product });
  } catch (error) {
    res.status(500).json(`Unablt to update   product ${error}`);
  }
});

// search product from database according to name
router.get("/search", async (req, res) => {
  const search = req.query.q;
  try {
    const product = await Product.find({
      name: {
        $regex: search,
        $options: "i",
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.log("unable to seacrh data" + error);
  }
});

module.exports = router;
