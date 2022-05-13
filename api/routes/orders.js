const express = require("express");
const {
  getMonthlyIncome,
  getAllOrder,
  getOrderById,
  getusOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/order.controllers");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

// cteate order is made in stripe components.stripe will create order when parmwnty is made

// update order
router.put("/:id", verifyToken, updateOrder);

// delete order
router.delete("/:id", verifyToken, deleteOrder);

// get order af an  individual person which he/she order
router.post("/getusorder", verifyToken, getusOrder);

// get individual ( find by id)
router.get("/find/:id", verifyToken, getOrderById);

// get all order
router.get("/", getAllOrder, getAllOrder);

// get monthely income
router.get("/income", verifyToken, getMonthlyIncome);

module.exports = router;
