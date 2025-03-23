import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import homeimg from "../../../../assets/images/catering.jpg";
import corporateImg from "../../../../assets/images/caterin3.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import AOS from "aos";
import { IoMdPhotos } from "react-icons/io";

import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import TalkToExpert from "../../../../pages/userPages/TalkToExpert";
import BlogStories from "../BlogStories";

const Catering = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
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
          startCounting(setExperience, 123);
          startCounting(setEvents, 653);
          startCounting(setClients, 4.6);
          setIsAnimated(true); // Prevent re-animation
        }
      }
    };

    window.addEventListener("scroll", handleAOS);
    return () => window.removeEventListener("scroll", handleAOS);
  }, [isAnimated]);
  return (
    <>
      <Navbar user={user} />
      <div className="relative h-[60vh] sm:h-[80vh] md:h-[100vh]">
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover filter fixed blur-sm"
          alt="Background"
        />
        <div className="absolute bottom-[10%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight">
            Fine Dining Catering for Every Occasion
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Savor the taste of tradition and innovation with our expertly
            curated menus, designed to make your event unforgettable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6 text-white">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-2 rounded-full text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500"
              onClick={() => setShowForm(true)}
            >
              <MdOutlineWifiCalling3 /> Talk to Expert
              {showForm && <TalkToExpert setShowForm={setShowForm} />}
            </button>

            <button className="flex items-center gap-2 bg-gradient-to-r from-[#00ff1a] via-[#12c912] to-[#12b312] px-4 py-2 rounded-full text-sm md:text-lg font-normal text-[#f8f0f0] hover:from-[#12b312] hover:via-[#12c912] hover:to-[#00ff1a] transition-all delay-200">
              <a
                href="https://wa.me/917070243030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaWhatsapp /> Whatsapp Us
              </a>
            </button>
          </div>
        </div>
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className=" bg-white mx-auto p-5 md:p-10">
        <h1 className="text-sm text-[#943ab5] md:text-xl text-center font-semibold">
          Creating Unforgettable Events with Exquisite Catering Services
        </h1>

        <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <img
              src={corporateImg}
              className="w-full rounded-lg shadow-lg aspect-square"
              alt="Corporate Event"
            />
          </div>
          <div>
            <h1 className="pt-5 text-4xl  text-[#1c1b1b] font-semibold">
              Savor Every Moment with Exquisite Catering
            </h1>
            <p className="text-[#464646] text-xl py-5">
              आपके खास मौकों को और भी यादगार बनाने के लिए हम लाते हैं स्वाद,
              परंपरा और बेहतरीन मेहमाननवाज़ी का अनूठा संगम। हमारी कैटरिंग सेवा
              में शुद्ध भारतीय स्वाद, ताज़ी सामग्री और पारंपरिक व्यंजनों का
              शानदार मेल है, जो हर आयोजन को भव्य और सुखद बना देता है। चाहे शादी
              हो, पारिवारिक उत्सव या कोई कॉर्पोरेट इवेंट, हमारे अनुभवी शेफ और
              पेशेवर टीम यह सुनिश्चित करते हैं कि हर व्यंजन में स्वाद और
              गुणवत्ता का समर्पण झलके। आइए, मिलकर आपके खास पलों को स्वादिष्ट
              यादों में बदलें!
            </p>
            <p className="text-[#464646] text-xl py-5">
              Dream Ambition आपके हर खास मौके के लिए बेहतरीन कैटरिंग सेवाएं
              प्रदान करता है। पारंपरिक, फ्यूजन और आधुनिक व्यंजनों के साथ, हम
              आपकी पसंद और मेहमानों की जरूरतों के अनुसार स्वादिष्ट और यादगार
              भोजन तैयार करते हैं। हमारे अनुभवी शेफ हर व्यंजन को खास बनाते हैं,
              ताकि हर मेहमान स्वाद का अनोखा आनंद ले सके।
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6 text-white">
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-2 rounded-full text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500"
                onClick={() => setShowForm(true)}
              >
                <MdOutlineWifiCalling3 /> Talk to Expert
              </button>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#00ff1a] via-[#12c912] to-[#12b312] px-4 py-2 rounded-full text-sm md:text-lg font-normal text-[#f8f0f0] hover:from-[#12b312] hover:via-[#12c912] hover:to-[#00ff1a] transition-all delay-200">
                <a
                  href="https://wa.me/917070243030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp /> Whatsapp Us
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <NavLink
            to="/ourportfolio"
            className="flex items-center text-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-2 rounded-full text-white text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500"
            onClick={() => setShowForm(true)}
          >
            <IoMdPhotos />
            Explore Our Stunning Photography{" "}
          </NavLink>
        </div>
        <div className="my-10 py-10 px-5 w-full bg-[#f5fac9]">
          <h1 className="text-sm md:text-xl text-center font-semibold pb-5 text-[#943ab5]">
            Delightful Menu Options for Memorable Events
          </h1>
          <p className="text-center text-[#2b2a2a]  font-semibold">Experience the Essence of Flavor with Our Exquisite Catering Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full h-auto">
              <iframe
                className="w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-xl"
                src="https://www.youtube.com/embed/8UojuERYMJ4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full h-auto">
              <iframe
                className="w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-xl"
                src="https://www.youtube.com/embed/6BCA0uEfUw4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <NavLink
              to="/ourportfolio"
              className="flex items-center text-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-2 rounded-full text-white text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500"
              onClick={() => setShowForm(true)}
            >
              <FaVideo />
              Explore Our Stunning Videography
            </NavLink>
          </div>
        </div>

        <div className="h-[250px] relative my-10">
          <img src={homeimg} alt="" className="w-full h-full object-cover" />
          <div
            id="experience-section"
            className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-around px-5"
            data-aos="fade-up"
          >
            <div className="text-white text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {experience}+
              </h1>
              <h3 className="text-xs sm:text-sm md:text-lg">
                Weddings Covered
              </h3>
            </div>
            <div className="text-white text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {events}+
              </h1>
              <h3 className="text-xs sm:text-sm md:text-lg">Happy Customers</h3>
            </div>
            <div className="text-white text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {clients}
              </h1>
              <h3 className="text-xs sm:text-sm md:text-lg">Customer Rating</h3>
            </div>
          </div>
        </div>
        <BlogStories />
      </div>

      <Footer />
    </>
  );
};

export default Catering;
