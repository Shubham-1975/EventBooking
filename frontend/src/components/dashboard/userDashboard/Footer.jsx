import React from "react";
import FooterImg from "../../../assets/images/footerImage.jpg";
import logo from "../../../assets/images/event5.png";
import { NavLink } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full min-h-[1500px] md:min-h-[900px] lg:min-h-[800px]">
      {/* Background Image */}
      <img
        src={FooterImg}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Logo */}
      <div className="absolute sm:top-[1%] sm:left-1/2 sm:-translate-x-1/2 top-[0%] left-[28%]">
        <img src={logo} alt="" className="h-[150px]" />
        <h1 className="text-[#cbcaca] font-semibold text-[10px] text-center mt-2 absolute top-[60%] right-0">
          Event Management
        </h1>
      </div>

      {/* Centered Text */}
      <div className="absolute lg:top-[18%] md:top-[15%] sm:top-[60%] sm:left-[2%] top-[8%] lg:left-[15%] left-[10%] flex items-center  text-[#a09f9f] sm:max-w-[900px] max-w-full sm:px-4 pr-2  text-start justify-center">
        <p className="text-sm sm:text-[14px] leading-relaxed">
          Planning a full event has never been easier!{" "}
          <NavLink to="/" className="font-semibold text-yellow-300">
            DreamAmbition®
          </NavLink>
          Event Management, an ISO 0000:2025 Certified Event Management Company
          based in Bihar state, India, offers a wide range of services to make
          your events stress-free and memorable across Bihar. From premium
          corporate events and destination wedding planning to small-scale
          birthday parties and private gatherings, you can be sure we have it
          all covered. With offices in Patna, Sheikhpura, Gaya, and Jamui, we
          also specialize in venue selections and hospitality services. We
          primarily serve Bihari, and those looking to plan destination events
          in Bihar. We exclusively operate within Bihar. Whether you are
          planning a destination wedding event or a local celebration in Bihar,
          India,
          <NavLink to="/" className="font-semibold text-yellow-300">
            DreamAmbition®
          </NavLink>
          is here to help.
        </p>
      </div>
      <div className=" absolute md:top-[35%] lg:top-[38%] text-white top-[33%] left-[0%] lg:left-0 md:left-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-12 md:px-20">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/venue"
              >
                Venue
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/portfolio"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/bookevent"
              >
                Book Event
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/corporate-event"
              >
                Corporate Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/wedding-planner"
              >
                Wedding Planner
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/music"
              >
                Music & Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/private-parties"
              >
                Private Parties
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/destination-wedding"
              >
                Destination Wedding
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Other Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/testimonials"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/privacy-policy"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/cancellation"
              >
                Cancellation & Refund Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 transition-all duration-300"
                to="/terms-of-service"
              >
                Terms of Service
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-yellow-400 text-xl" />
              DreamAmbition Event Management, Chandani Chowk, Sheikhpura, Bihar
              811103
            </li>
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-yellow-400 text-xl" />
              DreamAmbition Event Management, Boring Road, Patna, Bihar 800013
            </li>
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-yellow-400 text-xl" />
              DreamAmbition Event Management, near Gaya Junction, Gaya, Bihar
              830013
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute lg:bottom-[20%] md:bottom-[13%] right-[20%] bottom-[98%] sm:gap-10 gap-4 sm:text-[23px] text-white list-none flex">
        <li
          className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
          target="_blank"
        >
          <a href="#">
            <FaYoutube />
          </a>
        </li>
        <li
          className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
          target="_blank"
        >
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li
          className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
          target="_blank"
        >
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li
          className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
          target="_blank"
        >
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li
          className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
          target="_blank"
        >
          <a href="#">
            <FaTwitter />
          </a>
        </li>
      </div>
      <div className="w-full my-4 absolute lg:bottom-[3%] md:bottom-0 bottom-0">
        <hr className="max-w-[1000px] mx-auto border-t border-white" />
        <div className="max-w-[1000px] mx-auto pt-5 pb-5 flex justify-center gap-10">
          <div className="text-white flex items-center justify-center gap-2">
            <FaPhoneAlt className="sm:text-[15px] text-[10px]" />
            <h1 className="sm:text-[15px] text-[10px]">+91-XXX -XXX-XXXX</h1>
          </div>
          <div className="text-white flex items-center justify-center gap-2">
            <MdEmail className="sm:text-[15px] text-[10px]" />
            <h1 className="sm:text-[15px] text-[10px]">
              dreamambitioneventbihar@gmail.com
            </h1>
          </div>
        </div>
        <hr className="max-w-[1000px] mx-auto border-t border-white pt-4" />
      </div>
      <h1 className="text-[#c0bbbb] sm:text-[15px] text-[13px] absolute bottom-[8px] md:bottom-[1%] text-center md:left-[28%] left-4 lg:left-[33%] lg:bottom-[2%]">© {new Date().getFullYear()} Dream AmbitionEvent Management. All Rights Reserved.</h1>
      <h1 className="text-[#706e6e] sm:text-[15px] text-[13px] absolute bottom-[9%] md:bottom-[1%] text-center pl-[25%] right-2">😍Shubham Rawat😍</h1>
    </div>
  );
};

export default Footer;
