const express = require("express");
const { verifyAdmin } = require("../Authverify/auth");
const blogSchema = require("../models/blogSchema");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, async (req, res, next) => {
  const newEvent = new blogSchema(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const updatedEvent = await EvblogSchemaent.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const deletedEvent = await blogSchema.findByIdAndDelete(req.params.id);
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
    const event = await blogSchema.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
});

// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const result = await blogSchema.find(req.query); // Use query for filtering
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
