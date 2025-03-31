import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import homeVideo from "../../../assets/videos/video1.mp4";
import useFetch from "../../../hooks/useFetch";
import Navbar from "../../../components/dashboard/userDashboard/Navbar";
import Footer from "../../../components/dashboard/userDashboard/Footer";

const VideoGallery = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/video`);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  return (
    <>
      <Navbar user={user} />
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
            Video Gallery of Dream Ambition
          </h1>
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-2 rounded-full text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:to-[#a914c7] transition-all"
              onClick={() => setShowForm(true)}
            >
              <MdOutlineWifiCalling3 /> Talk to Expert
            </button>
            {showForm && <TalkToExpert setShowForm={setShowForm} />}
            <button className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full text-sm md:text-lg font-normal text-white hover:bg-green-600 transition">
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
      </div>

      {/* Floating WhatsApp Button */}
      <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-full fixed right-10 bottom-10 z-50">
        <a href="https://wa.me/917070243030" target="_blank">
          <FaWhatsapp />
        </a>
      </div>

      {/* Content Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center text-3xl font-bold text-[#1e1e1e] mb-6">
            Dream Ambition: Experience the Magic of India’s Finest Event Videos
          </h1>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-6">
            Welcome to Dream Ambition’s Video Gallery, where we bring the energy
            and excitement of celebrations to life! As a premier event
            management company in India, we are passionate about capturing
            unforgettable moments that make every event truly unique.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 font-semibold flex flex-col items-center gap-2">
            <li>Stunning wedding cinematography</li>
            <li>Breathtaking decor highlights</li>
            <li>Mesmerizing dance performances</li>
            <li>Engaging live entertainment</li>
          </ul>

          {/* YouTube Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
            {list.map((value) => (
              <div key={value?._id} className="flex justify-center">
                <iframe
                  className="w-full sm:w-[500px] h-[280px] sm:h-[320px] rounded-lg shadow-md"
                  src={`https://www.youtube.com/embed/${value?.YoutubeId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

export default VideoGallery;
