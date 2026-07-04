const express = require("express");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");
const router = express.Router();
const upload = require("../middleware/upload");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getProfile);

router.put("/", protect, upload.single("resume"), updateProfile);

module.exports = router;
