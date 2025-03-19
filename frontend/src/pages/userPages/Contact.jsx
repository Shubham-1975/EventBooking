

import React, { useState } from "react";
import Navbar from "../../components/dashboard/userDashboard/Navbar";
import Footer from "../../components/dashboard/userDashboard/Footer";
import homeimg from "../../assets/images/HallImage.jpg";
import logo from "../../assets/images/event5.png";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import Maps from "../../components/dashboard/userDashboard/Maps";

const Contact = ({user}) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER}/get-touch`, credentials, {
        withCredentials: true,
      });
      toast.success("✅ Message sent! We'll contact you soon.");
    } catch (err) {
      console.log(err);
      toast.error(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
    }
  };
  return (
    <>
      <Navbar user={user} />
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh]">
        {/* home image */}
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover filter fixed"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="absolute bottom-[20%] left-5 md:left-[6%] max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-sm md:text-[13px] font-semibold">
            Need help planning your next event? Look no further than
            DreamAmbition Event Management Bihar!
          </p>
          <p className="mt-4 text-sm md:text-[13px] font-semibold">
            We can provide everything you need to ensure your event is a
            success.
          </p>
        </div>
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10 z-50">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* main div */}
      <div className="bg-white grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 relative w-full min-h-[700px] md:min-h-[400px] lg:min-h-[400px]">
        {/* left div */}
        <div className="lg:pl-20 md:pl-15 pl-5 relative min-h-[300px]">
          {/* logo */}
          <div className="">
            <img src={logo} alt="" className="h-[150px] absolute left-9" />
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold absolute lg:top-[26%] md:top-[28%] top-[40%]">
              Want to Work with Us?
            </h1>
          </div>

          <div className="flex items-center absolute lg:top-[38%] md:top-[40%] top-[55%] gap-2">
            <div>
              <FaPhoneVolume className="text-5xl text-[rgb(26,46,111)]" />
            </div>
            <div>
              <h2 className="text-[#686767] text-xl">
                Talk to Our Client Support Team
              </h2>
              <h1 className="text-black font-bold lg:text-2xl md:text-[18px] text-[16px]">
                +91-000 -000-0000
              </h1>
            </div>
          </div>
          {/* gmail */}
          <div className="flex items-center absolute lg:top-[55%] md:top-[58%] top-[75%] gap-2">
            <div>
              <MdEmail className="text-5xl text-[rgb(26,46,111)]" />
            </div>
            <div>
              <h2 className="text-[#686767] text-xl">
                Write to us about your needs
              </h2>
              <h1 className="text-black font-bold lg:text-2xl md:text-[18px] text-[16px]">
                dreamambitioneventbihar@gmail.com
              </h1>
            </div>
          </div>
          <div className="absolute lg:bottom-[15%] md:bottom-[13%] left-[12%] bottom-[-6%] sm:gap-10 gap-4 sm:text-[25px] text-black list-none flex">
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#FF0000] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#d62976] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#316FF6] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#0077B5] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#1DA1F2] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </div>
        </div>
        {/* right div */}
        {/* Feedback Form */}
        <div className="w-full max-w-lg bg-white rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                id="name"
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey]"
                required
              />

              <input
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey]"
                required
              />

              <input
                type="number"
                id="phone"
                onChange={handleChange}
                placeholder="Enter Your Mobile No"
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey]"
                required
              />

              <textarea
                id="message"
                onChange={handleChange}
                placeholder="Message..."
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey] h-24"
                required
              />

              <button
                type="submit"
                className="bg-yellow-400 p-3 rounded-md text-black font-semibold hover:bg-yellow-500 transition-all duration-300 w-36"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* map section */}

     <Maps />
      <Footer />
    </>
  );
};

export default Contact;
