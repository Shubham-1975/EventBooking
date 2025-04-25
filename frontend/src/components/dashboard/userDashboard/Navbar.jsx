import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/event5.png";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../../../assets/images/user3.png";
import axios from "axios";
import { FaSortDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewProfile from "../../../pages/userPages/ViewProfile";

const Navbar = ({ user, authDispatch }) => {
  const [userIcon, setUserIcon] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#af43ca" : "white",
  });
  const handleUserIcon = () => {
    setUserIcon(!userIcon);
    // setShowProfile(!showProfile);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const res = await axios?.get(
        `${import.meta.env.VITE_SERVER}/auth/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success("You have successfully logged out!", {
        position: "top-center",
        autoClose: 3000, // Auto close after 3 seconds
      });
      authDispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    } catch (error) {}
  };

  const [activeMenu, setActiveMenu] = useState(""); // Track active submenu item

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Prevent instant closing
    setIsGallery(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsGallery(false);
    }, 500); // Delay hiding for 300ms
  };

  const handleMouseEnterService = () => {
    clearTimeout(timeoutId); // Prevent instant closing
    setIsServices(true);
  };

  const handleMouseLeaveServices = () => {
    timeoutId = setTimeout(() => {
      setIsServices(false);
    }, 500); // Delay hiding for 300ms
  };

  // Function to set the active menu item
  const handleActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-[#0d0b1e]">
      <div className="flex bg-transparent justify-between items-center h-[80px] ">
        {/* Logo Section */}
        <div
          className="flex items-center w-[20%]"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="h-[160px] object-contain" />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center w-[70%] justify-center ">
          <ul className="hidden md:flex justify-between items-center lg:gap-10 gap-6 text-white text-[15px] relative">
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/"
                style={navLinkStyles}
                className="hover:text-[#af43ca]"
              >
                Home
              </NavLink>
            </li>

            <li
              className="relative group hover:scale-110 hover:duration-300"
              onMouseEnter={handleMouseEnterService}
              onMouseLeave={handleMouseLeaveServices}
            >
              <span className="flex gap-2 cursor-pointer text-white">
                Services <FaSortDown />
              </span>
              {isServices && (
                <div className="absolute left-0 mt-2 w-56 bg-black bg-opacity-60 shadow-lg rounded-lg py-2 text-[14px] backdrop-blur-md">
                  <NavLink
                    style={navLinkStyles}
                    to="/corporate-event"
                    className={`block px-4 py-3 transition-all duration-300 rounded-t-lg 
          ${
            activeMenu === "Corporate"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#7a2399]"
          }`}
                    onMouseEnter={() => handleActiveMenu("Corporate")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Corporate Event Management
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/wedding-planner"
                    className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "planner"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("planner")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Wedding Planner
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/wedding-photography"
                    className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "wedding"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("wedding")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Wedding Photography & Videography
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/catering"
                    className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "catering"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("catering")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Catering Service
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/beach-wedding"
                    className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "beach"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("beach")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Beach Wedding
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/music-entertainment"
                    className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "music"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("music")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Music & Entertainment
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/private-parties"
                    className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "Private"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("Private")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Private Parties
                  </NavLink>
                </div>
              )}
            </li>
            <li
              className="relative group hover:scale-110 hover:duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex gap-2 cursor-pointer text-white">
                Gallery <FaSortDown />
              </span>
              {isGallery && (
                <div className="absolute left-0 mt-2 w-56 bg-black bg-opacity-60 shadow-lg rounded-lg py-2 text-[14px] backdrop-blur-md">
                  <NavLink
                    style={navLinkStyles}
                    to="/ourportfolio"
                    className={`block px-4 py-3 transition-all duration-300 rounded-t-lg 
          ${
            activeMenu === "photo"
              ? "bg-[#2e2e2e] bg-opacity-60 text-bg-gray-800"
              : "hover:bg-[#0a0a hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("photo")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    📸 Photo Gallery
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/video-gallery"
                    className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "video"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("video")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    🎥 Video Gallery
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/short-gallery"
                    className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "short"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("short")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    🎞️ Short Gallery
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/wedding-albums"
                    className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "wedding"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                    onMouseEnter={() => handleActiveMenu("wedding")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    💍 Wedding Albums
                  </NavLink>
                </div>
              )}
            </li>

            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/find-venue"
                style={navLinkStyles}
                className="hover:text-[#af43ca]"
              >
                Find Venue
              </NavLink>
            </li>
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/yourbooking"
                style={navLinkStyles}
                className="hover:text-[#af43ca]"
              >
                Your Booking
              </NavLink>
            </li>
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/contact-us"
                style={navLinkStyles}
                className="hover:text-[#af43ca]"
              >
                Contact
              </NavLink>
            </li>
            <li className="relative">
              <div className="flex items-center text-[25px] cursor-pointer">
                <img
                  src={user && user.img ? user.img : img}
                  className="lg:h-[45px] lg:w-[45px] h-[35px] w-[35px] rounded-[50%]"
                  onClick={handleUserIcon}
                />
              </div>
              {userIcon ? (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 text-black">
                  <ul className="flex flex-col">
                    {user ? (
                      <li
                        className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                        onClick={() => setShowForm(true)}
                      >
                        Profile
                      </li>
                    ) : (
                      ""
                    )}

                    {user ? (
                      ""
                    ) : (
                      <>
                        <li
                          className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                          onClick={handleLogin}
                        >
                          Sign In
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                          onClick={handleSignUp}
                        >
                          Sign Up
                        </li>
                      </>
                    )}
                    {user ? (
                      <li
                        className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              ) : (
                " "
              )}
            </li>
          </ul>
          {showForm && (
            <ViewProfile
              setShowForm={setShowForm}
              userID={user?._id}
              authDispatch={authDispatch}
            />
          )}
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <div className="relative flex items-center text-[25px] cursor-pointer">
              <img
                src={user?.img || img}
                className="h-[45px] w-[45px] rounded-full"
                onClick={() => {
                  setUserIcon(!userIcon);
                  setIsMenuOpen(false); // Close menu when opening user profile
                }}
              />
            </div>

            {userIcon && (
              <div className="absolute mt-2 bg-[#2d2d2d] bg-opacity-90 shadow-lg rounded-lg py-2 text-white z-50 sm:w-56 top-[90%] left-0 w-full">
                <ul className="flex flex-col">
                  {user && (
                    <li
                      className="px-4 py-2 hover:bg-[#484848] cursor-pointer"
                      onClick={() => setShowForm(true)}
                    >
                      Profile
                    </li>
                  )}
                  {!user && (
                    <li
                      className="px-4 py-2 hover:bg-[#484848]  cursor-pointer"
                      onClick={handleLogin}
                    >
                      Sign In
                    </li>
                  )}
                  {user && (
                    <li
                      className="px-4 py-2 hover:bg-[#484848]  cursor-pointer"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </li>
                  )}
                </ul>
              </div>
            )}

            {showForm && (
              <ViewProfile
                setShowForm={setShowForm}
                userID={user?._id}
                authDispatch={authDispatch}
              />
            )}

            <button
              className="text-[#32c9d3] text-2xl absolute right-14"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setUserIcon(false); // Close user profile when opening menu
              }}
            >
              {isMenuOpen ? "X" : "☰"}
            </button>

            {isMenuOpen && (
              <ul className="absolute top-[80px] right-4 bg-[#2d2d2d] opacity-90  text-white w-full h-auto p-4 px-9 rounded shadow-lg">
                <li className="py-2 hover:text-[#af43ca]">
                  <NavLink to="/" style={navLinkStyles}>
                    Home
                  </NavLink>
                </li>
                <li
                  className="py-2 hover:text-[#af43ca]"
                  onClick={() => {
                    setIsServices(!isServices);
                  }}
                >
                  <span className="flex gap-2 cursor-pointer text-white">
                    Services <FaSortDown />
                  </span>
                  {isServices && (
                    <div className="absolute left-0 mt-2 w-full bg-[#2d2d2d] opacity-90  shadow-lg rounded-lg py-2 text-white text-[14px] backdrop-blur-md">
                      <NavLink
                        to="/corporate-event"
                        className={`block px-4 py-3 transition-all duration-300 rounded-t-lg 
          ${
            activeMenu === "Corporate"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("Corporate")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Corporate Event Management
                      </NavLink>
                      <NavLink
                        to="/wedding-planner"
                        className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "planner"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("planner")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Wedding Planner
                      </NavLink>
                      <NavLink
                        to="/wedding-photography"
                        className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "wedding"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("wedding")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Wedding Photography & Videography
                      </NavLink>
                      <NavLink
                        to="/catering"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "catering"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("catering")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Catering Service
                      </NavLink>
                      <NavLink
                        to="/beach-wedding"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "beach"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("beach")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Beach Wedding
                      </NavLink>
                      <NavLink
                        to="/music-entertainment"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "music"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("music")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Music & Entertainment
                      </NavLink>
                      <NavLink
                        to="/private-party"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "Private"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("Private")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Private Parties
                      </NavLink>
                    </div>
                  )}
                </li>
                <li className="py-2 hover:text-[#af43ca]">
                  <span
                    className="flex gap-2 cursor-pointer text-white"
                    onClick={() => setIsGallery(!isGallery)}
                  >
                    Gallery <FaSortDown />
                  </span>
                  {isGallery && (
                    <div className="absolute left-0 mt-2 w-full bg-[#2d2d2d] opacity-90  shadow-lg rounded-lg py-2 text-white text-[14px] backdrop-blur-md">
                      <NavLink
                        to="/ourportfolio"
                        className={`block px-4 py-3 transition-all duration-300 rounded-t-lg 
          ${
            activeMenu === "photo"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("photo")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        📸 Photo Gallery
                      </NavLink>
                      <NavLink
                        to="/video-gallery"
                        className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "video"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("video")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        🎥 Video Gallery
                      </NavLink>
                      <NavLink
                        to="/short-gallery"
                        className={`block px-4 py-3 transition-all duration-300 
          ${
            activeMenu === "short"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("short")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        🎞️ Short Gallery
                      </NavLink>
                      <NavLink
                        to="/wedding-albums"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "wedding"
              ? "bg-[#2e2e2e] bg-opacity-60"
              : "hover:bg-gray-800 hover:text-[#af43ca]"
          }`}
                        onMouseEnter={() => handleActiveMenu("wedding")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        💍 Wedding Albums
                      </NavLink>
                    </div>
                  )}
                </li>
                <li className="py-2 hover:text-[#af43ca]">
                  <NavLink to="/find-venue" style={navLinkStyles}>
                    Find Venue
                  </NavLink>
                </li>

                <li className="py-2 hover:text-[#af43ca]">
                  <NavLink
                    to="/yourbooking"
                    style={navLinkStyles}
                    className="hover:text-[#af43ca]"
                  >
                    Your Booking
                  </NavLink>
                </li>
                <li className="py-2 hover:text-[#af43ca]">
                  <NavLink to="/contact-us" style={navLinkStyles}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
