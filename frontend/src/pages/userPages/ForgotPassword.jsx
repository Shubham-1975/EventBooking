import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import homeimg from "../../assets/images/event7.webp";

const ForgotPassword = ({ authLoading, authError, authDispatch }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER}/auth/forgot-password`,
        { email },
        { withCredentials: true }
      );

      authDispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      toast.success("OTP sent to your email!");
      setStep(2);
    } catch (error) {
      toast.error(error.response?.data?.error || "Error sending OTP");
    }
  };

  const handleResetPassword = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_SERVER}/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });
      toast.success("Password reset successful!");
      setStep(1);
    } catch (error) {
      toast.error(error.response?.data?.error || "Error resetting password");
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

      <div className="absolute top-0 left-0 w-full h-full bg-black/90 opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md w-11/12 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-white/20 via-white/20 to-white/20">
      {step === 1 ? (
        <>
          <h2 className="text-xl font-bold mb-4 text-white text-center">Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSendOtp}
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4 text-white text-center">Reset Password</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2 mt-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Re-Enter new password"
            className="w-full px-4 py-2 mt-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            onClick={handleResetPassword}
            className="w-full mt-4 bg-green-500 text-white p-2 rounded"
          >
            Reset Password
          </button>
        </>
      )}
    </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
