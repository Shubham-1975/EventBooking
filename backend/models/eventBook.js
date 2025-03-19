const mongoose = require("mongoose");

const eventBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  eventDates: {
    type: Date,
    required: true,
    default: Date.now,
  },

  eventMainDates: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  preferredHotelClass: {
    type: String,
    required: true,
  },
  mealPlan: {
    type: String,
    required: true,
  },
  specialRequirements: {
    type: String,
    required: true,
  },
  brideGroomNames: {
    type: String,
    required: true,
  },
  venueTitle: {
    type: String,
    required: true,
  },
  venueType: {
    type: String,
    required: true,
  },
  venueId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("eventbook", eventBookSchema);
