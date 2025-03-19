import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import homeimg from "../../../../assets/images/bihari01.webp";
import img2 from "../../../../assets/images/destination.webp";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import TalkToExpert from "../../../../pages/userPages/TalkToExpert";

const DestinationWedding = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar user={user} />
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh]">
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover filter fixed blur-sm"
          alt="Background"
        />
        <div className="absolute bottom-[10%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Top Venues & Services for a Destination Wedding
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Celebrate your dream destination wedding amidst the serene beauty of
            nature, where luxury meets elegance. With Dream Ambition and
            DreamAmbition Event Management, enjoy world-class wedding services
            at stunning venues, creating cherished memories that last a
            lifetime.
          </p>
          <div className="flex gap-5 mt-6">
            <button
              className="mt-5 bg-gradient-to-r from-[rgb(208,132,223)] via-[#9536a8] to-[#71227e] px-6 py-3 rounded-full text-lg font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300 flex gap-2 items-center text-white"
              onClick={() => setShowForm(true)}
            >
              <MdOutlineWifiCalling3 /> Talk to Expert
            </button>
            {showForm && <TalkToExpert setShowForm={setShowForm} />}
            <button className="bg-gradient-to-r from-[#19943c] via-[#0cac41] to-[#17b732] px-6 py-3 mt-5 rounded-full text-lg font-medium hover:from-[#3eaa3b] hover:via-[#48cb0c] hover:to-[#42b22e] transition-all duration-300 flex gap-2 items-center">
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
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className=" bg-white py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1120px] mx-auto gap-5">
          <div className=" rounded-xl overflow-hidden">
            <img src={img2} alt="" />
          </div>
          <div>
            <h1 className="text-[#af43ca] text-center text-lg font-semibold pt-10">
              Plan Your Dream Destination Wedding with DreamAmbition
            </h1>
            <h1 className="text-start text-4xl font-semibold pt-5 text-[#181616]">
              Why is the Best Destination for Your Wedding?
            </h1>
            <p className="text-[#464545] text-[18px]">
              A destination wedding offers a unique and unforgettable
              experience, combining breathtaking scenery, luxurious venues, and
              intimate celebrations. It allows couples to exchange vows in a
              picturesque setting, creating memories that last a lifetime. With
              expert event planners like Dream Ambition, every detail is
              seamlessly managed, ensuring a stress-free and magical
              celebration.
            </p>
            <div className="flex gap-5 mt-6">
              <button
                className="mt-5 bg-gradient-to-r from-[rgb(208,132,223)] via-[#9536a8] to-[#71227e] px-6 py-3 rounded-full text-lg font-medium hover:from-[#ab30c1] hover:via-[#9c27b4] hover:to-[#9345a3] transition-all duration-300 flex gap-2 items-center text-white"
                onClick={() => setShowForm(true)}
              >
                <MdOutlineWifiCalling3 /> Talk to Expert
              </button>
              {showForm && <TalkToExpert setShowForm={setShowForm} />}
              <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-green-400/60 to-yellow-400 text-black px-4 py-2 rounded-full text-sm md:text-lg hover:bg-green-700 transition-all delay-200">
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
      </div>
      <Footer />
    </>
  );
};

export default DestinationWedding;
