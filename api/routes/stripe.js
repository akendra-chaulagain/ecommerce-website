const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const verifyToken = require("../middleware/verifyToken");

// strpie
router.post("/payment", verifyToken, (req, res) => {
  stripe.charges.create(
    {
      email: req.body.email,
      amount: req.body.amount,
      currency: "usd",
      source: req.body.tokenid,
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json("strip error from strpie " + stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
