import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../components/dashboard/adminDashboard/NavbarUpper";
import { toast } from "react-toastify";

const Event = () => {
  let path = useLocation();
  path = path.pathname.split("/")[1];

  const [venue, setVenue] = useState([]);
  const [events, setEvents] = useState([]);
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewType, setViewType] = useState("events");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [venueResponse, eventResponse, blogResponse] = await Promise.all([
          axios.get(`${import.meta.env.VITE_SERVER}/venue`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/events`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/blog`, {
            withCredentials: true,
          }),
        ]);
        setVenue(venueResponse.data);
        setEvents(eventResponse.data);
        setBlog(blogResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleView = (type) => {
    setViewType(type);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  const displayedData =
    viewType === "events" ? events : viewType === "venue" ? venue : blog;

  return (
    <div className="flex">
      <div className="w-full lg:w-1/5">
        <Sidebar />
      </div>
      <div className="flex-1">
        <NavbarUpper />
        <hr className="h-[2px] my-2" />
        <span className="capitalize text-[24px] text-gray-600 pl-12">
          {path}
        </span>
        <hr className="h-[2px] my-2" />

        <div className="w-[90%] mx-auto text-[24px] text-gray-600 my-2 flex flex-wrap justify-between items-center">
          <span className="capitalize">Add</span>
          <NavLink
            to={`/new-${path}`}
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
            Add New Event
          </NavLink>
          <NavLink
            to="/add-venue"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add New Venue
          </NavLink>
          <NavLink
            to="/add-blog"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add New Blog
          </NavLink>
        </div>
        <hr className="h-[2px] my-2" />
        <div className="w-[90%] mx-auto text-[24px] text-gray-600 my-2 flex flex-wrap justify-between items-center">
          <span className="capitalize">View</span>
          <button
            onClick={() => handleView("events")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-2 rounded cursor-pointer duration-500
    ${
      viewType === "events"
        ? "bg-green-600 text-white"
        : "text-green-700 hover:bg-green-600 hover:text-white"
    }`}
          >
            View Event
          </button>
          <button
            onClick={() => handleView("venue")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-2 rounded cursor-pointer duration-500
              ${
                viewType === "venue"
                  ? "bg-green-600 text-white"
                  : "text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            View Venue
          </button>
          <button
            onClick={() => handleView("blog")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-2 rounded cursor-pointer duration-500
              ${
                viewType === "blog"
                  ? "bg-green-600 text-white"
                  : "text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            View Blog
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-2 md:px-4 py-2">Id</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Title
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  City
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Address
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Distance
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {displayedData?.map((item) => (
                <tr key={item._id} className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {item?._id}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {item?.title}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {item?.city}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {item?.address}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {item?.distance}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    <div className="flex gap-2 md:gap-4 justify-center">
                      <button
                        className="p-2 bg-green-600 rounded hover:bg-green-500 text-white"
                        aria-label="View"
                        onClick={() => navigate(`/${viewType}/${item?._id}`)}
                      >
                        <IoEyeOutline />
                      </button>
                      <button
                        className="p-2 bg-red-600 rounded hover:bg-red-500 text-white"
                        aria-label="Delete"
                        onClick={async () => {
                          try {
                            await axios.delete(
                              `${import.meta.env.VITE_SERVER}/${viewType}/${
                                item._id
                              }`,
                              { withCredentials: true }
                            );
                            toast.success("Deleted Successfully!");
                            setEvents(events.filter((e) => e._id !== item._id));
                          } catch (error) {
                            toast.error(error.response.data.error.message);
                          }
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Event;
