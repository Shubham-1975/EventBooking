import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const VenueIdShow = () => {
  let location = useLocation();
  location = location.pathname;

  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/venue${location}`);
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    setVenue(data);
  }, [data]);

  const navigate = useNavigate();

  const handleGetEstimate = () =>{
    console.log("shubham");
    navigate(`/book-event/${venue._id}`, { state: { venue } });
  }

  if (!venue) {
    return (
      <p className="text-center text-lg text-gray-500 mt-10">
        Loading venue details...
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Venue Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        {venue?.title}
      </h2>

      {/* Venue Description */}
      <p className="text-lg text-gray-600 text-center mt-2">{venue?.desc}</p>

      {/* Address & Location */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
        <p>
          <strong className="text-gray-800">📍 Address:</strong>{" "}
          {venue?.address}, {venue?.city} - {venue?.pincode}
        </p>
        <p>
          <strong className="text-gray-800">🏛 Type:</strong> {venue?.type}
        </p>
      </div>

      {/* Venue Images Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {venue?.photos?.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Venue ${index + 1}`}
            className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-110 duration-500"
          />
        ))}
      </div>
      <div className="w-full my-10 text-center">
        <button className="bg-gradient-to-r from-[hsl(290,59%,70%)] via-[#9536a8] to-[#71227e] px-[200px] py-3 rounded-full text-lg font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all text-white" onClick={handleGetEstimate}>
          Book Venue
        </button>
      </div>
    </div>
  );
};

export default VenueIdShow;
