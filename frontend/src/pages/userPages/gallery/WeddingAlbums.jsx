import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import homeimg from "../../../assets/images/dj3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import useFetch from "../../../hooks/useFetch";
import Navbar from "../../../components/dashboard/userDashboard/Navbar";
import Footer from "../../../components/dashboard/userDashboard/Footer";

const WeddingAlbums = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_SERVER}/events`
  );
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
    {
      title: "Birthday Celebration",
      images: list[2]?.photos?.slice(0, 8) || [],
    },
    {
      title: "Photography Moments",
      images: list[3]?.photos?.slice(0, 8) || [],
    },
    {
      title: "Music Concert",
      images: list[4]?.photos?.slice(0, 8) || [],
    },
  ];

  return (
    <>
      <Navbar user={user} />
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh] bg-black bg-opacity-60">
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover fixed"
          alt="Background"
        />
        <div className="absolute bottom-[30%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Photos Gallery of Dream Ambition
          </h1>
          <div className="flex gap-5 mt-6">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-1 rounded-full text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500"
              onClick={() => setShowForm(true)}
            >
              <MdOutlineWifiCalling3 /> Talk to Expert
            </button>
            {showForm && <TalkToExpert setShowForm={setShowForm} />}
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#00ff1a] via-[#12c912] to-[#12b312] px-4 py-1 rounded-full text-sm md:text-lg font-normal text-[#f8f0f0] hover:from-[#12b312] hover:via-[#12c912] hover:to-[#00ff1a] transition-all delay-200">
              <a
                href="https://wa.me/917070243030"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp /> Whatsapp Us
              </a>
            </button>
          </div>
        </div>
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10 z-50">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="bg-white py-10">
        {/* Explore More Button */}
        {eventCategories.map((event, index) =>
          event.images.length > 0 ? (
            <div key={index} className="mb-16" data-aos="fade-up">
              {/* Event Title */}
              <h2 className="text-center text-[#a914c7] font-serif text-3xl font-semibold mb-6">
                {event.title}
              </h2>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {event?.images?.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="overflow-hidden rounded-lg shadow-lg"
                    data-aos="zoom-in"
                  >
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

        <div className="flex justify-center mx-auto pt-10">
          <button className="bg-[#c835e6] hover:bg-[#a914c7] text-[#f1e5e5] font-semibold px-5 py-3 rounded-lg shadow-md transition-transform duration-200 hover:scale-105">
            Explore More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WeddingAlbums;
