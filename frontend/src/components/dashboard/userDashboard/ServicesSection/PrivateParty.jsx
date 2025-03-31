import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import homeimg from "../../../../assets/images/partyHome.jpg";
import corporateImg from "../../../../assets/images/dj3.jpg";
import beachgroup from "../../../../assets/images/beachgroup.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import TalkToExpert from "../../../../pages/userPages/TalkToExpert";
import { beach, beach2 } from "../AnswerQuestionData";
import useFetch from "../../../../hooks/useFetch";
import Card1 from "../Card1";
import AnswerQuestion from "../AnswerQuestion";

const BeachWedding = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/party`);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  return (
    <>
      <Navbar user={user} />
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh] bg-black bg-opacity-60">
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover fixed"
          alt="Background"
        />
        <div className="absolute bottom-[10%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Private Parties
          </h1>
          <p className="mt-3 text-sm  text-[#edecec]">
            Dream Ambition specializes in creating unforgettable private
            parties, filled with music, entertainment, and lasting memories.
            From intimate gatherings to grand celebrations, we curate every
            detail with precision, blending local charm with global
            sophistication. Step into a world of bespoke events where your
            dreams come to life!
          </p>
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

      <div className="max-w-[1400px] bg-white mx-auto p-5 md:p-10">
        <h1 className="text-2xl text-center md:text-4xl font-semibold ">
          Exclusive celebrations set against India's breathtaking backdrops.
        </h1>
        <div className="my-10">
          <img
            src={corporateImg}
            className="w-full rounded-lg h-[70vh] shadow-lg aspect-square"
            alt="Corporate Event"
          />
        </div>
        <h1 className="text-center text-3xl font-bold pt-8  text-[#1e1e1e]">
          Different services for Private-Party
        </h1>
        <div className="py-10">
          <Card1 list={list} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeachWedding;
