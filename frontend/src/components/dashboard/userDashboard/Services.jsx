import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../../../assets/images/groupImage.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";

const Services = () => {
  const [list, setList] = useState([]);
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/events`);
  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const navigate = useNavigate();
  const handleOnClick = (index) => {
    if (index === 0) {
      navigate("/corporate-event");
    } else if (index === 1) {
      navigate("/wedding-planner");
    } else if (index === 2) {
      navigate("/destination-wedding");
    } else if (index === 3) {
      navigate("/beach-wedding");
    } else if (index === 4) {
      navigate("/music-entertainment");
    } else if (index === 5) {
      navigate("/private-party");
    }
  };

  return (
    <>
      <div className="max-w-[1100px] mx-auto bg-white">
        <h1 className="text-[#af43ca] text-center text-lg font-semibold pt-11 ">
          Our Services
        </h1>
        <h1 className="text-center text-4xl font-semibold pt-5">
          Services by DreamAmbition® Event Management
        </h1>
        <p className="pt-5 text-[16px] leading-6 text-[#3e3d3d]">
          DreamAmbition® Event Management is an ISO XXXX:2025 certified company
          based in Bihar, East India. We specialize in delivering top-notch
          event management services, including personal event planning,
          corporate events, conferences, private parties, trade exhibitions,
          virtual events, and stage shows across Bihar.{" "}
          <NavLink className="text-[#af43ca]" to="/contact-us">
            Get in touch with us for exceptional event experiences.
          </NavLink>
        </p>
        <div className="pt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:pl-24 pl-14 lg:pl-10 gap-5 relative">
          {list?.map((value, index) => (
            <div
              className="w-[300px] h-[430px] shadow-lg rounded-lg overflow-hidden mb-4 hover:scale-105 duration-200"
              key={value?._id}
            >
              <img
                src={value?.photos[5]}
                alt=""
                className=" object-fill h-[200px] w-[400px]"
              />
              <h1 className="pt-3 text-xl font-medium hover:text-[#af43ca] duration-500 text-center">
                <NavLink to="/corporat-event">{value?.title}</NavLink>
              </h1>
              <p className="pt-2 text-[16px] leading-6 text-[#3e3d3d] text-start px-4">
                {value?.desc}
              </p>
              <button
                className="!pt-10 text-[13px] leading-6 text-[#b14eca] hover:text-[#3e3d3d] text-start px-4 flex items-center gap-2 absolute"
                onClick={() => handleOnClick(index)}
              >
                Learn More <FaAngleDoubleRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
