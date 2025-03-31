import React, { useState } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../../components/dashboard/adminDashboard/NavbarUpper";
import { toast } from "react-toastify";

const AddShortVideo = () => {
  const [YoutubeId, setYoutubeId] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setYoutubeId(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER}/short-video`,
        { YoutubeId },
        {
          withCredentials: true,
        }
      );

      toast.success("New YouTube link added successfully!");
      setLoading(false);
      navigate("/video");
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message || "Failed to add video."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex-[6]">
          <NavbarUpper />

          <div>
            <div className="pl-10">
              <h1 className="text-[#4e4d4d] text-[30px]">
                Add New Short Video Link
              </h1>
            </div>
            <hr />
            <div className="p-10 flex">
              <div
                className="right flex-[5]
              "
              >
                <form>
                  <div className="flex flex-wrap gap-10 justify-center items-center">
                    <div className="formInput p-2">
                      <label
                        className="flex items-center gap-[10px]"
                        htmlFor="link"
                      >
                        Paste Link Here...
                      </label>
                      <input
                        className="w-[100%] p-[5px] border-none border-b-[1px_solid_grey] outline-none"
                        onChange={handleChange}
                        type="text"
                        placeholder="XnSU8-dlXes"
                        id="link"
                      />
                    </div>
                  </div>

                  <button
                    className="w-[150px] p-[10px] border-none bg-yellow-400 hover:bg-yellow-500 text-black font-bold cursor-pointer mt-[10px] "
                    onClick={handleClick}
                  >
                    {loading ? "uploading...." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShortVideo;
