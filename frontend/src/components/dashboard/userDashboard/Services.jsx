import React, { useEffect, useRef, useState } from "react";
import img1 from "../../../assets/images/event3.avif";
import img2 from "../../../assets/images/event2.avif";
import img3 from "../../../assets/images/event3.avif";

const BiDirectionalCarousel = () => {
  const images = [img1, img2, img3]; // Add more images if needed
  const [scrollIndex, setScrollIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isReversingimg, setIsReversingimg] = useState(false); // 1 for right, -1 for left
  const containerRef = useRef(null);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setScrollIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          setIsReversingimg(true);
          return prevIndex - 1;
        } else if (prevIndex === 0 && isReversingimg) {
          setIsReversingimg(false);
          return prevIndex + 1;
        }
        return isReversingimg ? prevIndex - 1 : prevIndex + 1;
      });
    }, 3000); // Change image every 1 second

    return () => clearInterval(imageTimer); // Cleanup timer on unmount
  }, [images.length, isReversingimg]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translate(-${
        scrollIndex * 100
      }%)`;
      containerRef.current.style.transition = "transform 1s ease-in-out"; // Smooth scrolling effect
    }
  }, [scrollIndex]);

  return (
    <div className="relative max-w[1200px] mx-auto sm:h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-full h-full"
        style={{ width: `${images.length * 34}%`,backgroundColor: "transparent" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            style={{
              // backgroundImage: `url(${image})`,
              flex: "0 0 100%",
              backgroundColor: "grey"
            }}
          >
            <img
              src={image}
              className=" inset-0 w-[1300px] sm:h-full h-[40vh] object-cover z-[-1] bg-no-repeat bg-contain"
              alt="Background"
            />
            <h1 className="w-full bg-[#6d6c6c] z-[2] absolute bottom-[50%] text-[yellow] text-center text-2xl font-serif font-semibold">weddin Event</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiDirectionalCarousel;
