import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import TalkToExpert from "../../../pages/userPages/TalkToExpert";

const FrontSection2 = () => {
  const [showForm, setShowForm] = useState(false);
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/events`);
  const [list, setList] = useState([]);
  const [imageIndexes, setImageIndexes] = useState([0, 0, 0, 0]); // Track index for each container

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  // Fetch images for 4 containers
  const images1 = list[0]?.photos || [];
  const images2 = list[1]?.photos || [];
  const images3 = list[2]?.photos || [];
  const images4 = list[3]?.photos || [];

  // Store them in an array
  const Photography = [images1, images2, images3, images4];

  // Cycle through images independently for each container
  useEffect(() => {
    const intervals = Photography?.map((images, i) => {
      if (images?.length > 0) {
        return setInterval(() => {
          setImageIndexes((prevIndexes) =>
            prevIndexes.map((index, j) =>
              j === i ? (index + 1) % images.length : index
            )
          );
        }, 2000);
      }
      return null;
    });

    return () =>
      intervals?.forEach((interval) => interval && clearInterval(interval));
  }, [Photography]);

  return (
    <div className="bg-[#fff9ec] font-bold w-full py-10 px-4">
      <div className="max-w-[1100px] mx-auto text-center">
        <h1 className="text-black mb-6 text-lg md:text-2xl">
          Unlock Your Dream Destination Wedding in Bihar
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {Photography?.map((images, i) => (
              <div
                key={i}
                className="relative w-full h-auto aspect-[16/9] overflow-hidden border-2 border-gray-300 rounded-lg bg-white"
              >
                {images?.length > 0 && (
                  <>
                    {/* Old Image Moving Left */}
                    <img
                      key={`old-${imageIndexes[i]}`}
                      src={
                        images[
                          (imageIndexes[i] - 1 + images.length) % images.length
                        ]
                      }
                      alt=""
                      className="absolute w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out"
                      style={{
                        transform: "translateX(0%)",
                        animation: "move-left 0.7s forwards",
                      }}
                    />

                    {/* New Image Entering from Right */}
                    <img
                      key={`new-${imageIndexes[i]}`}
                      src={images[imageIndexes[i]]}
                      alt=""
                      className="absolute w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out"
                      style={{
                        transform: "translateX(100%)",
                        animation: "slide-in 0.7s forwards",
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Text Section */}
          <div className="flex-auto w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="pt-5 font-normal text-sm md:text-lg text-[#4f4e4e]">
              Choose DreamAmbition Event Management Company for your premium
              destination wedding in Patna, Bihar. Whether you dream of a beach
              wedding or a resort celebration, we bring it to life with rich
              traditions.
            </h4>
            <h4 className="pt-5 font-normal text-sm md:text-lg text-[#4f4e4e]">
              We also offer venue selection assistance for a seamless planning
              process. Our track record includes clients from India and abroad,
              making us your ideal partner for a dream destination wedding in
              Patna, Bihar.
            </h4>

            {/* Buttons */}
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

            {showForm && <TalkToExpert setShowForm={setShowForm} />}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style>
        {`
          @keyframes move-left {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          @keyframes slide-in {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FrontSection2;
