import React, { useEffect, useState } from "react";

import homeimg from "../../../assets/images/mandup1.jpg";
import BeachImg from "../../../assets/images/BeachWedding3.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import TalkToExpert from "../../../pages/userPages/TalkToExpert";
import axios from "axios";

const FindVenue = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const ratings = [5, 2, 3, 4, 5, 2];
  const [venues, setVenues] = useState([]);
  const [cities, setCities] = useState([]);
  const [venueType, setVenuesType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [venueResponse, cityResponse,venueTypeResponse] = await Promise.all([
          axios?.get("http://localhost:8001/venue"),
          axios?.get("http://localhost:8001/venue/cities"),
          axios?.get("http://localhost:8001/venue/venue-type")
        ]);
        setVenues(venueResponse.data);
        setCities(cityResponse.data);
        setVenuesType(venueTypeResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Navbar user={user} />

      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh]">
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover filter fixed blur-sm"
          alt="Background"
        />
        <div className="absolute bottom-[10%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Exclusive Wedding & Event Venues in Bihar
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Looking for the perfect wedding venue in Bihar? Our updated 2025
            list features the most stunning locations and venue types, from
            heritage hotels and luxury resorts to grand banquet halls and
            traditional mandaps. Find your dream wedding venue in Bihar today!
          </p>
          <div className="flex gap-5 mt-6">
            <button
              className="mt-5 bg-gradient-to-r from-[hsl(290,59%,70%)] via-[#9536a8] to-[#71227e] px-6 py-3 rounded-full text-lg font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300 flex gap-2 items-center"
              onClick={() => setShowForm(true)}
            >
              <MdOutlineWifiCalling3 /> Get an Estimate
            </button>
            {showForm && <TalkToExpert setShowForm={setShowForm} />}
            <button className="mt-5 bg-gradient-to-r from-[hsl(137,71%,34%)] via-[#0cac41] to-[#17b732] px-6 py-3 rounded-full text-lg font-medium hover:from-[#3eaa3b] hover:via-[#48cb0c] hover:to-[#42b22e] transition-all duration-300 flex gap-2 items-center">
              <a
                href="https://wa.me/917070243030"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp /> Whatsapp Us
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white pt-10 pb-10">
        <div className="bg-gradient-to-r from-[#71227e] via-[#9536a8] to-[#d185e0] mt-10 max-w-[1100px] mx-auto flex justify-around p-3 rounded-[40px]">
          <h1 className="text-white text-lg font-semibold items-center p-2">
            Filter Venue List
          </h1>
          <select name="city" id="city" className="p-2 px-8 rounded-[40px]">
            <option value="">Select Venue Location</option>
            {cities?.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>

          <select name="city" id="city" className="p-2 px-8 rounded-[40px]">
            <option value="">Select Venue Type</option>
            {venueType?.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Venue/Location...."
            className="p-2 px-8 rounded-[40px]"
          />
        </div>
        <div className="max-w-[1150px] mx-auto mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {venues?.map((value, index) => (
            <>
              <div className="w-[350px] h-[450px] shadow-xl overflow-hidden rounded-xl">
                <img
                  src={value?.photos[0]}
                  alt=""
                  className="w-[350px] h-[250px] object-cover"
                />
                <div className="flex justify-start px-5 mb-2 pt-7 ">
                  {Array(5)
                    .fill()
                    .map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={`text-${
                          starIndex < ratings[3] ? "yellow-400" : "gray-500"
                        } text-sm sm:text-sm`}
                      />
                    ))}
                </div>
                <h1 className="px-5 font-semibold text-[17px]">
                  {value?.title}
                </h1>
                <div className="px-4 flex items-center gap-3 pt-2 ">
                  <FaLocationDot className="text-[#71227e]" />
                  <span className="text-[grey]">{value?.city}</span>
                </div>
                <div className="flex gap-2 px-5">
                  <button
                    className="mt-5 bg-gradient-to-r from-[rgb(208,132,223)] via-[#9536a8] to-[#71227e]  rounded-full text-[13px] font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300 flex gap-2 items-center text-white px-3 py-2"
                    onClick={() => setShowForm(true)}
                  >
                    <MdOutlineWifiCalling3 /> Get an Estimate
                  </button>
                  {showForm && <TalkToExpert setShowForm={setShowForm} />}
                  <button className="mt-5 bg-gradient-to-r from-[hsl(137,71%,34%)] via-[#0cac41] to-[#17b732] rounded-full text-[13px] font-medium hover:from-[#3eaa3b] hover:via-[#48cb0c] hover:to-[#42b22e] transition-all duration-300 flex gap-2 items-center text-white px-3 py-2">
                    <a
                      href="https://wa.me/917070243030"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <FaWhatsapp /> Whatsapp Us
                    </a>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FindVenue;
