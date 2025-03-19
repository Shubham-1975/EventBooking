import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/dashboard/userDashboard/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPortfolio = ({user}) => {
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_SERVER}/events`);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data);
    }

    // Initialize AOS
    AOS?.init({
      duration: 1000, // Animation duration (1s)
      easing: "ease-in-out", // Smooth animation
      once: false, // Animation repeats when scrolling
    });

    // Refresh AOS when data changes
    AOS?.refresh();
  }, [data]);

  if (!list.length)
    return <p className="text-white text-center py-10">Loading...</p>;

  const eventCategories = [
    { title: "Dj Party", images: list[0]?.photos?.slice(0, 8) || [] },
    { title: "Wedding Event", images: list[1]?.photos?.slice(0, 8) || [] },
    { title: "Birthday Celebration", images: list[2]?.photos?.slice(0, 8) || [] },
    { title: "Music Concert", images: list[3]?.photos?.slice(0, 8) || [] },
    { title: "Photography Moments", images: list[4]?.photos?.slice(0, 8) || [] },
  ];

  return (
    <div className="w-full min-h-screen bg-[#171717] py-16 px-4">
      <Navbar user={user} />
      
      {/* Section Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 mt-10">
        <p className="text-[#e0dede] font-serif text-2xl leading-relaxed tracking-wider">
          Explore some of our product moments. Each <br />
          event tells a story of creativity, passion, and <br />
          precision. Let's create your story next!
        </p>
      </div>

      {/* Render Each Event Category */}
      {eventCategories.map((event, index) =>
        event.images.length > 0 ? (
          <div key={index} className="mb-16" data-aos="fade-up">
            {/* Event Title */}
            <h2 className="text-center text-yellow-400 font-serif text-3xl font-semibold mb-6">
              {event.title}
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {event?.images?.map((image, imgIndex) => (
                <div key={imgIndex} className="overflow-hidden rounded-lg shadow-lg" data-aos="zoom-in">
                  <img
                    src={image}
                    alt={`${event.title} ${imgIndex + 1}`}
                    className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}

      {/* Explore More Button */}
      <div className="flex justify-center mx-auto pt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-3 rounded-lg shadow-md transition-transform duration-200 hover:scale-105" >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default OurPortfolio;
