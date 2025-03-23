const express = require("express");
const { verifyAdmin } = require("../Authverify/auth");
const { Catering } = require("../models/servicesSchema"); // ✅ Import Model

const router = express.Router();

// Create Catering Entry
router.post("/", verifyAdmin, async (req, res, next) => {
  try {
    const newCatering = new Catering(req.body); // ✅ Use the Model
    const savedEvent = await newCatering.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    next(error);
  }
});

// Update Catering Entry
router.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const updatedEvent = await Catering.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    next(error);
  }
});

// Delete Catering Entry
router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const deletedEvent = await Catering.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event has been deleted" });
  } catch (error) {
    next(error);
  }
});

// Get Catering by ID
router.get("/:id", async (req, res, next) => {
  try {
    const event = await Catering.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
});

// Get All Catering Entries
router.get("/", async (req, res, next) => {
  try {
    const result = await Catering.find(req.query); // ✅ Query for filtering
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
