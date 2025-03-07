import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { PiSignOutFill } from "react-icons/pi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavbarUpper = () => {
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await axios.get("http://localhost:8001/auth/logout", {
        withCredentials: true,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto pt-4 flex flex-wrap justify-between items-center gap-4">
      <div className="w-full sm:w-[300px] flex items-center border rounded-md p-2 gap-2">
        <CiSearch className="text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none text-base sm:text-lg font-semibold text-gray-700"
        />
      </div>
      <div className="flex gap-4 sm:gap-6 items-center text-3xl">
        <IoIosNotifications className=" relative hover:text-gray-600 cursor-pointer" />
        <p className="absolute bg-[red] text-white text-sm rounded-[50%] h-4 w-4 flex items-center justify-center top-[4%] right-[163px]"> 1</p>
        <TbWorld className="hover:text-gray-600 cursor-pointer" />
        <PiSignOutFill
          className="hover:text-red-600 cursor-pointer"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};

export default NavbarUpper;
