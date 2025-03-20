import React from "react";
import Navbar from "../../components/dashboard/userDashboard/Navbar";
import Header from "../../components/dashboard/userDashboard/Header";
import Footer from "../../components/dashboard/userDashboard/Footer";

const Home = ({user,authLoading,authDispatch}) => {
  return (
    <div>
      <Navbar user={user} authLoading={authLoading} authDispatch={authDispatch}/>
      <Header user={user} />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
