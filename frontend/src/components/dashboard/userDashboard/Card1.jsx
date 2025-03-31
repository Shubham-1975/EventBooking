import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Card1 = ({ list }) => {
  return (
    <>
      <div className="h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {list?.map((value, index) => {
          return (
            <div
              className="h-[300px] w-[360px] shadow-lg rounded-[15px] overflow-hidden"
              key={value._id}
            >
              <img
                src={value?.photos[0]}
                alt=""
                className=" aspect-square h-[210px] w-full"
              />

              <h1 className="px-4 pt-2 font-semibold text-[18px]">
                {value?.title} in {value?.city}
              </h1>
              <div className="flex gap-5 px-4 pt-2">
                <button className="flex items-center gap-2 text-[#a94def] py-1 rounded-full px-4 border-[0.5px] border-[#a94def] text-sm md:text-[13px] hover:bg-[#a94def] hover:text-white transition-all delay-200">
                  <NavLink>Learn More</NavLink>
                </button>
                <button className="flex items-center gap-2 bg-green-500  text-white px-4 py-1 rounded-full text-sm md:text-lg border-[0.5px] hover:border-green-700 hover:text-green-700 hover:bg-white transition-all delay-200">
                  <a
                    href="https://wa.me/917070243030"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <FaWhatsapp /> Whatsapp Enquiry
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card1;
