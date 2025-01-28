import React from "react";
import { NavLink } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TbCoinRupee } from "react-icons/tb";
import { BiCreditCardFront } from "react-icons/bi";

const Navbar = () => {
  const data = [
    { name: "Users", icon: <IoPersonSharp /> },
    { name: "Booking", icon: <FaShoppingCart /> },
    { name: "Earning", icon: <TbCoinRupee /> },
    { name: "Balance", icon: <BiCreditCardFront /> },
  ];

  return (
    <div className="p-4 flex flex-wrap gap-4">
      {data.map((val, index) => (
        <div
          key={index}
          className="h-auto sm:h-[120px] w-full sm:w-[220px] bg-white shadow-lg text-gray-700 p-4 rounded-lg flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{val.name}</span>
            <span className="text-green-500 text-sm">^20%</span>
          </div>
          <div className="text-black text-2xl font-bold">100</div>
          <div className="flex justify-between items-center">
            <NavLink
              to="/users"
              className="text-sm underline hover:text-green-600"
            >
              See all users
            </NavLink>
            <span className="text-3xl text-yellow-400">{val.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
