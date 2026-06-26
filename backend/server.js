require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const Job = require("./models/job");
const jobRoutes = require("./routes/jobRoutes");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
