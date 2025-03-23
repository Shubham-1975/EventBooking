
const express = require('express');
const app = express();
require('dotenv').config();

const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./db')
const authRoute = require('./routes/authRoutes')
const feedBackRoute = require('./routes/feedBackRoute')
const suggestionRoutes = require('./routes/suggestionRoutes')
const eventRoute = require('./routes/eventRoute')
const userRoute = require('./routes/userRoutes');
const eventBook = require('./routes/eventBookRoute');
const weddingPlanner = require('./routes/weddingPlnnerRoutes')
const getPricing = require('./routes/getPricingRoutes')
const getTouch = require('./routes/getTouchRoutes')
const venueRoutes = require('./routes/venueRoutes')
const blogRoutes = require('./routes/blogRoutes')
const beachWeddingRoutes = require('./routes/beachWeddingRoutes')
const destinationWeddingRoutes = require('./routes/destinationWeddingRoutes')
const CateringRoutes = require('./routes/cateringRoutes')
const musicRoutes = require('./routes/musicRoutes')
const PartyRoutes = require('./routes/partyRoutes')
const PhotoGraphyRoutes = require('./routes/photoGraphyRoutes')


app.use(cookieParser());
app.use(cors({
  origin:["https://dreamambition-nu.vercel.app",
  "http://localhost:5173"],
  credentials:true
}));
app.use(express.json());

app.use("/auth",authRoute);
app.use("/feedback",feedBackRoute);
app.use("/suggestion",suggestionRoutes);
app.use("/events",eventRoute);
app.use("/users",userRoute);
app.use("/eventbooks",eventBook);
app.use("/planner",weddingPlanner);
app.use("/get-pricing",getPricing);
app.use("/get-touch",getTouch);
app.use("/venue",venueRoutes);
app.use("/blog",blogRoutes);
app.use("/beach",beachWeddingRoutes);
app.use("/destination",destinationWeddingRoutes);
app.use("/music",musicRoutes);
app.use("/party",PartyRoutes);
app.use("/catering",CateringRoutes);
app.use("/photography",PhotoGraphyRoutes);



const PORT = process.env.PORT || 8001;

app.listen(PORT, ()=>{
  console.log("connected to backend");
})
