import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const ViewVenue = () => {
  let location = useLocation().pathname.split("/")[2];
  const { data } = useFetch(
    `${import.meta.env.VITE_SERVER}/venue/find/${location}`
  );
  const [venue, setVenue] = useState(null);
  const [editableVenue, setEditableVenue] = useState(null);

  useEffect(() => {
    if (data) {
      setVenue(data);
      setEditableVenue({ ...data });
    }
  }, [data]);

  const handleRemoveImage = (index) => {
    setEditableVenue((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (e) => {
    setEditableVenue({ ...editableVenue, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER}${location}`,
        editableVenue,
        {
          withCredentials: true,
        }
      );
      toast.success("Venue updated successfully!");
      setVenue(editableVenue);
    } catch (error) {
      toast.error("Error updating venue");
    }
  };

  if (!venue) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <input
        type="text"
        name="title"
        value={editableVenue?.title}
        onChange={handleChange}
        className="text-3xl font-bold text-gray-800 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="desc"
        value={editableVenue?.desc}
        onChange={handleChange}
        className="text-gray-600 mt-2 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
      />
      <div className="flex flex-wrap gap-4 mt-4">
        <input
          type="text"
          name="city"
          value={editableVenue?.city}
          onChange={handleChange}
          className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 w-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="address"
          value={editableVenue?.address}
          onChange={handleChange}
          className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 w-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="pincode"
          value={editableVenue?.pincode}
          onChange={handleChange}
          className="bg-blue-100 px-4 py-2 rounded-lg text-blue-700 w-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {editableVenue?.photos?.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo}
              alt={`Venue image ${index + 1}`}
              className="rounded-lg shadow-md w-full h-40 object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
              onClick={() => handleRemoveImage(index)}
            >
              <MdCancel />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ViewVenue;
