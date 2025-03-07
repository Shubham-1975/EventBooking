import React from "react";
import FrontHome from "../../dashboard/userDashboard/FrontHome";
import Services from "../../dashboard/userDashboard/Services";
import Planner from "../../dashboard/userDashboard/Planner";
import Experience from "../../dashboard/userDashboard/Experience";
import Testimonials from "../../dashboard/userDashboard/Testimonials";
import FrontSection2 from "./FrontSection2";
import Section4Booking from "./Section4Booking";
import BlogStories from "./BlogStories";

const Header = () => {
  return (
    <>
      <FrontHome />
      <FrontSection2 />
      <Services />
      <Section4Booking />
      <BlogStories />
      <Experience />
      <Testimonials />
    </>
  );
};

export default Header;
