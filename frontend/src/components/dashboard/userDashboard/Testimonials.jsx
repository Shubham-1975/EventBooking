import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import googleLogo from '../../../assets/images/logogoogle.png'

const Testimonials = () => {
  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardWidth = 390; // Card width
  const cardGap = 10; // Gap between cards
  const visibleCards = 3; // Default number of visible cards

  const scrollLeft = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const maxIndex = containerRef.current.children.length - visibleCards;
      setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const ratings = [5, 4, 3, 4, 5, 2];
  return (
    <div className="bg-white w-full sm:h-[80vh] h-[50vh] pt-[80px] relative">
      <h1 className="text-[#af43ca] text-center text-lg font-semibold pt-11">Client Testimonials</h1>
      <h1 className="text-[#232323] text-3xl text-center py-5 font-bold ">See What our Clients has to Say</h1>
      {/* Left Arrow */}
      <button
        className="text-white text-[30px] lg:bottom-[16%] md:text-[50px] rounded-[50%] bg-[#525151] absolute md:bottom-[40%] transform -translate-y-1/2 z-10 bottom-[20%] left-5 md:left-2"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="text-white text-[30px] lg:bottom-[16%] md:text-[50px] rounded-[50%] bg-[#525151] absolute md:bottom-[62%]  bottom-[50%] right-[5%] md:right-2 transform -translate-y-1/2 z-10"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>

      {/* Card Wrapper */}
      <div className="sm:max-w-[1140px] max-w-[270px] mx-auto overflow-hidden relative py-10">
        {/* Card Container */}
        <div
          ref={containerRef}
          className="flex gap-4 md:gap-[80px]"
          style={{
            transform: `translateX(-${scrollIndex * (cardWidth + cardGap)}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {Array(6)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="text-black h-[200px] w-[260px] md:w-[320px] text-center bg-white  rounded-[12px] flex-shrink-0 shadow-lg overflow-hidden border hover:shadow-xl duration-300"
              >
              <img src={googleLogo} className="h-10 w-10 absolute top-2 right-10" alt="" />

                <h1 className="text-white text-[16px] md:text-[20px] font-semibold">
                  Shubham
                </h1>
                <div className="flex justify-center mb-2">
                  {Array(5)
                    .fill()
                    .map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={`text-${
                          starIndex < ratings[index]
                            ? "yellow-400"
                            : "gray-500"
                        } text-sm sm:text-base`}
                      />
                    ))}
                    
                </div>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  rem dolorem voluptate, natus perferendis ad quae sapiente quam
                  velit, eum quod eos, perspiciatis ipsa illum repellendus
                  reiciendis consequuntur consectetur assumenda.
                </p>
              </div>
              
            ))}
        </div>
        
      </div>
      
    </div>
  );
};

export default Testimonials;
