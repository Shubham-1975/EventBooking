const express = require("express");
const { verifyAdmin } = require("../Authverify/auth");
const Venue = require("../models/venueSchema");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, async (req, res, next) => {
  const newVenue = new Venue(req.body);
  try {
    const savedVenue = await newVenue.save();
    res.status(200).json(savedVenue);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedVenue) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(updatedVenue);
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const deletedEvent = await Venue.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event has been deleted" });
  } catch (error) {
    next(error);
  }
});

// GET
router.get("/find/:id", async (req, res, next) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(venue);
  } catch (error) {
    next(error);
  }
});

// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const result = await Venue.find(req.query);
    // Use query for filtering
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

//get city

router.get("/cities", async (req, res, next) => {
  try {
    const cities = await Venue.find({}, "city"); // Fetch only the city field
    const cityArray = [...new Set(cities.map((venue) => venue.city))]; // Extract unique city names into an array
    res.status(200).json(cityArray);
  } catch (error) {
    next(error);
  }
});

router.get("/venue-type", async (req, res, next) => {
  try {
    const venues = await Venue.find({}, "type"); // Fetch only the city field
    const venueArray = [...new Set(venues.map((venue) => venue.type))]; // Extract unique city names into an array
    res.status(200).json(venueArray);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
