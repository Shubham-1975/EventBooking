import { MdDashboard, MdLocalShipping, MdOutlineInsertChart, MdExitToApp, MdNotificationsNone, MdOutlineAccountCircle } from "react-icons/md";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { Link, useNavigate, NavLink } from "react-router-dom";
import img from "../../../assets/images/event5.png"
import { useState } from "react";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:8001/auth/logout", { withCredentials: true });
      navigate("/login");
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  const handleShowProfile = () => {
    console.log("Profile clicked");
  };

  return (
    <div className="md:flex md:flex-1 min-h-screen border-r border-gray-300 bg-black">
      <button
        className="md:hidden p-4 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div className={`md:block ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
        <div className="h-12 flex items-center justify-center">
          <Link to="/" className="no-underline">
            <img src={img} alt="Logo" className="h-24 w-40" />
          </Link>
        </div>
        <hr className="border-gray-300" />

        <nav className="pl-2">
          <ul className="space-y-4">
            <li className="text-xs font-bold text-gray-500 mt-4">MAIN</li>
            <NavLink to="/" className="sidebar-item">
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </NavLink>

            <li className="text-xs font-bold text-gray-500 mt-4">LISTS</li>
            <NavLink to="/users" className="sidebar-item">
              <IoPersonOutline className="icon" />
              <span>Users</span>
            </NavLink>
            <NavLink to="/events" className="sidebar-item">
              <MdLocalShipping className="icon" />
              <span>Event</span>
            </NavLink>
            <NavLink to="/feedback" className="sidebar-item">
              <CiCreditCard1 className="icon" />
              <span>Feedback</span>
            </NavLink>
            <NavLink to="/booking" className="sidebar-item">
              <MdLocalShipping className="icon" />
              <span>Booking</span>
            </NavLink>

            <li className="text-xs font-bold text-gray-500 mt-4">USEFUL</li>
            <li className="sidebar-item">
              <MdOutlineInsertChart className="icon" />
              <span>Status</span>
            </li>
            <li className="sidebar-item">
              <MdNotificationsNone className="icon" />
              <span>Notifications</span>
            </li>

            <li className="text-xs font-bold text-gray-500 mt-4">SERVICE</li>
            <li className="sidebar-item">
              <IoSettingsOutline className="icon" />
              <span>Settings</span>
            </li>

            <li className="text-xs font-bold text-gray-500 mt-4">USER</li>
            <li className="sidebar-item" onClick={handleShowProfile}>
              <MdOutlineAccountCircle className="icon" />
              <span>Profile</span>
            </li>
            <li className="sidebar-item" onClick={handleLogOut}>
              <MdExitToApp className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </nav>

        <style jsx="true">{`
          .sidebar-item {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            cursor: pointer;
            color: #888;
            font-size: 0.875rem;
            font-weight: bold;
            border-radius: 0.375rem;
            transition: background-color 0.3s;
          }
          .sidebar-item:hover {
            background-color: #272728;
          }
          .icon {
            font-size: 1.125rem;
            color: #fbbf24;
            margin-right: 0.625rem;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Sidebar;
