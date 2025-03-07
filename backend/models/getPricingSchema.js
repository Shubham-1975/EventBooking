const mongoose = require("mongoose");

const getPricingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  venue:{
    type:String,
    required:true,
  },
 
  message: {
    type: String,
  },
});

module.exports = mongoose.model("/get-pricing", getPricingSchema);
