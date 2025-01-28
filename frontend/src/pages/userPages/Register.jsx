import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = ({ authLoading, authError, authDispatch }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    city: "",
    phone: null,
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8001/auth/register",
        credentials,
        { withCredentials: true }
        
      );
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
      console.error("Registration error:", err);
      alert(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Register
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            id="country"
            placeholder="Country"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            id="city"
            placeholder="City"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            id="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleClick}
            // disabled={authLoading}
            className={`w-full py-2 rounded-lg text-white ${
              authLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } transition duration-200`}
          >
            Register
            {/* {authLoading ? "Logging in..." : "Register"} */}
          </button>
          {/* {authError && (
            <span className="text-red-500 text-sm text-center block mt-2">
              {authError}
            </span>
          )} */}

          <Link to="/login">
            <div className="flex gap-2 justify-center items-center pt-3 text-[15px]">
              <p>Already have an Account?</p>
              <span className="text-blue-500">Login</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
