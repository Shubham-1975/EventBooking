import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { toast } from "react-toastify";
import axios from "axios";
import { MdClose } from "react-icons/md"; // Import delete icon

const ViewCatering = () => {
  let location = useLocation().pathname;
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}${location}`);

  const [catering, setCatering] = useState({});
  const [editableCatering, setEditableCatering] = useState({});

  useEffect(() => {
    if (data) {
      setCatering(data);
      setEditableCatering({ ...data });
    }
  }, [data]);

  const handleChange = (e) => {
    setEditableCatering((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Remove image only on this page
  const handleRemoveImage = () => {
    setEditableCatering((prev) => ({
      ...prev,
      photos: [],
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER}${location}`,
        editableCatering,
        {
          withCredentials: true,
        }
      );
      setCatering(editableCatering);
      toast.success("Updated Successfully!");
    } catch (error) {
      toast.error("Update Failed!");
    }
  };

  if (!catering) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Edit Catering Service
      </h2>

      {/* Image Display */}
      <div className="relative flex justify-center mb-4">
        {editableCatering?.photos?.length > 0 ? (
          <div className="relative">
            <img
              src={editableCatering.photos[0]}
              alt="Catering"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
            {/* Remove Button */}
            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full shadow-md hover:bg-red-500"
            >
              <MdClose size={20} />
            </button>
          </div>
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
      </div>

      {/* Editable Form */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={editableCatering?.title || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring focus:ring-green-300 outline-none"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Description
          </label>
          <textarea
            name="desc"
            value={editableCatering?.desc || ""}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded focus:ring focus:ring-green-300 outline-none"
          ></textarea>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ViewCatering;
