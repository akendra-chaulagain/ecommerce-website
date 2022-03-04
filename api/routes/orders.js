

const express = require("express")
const router = express.Router()

// cooki import from middleware
const verifyToken = require("../middleware/verifyToken")


// database
require("../connection/DB")

// order schema and models
const Order = require("../models/Order")

// create orders
router.post("/", verifyToken, async (req, res) => {
    const body = req.body;
    try {
        const createOrder = new Order(body)
        const result = await createOrder.save()
        res.status(201).json(result)
    } catch (error) {
        res.status(401).json(error)
    }

})





// update order 
router.put("/:id", verifyToken, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const orderUpdate = await Order.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(201).json(orderUpdate)
        } catch (error) {
            res.status(401).json(error)
        }
    } else {
        res.status(401).json("Unable yo update  order")
    }
})

// delete order
router.delete("/:id", verifyToken, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const deleteOrder = await Order.findByIdAndDelete(req.params.id)
            res.status(201).json(deleteOrder)
        } catch (error) {
            res.status(401).json(error)
        }

    } else {
        res.status(401).json("You are not allowed to delete other order")
    }

})



// get individual order
router.get("/find/:id", verifyToken, async (req, res) => {
    try {
        const getIndividulaOrder = await Order.findById(req.params.id)
        res.status(200).json(getIndividulaOrder);
    } catch (error) {
        res.status(401).json(error)
    }
})



// get all order
router.get("/", verifyToken, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const allOrder = await Order.find()
            res.status(201).json(allOrder)
        } catch (error) {
            res.status(401).json(error)
        }
    } else {
        res.status(401).json("Unable to get all order")
    }
})




module.exports = router;