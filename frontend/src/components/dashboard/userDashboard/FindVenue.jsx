import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TalkToExpert from "../../../pages/userPages/TalkToExpert";

import homeimg from "../../../assets/images/mandup1.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const FindVenue = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [venues, setVenues] = useState([]);
  const [cities, setCities] = useState([]);
  const [venueType, setVenuesType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filters
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedVenueType, setSelectedVenueType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [venueResponse, cityResponse, venueTypeResponse] =
          await Promise.all([
            axios.get(`${import.meta.env.VITE_SERVER}/venue` ,{ withCredentials: true }),
            axios.get(`${import.meta.env.VITE_SERVER}/venue/cities` ,{ withCredentials: true }),
            axios.get(`${import.meta.env.VITE_SERVER}/venue/venue-type` ,{ withCredentials: true }),
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

  // Filter venues based on user input
  const filteredVenues = venues.filter((venue) => {
    return (
      (selectedCity === "" || venue.city === selectedCity) &&
      (selectedVenueType === "" || venue.type === selectedVenueType) &&
      (searchQuery === "" ||
        venue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.city.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const navigate = useNavigate();

  const handleGetEstimate = (venue) =>{
    navigate(`/book-event/${venue._id}`, { state: { venue } });
  }

  const ratings = [5, 4, 3, 4, 5, 2];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar user={user} />
      {/* Background Image Section */}
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
            <button className="">
              <NavLink
                className="bg-gradient-to-r from-[hsl(290,59%,70%)] via-[#9536a8] to-[#71227e] px-6 py-3 rounded-full text-lg font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300 flex gap-2 items-center"
                to="/book-event"
              >
                <MdOutlineWifiCalling3 /> Get an Estimate
              </NavLink>
            </button>
            {showForm && <TalkToExpert setShowForm={setShowForm} />}
            <button className="bg-gradient-to-r from-[hsl(137,71%,34%)] via-[#0cac41] to-[#17b732] px-6 py-3 rounded-full text-lg font-medium hover:from-[#3eaa3b] hover:via-[#48cb0c] hover:to-[#42b22e] transition-all duration-300 flex gap-2 items-center">
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
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* Filter Section */}
      <div className="w-full bg-white pt-10 pb-10">
        <div className="bg-gradient-to-r from-[#71227e] via-[#9536a8] to-[#d185e0] mt-10 max-w-[1100px] mx-auto flex justify-around p-3 rounded-[40px]">
          <h1 className="text-white text-lg font-semibold p-2">
            Filter Venue List
          </h1>
          <select
            className="p-2 px-8 rounded-[40px]"
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select Venue Location</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <select
            className="p-2 px-8 rounded-[40px]"
            onChange={(e) => setSelectedVenueType(e.target.value)}
          >
            <option value="">Select Venue Type</option>
            {venueType.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Venue/Location...."
            className="p-2 px-8 rounded-[40px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Venue List */}
        <div className="max-w-[1150px] mx-auto mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          {filteredVenues.map((venue,index) => (
            <div
              className="w-[350px] h-[450px] shadow-xl overflow-hidden rounded-xl hover:scale-105 duration-200 hover:shadow-2xl"
              key={venue._id}
            >
              <img
                src={venue.photos[0]}
                alt=""
                className="w-[350px] h-[250px] object-cover"
              />
              <div className="flex justify-center my-5">
                {Array(5)
                  .fill()
                  .map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={`text-${
                        starIndex < ratings[index] ? "yellow-400" : "gray-500"
                      } text-sm sm:text-base`}
                    />
                  ))}
              </div>
              <h1 className="px-5 font-semibold text-[17px]">{venue.title}</h1>
              <div className="px-4 flex items-center gap-3 pt-2">
                <FaLocationDot className="text-[#71227e]" />
                <span className="text-gray-500">{venue.city}</span>
              </div>
              <div className="flex gap-2  mt-6 pl-3">
                <button className="bg-gradient-to-r from-[hsl(290,59%,70%)] via-[#9536a8] to-[#71227e] px-2 py-1 rounded-full font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300 flex gap-2 text-[#f7f4f4] items-center text-sm" onClick={() => handleGetEstimate(venue)}>
                  
                    <MdOutlineWifiCalling3 /> Get an Estimate
                  
                </button>
                {showForm && <TalkToExpert setShowForm={setShowForm} />}
                <button className="bg-gradient-to-r from-[hsl(137,71%,34%)] via-[#0cac41] to-[#17b732] px-2 py-1 text-[#f7f4f4] rounded-full text-sm font-medium hover:from-[#3eaa3b] hover:via-[#48cb0c] hover:to-[#42b22e] transition-all duration-300 flex gap-2 items-center">
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
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindVenue;
