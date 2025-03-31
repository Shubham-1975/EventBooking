import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../../components/dashboard/adminDashboard/NavbarUpper";
import { toast } from "react-toastify";

const VideoLink = () => {
  let path = useLocation();
  path = path.pathname.split("/")[1];

  const [video, setVideo] = useState([]);
  const [shortVideo, setShortVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [viewType, setViewType] = useState("video");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [videoResponse, shortVideoResponse] = await Promise.all([
          axios.get(`${import.meta.env.VITE_SERVER}/video`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/short-video`, {
            withCredentials: true,
          }),
        ]);
        setVideo(videoResponse.data);
        setShortVideo(shortVideoResponse.data);
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

  const displayedData = viewType === "video" ? video : shortVideo;

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
        <span className="capitalize text-[24px] my-2 pl-5 text-gray-600">
          {path}
        </span>
        <hr className="h-[2px] my-2" />
        <span className="capitalize text-[24px] my-2 pl-5 text-gray-600">
          Add
        </span>
        <div className="w-[95%] mx-auto text-[24px] gap-1 text-gray-600 my-2 flex flex-wrap justify-between items-center">
          <NavLink
            to="add-video"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
            Add Long Video Link Code
          </NavLink>
          <NavLink
            to="add-short-video"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
            Add Short Video Link Code
          </NavLink>
        </div>
        <hr className="h-[2px] my-2" />
        <span className="capitalize text-[24px] my-2 pl-5 text-gray-600">
          View
        </span>
        <div className="w-[95%] mx-auto text-[24px] text-gray-600 my-2 flex flex-wrap justify-between items-center gap-0">
          <button
            onClick={() => handleView("video")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
    ${
      viewType === "video"
        ? "bg-green-600 text-white"
        : "text-green-700 hover:bg-green-600 hover:text-white"
    }`}
          >
            View All video link Code 
          </button>
          <button
            onClick={() => handleView("shortVideo")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
    ${
      viewType === "shortVideo"
        ? "bg-green-600 text-white"
        : "text-green-700 hover:bg-green-600 hover:text-white"
    }`}
          >
            View Short Video Link Code 
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-2 md:px-4 py-2">Id</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Link Code
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {displayedData?.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {item?.YoutubeId}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    <div className="flex gap-2 md:gap-4 justify-center">
                      <button
                        className="p-2 bg-green-600 rounded hover:bg-green-500 text-white"
                        aria-label="View"
                        onClick={() => navigate(`/${viewType}/${item._id}`)}
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

export default VideoLink;
