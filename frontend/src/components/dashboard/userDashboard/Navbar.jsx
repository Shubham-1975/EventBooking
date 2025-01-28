import React, { useState } from "react";
import logo from "../../../assets/images/event5.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../../../assets/images/user3.png";
import axios from "axios";
import { MdOutlineCameraAlt } from "react-icons/md";

const Navbar = ({ user, authDispatch }) => {
  const [userIcon, setUserIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "yellow" : "white",
  });
  const handleUser = () => {
    setUserIcon(!userIcon);
  };

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:8001/auth/logout", {
        withCredentials: true,
      });
      navigate("/login");
    } catch (error) {}
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleProfileChange = async () => {
    if (!file || isUploading) return; // Prevent API call if no file or already uploading

    setIsUploading(true); // Set uploading state to true
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try {
      // Upload image to Cloudinary
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/domrjywcg/image/upload",
        data
      );
      const { url } = uploadRes.data; // Get the image URL from the response

      // Update the user's profile with the new image
      const updatedImage = await axios.put(
        `http://localhost:8001/users/${user?._id}`,
        { img: url },
        { withCredentials: true }
      );

      // Update the global user state with the new profile image
      authDispatch({ type: "LOGIN_SUCCESS", payload: updatedImage.data });
      setFile(null); // Clear the file input
    } catch (error) {
      console.error("Profile update failed:", error);
    } finally {
      setIsUploading(false); // Ensure uploading state is reset
    }
  };

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="flex bg-[#2e2626] justify-between items-center h-[80px] px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center w-[30%]">
          <img src={logo} alt="Logo" className="h-[160px] object-contain" />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center w-[45%] justify-center ">
          <ul className="hidden md:flex justify-between items-center gap-10 text-white text-[17px] relative">
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/"
                style={navLinkStyles}
                className="hover:text-yellow-500"
              >
                Home
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/ourportfolio"
                style={navLinkStyles}
                className="hover:text-yellow-500"
              >
                Our Portfolio
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:scale-110 hover:duration-300">
              <NavLink
                to="/bookevent"
                style={navLinkStyles}
                className="hover:text-yellow-500"
              >
                BookEvent
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:scale-110 hover:duration-300">
              <a href="#contact" className="hover:text-yellow-500">
                Contact
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative">
              <div
                className="flex items-center text-[25px] cursor-pointer"
                onClick={handleUser}
              >
                <img
                  src={img}
                  className="h-[40px] w-[40px] rounded-[50%]"
                  onClick={() => setShowProfile(false)}
                />
              </div>
              {userIcon && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 text-black">
                  <ul className="flex flex-col">
                    <li
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={handleProfile}
                    >
                      Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={handleLogin}
                    >
                      Sign In
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {showProfile && (
              <>
                <div className="absolute bg-white h-[400px] w-[300px] text-black top-[48px]  right-0 rounded-[12px] overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-[80px] bg-yellow-200">
                      <h1 className="text-center pt-3 font-semibold text-[20px] capitalize">
                        {user?.username?.split(" ")[0]}
                      </h1>
                    </div>
                    <div className=" flex justify-center items-center pt-5 absolute left-[32%] top-[30%]">
                      <div className="relative">
                        <img
                          src={file ? URL?.createObjectURL(file) : user.img}
                          alt=""
                          className="w-[100px] h-[100px] object-fill rounded-[50%]"
                        />
                        <input
                          type="file"
                          id="fileInput"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="fileInput">
                          <div className="absolute text-2xl h-[35px] w-[35px] flex justify-center items-center text-white bg-yellow-500 rounded-[50%] bottom-0 right-0 hover:bg-yellow-600 cursor-pointer">
                            {isUploading ? (
                              <span className="text-sm">...</span> // Show a loader or animation
                            ) : (
                              <MdOutlineCameraAlt
                                onClick={handleProfileChange}
                              />
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="relative top-[20%]">
                    <h1 className="text-center font-semibold text-[18px] capitalize">
                      {user?.username}
                    </h1>
                    <p className="text-center">{user?.email}</p>
                    <p className="text-center">
                      {user?.phone}
                      <p>{user?.city}</p>
                    </p>
                  </div>
                </div>
              </>
            )}
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              className="text-[#32c9d3] text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "X" : "☰"}
            </button>
            {isMenuOpen && (
              <ul className="absolute top-[80px] right-4 bg-[#2d3748] text-white p-4 rounded shadow-lg">
                <li className="py-2 hover:text-yellow-500">
                  <NavLink to="/" style={navLinkStyles}>
                    Home
                  </NavLink>
                </li>
                <li className="py-2 hover:text-yellow-500">
                  <NavLink to="/ourportfolio" style={navLinkStyles}>
                    Our Portfolio
                  </NavLink>
                </li>
                <li className="py-2 hover:text-yellow-500">
                  <NavLink to="/bookevent" style={navLinkStyles}>
                    BookEvent
                  </NavLink>
                </li>
                <li className="py-2 hover:text-yellow-500">
                  <a href="#contact">Contact</a>
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
