// database
require("../connection/DB");

// import product model
const Product = require("../models/Product");

// create product
const createProduct = async (req, res, next) => {
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
};

// update product
const updateProduct = async (req, res, next) => {
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
};

// delete product
const deleteProduct = async (req, res, next) => {
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
};

// find by id
const getProductById = async (req, res, next) => {
  try {
    const getAccordingToId = await Product.findById(req.params.id);
    res.status(201).json(getAccordingToId);
  } catch (error) {
    res.status(500).json(`Unablt to get   product ${error}`);
  }
};

// get all product
const getAllProduct = async (req, res, next) => {
  const qnew = req.query.new;
  const qcategory = req.query.cat;
  const qPrice = req.query.price;
  try {
    let product;
    // when we search for new product this gives latest five products
    if (qnew) {
      product = await Product.find().sort({ createdAt: -1 }).limit(1);
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
          cat: {
            $in: [qcategory],
          },
        });
      }
    } else {
      product = await Product.find();
    }
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(`Unablt toget all  product  ${error}`);
  }
};

// search product
const searchproduct = async (req, res, next) => {
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
};

module.exports = {
  createProduct,
  updateProduct,
  getAllProduct,
  searchproduct,
  getProductById,
  deleteProduct,
};
