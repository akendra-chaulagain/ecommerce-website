// database
require("../connection/DB");

// order schema and models
const Order = require("../models/Order");

// cteate order is made in stripe components.stripe will create order when parmwnty is made

// add order
const updateOrder = async (req, res, next) => {
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
};

// delele order
const deleteOrder = async (req, res, next) => {
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    res.status(201).json(deleteOrder);
  } catch (error) {
    next(error);
  }
};

// get order af an  individual person which he/she order
const getusOrder = async (req, res, next) => {
  const { userFullId } = req.body;
  try {
    const getIndividulaOrder = await Order.find({ userFullId }).sort({
      _id: -1,
    });
    res.status(200).json(getIndividulaOrder);
  } catch (error) {
    next(error);
  }
};

// get individual ( find by id)
const getOrderById = async (req, res, next) => {
  try {
    const getOrderById = await Order.findById(req.params.id);
    res.status(200).json(getOrderById);
  } catch (error) {
    next(error);
  }
};

// get all order
const getAllOrder = async (req, res, next) => {
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
};

// get monthly income
const getMonthlyIncome = async (req, res, next) => {
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
};

module.exports = {
  updateOrder,
  getAllOrder,
  getMonthlyIncome,
  getOrderById,
  getusOrder,
  deleteOrder,
};
