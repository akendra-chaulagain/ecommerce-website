const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userFullId: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
    },

    orderItems: [],

    shippingAddress: {
      type: Object,
      // required: true,
    },

    amount: {
      type: Number,
      // required: true,
    },
    isDelevired: {
      type: String,
      // required: true,
    },
    transactionId: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
