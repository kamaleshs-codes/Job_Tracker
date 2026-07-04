const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authControllers.js");

//Register User
router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
