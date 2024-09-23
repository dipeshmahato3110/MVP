// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apparelRoutes = require("./routes/apparel");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb://localhost:27017/apparelDB";  // Replace with your MongoDB URI

app.use(cors());
app.use(express.json());  // Parse JSON

// Routes
app.use("/api/apparel", apparelRoutes);

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
