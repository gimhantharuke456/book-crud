const express = require("express");
const mongoose = require("mongoose");
const tripBookingRoutes = require("./route/trip.route");
const cors = require("cors");
const app = express();
const PORT = 5001;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Trip Booking routes
app.use("/api", tripBookingRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.zekgg7g.mongodb.net/busbookingsystem"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
