
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
const eventBook = require('./routes/eventBookRoute');
const weddingPlanner = require('./routes/weddingPlnnerRoutes')
const getPricing = require('./routes/getPricingRoutes')
const getTouch = require('./routes/getTouchRoutes')
const venueRoutes = require('./routes/venueRoutes')
const blogRoutes = require('./routes/blogRoutes')

app.use(cookieParser());
app.use(cors({
  origin:"https://dreamambition-nu.vercel.app",
  credentials:true
}));
app.use(express.json());

app.use("/auth",authRoute);
app.use("/feedback",feedBackRoute);
app.use("/events",eventRoute);
app.use("/users",userRoute);
app.use("/eventbooks",eventBook);
app.use("/wedding-planner",weddingPlanner);
app.use("/get-pricing",getPricing);
app.use("/get-touch",getTouch);
app.use("/venue",venueRoutes);
app.use("/blog",blogRoutes);





const PORT = process.env.PORT || 8001;

app.listen(PORT, ()=>{
  console.log("connected to backend");
})
