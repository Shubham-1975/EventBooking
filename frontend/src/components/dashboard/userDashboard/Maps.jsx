import React from "react";
import { MdLocationPin } from "react-icons/md";

const Maps = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-between h-auto bg-white">
        {/* map 1 */}
        <div className=" bg-[#fbefef] px-4">
          <div className="flex">
            <div className="text-8xl text-[#a526c5]">
              <MdLocationPin />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#727272]">
                Patna Branch
              </h1>
              <p>DreamAmbition Event Services</p>
              <p>Jamuna Apartment, Boring Road</p>
              <p>Patna, Bihar, 800012</p>
            </div>
          </div>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.660126076604!2d85.11209787396504!3d25.61620771460448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58257a0a593d%3A0xa539c70fd5a01032!2z4KSc4KSu4KWB4KSo4KS-IOCkheCkquCkvuCksOCljeCkn-CkruClh-CkguCknw!5e0!3m2!1shi!2sin!4v1740737240870!5m2!1shi!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
        <div className=" bg-[#fbefef] px-4">
          <div className="flex">
            <div className="text-8xl text-[#a526c5]">
              <MdLocationPin />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#727272]">
                Sheikhpura Branch
              </h1>
              <p>DreamAmbition Event Services</p>
              <p>Rohit Sound & Event, Deoley</p>
              <p>Sheikhpura, Bihar, 811105</p>
            </div>
          </div>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.375737426326!2d85.74206837394533!3d25.122984834705292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f25bdfb4ac768f%3A0x30f8e8b802fc869c!2z4KSw4KWL4KS54KS_4KSkIOCkuOCkvuCkieCkguCkoSDgpJTgpLAg4KSr4KS84KWI4KSC4KS44KWAIOCkn-Clh-CkguCknyDgpLngpL7gpIngpLg!5e0!3m2!1shi!2sin!4v1740739505682!5m2!1shi!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
        <div className=" bg-[#fbefef] px-4">
          <div className="flex">
            <div className="text-8xl text-[#a526c5]">
              <MdLocationPin />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#727272]">
                Gaya Branch
              </h1>
              <p>DreamAmbition Event Services</p>
              <p> North Church Road,Branch, Bihar</p>
              <p>Gaya, Bihar, 823001</p>
            </div>
          </div>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1239125363913!2d84.9947726739323!3d24.791210148027734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bff2d5aff81%3A0x6ea2a15df006ea3!2z4KSH4KS14KWH4KSC4KSf4KS_4KSV4KS-IOCkj-CkteClh-CkguCkn-CljeCknCAmIOCkhuCkr-CkoeCkv-Ckr-CkvuCknCDgpKrgpY3gpLDgpL7gpIfgpLXgpYfgpJ8g4KSy4KS_4KSu4KS_4KSf4KWH4KShKCDgpKYg4KS14KWH4KSh4KS_4KSC4KSXIOCkquCljeCksuCkvuCkqOCksCk!5e0!3m2!1shi!2sin!4v1740758403300!5m2!1shi!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;
