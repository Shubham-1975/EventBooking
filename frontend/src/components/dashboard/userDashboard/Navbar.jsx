import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/event5.png";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../../../assets/images/user3.png";
import axios from "axios";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaSortDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewProfile from "../../../pages/userPages/ViewProfile";

const Navbar = ({ user, authDispatch }) => {
  const [userIcon, setUserIcon] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "yellow" : "white",
  });
  const handleUserIcon = () => {
    setUserIcon(!userIcon);
    // setShowProfile(!showProfile);
  };

  const handleLogin = () => {
    navigate("/login");
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
      // navigate("/login");
    } catch (error) {}
  };

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  console.log(user);

  // const handleProfileChange = async (e) => {
  //   e.preventDefault();
  //   const files = e.target.files[0];
  //   if (files) {
  //     setFile(files);
  //   }

  //   if (!files || isUploading) return; // Prevent API call if no file or already uploading

  //   setIsUploading(true); // Set uploading state to true
  //   const data = new FormData();
  //   data.append("file", files);
  //   data.append("upload_preset", "upload");

  //   try {
  //     // Upload image to Cloudinary
  //     const uploadRes = await axios.post(
  //       "https://api.cloudinary.com/v1_1/domrjywcg/image/upload",
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     const { url } = uploadRes.data; // Get the image URL from the response

  //     // Update the user's profile with the new image
  //     const updatedImage = await axios.put(
  //       `${import.meta.env.VITE_SERVER}/users/${user?._id}`,
  //       { img: url },
  //       { withCredentials: true }
  //     );

  //     // Update the global user state with the new profile image
  //     // Clear the file input
  //     authDispatch({ type: "LOGIN_SUCCESS", payload: updatedImage.data });
  //   } catch (error) {
  //     console.error("Profile update failed:", error);
  //   } finally {
  //     setFile(null);
  //     setIsUploading(false); // Ensure uploading state is reset
  //   }
  // };

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
          <ul className="hidden md:flex justify-between items-center gap-10 text-white text-[15px] relative">
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/"
                style={navLinkStyles}
                className="hover:text-yellow-500"
              >
                Home
              </NavLink>
              {/* <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span> */}
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
                <div className="absolute left-0 mt-2 w-56 bg-black bg-opacity-10 shadow-lg rounded-lg py-2 text-[#7a2399] text-[14px] backdrop-blur-md">
                  <NavLink
                    style={navLinkStyles}
                    to="/corporate-event"
                    className={`block px-4 py-3 transition-all duration-300 rounded-t-lg 
          ${
            activeMenu === "Corporate"
              ? "bg-[#636262] bg-opacity-20 text-[#7a2399]"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
          }`}
                    onMouseEnter={() => handleActiveMenu("beach")}
                    onMouseLeave={() => handleActiveMenu("")}
                  >
                    Beach Wedding
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/music"
                    className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "music"
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
                <div className="absolute left-0 mt-2 w-56 bg-[#767575] bg-opacity-10 shadow-lg rounded-lg py-2 text-white backdrop-blur-md">
                  <NavLink
                    style={navLinkStyles}
                    to="/ourportfolio"
                    className={`block px-4 py-3 transition-all duration-300 rounded-t-lg 
          ${
            activeMenu === "photo"
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
                className="hover:text-yellow-500"
              >
                Find Venue
              </NavLink>
            </li>
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/yourbooking"
                style={navLinkStyles}
                className="hover:text-yellow-500"
              >
                Your Booking
              </NavLink>
            </li>
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/contact-us"
                style={navLinkStyles}
                className="hover:text-yellow-500"
              >
                Contact
              </NavLink>
            </li>
            <li className="relative">
              <div className="flex items-center text-[25px] cursor-pointer">
                <img
                  src={user && user.img ? user.img : img}
                  className="h-[45px] w-[45px] rounded-[50%]"
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
                      <li
                        className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                        onClick={handleLogin}
                      >
                        Sign In
                      </li>
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
              <div className="absolute mt-2 w-48 bg-[#2d2d2d] bg-opacity-90 shadow-lg rounded-lg py-2 text-white z-50 sm:w-56 top-[90%] left-3">
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
                <li className="py-2 hover:text-yellow-500">
                  <NavLink to="/" style={navLinkStyles}>
                    Home
                  </NavLink>
                </li>
                <li
                  className="py-2 hover:text-yellow-500"
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
                        to="/corporat-event"
                        className={`block px-4 py-3 transition-all duration-300 rounded-t-lg 
          ${
            activeMenu === "Corporate"
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
          }`}
                        onMouseEnter={() => handleActiveMenu("catering")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Catering Service
                      </NavLink>
                      <NavLink
                        to="/wedding-albums"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "beach"
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
          }`}
                        onMouseEnter={() => handleActiveMenu("beach")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Beach Wedding
                      </NavLink>
                      <NavLink
                        to="/music"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "music"
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
          }`}
                        onMouseEnter={() => handleActiveMenu("music")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Music & Entertainment
                      </NavLink>
                      <NavLink
                        to="/private-parties"
                        className={`block px-4 py-3 transition-all duration-300 rounded-b-lg 
          ${
            activeMenu === "Private"
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
          }`}
                        onMouseEnter={() => handleActiveMenu("Private")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        Private Parties
                      </NavLink>
                    </div>
                  )}
                </li>
                <li className="py-2 hover:text-yellow-500">
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
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
              ? "bg-[#636262] bg-opacity-20 text-bg-gray-800"
              : "hover:bg-gray-800 hover:text-yellow-400"
          }`}
                        onMouseEnter={() => handleActiveMenu("wedding")}
                        onMouseLeave={() => handleActiveMenu("")}
                      >
                        💍 Wedding Albums
                      </NavLink>
                    </div>
                  )}
                </li>
                <li className="py-2 hover:text-yellow-500">
                  <NavLink to="/find-venue" style={navLinkStyles}>
                    Find Venue
                  </NavLink>
                </li>

                <li className="py-2 hover:text-yellow-500">
                  <NavLink
                    to="/yourbooking"
                    style={navLinkStyles}
                    className="hover:text-yellow-500"
                  >
                    Your Booking
                  </NavLink>
                </li>
                <li className="py-2 hover:text-yellow-500">
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
