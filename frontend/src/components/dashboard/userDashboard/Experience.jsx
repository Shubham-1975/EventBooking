import React from "react";

const Experience = () => {
  return (
    <>
      <div className="w-full lg:h-[40vh] md:h-[60vh] bg-[#645221] sm:h-[55vh] h-[30vh] xl:h-[50vh]">
        <div className="max-w-[980px] mx-auto flex text-white justify-around pt-[10%] items-center">
          <div className="">
            <h1 className="sm:text-[40px] text-[25px] font-bold text-center">5+</h1>
            <h3 className="sm:text-[18px] text-[12px]">Year of Experience</h3>
          </div>
          <div>
          <h1 className="sm:text-[40px] text-[25px] font-bold text-center">300+</h1>
          <h3 className="sm:text-[18px] text-[12px]">Successful Events</h3>
          </div>
          <div>
          <h1 className="sm:text-[40px] text-[25px] font-bold text-center">100+</h1>
          <h3 className="sm:text-[18px] text-[12px] text-center">Clients</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
