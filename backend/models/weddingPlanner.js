const mongoose = require("mongoose");

const weddingPlannerSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("wedding-planner", weddingPlannerSchema);
