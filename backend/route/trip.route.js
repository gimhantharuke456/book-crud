// routes/tripBookingRoutes.js
const express = require("express");
const router = express.Router();
const tripBookingController = require("../controller/trip.controller");

// Route to create a new trip booking
router.post("/trips", tripBookingController.createTripBooking);

// Route to get all trip bookings
router.get("/trips", tripBookingController.getAllTripBookings);

// Route to get a single trip booking by ID
router.get("/trips/:id", tripBookingController.getTripBookingById);

// Route to update a trip booking by ID
router.put("/trips/:id", tripBookingController.updateTripBooking);

// Route to delete (soft delete) a trip booking by ID
router.delete("/trips/:id", tripBookingController.deleteTripBooking);

module.exports = router;
