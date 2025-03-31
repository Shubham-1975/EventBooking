import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { toast } from "react-toastify";
import axios from "axios";

const ViewVideo = () => {
  let location = useLocation().pathname;
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}${location}`);

  const [video, setVideo] = useState({});
  const [editableVideo, setEditableVideo] = useState({});

  useEffect(() => {
    if (data) {
      setVideo(data);
      setEditableVideo({ ...data });
    }
  }, [data]);

  const handleChange = (e) => {
    setEditableVideo((prev) => ({
      ...prev,
      YoutubeId: e.target.value, // Update YouTube ID in state
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER}${location}`,
        editableVideo,
        {
          withCredentials: true,
        }
      );
      setVideo(editableVideo);
      toast.success("YouTube Video ID Updated Successfully!");
    } catch (error) {
      toast.error("Update Failed!");
    }
  };

  if (!video) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Edit YouTube Video
      </h2>

      {/* YouTube Video Display */}
      <div className="relative flex justify-center mb-4">
        {editableVideo?.YoutubeId ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${editableVideo.YoutubeId}`}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        ) : (
          <p className="text-gray-500">No video available</p>
        )}
      </div>

      {/* Editable Form */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* YouTube ID Input */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            YouTube Video ID
          </label>
          <input
            type="text"
            name="YoutubeId"
            value={editableVideo?.YoutubeId || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300 outline-none"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ViewVideo;
