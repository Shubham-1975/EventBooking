import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import homeimg from "../../../../assets/images/beach.jpg";
import corporateImg from "../../../../assets/images/beach01.webp";
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
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/beach`);
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
            Beach Wedding in, India
          </h1>
          <p className="mt-3 text-sm md:text-lg text-[#edecec]">
            Don’t miss this beach heaven…
          </p>
          <p className="mt-3 text-sm md:text-lg text-[#edecec]">
            Celebrate your love amidst the serene shores and palm-fringed
            beaches, India. With the gentle lullaby of the ocean, let your
            wedding be an enchanting affair that you and your guests will
            cherish forever.
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
          Golden vows under the warm coastal sun on India's serene beaches.
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-lg my-10">
          Scenic beaches and tranquil backwaters create the perfect setting for
          a dreamy destination wedding. Explore expert planning services to make
          your seaside celebration unforgettable.
        </p>
        <div className="my-10">
          <img
            src={corporateImg}
            className="w-full rounded-lg lg:h-[90vh] md:h-[100vh] shadow-lg aspect-square"
            alt="Corporate Event"
          />
        </div>
        <div className="w-full bg-[#fbf8d8]">
          <h1 className="text-2xl text-center md:text-4xl font-semibold ">
            Dream Ambition Can Help You Plan a Unique and Memorable Wedding
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-lg my-10 px-4">
            Thinking about planning your beach wedding in a breathtaking coastal
            destination? Host your event with Dream Ambition and create
            unforgettable memories. We’ll help you plan every detail seamlessly.
            Contact us today!
          </p>
          <div className="flex gap-5  mx-5 pb-10 mt-4">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#a914c7] via-[#ac2bc6] to-[#af5fbe] px-4 py-1 rounded-full text-sm md:text-lg font-normal hover:from-[#af5fbe] hover:via-[#ac2bc6] hover:to-[#a914c7] transition-all duration-500 text-white"
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
          <div>
            <iframe
              className="w-full h-[200px] sm:h-[300px] md:h-[550px] rounded-xl"
              src="https://www.youtube.com/embed/N8-egYQJIxk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h1 className="text-center text-3xl font-bold pt-8  text-[#1e1e1e]">
          Different services for weddings
        </h1>
        <div className="py-10">
          <Card1 list={list} />
        </div>
        <div>
          <p className="text-[18px] text-[#3d3d3d]">
            At{" "}
            <NavLink to="/">
              <span className="text-[#a914c7] text-xl font-bold">
                Dream Ambition
              </span>
            </NavLink>
            , we specialize in creating unforgettable destination weddings
            across India. Whether you envision a serene backwater wedding, a
            romantic houseboat celebration, or a breathtaking beachside
            ceremony, we are here to bring your dream wedding to life. Contact
            us today to explore our services and start planning your perfect
            day!
          </p>
          <div className="max-w-[900px] mx-auto flex justify-center py-8 h-[600px]">
            <img src={beachgroup} alt="" className="w-full object-cover" />
          </div>
        </div>
        {/* faq */}
        <div>
          <h1 className="text-center text-3xl font-bold pt-8  text-[#1e1e1e]">
            FAQs for Beach Weddings
          </h1>
          <p className="text-[18px] text-[#3d3d3d] pt-7">
            Dream Ambition, we are passionate about crafting unforgettable
            experiences for our clients. Let us help you plan your dream beach
            wedding anywhere in India. Contact us today to explore our services
            and bring your special day to life.
          </p>
          <AnswerQuestion faqs={beach} faqs2={beach2} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeachWedding;
