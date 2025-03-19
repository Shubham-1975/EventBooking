import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { NavLink } from "react-router-dom";


const Section4Booking = () => {
  const { data } = useFetch("http://localhost:8001/events");
  const [list, setList] = useState([]);
  const [imageIndexes, setImageIndexes] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const images1 = list[0]?.photos || [];
  const images2 = list[1]?.photos || [];
  const images3 = list[2]?.photos || [];
  const images4 = list[3]?.photos || [];

  const Photography = [images1, images2, images3, images4];

  useEffect(() => {
    const intervals = Photography?.map((images, i) => {
      if (images.length > 0) {
        return setInterval(() => {
          setImageIndexes((prevIndexes) =>
            prevIndexes.map((index, j) =>
              j === i ? (index + 1) % images.length : index
            )
          );
        }, 2000);
      }
      return null;
    });

    return () =>
      intervals?.forEach((interval) => interval && clearInterval(interval));
  }, [Photography]);

  return (
    <div className="max-w-screen-lg mx-auto bg-[#7a2399] rounded-xl my-10 lg:p-5 py-10 p-10 flex flex-wrap lg:flex-nowrap items-center justify-center gap-6">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 flex-auto lg:w-96 w-full px-4">
        {Photography.map((images, i) => (
          <div
            key={i}
            className="relative w-full aspect-[16/9] overflow-hidden rounded-lg"
          >
            {images.length > 0 && (
              <>
                {/* Old Image Moving Left */}
                <img
                  key={`old-${imageIndexes[i]}`}
                  src={
                    images[
                      (imageIndexes[i] - 1 + images.length) % images.length
                    ]
                  }
                  alt=""
                  className="absolute w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out"
                  style={{
                    transform: "translateX(0%)",
                    animation: "move-left 0.7s forwards",
                  }}
                />

                {/* New Image Entering from Right */}
                <img
                  key={`new-${imageIndexes[i]}`}
                  src={images[imageIndexes[i]]}
                  alt=""
                  className="absolute w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out"
                  style={{
                    transform: "translateX(100%)",
                    animation: "slide-in 0.7s forwards",
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="flex-auto w-full lg:w-1/2 text-white text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Struggling to find the perfect venue?
        </h1>
        <h3 className="text-lg md:text-xl font-semibold mt-3">
          Find your perfect venue hassle-free with DreamAmbition. Easy booking,
          endless choices.
        </h3>
        <button className="mt-5 bg-gradient-to-r from-[rgb(208,132,223)] via-[#9536a8] to-[#71227e] px-6 py-3 rounded-full text-lg font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300">
          <NavLink to="find-venue">Find Your Perfect Venue</NavLink>
        </button>
      </div>

      {/* Custom CSS Animations */}
      <style>
        {`
          @keyframes move-left {
            from { transform: translateX(0%); }
            to { transform: translateX(-100%); }
          }

          @keyframes slide-in {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Section4Booking;
