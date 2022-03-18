const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require("uuid");
const verifyToken = require("../middleware/verifyToken");

// database
require("../connection/DB");
// order models
const Order = require("../models/Order");
// create orders

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const createOrder = new Order(body);
    const result = await createOrder.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(401).json(error);
  }
});

// strpie
router.post("/payment", verifyToken, async (req, res) => {
  const { token, amount, cart, user } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: amount * 10,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new Order({
        username: user.username,
        email: user.email,
        userFullId: user._id,
        orderItems: cart,
        amount: amount,
        contact: user.number,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pin: token.card.address_zip,
        },
        transactionId: customer.source,
      });
      await newOrder.save();
      res.send("success");
    } else {
      res.send("payment failed" + error);
    }
  } catch (error) {
    res.status(400).json("payment Error" + error);
  }
});

module.exports = router;
