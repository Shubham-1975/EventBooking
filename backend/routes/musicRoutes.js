const express = require("express");
const { verifyAdmin } = require("../Authverify/auth");
const { Music } = require("../models/servicesSchema");

const router = express.Router();

//create weddingPlanner

router.post("/", verifyAdmin, async (req, res, next) => {
  const newMusic = new Music(req.body);
  try {
    const savedEvent = await newMusic.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    next(error);
  }
});

//update wedding planner
router.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const updatedEvent = await Music.findByIdAndUpdate(
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

//delete wedding planner
router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const deletedEvent = await Music.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event has been deleted" });
  } catch (error) {
    next(error);
  }
});

//get By ID

router.get("/:id", async (req, res, next) => {
  try {
    const event = await Music.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
});

//get all

router.get("/", async (req, res, next) => {
  try {
    const result = await Music.find(req.query); // Use query for filtering
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
