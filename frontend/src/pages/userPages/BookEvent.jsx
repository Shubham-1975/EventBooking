import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../components/dashboard/userDashboard/Navbar";
import Footer from "../../components/dashboard/userDashboard/Footer";


const BookEvent = ({ user }) => {
  const { data } = useFetch("http://localhost:8001/events");
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    eventDates: "",
    guests: "",
    rooms: "",
    hotelClass: "",
    mealPlan: "",
    specialRequirements: "",
    brideGroomNames: "",
    eventVenue: ""
  });

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (!formData[key]) {
        toast.error("Please fill in all fields");
        return;
      }
    }
    try {
      await axios.post("http://localhost:8001/eventbooks", formData, { withCredentials: true });
      toast.success("Your event booking is successful!");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar user={user} />
      <div className="pt-[100px] max-w-[1100px] mx-auto font-bold px-4">
        <h1 className="text-2xl pt-10">Book Your Dream Event Venue in Bihar</h1>
        <p className="text-lg font-[400] pt-8">
          Plan your perfect event with Dream Ambition. Fill out the form below to secure your venue.
        </p>
        <form onSubmit={handleSubmit} className="text-sm font-[400] space-y-4 pt-10 pb-10">
          {Object.entries({
            name: "Name",
            email: "Email",
            number: "Phone Number",
            location: "Preferred Location",
            eventDates: "Event Dates (including pre/post events)",
            guests: "Number of Guests (Pax)",
            rooms: "Number of Rooms Required",
            brideGroomNames: "Bride & Groom’s Names",
            eventVenue: "Preferred Event Venue"
          }).map(([key, label]) => (
            <div key={key}>
              <label className="block font-semibold">{label} <span className="text-red-500">*</span></label>
              <input type="text" name={key} value={formData[key]} onChange={handleChange} className="w-full border border-black rounded-md px-2 py-2 outline-none" required />
            </div>
          ))}

          <div>
            <label className="block font-semibold">Preferred Hotel Class <span className="text-red-500">*</span></label>
            <select name="hotelClass" value={formData.hotelClass} onChange={handleChange} className="w-full border border-black rounded-md px-2 py-2 outline-none" required>
              <option value="">Select</option>
              <option value="3-Star">3-Star</option>
              <option value="4-Star">4-Star</option>
              <option value="5-Star">5-Star</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Meal Plan <span className="text-red-500">*</span></label>
            <select name="mealPlan" value={formData.mealPlan} onChange={handleChange} className="w-full border border-black rounded-md px-2 py-2 outline-none" required>
              <option value="">Select</option>
              <option value="Buffet">Buffet</option>
              <option value="Plated">Plated</option>
              <option value="Custom">Custom</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Special Requirements (e.g., Decor, AV setup) </label>
            <textarea name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} className="w-full border border-black rounded-md px-2 py-2 outline-none"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookEvent;
