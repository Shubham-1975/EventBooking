const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  YoutubeId: {
    type: String,
    required: true,
  },
});
const ShortVideoSchema = new mongoose.Schema({
  YoutubeId: {
    type: String,
    required: true,
  },
});

module.exports = {
  Video: mongoose.model("video", videoSchema),
  ShortVideo: mongoose.model("short-video", ShortVideoSchema),
};
