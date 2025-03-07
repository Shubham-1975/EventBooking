import React, { useState } from "react";

import { MdOutlineDriveFolderUpload } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar";
import NavbarUpper from "../../components/dashboard/adminDashboard/NavbarUpper";
import { toast } from "react-toastify";

const AddNewUser = ({ Inputs }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try {
      setLoading(true);
      const uploadRes = await axios?.post(
        "https://api.cloudinary.com/v1_1/domrjywcg/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newUser = {
        ...info,
        img: url,
      };

      await axios?.post("http://localhost:8001/auth/register", newUser, {
        withCredentials: true,
      });
      toast.success("New User Added Succesfull!");
      setLoading(false);
      navigate("/users");
    } catch (error) {
      toast.error(error.response.data.error.message);
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
              <h1 className="text-[#4e4d4d] text-[30px]">Add New User</h1>
            </div>
            <hr />
            <div className="p-10 flex">
              <div className="left flex-[3] ">
                <img
                  className="rounded-[50%]  h-[100px] w-[100px]"
                  src={
                    file
                      ? URL?.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div
                className="right flex-[5]
              "
              >
                <form>
                  <div className="formInput">
                    <label
                      htmlFor="file"
                      className="flex items-center gap-[10px]"
                    >
                      Image:
                      <MdOutlineDriveFolderUpload className="text-[30px] cursor-pointer" />
                    </label>
                    <input
                      className="w-[100%] p-[5px] border-none border-b-[1px_solid_grey] "
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target?.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-10 justify-center items-center">
                    {Inputs.map((input) => (
                      <div className="formInput p-2" key={input.id}>
                        <label className="flex items-center gap-[10px]">
                          {input?.label}
                        </label>
                        <input
                          className="w-[100%] p-[5px] border-none border-b-[1px_solid_grey] outline-none"
                          onChange={handleChange}
                          type={input?.type}
                          placeholder={input.placeholder}
                          id={input?.id}
                        />
                      </div>
                    ))}
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

export default AddNewUser;
