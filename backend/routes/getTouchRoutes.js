const express = require("express");
const router = express.Router();
const getTouch = require("../models/getTouchSchemaContact");
const { verifyAdmin } = require("../Authverify/auth");

router.post("/", async (req, res, next) => {
  try {
    const newMessage = await new getTouch({ ...req.body });
    await newMessage.save();

    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/",verifyAdmin, async (req, res, next) => {
  try {
    const result = await getTouch.find(req.query);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    await getTouch.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "feedBack has been deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
