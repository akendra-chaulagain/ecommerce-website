

const express = require("express")
const router = express.Router()
// token
const verifyToken = require("../middleware/verifyToken")


// database
require("../connection/DB")

// Cart schema and models
const Cart = require("..//models/Cart")

// create cart
router.post("/", verifyToken, async (req, res) => {
    const body = req.body;
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const createCart = new Cart(body)
            const result = await createCart.save()
            res.status(201).json(result)
        } catch (error) {
            res.status(401).json(error)
        }
    } else {
        res.status(401).json("You are not allowed to create cart")
    }

})





// update product 
router.put("/:id", verifyToken, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const cartUpdate = await Cart.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(201).json(cartUpdate)
        } catch (error) {
            res.status(401).json(error)
        }
    } else {
        res.status(401).json("Unable yo update  cart")
    }
})

// delete product
router.delete("/:id", verifyToken, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const deleteCart = await Cart.findByIdAndDelete(req.params.id)
            res.status(201).json(deleteCart)
        } catch (error) {
            res.status(401).json(error)
        }

    } else {
        res.status(401).json("You are not allowed to delete other account")
    }

})



// get individual cart
router.get("/find/:id", verifyToken, async (req, res) => {
    try {
        const getIndividualCart = await Cart.findById(req.params.id)
        res.status(200).json(getIndividualCart);
    } catch (error) {
        res.status(401).json(error)
    }
})



// get all cart
router.get("/", verifyToken, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const allCart = await Cart.find()
            res.status(201).json(allCart)
        } catch (error) {
            res.status(401).json(error)
        }
    } else {
        res.status(401).json("Unable to get all cart")
    }
})




module.exports = router;