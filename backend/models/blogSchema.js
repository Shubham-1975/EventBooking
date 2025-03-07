const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  photos: {
    type: [String],
  },
});

module.exports = mongoose.model("blog", blogSchema);
