import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const [experience, setExperience] = useState(0);
  const [events, setEvents] = useState(0);
  const [clients, setClients] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false); // To track animation start

  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Initialize AOS with 'once' so it runs once

    const startCounting = (setter, finalValue) => {
      let start = 0;
      const increment = finalValue / 50; // Controls speed
      const interval = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          start = finalValue;
          clearInterval(interval);
        }
        setter(Math.floor(start));
      }, 50);
    };

    const handleAOS = () => {
      const section = document.getElementById("experience-section");
      if (section && !isAnimated) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          startCounting(setExperience, 5);
          startCounting(setEvents, 300);
          startCounting(setClients, 100);
          setIsAnimated(true); // Prevent re-animation
        }
      }
    };

    window.addEventListener("scroll", handleAOS);
    return () => window.removeEventListener("scroll", handleAOS);
  }, [isAnimated]);

  return (
    <div
      id="experience-section"
      className="w-full lg:h-[40vh] md:h-[60vh] bg-[#7a2399] sm:h-[55vh] h-[30vh] xl:h-[50vh]"
      data-aos="fade-up"
    >
      <div className="max-w-[980px] mx-auto flex text-white justify-around pt-[10%] items-center">
        <div>
          <h1 className="sm:text-[40px] text-[25px] font-bold text-center">
            {experience}+
          </h1>
          <h3 className="sm:text-[18px] text-[12px]">Years of Experience</h3>
        </div>
        <div>
          <h1 className="sm:text-[40px] text-[25px] font-bold text-center">
            {events}+
          </h1>
          <h3 className="sm:text-[18px] text-[12px]">Successful Events</h3>
        </div>
        <div>
          <h1 className="sm:text-[40px] text-[25px] font-bold text-center">
            {clients}+
          </h1>
          <h3 className="sm:text-[18px] text-[12px] text-center">Clients</h3>
        </div>
      </div>
    </div>
  );
};

export default Experience;
