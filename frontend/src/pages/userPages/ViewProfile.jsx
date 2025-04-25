import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { FaXmark } from "react-icons/fa6";
import useFetch from "../../hooks/useFetch";
import { Lock } from "lucide-react"; // Import lock icon from Lucide or use FontAwesome

const ViewProfile = ({ setShowForm, userID, authDispatch }) => {
  const { data } = useFetch(`${import.meta.env.VITE_SERVER}/users/${userID}`);
  const [user, setUser] = useState(null);
  const [editableUser, setEditableUser] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [tempImg, setTempImg] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (data) {
      setUser(data);
      setEditableUser({ ...data });
      setTempImg(data.img); // Initial image from backend
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file); // Store file for later upload
    setTempImg(URL.createObjectURL(file)); // Preview the image
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    let imageUrl = editableUser.img;

    try {
      // If a new image is selected, upload it first
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "upload"); // Your Cloudinary preset

        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/domrjywcg/image/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        imageUrl = uploadRes.data.secure_url;
      }

      // Update user profile including the image URL (if changed)
      const updatedData = await axios.put(
        `${import.meta.env.VITE_SERVER}/users/${userID}`,
        { ...editableUser, img: imageUrl },
        { withCredentials: true }
      );

      authDispatch({ type: "LOGIN_SUCCESS", payload: updatedData.data });
      setUser((prev) => ({ ...prev, img: imageUrl })); // Update UI with new image
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null); // Clear file
    setTempImg(null); // Remove preview
    setEditableUser((prev) => ({ ...prev, img: "" })); // Reset database image
    setShowImageOptions(false);
  };

  if (!user)
    return <p className="text-center mt-6 text-gray-700">Loading...</p>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="absolute inset-0"
        onClick={() => setShowForm(false)}
      ></div>

      <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <button
          className="text-black absolute top-4 right-6 text-2xl hover:text-3xl duration-300 z-[999] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Stops click from affecting parent elements
            setShowForm(false);
          }}
        >
          <FaXmark />
        </button>

        <div className="flex flex-col items-center relative">
          {tempImg ? (
            <img
              src={tempImg}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full shadow-md border border-gray-300"
            />
          ) : (
            <FaUserCircle className="w-24 h-24 text-gray-400" />
          )}

          {/* Edit Button */}
          <button
            className="absolute top-14 right-[35%] bg-gray-200 p-1 rounded-full shadow cursor-pointer hover:bg-green-600 duration-300"
            onClick={() => setShowImageOptions(!showImageOptions)}
          >
            <MdEdit className="text-gray-600 hover:text-white duration-300" />
          </button>

          {/* Image Options */}
          {showImageOptions && (
            <div className="absolute top-20 right-10 bg-white shadow-md rounded-md p-2 flex flex-col">
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

          {/* Username */}
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

        {/* Profile Fields */}
        <div className="mt-6 space-y-3">
          {[
            { label: "Email", name: "email" },
            { label: "Phone", name: "phone" },
            { label: "City", name: "city" },
            { label: "Country", name: "country" },
          ].map((field) => (
            <div
              className="flex justify-between items-center border-b pb-2"
              key={field.name}
            >
              <span className="font-semibold text-gray-700">
                {field.label}:
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name={field.name}
                  disabled={field.name === "email"} // Disable only "Email" field
                  value={editableUser[field.name] || ""}
                  onChange={handleInputChange}
                  className="text-gray-600 border-b focus:outline-none text-right disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {field.name === "email" && (
                  <Lock size={16} className="text-gray-500" />
                )}{" "}
                {/* Show lock icon */}
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default ViewProfile;
