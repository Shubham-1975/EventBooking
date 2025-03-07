const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
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
  pincode: {
    type: Number,
  },
  desc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  raiting: {
    type: Number,
    min: 0,
    max: 5,
  },
});

module.exports = mongoose.model("venue", venueSchema);