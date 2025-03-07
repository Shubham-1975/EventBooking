import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios"; // Ensure axios is imported
import useFetch from "../../hooks/useFetch";
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../components/dashboard/adminDashboard/NavbarUpper";
import { toast } from "react-toastify";

const Feedback = () => {
  let path = useLocation();
  path = path.pathname.split("/")[1];

  const { data, loading, error } = useFetch("http://localhost:8001/feedback");
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios?.delete(`http://localhost:8001/${path}/${id}`, {
        withCredentials: true,
      });
      setList((prevList) => prevList?.filter((item) => item?._id !== id));
      toast.success("Deleted Succesfull!");
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/5 fixed">
        <Sidebar />
      </div>
      <div className="flex-1 ml-[20%]">
        <NavbarUpper />
        <hr className="h-[2px] my-2" />
        <div className="overflow-y-auto h-[calc(100vh-60px)] pt-4 pr-3 pl-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {list.map((item) => (
              <div
                key={item._id}
                className="w-full h-[300px] shadow-lg border rounded-lg p-4 bg-white relative"
              >
                <h1 className="text-center text-xl font-semibold capitalize text-gray-700">
                  {item?.name}
                </h1>
                <h3 className="text-center text-gray-600">
                  Phone: {item?.phone}, Email: {item?.email}
                </h3>
                <p className="text-center mt-2 text-black text-[20px] capitalize">
                  {item?.message}
                </p>
                <div className="flex justify-center items-center mt-4">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <FaStar
                      key={value}
                      className={`cursor-pointer text-2xl ${
                        value <= item?.rating
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <MdDelete className=" absolute top-[-19px] right-[-18px] text-[40px] text-red-600" onClick={()=>handleDelete(item._id)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
