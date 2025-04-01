import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

const TalkToExpert = ({ setShowForm }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    venue: "",
    message: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/get-pricing", credentials, {
        withCredentials: true,
      });
      setCredentials(" ");
      toast.success(" Our expert will contact you soon!");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        {/* Form Container */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] h-[450px] max-w-[600px] mx-auto relative">
          <h2 className="text-sm font-semibold mb-1 text-[#923a94] ">
            DreamAmbition Event
          </h2>
          <h2 className="text-xl font-semibold mb-1 text-[black]">
            Request Pricing
          </h2>
          <p className="text-[#595757] text-sm mb-2">
            Fill this form and we will contact you shortly. All the information
            provided will be treated confidentially.
          </p>
          <button
            className="text-black absolute top-4 right-6 text-2xl hover:text-3xl duration-300 "
            onClick={() => setShowForm(false)}
          >
            <FaXmark />
          </button>
          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full p-2 border-[#747373] border-[0.5px] rounded mb-2 outline-none text-sm text-[black] font-thin"
            />
            <input
              type="number"
              id="phone"
              onChange={handleChange}
              placeholder="Enter Your Whatsapp Number"
              className="w-full p-2 border-[#747373] border-[0.5px] rounded mb-2 outline-none text-sm text-[black] font-thin"
            />
            <input
              type="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full p-2 border-[#747373] border-[0.5px] rounded mb-2 outline-none text-sm text-[black] font-thin"
            />
            <input
              type="text"
              id="venue"
              onChange={handleChange}
              placeholder="Enter Your desired venue name"
              className="w-full p-2 border-[#747373] border-[0.5px] rounded mb-2 outline-none text-sm text-[black] font-thin"
            />
            <textarea
              placeholder="Message"
              id="message"
              onChange={handleChange}
              className="w-full p-2 border-[#747373] border-[0.5px] rounded mb-2 outline-none text-sm text-[black] font-thin"
              rows="3"
            ></textarea>

            {/* Submit & Close Buttons */}
            <div className="flex justify-between">
              <button
                className="text-white bg-[#923a94]  px-5 py-1 rounded-full text-sm md:text-lg hover:bg-[white] hover:text-[#923a94] border border-[#923a94] duration-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TalkToExpert;
