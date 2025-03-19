const express = require("express");
const EventBook = require("../models/eventBook");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const jwtVerify = promisify(jwt.verify);
const createError = require("../error");
const { verifyAdmin } = require("../Authverify/auth");


const router = express.Router();

const verifyUser = async (req, res, next) => {
  try {
    const token = req?.cookies?.access_token;
    if (!token) {
      return next(createError(401, "You are not authenticated"));
    }

    const decodedToken = await jwtVerify(token, process.env.JWT_SECRET_KEY);
    if (!decodedToken) {
      return res.status(404).json("token expired !");
    }
    if (decodedToken.id === req.params.id || decodedToken.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not  authorized!"));
    }
  } catch (err) {
    next(err);
  }
};

router.post("/", verifyUser, async (req, res, next) => {
  const newEvent = new EventBook(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    next(error);
  }
});

router.get("/", verifyUser, async (req, res, next) => { 
  try {
    const savedEvent = await EventBook.find(req.body);
    res.status(200).json(savedEvent);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const updatedEvent = await EventBook.findByIdAndUpdate(
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

router.get("/find/:id", async (req, res, next) => {
  try {
    const event = await EventBook.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const deletedEvent = await EventBook.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event has been deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
