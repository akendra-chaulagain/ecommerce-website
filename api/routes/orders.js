const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

// cooki import from middleware

// database
require("../connection/DB");

// order schema and models
const Order = require("../models/Order");

// cteate order is made in stripe components.stripe will create order when parmwnty is made

// update order
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const orderUpdate = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(201).json(orderUpdate);
    } catch (error) {
      res.status(401).json(error);
    }
  } else {
    res.status(401).json("Unable yo update  order");
  }
});

// delete order
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    res.status(201).json(deleteOrder);
  } catch (error) {
    res.status(401).json(error);
  }
});

// get order af an  individual person which he/she order
router.post("/getusorder", verifyToken, async (req, res) => {
  const { userFullId } = req.body;
  try {
    const getIndividulaOrder = await Order.find({ userFullId });
    res.status(200).json(getIndividulaOrder);
  } catch (error) {
    res.status(401).json(error);
  }
});

// get individual ( find by id)
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const getOrderById = await Order.findById(req.params.id);
    res.status(200).json(getOrderById);
  } catch (error) {
    res.status(401).json(error);
  }
});

// get all order
router.get("/",verifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const allOrder = await Order.find().sort({ _id: -1 });
      res.status(201).json(allOrder);
    } catch (error) {
      res.status(401).json(error);
    }
  } else {
    res.status(401).json("you are not admin to get all order");
  }
});

// get monthely income
router.get("/income", async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const perviousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: perviousMonth } } },

        {
          $project: {
            month: { $month: "$createdAt" },
            amount: "$amount",
          },
        },
        // to get total sales on group
        {
          $group: {
            _id: "$month",
            total: { $sum: "$amount" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (error) {
      res.status(401).json("not getting income" + error);
    }
  } else {
    res.status(401).json("you are not admin");
  }
});

module.exports = router;
