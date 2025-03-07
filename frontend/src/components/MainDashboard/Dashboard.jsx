import React, { useEffect } from "react";
import AdminSection from "./AdminSection";
import UserSection from "./UserSection";

const Dashboard = ({ user }) => {

  return (
    <div>{user?.role === "admin" ? <AdminSection /> : <UserSection />}</div>
  );
};

export default Dashboard;
