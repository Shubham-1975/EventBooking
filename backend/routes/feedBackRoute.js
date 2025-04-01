const express = require("express");
const router = express.Router();
const { FeedBack } = require("../models/feedBackSchema");
const { verifyAdmin } = require("../Authverify/auth");

router.post("/", async (req, res, next) => {
  const newEvent = new FeedBack(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await FeedBack.find(req.query);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    await FeedBack.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "feedBack has been deleted" });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
