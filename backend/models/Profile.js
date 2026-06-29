const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    skills: {
      type: String,
      default: "",
    },
    experience: {
      type: String,
      default: "",
    },
    resume: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Profile", profileSchema);
