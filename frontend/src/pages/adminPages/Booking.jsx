import React from "react";
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../components/dashboard/adminDashboard/NavbarUpper";


const Booking = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex-[6]">
          <NavbarUpper />
        </div>
      </div>
    </>
  );
};

export default Booking;
