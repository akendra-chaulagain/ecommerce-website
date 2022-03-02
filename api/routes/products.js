const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json


// database
require("../connection/DB")

// import product model
const Product = require("../models/Product")


// create products ---Admin
router.post("/newProduct", async (req, res) => {
    const { name, price, desc, rating, category, stock, comment } = req.body;
    try {
        const product = new Product({ name, price, desc, rating, category, stock, comment })
        const result = await product.save()
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(`Unablt to create product  ${error}`)
    }
})


// router.get("/", async (req, res) => {
//     const qNew = req.query.new;
//     const qCatrgory = req.query.category;
//     try {
//         let products;
//         if (qNew) {
//             products = await Product.find().sort({ createdAt: -1 }).limit(5);
//         } else if (qCatrgory) {
//             products = await Product.find({
//                 categories: {
//                     $in: [qCatrgory]
//                 }
//             })
//         } else {
//             products = await Product.find();
//         }
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(401).json(error)
//     }
// })









// get all product --Admin
router.get("/", async (req, res) => {
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
            product = await Product.find({
                category: {
                    $in: [qcategory]
                }
            })
            // search according to the price
        } else if (qPrice) {
            product = await Product.find({
                price: { $gte: 1500, $lte: 1500 }
                // { $in: [qPrice] },
                // { $match: { $gte: 9, $lte: 1500 } }
            })
        } else {
            product = await Product.find()
        }
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(`Unablt toget all  product  ${error}`)
    }
})




// get by id
router.get("/find/:id", async (req, res) => {
    try {
        const getProductById = await Product.findById(req.params.id)
        res.status(201).json(getProductById);
    } catch (error) {
        res.status(500).json(`Unablt toget   product  bt Id ${error}`)
    }
})





// updare product  --- Admin
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






// delete product --Admin
router.delete("/:id", async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json(deleteProduct);
    } catch (error) {
        res.status(500).json(`Unablt to update   product ${error}`)
    }
})




module.exports = router;