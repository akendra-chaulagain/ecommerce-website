const express = require("express")
const router = express.Router()


// database
require("../connection/DB")

// import product model
const Product = require("../models/productModel")


router.get("/product", (req, res) => {
    res.send("hello from router product")
})


module.exports = router;