import React, { useEffect, useState } from "react";
import FrontHome from "../../dashboard/userDashboard/FrontHome";
import Services from "../../dashboard/userDashboard/Services";

import Experience from "../../dashboard/userDashboard/Experience";

import FrontSection2 from "./FrontSection2";
import Section4Booking from "./Section4Booking";
import BlogStories from "./BlogStories";
import FeedBackSuggection from "./FeedBackSuggection";
import Question from "./Question";
import Maps from "./Maps";
import useFetch from "../../../hooks/useFetch";
import { FaAngleDoubleRight } from "react-icons/fa";

const Header = ({ user }) => {
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/blog`);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);
  const blog = {
    BlogTitle: "OUR BLOGS & ARTICLES",
    BlogHeader: "Stories by DreamAmbition Event Management",
    BlogDescription:
      "It sounds like you're creating a rich resource hub for event planning in Bihar through Dream Ambition. Do you want to add a blog section to your website to feature these insights, or are you planning to integrate existing blogs from another source?",
    navigation: "Learn More",
    icon: <FaAngleDoubleRight />,
  };

  return (
    <>
      <FrontHome />
      <FrontSection2 />
      <Services />
      <Section4Booking />
      <BlogStories list={list} blog={blog} />
      <Experience />
      <FeedBackSuggection user={user} />
      <Question />
      <Maps />
      {/* <Testimonials /> */}
    </>
  );
};

export default Header;
