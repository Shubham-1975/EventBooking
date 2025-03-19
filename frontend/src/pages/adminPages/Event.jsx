import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../components/dashboard/adminDashboard/NavbarUpper";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

const Event = () => {
  let path = useLocation();
  path = path.pathname.split("/")[1];

  const { data, loading, error } = useFetch(`${import.meta.env.VITE_SERVER}/events`);
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER}/${path}/${id}`, {
        withCredentials: true,
      });
      toast.success("Deleted Succesfull!");
      setList(list?.filter((item) => item?._id !== id));

    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <div className="flex">
      <div className="w-full lg:w-1/5">
        <Sidebar />
      </div>
      <div className="flex-1">
        <NavbarUpper />
        <hr className="h-[2px] my-2" />
        <div className="w-[90%] mx-auto text-[24px] text-gray-600 my-2 flex flex-wrap justify-between items-center">
          <span className="capitalize">{path}</span>
          <NavLink
            to={`/new-${path}`}
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
            Add New Event
          </NavLink>
          <NavLink
            to='/new-wedding-services'
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
           Add Wedding Services
          </NavLink>
          <NavLink
            to="/add-venue"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add New Venue
          </NavLink>
          <NavLink
            to='/add-blog'
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-2 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add New Blog
          </NavLink>
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
              {list?.map((event, index) => (
                <tr key={event._id} className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {event?._id}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {event?.title}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {event?.city}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {event?.address}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {event?.distance}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    <div className="flex gap-2 md:gap-4 justify-center">
                      <button
                        className="p-2 bg-green-600 rounded hover:bg-green-500 text-white"
                        aria-label="View"
                      >
                        <IoEyeOutline />
                      </button>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="p-2 bg-red-600 rounded hover:bg-red-500 text-white"
                        aria-label="Delete"
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
