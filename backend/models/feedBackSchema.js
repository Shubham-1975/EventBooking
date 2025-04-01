const mongoose = require("mongoose");

const feedBackSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

module.exports = {
  FeedBack: mongoose.model("feedback", feedBackSchema),
};
