import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { FaUserCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const ViewUsers = () => {
  let location = useLocation().pathname;
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}${location}`);
  const [user, setUser] = useState(null);
  const [editableUser, setEditableUser] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [tempImg, setTempImg] = useState(null);

  useEffect(() => {
    if (data) {
      setUser(data);
      setEditableUser({ ...data });
      setTempImg(data.img);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setTempImg(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER}${location}`,
        editableUser,
        {
          withCredentials: true,
        }
      );
      toast.success("Profile updated successfully!");
      setUser(editableUser);
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  const handleRemoveImage = () => {
    setTempImg(null);
    setEditableUser((prev) => ({ ...prev, img: "" }));
    setShowImageOptions(false);
  };

  if (!user) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center relative">
          {tempImg ? (
            <img
              src={tempImg}
              alt={user.username}
              className="w-24 h-24 rounded-full shadow-md border border-gray-300"
            />
          ) : (
            <FaUserCircle className="w-24 h-24 text-gray-400" />
          )}
          <button
            className="absolute top-[20%] left-[57%] bg-gray-200 p-1 rounded-full shadow cursor-pointer hover:bg-green-600  duration-300"
            onClick={() => setShowImageOptions(!showImageOptions)}
          >
            <MdEdit className="text-gray-600 hover:text-white duration-300" />
          </button>
          {showImageOptions && (
            <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2 flex flex-col">
              <label className="cursor-pointer text-blue-600 p-1">
                Change Image
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              <button onClick={handleRemoveImage} className="text-red-600 p-1">
                Remove Image
              </button>
            </div>
          )}
          <input
            type="text"
            name="username"
            value={editableUser.username || ""}
            onChange={handleInputChange}
            className="text-xl font-bold text-gray-800 mt-4 capitalize text-center border-b focus:outline-none"
          />
          <p className="text-sm text-gray-500">
            {user.role ? user.role.toUpperCase() : "N/A"}
          </p>
        </div>
        <div className="mt-6 space-y-3">
          {[
            { label: "Email", name: "email" },
            { label: "Phone", name: "phone" },
            { label: "City", name: "city" },
            { label: "Country", name: "country" },
          ].map((field) => (
            <div
              className="flex justify-between border-b pb-2"
              key={field.name}
            >
              <span className="font-semibold text-gray-700">
                {field.label}:
              </span>
              <input
                type="text"
                name={field.name}
                value={editableUser[field.name] || ""}
                onChange={handleInputChange}
                className="text-gray-600 border-b focus:outline-none text-right"
              />
            </div>
          ))}
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-700">Admin:</span>
            <span className="text-gray-600">{user.isAdmin ? "Yes" : "No"}</span>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ViewUsers;
