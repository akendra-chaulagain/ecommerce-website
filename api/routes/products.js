const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json


// database
require("../connection/DB")

// import product model
const Product = require("../models/Product")


// create products ---Admin
router.post("/newproduct", async (req, res) => {
    const { name, price, desc, rating, category, stock, comment } = req.body;
    try {
        const product = new Product({ name, price, desc, rating, category, stock, comment })
        const result = await product.save()
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(`Unablt to create product  ${error}`)
    }
})



// update product   --Admin
router.put("/:id", async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(201).json(updateProduct);
    } catch (error) {
        res.status(500).json(`Unablt to update   product ${error}`)
    }
})



// grt product according to id
router.get("/find/:id", async (req, res) => {
    try {
        const getAccordingToId = await Product.findById(req.params.id)
        res.status(201).json(getAccordingToId);
    } catch (error) {
        res.status(500).json(`Unablt to update   product ${error}`)
    }
})



// delete product   --Admin
router.delete("/:id", async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json(deleteProduct);
    } catch (error) {
        res.status(500).json(`Unablt to delete   product ${error}`)
    }
})



// get all product --Admin
router.get("/getall", async (req, res) => {
    const qnew = req.query.new;
    const qcategory = req.query.category;
    const qPrice = req.query.price;
    try {
        let product;
        // when we search for new product this gives latest five products
        if (qnew) {
            product = await Product.find().sort({ createdAt: -1 }).limit(5);
            // when we search for category section this else if function will run
        } else if (qcategory) {
            // search according to the price
            if (qPrice) {
                product = await Product.find({
                    price: {
                        $gte: 10,
                        $lte: 500
                    }
                })
            } else {
                product = await Product.find({
                    category: {
                        $in: [qcategory]
                    }
                })
            }
        } else {
            product = await Product.find()
        }
        res.status(201).json({ total: product.length, product });

    } catch (error) {
        res.status(500).json(`Unablt toget all  product  ${error}`)
    }
})


// pagination
router.get("/", async (req, res) => {
    try {
        const { page, limit } = req.query
        const product = await Product.find().limit(limit * 1).skip((page - 1) * limit)
        res.status(201).json({ tootal: product.length, product });
    } catch (error) {
        res.status(500).json(`Unablt to update   product ${error}`)
    }
})




// search product from database according to name
router.get("/search", async (req, res) => {
    const search = req.query.q;

    try {
        const product = await Product.find({
            name: {
                $regex: search,
                $options: "i"
            }
        })
        res.status(201).json(product)
    } catch (error) {
        console.log("unable to seacrh data" + error);
    }

})

module.exports = router;