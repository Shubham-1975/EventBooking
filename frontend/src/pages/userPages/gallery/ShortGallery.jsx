import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import homeVideo from "../../../assets/videos/videoshort.webm";
import "aos/dist/aos.css";
import Navbar from "../../../components/dashboard/userDashboard/Navbar";
import Footer from "../../../components/dashboard/userDashboard/Footer";
import useFetch from "../../../hooks/useFetch";

const ShortGallery = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_SERVER}/short-video`
  );
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]); // Added dependency array for optimized rendering

  return (
    <>
      <Navbar user={user} />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh] bg-black bg-opacity-50">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-[30%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Dream Ambition Event Management <br /> Shorts Video Gallery
          </h1>
          <div className="flex gap-5 mt-6">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-1 rounded-full text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500"
              onClick={() => setShowForm(true)}
            >
              <MdOutlineWifiCalling3 /> Talk to Expert
            </button>
            {showForm && <TalkToExpert setShowForm={setShowForm} />}

            <a
              href="https://wa.me/917070243030"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-[#00ff1a] via-[#12c912] to-[#12b312] px-4 py-1 rounded-full text-sm md:text-lg font-normal text-[#f8f0f0] hover:from-[#12b312] hover:via-[#12c912] hover:to-[#00ff1a] transition-all delay-200"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-full fixed right-10 bottom-10 z-50">
        <a href="https://wa.me/917070243030" target="_blank">
          <FaWhatsapp />
        </a>
      </div>

      {/* Video Gallery Section */}
      <div className="bg-white py-10">
        <div className="max-w-[1100px] mx-auto px-4">
          <h1 className="text-center text-3xl font-bold text-[#1e1e1e]">
            India's Finest Event Short Highlights
          </h1>
          <p className="text-[17px] font-normal text-[#3d3d3d] leading-normal text-center py-6">
            Welcome to Dream Ambition’s Shorts Video Gallery! Explore a curated
            collection of captivating short videos that showcase the magic of
            our finest events. From breathtaking weddings and electrifying live
            performances to intimate celebrations, these highlights offer a
            glimpse into our exceptional event planning expertise.
          </p>

          {/* YouTube Shorts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {list.map((value) => (
              <div key={value?._id} className="flex justify-center">
                <iframe
                  className="w-full max-w-[315px] h-auto aspect-[9/16] rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${value?.YoutubeId}?autoplay=1&loop=1&playlist=${value?.YoutubeId}`}
                  title="YouTube Short Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShortGallery;
