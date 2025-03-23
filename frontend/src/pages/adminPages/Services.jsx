import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../components/dashboard/adminDashboard/NavbarUpper";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

const Services = () => {
  let path = useLocation();
  path = path.pathname.split("/")[1];

  const [catering, setCatering] = useState([]);
  const [photography, setPhotography] = useState([]);
  const [destination, setDestination] = useState([]);
  const [planner, setPlanner] = useState([]);
  const [Beach, setBeach] = useState([]);
  const [music, setMusic] = useState([]);
  const [party, setParty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [viewType, setViewType] = useState("catering");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          CateringResponse,
          photographyResponse,
          DestinationResponse,
          PlannerResponse,
          BeachResponse,
          MusicResponse,
          PartyResponse,
        ] = await Promise.all([
          axios.get(`${import.meta.env.VITE_SERVER}/catering`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/photography`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/destination`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/planner`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/beach`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/music`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/party`, {
            withCredentials: true,
          }),
        ]);
        setCatering(CateringResponse.data);
        setPhotography(photographyResponse.data);
        setDestination(DestinationResponse.data);
        setPlanner(PlannerResponse.data);
        setBeach(BeachResponse.data);
        setMusic(MusicResponse.data);
        setParty(PartyResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(destination);

  const navigate = useNavigate();

  const handleView = (type) => {
    setViewType(type);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  const displayedData =
    viewType === "catering"
      ? catering
      : viewType === "photography"
      ? photography
      : viewType === "destination"
      ? destination
      : viewType === "planner"
      ? planner
      : viewType === "beach"
      ? Beach
      : viewType === "music"
      ? music
      : party;

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
            to="add-new-catering-services"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
            Add catering Food
          </NavLink>
          <NavLink
            to="add-new-photography"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
            Add PhotoGraphy
          </NavLink>
          <NavLink
            to="add-new-destination-wedding"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white duration-500"
          >
            Add destination Wedding
          </NavLink>
          <NavLink
            to="add-new-wedding-planner"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add Wedding planner
          </NavLink>
          <NavLink
            to="add-new-beach-wedding"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add Beach wedding
          </NavLink>
          <NavLink
            to="add-new-music-entairment"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add Music & Entairment
          </NavLink>
          <NavLink
            to="add-new-private-party"
            className="no-underline text-green-700 text-[13px] font-smibold border border-green-700 p-1 rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Add Private-party
          </NavLink>
        </div>
        <hr className="h-[2px] my-2" />
        <span className="capitalize text-[24px] my-2 pl-5 text-gray-600">
          View
        </span>
        <div className="w-[95%] mx-auto text-[24px] text-gray-600 my-2 flex flex-wrap justify-between items-center gap-0">
          <button
            onClick={() => handleView("catering")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
    ${
      viewType === "catering"
        ? "bg-green-600 text-white"
        : "text-green-700 hover:bg-green-600 hover:text-white"
    }`}
          >
            View All Catering
          </button>
          <button
            onClick={() => handleView("photography")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
    ${
      viewType === "photography"
        ? "bg-green-600 text-white"
        : "text-green-700 hover:bg-green-600 hover:text-white"
    }`}
          >
            View PhotoGraphy
          </button>
          <button
            onClick={() => handleView("destination")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
              ${
                viewType === "destination"
                  ? "bg-green-600 text-white"
                  : "text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            View Destination Wedding
          </button>
          <button
            onClick={() => handleView("planner")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
              ${
                viewType === "planner"
                  ? "bg-green-600 text-white"
                  : "text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            View Wedding Planner
          </button>
          <button
            onClick={() => handleView("beach")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
              ${
                viewType === "beach"
                  ? "bg-green-600 text-white"
                  : "text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            View Beach wedding
          </button>
          <button
            onClick={() => handleView("music")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
              ${
                viewType === "music"
                  ? "bg-green-600 text-white"
                  : "text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            View Music & Entairment
          </button>
          <button
            onClick={() => handleView("party")}
            className={`no-underline text-[13px] font-semibold border border-green-700 p-1 rounded cursor-pointer duration-500
              ${
                viewType === "party"
                  ? "bg-green-600 text-white"
                  : "text-green-700 hover:bg-green-600 hover:text-white"
              }`}
          >
            View Private-Party
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
              {displayedData?.map((item, index) => (
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

export default Services;
