import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import axios from "axios";
import Swal from "sweetalert2";

const FeedBackSuggection = ({ user }) => {
  const [credentials, setCredentials] = useState({
    name: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    message: "",
  });

  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    setCredentials((prev) => ({ ...prev, rating: value }));
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER}/feedback`, credentials, {
        withCredentials: true,
      });
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully! 😍",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      console.error("Error:", err);
      Swal.fire({
        title: "Error",
        text:
          err?.response?.data?.error ||
          "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="w-full bg-[white] text-[black]">
      <div className="max-w-6xl mx-auto py-10 px-6">
        {/* Logo Section */}

        {/* Contact Info Section */}
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-center text-3xl font-bold">
            Share Your Ideas with Us!
          </h1>
          {/* Responsive Grid Section (Map & Form) */}
          <div className=" flex justify-center mt-10">
            {/* Google Map */}

            {/* Feedback Form */}
            <div className="w-full max-w-lg bg-[white]  p-6  shadow-lg rounded-xl hover:scale-105 duration-300 hover:shadow-xl border-[1px] border-[#dbdada]">
              <form onSubmit={handleSubmit}>
                <h1 className="text-center text-[#af43ca] text-2xl font-semibold flex items-center justify-center gap-2 pb-6 ">
                  <VscFeedback /> Feedback
                </h1>

                <div className="flex flex-col gap-4">
                  <label className="text-[#545353] rounded-[12px]">
                    Name
                    <input
                      type="text"
                      id="name"
                      value={user ? user.username : credentials.name} // Show username if logged in
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="mt-1 p-2 rounded-md w-full bg-white text-[#272727] outline-none border-[0.5px] border-[#727171]"
                      required
                      disabled={!!user} // Disable input when user is logged in
                    />
                  </label>

                  <label className="text-[#545353]">
                    Email
                    <input
                      type="email"
                      value={user ? user.email : credentials.email}
                      id="email"
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="mt-1 p-2 rounded-md w-full bg-white text-[#272727] outline-none border-[0.5px] border-[#727171]"
                      required
                      disabled={!!user}
                    />
                  </label>

                  <label className="text-[#545353]">
                    Phone
                    <input
                      type="number"
                      id="phone"
                      value={user ? user.phone : credentials.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Mobile No"
                      className="mt-1 p-2 rounded-md w-full bg-white text-[#272727] outline-none border-[0.5px] border-[#727171]"
                      required
                    />
                  </label>

                  <label className="text-[#545353]">
                    Message
                    <textarea
                      id="message"
                      onChange={handleChange}
                      placeholder="Write your feedback here..."
                      className="mt-1 p-2 rounded-md w-full bg-white text-[#272727] outline-none border-[0.5px] border-[#727171]"
                      required
                    />
                  </label>

                  {/* Star Rating */}
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FaStar
                        key={value}
                        onClick={() => handleRating(value)}
                        className={`cursor-pointer text-2xl transition-colors ${
                          value <= rating ? "text-yellow-400" : "text-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className=" items-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-2 rounded-full text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500  text-white text-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSuggection;
