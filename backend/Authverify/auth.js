const jwt = require("jsonwebtoken");
const createError = require("../error");
const { promisify } = require("util");
const jwtVerify = promisify(jwt.verify);
const user = require("../models/user");

const verifyUser = async (req, res, next) => {
  try {
    const token = req?.cookies?.access_token;
    if (!token) {
      return next(createError(401, "You are not authenticated"));
    }

    const decodedToken = await jwtVerify(token, process.env.JWT_SECRET_KEY);
    if (!decodedToken) {
      return res.status(404).json("Token expired!");
    }

    console.log("Token ID:", decodedToken);

    if (decodedToken.id === req.params.id || decodedToken.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (err) {
    next(err);
  }
};

const verifyAdmin = async (req, res, next) => {
  try {
    const token = req?.cookies?.access_token;
    if (!token) {
      return next(createError(401, "You are not authenticated"));
    }

    const decodedToken = await jwtVerify(token, process.env.JWT_SECRET_KEY);
    if (!decodedToken) {
      return res.status(404).json("Token expired!");
    }
    if (decodedToken.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { verifyAdmin, verifyUser };
