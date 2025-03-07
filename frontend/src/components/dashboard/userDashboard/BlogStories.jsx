import React, { useEffect, useState } from "react";
import img from "../../../assets/images/HaldiPlanner.jpg";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";


const BlogStories = () => {

  const { data } = useFetch("http://localhost:8001/blog");
  const [list, setList] = useState([]);
  useEffect(() => {
      if (data) {
        setList(data);
      }
    }, [data]);
  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-[#7a299a] text-[16px] font-semibold">
          OUR BLOGS & ARTICLES
        </h1>
        <h1 className="text-center text-3xl font-bold text-[#181818] pt-5">
          Stories by DreamAmbition Event Management
        </h1>
        <p className="text-center max-w-[680px] mx-auto flex justify-center text-[#424242] py-5">
          It sounds like you're creating a rich resource hub for event planning
          in Bihar through "Dream Ambition." Do you want to add a blog section
          to your website to feature these insights, or are you planning to
          integrate existing blogs from another source?
        </p>
        <div className="pt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:pl-24 pl-14 lg:pl-10 gap-5 relative">
          {list?.map((value, index) => (
            <>
              <div
                className="w-[300px] h-[430px] shadow-lg rounded-lg overflow-hidden mb-4"
                key={index}
              >
                <img
                  src={value?.photos[0]}
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
             </>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogStories;
