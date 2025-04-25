import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state?.formData;
  const initialAmount = location.state?.amount; // The initial amount passed from the previous page

  const [paymentAmount, setPaymentAmount] = useState(initialAmount);

  // Handle the payment input change
  const handleAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  // Payment processing function
  const handlePayment = async () => {
    if (paymentAmount < 5000) {
      toast.error("The minimum payment amount is ₹5000!");
      return;
    }

    try {
      // Simulate successful payment here (e.g., using a payment gateway)
      await axios.post(`${import.meta.env.VITE_SERVER}/eventbooks`, formData, {
        withCredentials: true,
      });

      toast.success("Payment successful and booking confirmed!");
      navigate("/generate-pdf", { state: { formData } });
    } catch (err) {
      toast.error("Payment failed. Please try again.");
    }
  };

  if (!formData || !initialAmount) {
    return (
      <div className="text-center mt-10 text-red-600">
        Invalid Payment Request
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 border shadow rounded bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Payment Page</h2>

      {/* Booking Summary Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Booking Details</h3>
        <div className="space-y-2 mt-4">
          <p>
            <strong className="text-gray-700">Venue:</strong>{" "}
            {formData.venueTitle}
          </p>
          <p>
            <strong className="text-gray-700">Event Dates:</strong>{" "}
            {formData.eventDates}
          </p>
          <p>
            <strong className="text-gray-700">Guests:</strong> {formData.guests}
          </p>
          <p>
            <strong className="text-gray-700">Total Amount:</strong> ₹
            {initialAmount}
          </p>
        </div>
      </div>

      {/* Payment Input Section */}
      <div className="mb-6">
        <label htmlFor="paymentAmount" className="block font-semibold text-lg">
          Enter Payment Amount
        </label>
        <input
          type="number"
          id="paymentAmount"
          value={paymentAmount}
          onChange={handleAmountChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 outline-none focus:border-green-500"
          min="5000"
          placeholder="Enter payment amount"
        />
        <p className="text-xs text-gray-500 mt-1">
          The minimum payment amount is ₹5000.
        </p>
      </div>

      {/* Payment Confirmation Section */}
      <div>
        <button
          onClick={handlePayment}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
