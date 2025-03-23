import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const ViewEvent = () => {
  let location = useLocation().pathname;
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}${location}`);

  const [event, setEvent] = useState(null);
  const [editableEvent, setEditableEvent] = useState(null);

  useEffect(() => {
    if (data) {
      setEvent(data);
      setEditableEvent({ ...data });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveImage = (index) => {
    setEditableEvent((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER}${location}`,
        editableEvent,
        {
          withCredentials: true,
        }
      );
      toast.success("Event updated successfully!");
      setEvent(editableEvent);
    } catch (error) {
      toast.error("Error updating event");
    }
  };

  if (!event) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <input
        type="text"
        name="title"
        value={editableEvent.title}
        onChange={handleInputChange}
        className="text-3xl font-bold text-gray-800 w-full border-b p-2 focus:outline-none"
      />
      <textarea
        name="desc"
        value={editableEvent.desc}
        onChange={handleInputChange}
        className="text-gray-600 mt-2 w-full border p-2 rounded focus:outline-none"
      />
      <div className="flex flex-wrap gap-4 mt-4">
        <input
          type="text"
          name="city"
          value={editableEvent.city}
          onChange={handleInputChange}
          className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 border focus:outline-none"
        />
        <input
          type="text"
          name="address"
          value={editableEvent.address}
          onChange={handleInputChange}
          className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 border focus:outline-none"
        />
        <input
          type="number"
          name="cheapestPrice"
          value={editableEvent.cheapestPrice}
          onChange={handleInputChange}
          className="bg-green-100 px-4 py-2 rounded-lg text-green-700 border focus:outline-none"
        />
        <input
          type="number"
          name="distance"
          value={editableEvent.distance}
          onChange={handleInputChange}
          className="bg-blue-100 px-4 py-2 rounded-lg text-blue-700 border focus:outline-none"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {editableEvent.photos?.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo}
              alt={`Event image ${index + 1}`}
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

export default ViewEvent;
