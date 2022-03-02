const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json

// database
require("../connection/DB")

// import product model
const Product = require("../models/Product")


// create products
router.post("/newProduct", async (req, res) => {
    const { name, price, desc, rating, category, stock, comment} = req.body;
    try {
        const product = new Product({ name, price, desc, rating, category, stock, comment})
        const result = await product.save()
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(`Unablt to create product  ${error}`)
    }
})


module.exports = router;