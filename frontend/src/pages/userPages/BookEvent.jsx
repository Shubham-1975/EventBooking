import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../components/dashboard/userDashboard/Navbar";
import Footer from "../../components/dashboard/userDashboard/Footer";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookEvent = ({ user }) => {
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/eventbooks`);
  const [list, setList] = useState([]);

  const { id } = useParams(); // Get venue ID from URL
  const location = useLocation();
  const navigate = useNavigate();

  // Get venue details from state
  const venue = location.state?.venue;

  if (!venue) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-red-600">Venue Not Found!</h2>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    name: user?.username || "",
    email: user?.email || "",
    number: user?.phone || "",
    location: "",
    eventDates: "",
    eventMainDates: "",
    guests: "",
    rooms: "",
    preferredHotelClass: "",
    mealPlan: "",
    specialRequirements: "",
    brideGroomNames: "",
    venueTitle: venue?.title || "",
    venueType: venue?.type || "",
    venueId: venue?._id,
    userId: user?._id
  });

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const isAlreadyBooked = list.some(
    (event) =>
      event.venueId === formData.venueId &&
      event.eventMainDates === formData.eventMainDates
  );

  if (isAlreadyBooked) {
    toast.error("This venue is already booked on the selected date!");
    return;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData) {
      toast.error("Please fill in all fields");
      return;
    }
    const isAlreadyBooked = list.some(
      (event) =>
        event.venueId === formData.venueId &&
        event.eventMainDates === formData.eventMainDates
    );

    if (isAlreadyBooked) {
      toast.error("This venue is already booked on the selected date!");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_SERVER}/eventbooks`, formData, {
        withCredentials: true,
      });
      toast.success("Your event booking is successful!");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar user={user} />
      <div className="pt-[100px] max-w-[1100px] mx-auto font-bold px-4">
        <h1 className="text-3xl pt-10">Book Your Dream Event Venue </h1>
        <p className="text-lg font-[400] pt-8">
          Plan your perfect event with Dream Ambition. Fill out the form below
          to secure your venue.
        </p>

        <p className="text-lg font-[400] pt-8 text-[#454545]">
          Fill out the venue booking form below to secure your preferred
          location today!
        </p>
        <form
          onSubmit={handleSubmit}
          className="text-sm font-[400] space-y-4 pt-10 pb-10"
        >
          <div>
            <label className="block font-semibold pb-4">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full border border-black rounded-md px-2 py-2 outline-none bg-gray-100"
              readOnly
              required
            />
          </div>
          <div>
            <label className="block font-semibold pb-4">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData?.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              readOnly
              required
            />
          </div>
          <div>
            <label className="block font-semibold pb-4">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="phone"
              value={formData?.number}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
              readOnly
            />
          </div>
          <div>
            <label className="block font-semibold pb-4">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              onChange={handleChange}
              placeholder="Preferred Location"
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />
          </div>

          <div className="flex justify-between">
            <label className="block font-semibold justify-start text-start">
              Event Dates<span className="text-red-500">*</span>
            </label>
            <label className="block font-semibold ">
              Main Event Dates<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex justify-between gap-5">
            <input
              type="date"
              id="eventDates"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />

            <input
              type="date"
              id="eventMainDates"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />
          </div>
          <div className="flex justify-between">
            <label className="block font-semibold justify-start text-start">
              Guests<span className="text-red-500">*</span>
            </label>
            <label className="block font-semibold ">
              Rooms<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex justify-between gap-5">
            <input
              type="number"
              id="guests"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />

            <input
              type="number"
              id="rooms"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />
          </div>
          <div className="flex justify-between">
            <label className="block font-semibold">
              Preferred Hotel Class <span className="text-red-500">*</span>
            </label>

            <label className="block font-semibold">
              Meal Plan <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex justify-between gap-5">
            <select
              id="preferredHotelClass"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            >
              <option value="">Select</option>
              <option value="3-Star">3-Star</option>
              <option value="4-Star">4-Star</option>
              <option value="5-Star">5-Star</option>
              <option value="Other">Other</option>
            </select>

            <select
              id="mealPlan"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            >
              <option value="">Select</option>
              <option value="Buffet">Buffet</option>
              <option value="Plated">Plated</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold pb-4">
              Special Requirements (e.g., Decor, AV setup)
            </label>
            <textarea
              id="specialRequirements"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold pb-4">
              Bride & Groom’s Names
            </label>
            <input
              type="text"
              id="brideGroomNames"
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />
          </div>
          <div className="flex justify-between">
            <label className="block font-semibold">
              Venue Title <span className="text-red-500">*</span>
            </label>

            <label className="block font-semibold">
              Venue Type<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex justify-between gap-5">
            <input
              type="text"
              id="venueTitle"
              value={formData.venueTitle}
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />

            <input
              type="text"
              id="venueType"
              value={formData.venueType}
              onChange={handleChange}
              className="w-full border border-black rounded-md px-2 py-2 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookEvent;
