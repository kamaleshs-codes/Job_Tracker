const express = require("express");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");
const router = express.Router();
const upload = require("../middleware/upload");

router.get("/", getProfile);

router.put("/", upload.single("resume"), updateProfile);

module.exports = router;
