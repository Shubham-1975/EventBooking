import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import homeimg from "../../assets/images/event7.webp";
import { toast } from "react-toastify";

const Login = ({ authLoading, authError, authDispatch }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    authDispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER}/auth/login`,
        credentials, // Correctly send credentials as data
        { withCredentials: true } // Configuration object
      );
      console.log(res);
      authDispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      toast.success("Login Succesfull!");
      navigate("/");
    } catch (err) {
      authDispatch({
        type: "LOGIN_FAILURE",
        payload: err?.response?.data?.error,
      });
      toast.error(err?.response?.data?.error);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src={homeimg}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/90 opacity-50"></div>

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="p-8 rounded-lg shadow-md w-11/12 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-white/20 via-white/20 to-white/20">
          <h1 className="text-2xl font-semibold text-white text-center mb-6">
            Login
          </h1>
          <div className="space-y-4">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
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
              disabled={authLoading}
              className={`w-full py-2 rounded-lg text-white ${
                authLoading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } transition duration-200`}
            >
              {authLoading ? "Logging in..." : "Login"}
            </button>
            {authError && (
              <span className="text-red-500 text-sm text-center block mt-2">
                {authError}
              </span>
            )}
            <div className="flex items-center justify-between">
              <Link to="/register">
                <div className="flex gap-2 justify-center items-center text-[15px]">
                  <p className="text-white">Not a Member ?</p>
                  <span className="text-blue-500 hover:underline hover:scale-110 duration-500">
                    {" "}
                    Signup
                  </span>
                </div>
              </Link>
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline text-sm hover:scale-110 duration-500"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
