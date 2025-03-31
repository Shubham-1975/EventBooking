import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import homeimg from "../../../../assets/images/weddingPlannerBackground2.jpg";
import GroupImg from "../../../../assets/images/groupImage.jpg";
import Haldi from "../../../../assets/images/haldiPlanner.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import TalkToExpert from "../../../../pages/userPages/TalkToExpert";
import Card1 from "../Card1";

const WeddingPlanner = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_SERVER}/planner`
  );
  const [list, setList] = useState(data);
  useEffect(() => {
    setList(data);
  }, [data]);
  return (
    <>
      <Navbar user={user} />
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh]">
        <img
          src={homeimg}
          className=" z-[-2] inset-0 w-full h-full object-cover filter fixed"
          alt="Background"
        />
        <div className="absolute bottom-[10%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Wedding Planners in Patna
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Planning a wedding can be an exciting but also overwhelming
            experience. That’s where wedding planners come in – we’re like the
            fairy godmothers of weddings, waving their magic wand to make your
            dream wedding come to life!
          </p>
          <div className="flex gap-5 mt-6">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-400/60 to-yellow-400 text-black px-4 py-2 rounded-full text-sm md:text-lg hover:bg-blue-700 transition-all delay-300"
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
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto p-5 md:p-10 bg-white ">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-around">
          <div className="">
            <h1 className="text-sm lg:text-4xl md:text-2xl font-semibold">
              Enchanting Weddings Come to Life with DreamAmbition Events: Your
              Premier Wedding Planners in Bihar
            </h1>
            <p className="text-gray-500 mt-4 text-sm md:text-[18px] leading-snug md:hidden lg:visible hidden">
              DreamAmbition’s wedding planners in Kerala, India, provide a wide
              range of services designed to help couples create the perfect
              wedding day. We start by getting to know the couple, listening to
              their wishes and ideas, and then working our magic to turn those
              dreams into reality.
            </p>
            <p className="text-gray-500 mt-4 text-sm md:text-[18px] leading-snug">
              DreamAmbition’s wedding event planners and managers services are
              professional services provided to help couples plan, organize, and
              execute their wedding day. We work closely with couples to
              understand their vision, preferences, and budget to create a
              personalized plan for the wedding day.
            </p>
          </div>
          <div className="">
            <img src={GroupImg} alt="" className="rounded-[16px] shadow-lg" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-around pt-[70px]">
          <div className="">
            <img src={Haldi} alt="" className="rounded-[16px] shadow-lg" />
          </div>
          <div className="pl-8">
            <p className="text-gray-500 mt-4 text-sm md:text-[18px] leading-snug">
              In India, think of wedding planners in Bihar as superheroes,
              swooping in to save the day and take care of everything from venue
              selection to vendor management, budget management to design and
              décor, timeline management to coordination, and post-wedding
              ceremony to honeymoon packages on the big day and occasions. We
              ensure every detail is accounted for and every moment perfectly
              orchestrated.
            </p>
            <p className="text-gray-500 mt-4 text-sm md:text-[18px] leading-snug">
              DreamAmbition’s wedding event planners and managers services are
              professional services provided to help couples plan, organize, and
              execute their wedding day. We work closely with couples to
              understand their vision, preferences, and budget to create a
              personalized plan for the wedding day.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-10 rounded-[12px]">
          <iframe
            width="1170"
            height="615"
            src="https://www.youtube.com/embed/KSiFxXoxbD8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-16">
          <Card1 list={list} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WeddingPlanner;
