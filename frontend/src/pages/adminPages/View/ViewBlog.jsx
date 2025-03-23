import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const ViewBlog = () => {
  let location = useLocation().pathname;
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}${location}`);
  const [blog, setBlog] = useState(null);
  const [editableBlog, setEditableBlog] = useState(null);

  useEffect(() => {
    if (data) {
      setBlog(data);
      setEditableBlog({ ...data });
    }
  }, [data]);

  const handleRemoveImage = (index) => {
    setEditableBlog((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_SERVER}${location}`, editableBlog, {
        withCredentials: true,
      });
      toast.success("Blog updated successfully!");
      setBlog(editableBlog);
    } catch (error) {
      toast.error("Error updating blog");
    }
  };

  if (!blog) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <input
        type="text"
        name="title"
        value={editableBlog.title}
        onChange={handleChange}
        className="w-full text-3xl font-bold text-gray-800 border p-2 rounded"
      />
      <textarea
        name="desc"
        value={editableBlog.desc}
        onChange={handleChange}
        className="w-full mt-4 text-gray-600 border p-2 rounded"
        rows="4"
      ></textarea>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {editableBlog.photos?.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo}
              alt={`Blog image ${index + 1}`}
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

export default ViewBlog;