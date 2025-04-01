const mongoose = require("mongoose");

const getPricingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:false
  },
  phone: {
    type: Number,
    required: true,
    unique:false
  },
  email: {
    type: String,
    required: true,
    unique:false
  },
  venue:{
    type:String,
    required:true,
    unique:false
  },
 
  message: {
    type: String,
    unique:false
  },
});

module.exports = mongoose.model("/get-pricing", getPricingSchema);
