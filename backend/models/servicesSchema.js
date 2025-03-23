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

const BeachWeddingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
});

const DestinationWeddingSchema = new mongoose.Schema({
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

const CateringSchema = new mongoose.Schema({
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

const PhotoGraphySchema = new mongoose.Schema({
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


const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
});

const PartySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
});

module.exports = {
  Party: mongoose.model("party", PartySchema),
  PhotoGraphy: mongoose.model("photography", PhotoGraphySchema),

  Music: mongoose.model("music", MusicSchema),
  Catering: mongoose.model("catering", CateringSchema),
  DestinationWedding: mongoose.model(
    "destination-wedding",
    DestinationWeddingSchema
  ),
  BeachWedding: mongoose.model("beach-wedding", BeachWeddingSchema),
  WeddingPlanner: mongoose.model("wedding-planner", weddingPlannerSchema),
  Blog: mongoose.model("blog", blogSchema),
};
