import React from "react";
import FrontHome from "../../dashboard/userDashboard/FrontHome";
import Services from "../../dashboard/userDashboard/Services";

import Experience from "../../dashboard/userDashboard/Experience";

import FrontSection2 from "./FrontSection2";
import Section4Booking from "./Section4Booking";
import BlogStories from "./BlogStories";
import FeedBackSuggection from "./FeedBackSuggection";
import Question from "./Question";
import Maps from "./Maps";

const Header = () => {
  return (
    <>
      <FrontHome />
      <FrontSection2 />
      <Services />
      <Section4Booking />
      <BlogStories />
      <Experience />
      <FeedBackSuggection />
      <Question />
      <Maps />
      {/* <Testimonials /> */}
    </>
  );
};

export default Header;
