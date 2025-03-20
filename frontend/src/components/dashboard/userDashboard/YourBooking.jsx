import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const YourBooking = ({ user }) => {
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/eventbooks`);
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);

  // Fetch venue data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const venueResponse = await axios.get(
          `${import.meta.env.VITE_SERVER}/venue`,
          { withCredentials: true }
        );
        setVenues(venueResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter bookings for the logged-in user
  useEffect(() => {
    if (data && user?._id) {
      const userBookings = data.filter(
        (booking) => booking.userId === user._id
      );
      setList(userBookings);
    }
  }, [data, user]);

  const navigate = useNavigate();

  const handleYourBookingClick = (id) =>{
    navigate(`/find/${id}`);
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#1e1e1e] text-center">Your Bookings</h2>
      <p className="text-center text-[#af43ca] text-xl">
        Total Bookings: <span className="font-semibold">{list.length}</span>
      </p>

      {loading && (
        <p className="text-center text-gray-500">Loading venues...</p>
      )}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {list.map((booking) => {
          const venueDetails = venues.find(
            (venue) => venue._id === booking.venueId
          );
          return (
            <div
              key={booking._id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg" onClick={()=>handleYourBookingClick(booking?.venueId)}
            >
              {venueDetails && (
                <img
                  src={venueDetails.photos[0]}
                  alt={venueDetails.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{booking.venueTitle}</h3>
                <p className="text-gray-600">
                  <strong>Date:</strong> {booking.eventMainDates.split("T")[0]}
                </p>
                <p className="text-gray-600">
                  <strong>Venue Location:</strong> {booking.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourBooking;
