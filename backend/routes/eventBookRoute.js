const express = require("express");
const EventBook = require("../models/eventBook");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const jwtVerify = promisify(jwt.verify);
const createError = require("../error");

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

module.exports = router;
