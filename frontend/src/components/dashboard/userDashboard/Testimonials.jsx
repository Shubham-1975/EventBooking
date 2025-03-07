import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

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
    <div className="bg-[#161616] w-full sm:h-[80vh] h-[50vh] pt-[80px] relative">
      {/* Left Arrow */}
      <button
        className="text-white text-[30px] md:text-[50px] rounded-[50%] bg-[#525151] absolute sm:left-[1%] sm:top-[39%] md:top-[38%] top-[40%] left-[3%] transform -translate-y-1/2 z-10"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="text-white text-[30px] md:text-[50px] rounded-[50%] bg-[#525151] absolute md:top-[38%] sm:right-[2%] sm:top-[39%] top-[40%] right-[5%] transform -translate-y-1/2 z-10"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>

      {/* Card Wrapper */}
      <div className="sm:max-w-[1140px] max-w-[270px] mx-auto overflow-hidden relative">
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
                className="text-white h-[200px] w-[260px] md:w-[320px] text-center bg-[#3e3c3c] rounded-[12px] flex-shrink-0"
              >
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
      <div className="flex justify-center mt-6">
        {Array(6/2+1)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-2 cursor-pointer ${
                scrollIndex === index ? "bg-yellow-500" : "bg-gray-500"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
