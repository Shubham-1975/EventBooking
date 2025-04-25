const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  userId: {
    type : mongoose.Schema.ObjectId,
    ref : 'user',
    required : true
  },
  paymentStatus : {
    type : Boolean,
    required : true
  },
  paymentMade : {
    type : Number,
    required : true
  }
},
{
  timestamp : true
})

const paymentModel  = mongoose.model('payment',paymentSchema);
module.exports = paymentModel