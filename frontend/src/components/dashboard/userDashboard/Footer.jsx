import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { VscFeedback } from "react-icons/vsc";
import axios from "axios";
import Swal from "sweetalert2";
const Footer = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: null,
    message: "",
  });

  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value); // Update rating state
    setCredentials((prev) => ({ ...prev, rating: value })); // Add rating to form data
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8001/feedback",
        { withCredentials: true },
        credentials
      );
      Swal.fire({
        title: "Success!",
        text: "message send successful! 😍",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      console.error("Registration error:", err);
      alert(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="w-full bg-[#222121]">
      <div className="max-w-[1080px] mx-auto py-10 px-4">
        {/* Logo Section */}
        <div>
          <h1 className="text-yellow-400 text-center lg:text-start text-4xl font-bold font-serif">
            DreamAmbition
          </h1>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-center text-white text-3xl font-semibold font-serif pt-10">
            Contact Us
          </h1>
          <div className="text-white flex flex-wrap justify-around items-center pt-10 gap-8">
            {/* Phone Section */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                <FiPhoneCall />
              </span>
              <div>
                <p>+91 XXXXXXXXXX</p>
                <p>+91 XXXXXXXXXX</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center gap-4">
              <span className="text-3xl">
                <CgMail />
              </span>
              <div>
                <p>booking@dreamambition.com</p>
                <p>shukudream@.com</p>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                <CiLocationOn />
              </span>
              <div>
                <p>20, Kurji, Pani Tanki</p>
                <p>Patna, Bihar, 800012</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex justify-center pt-10">
            <div className="w-full max-w-[500px] bg-[hsl(0,1%,29%)] rounded-[10px] p-6">
              <form>
                <h1 className="text-center text-yellow-400 text-3xl font-semibold font-serif pb-6 flex justify-center items-center">
                  <VscFeedback /> Feedback
                </h1>
                <div className="flex flex-col gap-6">
                  <input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="outline-none p-2 rounded-[5px] w-full"
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                    onChange={handleChange}
                    className="outline-none p-2 rounded-[5px] w-full"
                  />
                  <input
                    type="number"
                    id="phone"
                    onChange={handleChange}
                    placeholder="Enter Your Mobile-No"
                    className="outline-none p-2 rounded-[5px] w-full"
                  />
                  <textarea
                    placeholder="Message"
                    id="message"
                    onChange={handleChange}
                    className="outline-none p-2 rounded-[5px] w-full h-[100px]"
                  />
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FaStar
                        key={value}
                        onClick={() => handleRating(value)}
                        className={`cursor-pointer text-2xl ${
                          value <= rating ? "text-yellow-400" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-400 p-2 rounded-[5px] hover:bg-yellow-600 text-center"
                    onClick={handleSubmit}
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

export default Footer;
