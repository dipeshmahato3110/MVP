// routes/apparel.js
const express = require("express");
const router = express.Router();
const Apparel = require("../models/appa");

// POST route to submit apparel information
router.post("/submit", async (req, res) => {
  try {
    const { category, condition, preferredOption, location } = req.body;
    const newApparel = new Apparel({ category, condition, preferredOption, location });
    await newApparel.save();
    res.json({ message: "Submission successful", data: newApparel });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Sample GET route to fetch disposal centers (static data)
router.get("/centers", (req, res) => {
  // This would typically be replaced by a database query or API call.
  const centers = [
    { name: "Recycling Center A", address: "123 Recycle St", type: "Recycle" },
    { name: "Donation Center B", address: "456 Donate Ave", type: "Donate" },
  ];
  res.json(centers);
});

module.exports = router;
