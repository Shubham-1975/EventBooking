import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import pdfImg from "../../assets/images/weddingPdf1.jpg";

const GeneratePDF = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pdfRef = useRef();
  const formData = location.state?.formData;

  useEffect(() => {
    if (!formData) {
      const timer = setTimeout(() => navigate(-1), 2000);
      return () => clearTimeout(timer);
    }
  }, [formData, navigate]);

  const handleDownloadPDF = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: `Event_Booking_${formData?.name || "User"}`,
    onAfterPrint: () => console.log("✅ PDF downloaded successfully!"),
    onPrintError: (err) => console.error("❌ Print error:", err),
  });

  if (!formData) {
    return (
      <h2 className="text-red-500 text-center mt-10">
        No data found! Redirecting...
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-0 shadow-lg print:shadow-none">
      {/* PDF Content */}
      <div
        ref={pdfRef}
        className="w-full min-h-screen bg-cover bg-center relative print:p-0"
        style={{
          backgroundImage: `url(${pdfImg})`,
          padding: "60px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Transparent Overlay */}
        <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl p-8 space-y-8 mt-60">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Dream Ambition Event
            </h1>
            <span className="text-sm font-semibold text-gray-700">
              Booked on: {new Date().toLocaleDateString()}
            </span>
          </div>

          {/* User Details */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
              User Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 text-sm text-gray-800 gap-y-2">
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Phone:</strong> {formData.number}
              </p>
            </div>
          </section>

          {/* Event Details */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
              Event Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 text-sm text-gray-800 gap-y-2">
              <p>
                <strong>Location:</strong> {formData.location}
              </p>
              <p>
                <strong>Event Dates:</strong> {formData.eventDates}
              </p>
              <p>
                <strong>Main Event Date:</strong> {formData.eventMainDates}
              </p>
              <p>
                <strong>Guests:</strong> {formData.guests}
              </p>
              <p>
                <strong>Rooms:</strong> {formData.rooms}
              </p>
              <p>
                <strong>Hotel Class:</strong> {formData.preferredHotelClass}
              </p>
              <p>
                <strong>Meal Plan:</strong> {formData.mealPlan}
              </p>
            </div>
          </section>

          {/* Venue Details */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
              Venue Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 text-sm text-gray-800 gap-y-2">
              <p>
                <strong>Venue Title:</strong> {formData.venueTitle}
              </p>
              <p>
                <strong>Venue Type:</strong> {formData.venueType}
              </p>
            </div>
          </section>

          {/* Special Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
              Special Requirements
            </h2>
            <p className="text-sm text-gray-800">
              {formData.specialRequirements || "N/A"}
            </p>
          </section>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center my-6 mb-4 print:hidden px-6">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default GeneratePDF;
