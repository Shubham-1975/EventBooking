const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  distance: {
    type: String,
  },
  desc: {
    type: String,
    required: true,
  },
  raiting: {
    type: Number,
    min: 0,
    max: 5,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("event", eventSchema);
