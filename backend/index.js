
const express = require('express');
const app = express();
require('dotenv').config();

const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./db')
const authRoute = require('./routes/authRoutes')
const feedBackRoute = require('./routes/feedBackRoute')
const eventRoute = require('./routes/eventRoute')
const userRoute = require('./routes/userRoutes');

app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(express.json());

app.use("/auth",authRoute);
app.use("/feedback",feedBackRoute);
app.use("/events",eventRoute);
app.use("/users",userRoute);

const PORT = process.env.PORT || 8001;

app.listen(PORT, ()=>{
  console.log("connected to backend");
})