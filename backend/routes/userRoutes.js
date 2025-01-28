const express = require("express");
const { verifyAdmin } = require("../Authverify/auth");
const User = require("../models/user");
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
//UPDATE
router.put("/:id", verifyUser, async (req, res, next) => {
  try {
    const updatedData = req.body;
    console.log("before Updated");
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log("After updated");
    if (!updatedData) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

//DELETE
router.delete("/:id", verifyUser, async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(401).json({ error: "data is not found" });
    }
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
});
//GET
router.get("/:id", verifyUser, async (req, res, next) => {
  try {
    const User1 = await User.findById(req.params.id);
    if (!User1) {
      return res.status(401).json({ error: "data is not found" });
    }
    res.status(200).json(User1);
  } catch (error) {
    next(error);
  }
});

//GETALL
router.get("/", verifyAdmin, async (req, res, next) => {
  try {
    const Users = await User.find();
    if (!Users) {
      return res.status(401).json({ error: "data is not found" });
    }
    res.status(200).json(Users);
  } catch (error) {
    next(error);
    // res.status(500).json(error);
  }
});

module.exports = router;
