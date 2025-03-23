import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";

const BlogStories = ({ list, blog }) => {
  // const { data } = useFetch(`${import.meta.env.VITE_SERVER}/blog`);
  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   if (data) {
  //     setList(data);
  //   }
  // }, [data]);

  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-[#7a299a] text-[16px] font-semibold">
          {blog?.BlogTitle}
        </h1>
        <h1 className="text-center text-3xl font-bold text-[#181818] pt-5">
          {blog?.BlogHeader}
        </h1>
        <p className="text-center max-w-[680px] mx-auto flex justify-center text-[#424242] py-5 px-3">
          {blog?.BlogDescription}
        </p>
        <div className="pt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:pl-24 pl-14 lg:pl-10 gap-5 relative">
          {list?.map((value, index) => (
            <div
              className="w-[300px] h-[430px] shadow-lg rounded-lg overflow-hidden mb-4 hover:shadow-2xl duration-300"
              key={value?._id}
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
                {blog?.navigation ? blog?.navigation : ""}
                {blog?.icon ? blog?.icon : ""}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogStories;
