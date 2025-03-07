import React, { useEffect, useState } from "react";
import img1 from "../../../assets/images/event7.webp";
import img2 from "../../../assets/images/event2.avif";
import img3 from "../../../assets/images/footerImage.jpg";
import img4 from "../../../assets/images/event3.avif";
import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const images = [img1, img2, img3, img4];

const FrontHome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="relative w-full mx-auto lg:h-[100vh] md:h-[130vh] h-[56vh]">
        <img
          src={images[currentImage]}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out"
          alt="Background"
        />

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div> */}

        <div className=" absolute lg:bottom-[30%] md:bottom-[40%] lg:left-[10%] z-20 sm:bottom-[38%] sm:left-[7%] bottom-[49%] left-[10%]">
          <div className="sm:h-[200px] sm:w-[500px] h-[100px] w-[300px] bg-transparent pl-4">
            <h1 className="pt-4 pb-1 font-bold sm:text-[45px] text-[20px] text-white text-[cursive] uppercase">
              Welcome to Dream Ambition
            </h1>
            <p className=" text-white sm:text-[15px] text-[15px]">
              Welcome to Unique Event Coordinators! From small gatherings to
              grand celebrations, we make your dream events unforgettable with
              expert planning and seamless execution.
            </p>
            <div className="lg:bottom-[20%] md:bottom-[13%] left-[5%] bottom-[98%] sm:gap-5 mt-4 pb-1  gap-4 sm:text-[30px] text-white list-none flex">
              <li
                className="hover:text-[#FF0000] transition-all duration-300 cursor-pointer"
                target="_blank"
              >
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
              <li
                className="hover:text-[#d62976] transition-all duration-300 cursor-pointer"
                target="_blank"
              >
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li
                className="hover:text-[#316FF6] transition-all duration-300 cursor-pointer"
                target="_blank"
              >
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li
                className="hover:text-[#0077B5] transition-all duration-300 cursor-pointer"
                target="_blank"
              >
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li
                className="hover:text-[#1DA1F2] transition-all duration-300 cursor-pointer"
                target="_blank"
              >
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
            </div>
            <div className="pt-4">
              <button className="mt-5 bg-gradient-to-r from-[rgb(208,132,223)] via-[#9536a8] to-[#71227e] px-6 py-3 rounded-full text-lg font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300 flex gap-2 items-center text-white">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontHome;
