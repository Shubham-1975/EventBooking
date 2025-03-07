const mongoose = require("mongoose");

const eventBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
  },
  event: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("eventbook", eventBookSchema);
