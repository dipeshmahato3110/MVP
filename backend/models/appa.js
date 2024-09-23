// models/Apparel.js
const mongoose = require("mongoose");

const apparelSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  preferredOption: {
    type: String,
    enum: ['Recycle', 'Donate', 'Dispose'],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Apparel", apparelSchema);
