const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const verifyToken = require("../middleware/verifyToken");
const { v4: uuidv4 } = require("uuid");

// strpie
router.post("/payment", verifyToken, async (req, res) => {
  const { token, amount, cart, user } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token,
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
      res.send("success");
    } else {
      res.send("payment failed" + error);
    }
  } catch (error) {
    res.status(400).json("payment Error" + error);
  }
});

module.exports = router;

// stripe.charges.create(
//   {
//     amount: req.body.amount,
//     currency: "usd",
//     source: req.body.tokenid,
//   },
//   (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).json("strip error from strpie " + stripeErr);
//     } else {
//       res.status(200).json(stripeRes);
//     }
//   }
// );
