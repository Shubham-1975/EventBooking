import React, { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar";
import useFetch from "../../hooks/useFetch";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import NavbarUpper from "../../components/dashboard/adminDashboard/NavbarUpper";

const Users = () => {
  let path = useLocation();
  path = path.pathname.split("/")[1];
  const { data, loading, error } = useFetch("http://localhost:8001/users");

  const [list, setList] = useState(data);
  useEffect(() => {
    setList(data);
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/${path}/${id}`,{withCredentials:true});
      setList(list.filter((item) => item?._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex lg:flex-row">
        <div className="w-full lg:w-[20%]">
          <Sidebar />
        </div>
        <div className="w-full lg:flex-[6]">
          <NavbarUpper />
          <hr className="h-[2px] my-2" />
          <div className="w-[90%] mx-auto text-[18px] sm:text-[24px] text-gray-500 m-2 flex justify-between items-center">
            <span className="capitalize">{path}</span>
            <NavLink
              to={`/new-${path}`}
              className="no-underline text-green-600 text-[14px] sm:text-[16px] font-medium border border-green-600 p-2 rounded cursor-pointer"
            >
              Add New
            </NavLink>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Sr.No
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Name
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Email
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Phone
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-semibold">
                {list?.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {index + 1}.
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {user?.username}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {user?.email}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {user?.phone}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      <div className="flex gap-4 items-center text-white">
                        <button className="p-2 bg-green-600 rounded">
                          <IoEyeOutline />
                        </button>
                        <button
                          className="p-2 bg-red-600 rounded"
                          onClick={() => handleDelete(user._id)}
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
    </>
  );
};

export default Users;
