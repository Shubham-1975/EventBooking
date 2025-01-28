const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);
const db= mongoose.connection;

db.on('connected' , () =>{
  console.log("connected to mongodb server!")
})

db.on('error', (err)=>{
  console.log("mongodb connection error",err);
})

db.on('disconnected' ,()=>{
  console.log("MongoDb Disconnected");
})

module.exports = db;