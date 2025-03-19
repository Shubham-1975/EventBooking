import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import homeimg from "../../assets/images/event7.webp";
import { toast } from "react-toastify";

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
        `${import.meta.env.VITE_SERVER}/auth/register`,
        credentials,
        { withCredentials: true }
      );
      toast.success("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className=" relative w-full min-h-screen">
      <img
        src={homeimg}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/90 opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="p-8 rounded-lg shadow-md w-11/12 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-white/20 via-white/20 to-white/20">
          <h1 className="text-2xl font-semibold text-white text-center mb-6">
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
             <input
              type="password"
              id="password"
              placeholder="Confirm Password"
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
              <div className="flex gap-2 justify-center items-center pt-3 text-[15px] text-white">
                <p>Already have an Account?</p>
                <span className="text-blue-500">Login</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
