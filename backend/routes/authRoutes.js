const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

router.post("/register", async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);

    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("user has been created");
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json({ error: "user not found" });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ error: "wrong password or username" });

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true, // Should match the cookie settings when it was created
    secure: false, // Use true in production (with HTTPS)
    sameSite: "lax", // Use "strict" or "lax" for CSRF protection
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Store OTPs temporarily
const otpStore = {};

// 1. Generate OTP and Send Email
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;

    // Send OTP via email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      html: `<!DOCTYPE html>
         <html>
<head>
  <style>
    .container {
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
      text-align: center;
    }
    .otp {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      background: #e6e6e6;
      display: inline-block;
      padding: 10px 20px;
      border-radius: 5px;
      margin: 10px 0;
    }
    .footer {
      font-size: 12px;
      color: #777;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Your OTP Code</h2>
    <p>Use the following One-Time Password (OTP) to proceed:</p>
    <div class="otp">${otp}</div>
    <p>This code is valid for <b>10 minutes</b>. Please do not share it with anyone.</p>
    <p class="footer">If you did not request this, please ignore this email.</p>
  </div>
</body>
</html>
`,
    });

    res.json({ message: "OTP sent to your email" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 2. Verify OTP and Reset Password
router.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (otpStore[email] !== otp) {
    return res.status(400).json({ error: "Invalid or expired OTP" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.findOneAndUpdate({ email }, { password: hashedPassword });

    delete otpStore[email]; // Remove OTP after use
    res.json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
