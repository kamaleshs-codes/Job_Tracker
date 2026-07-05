const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser
} = require("../controllers/authControllers.js");

const protect = require("../middleware/authMiddleware.js")

//Register User
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", protect, getCurrentUser)

module.exports = router;
