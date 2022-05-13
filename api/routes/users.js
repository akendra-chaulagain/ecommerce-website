const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const {
  getUserStats,
  getAllUser,
  deleteUser,
  updateUser,
  getUserById,
} = require("../controllers/user.controller");

// update user
router.put("/:id", verifyToken, updateUser);

// get user according to id
router.get("/find/:id", verifyToken, getUserById);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get all users(only admin)
router.get("/", verifyToken, getAllUser);

// user stats(only admin)
router.get("/stats", verifyToken, getUserStats);

module.exports = router;
