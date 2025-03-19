import React, { useEffect, useState } from "react";
import Navbar from "../../dashboard/adminDashboard/Navbar";
import NavbarUpper from "../../dashboard/adminDashboard/NavbarUpper";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RightHome = () => {
  const [users, setUsers] = useState([]);
  const [bookEvent, setBookEvent] = useState([]);
  const [venue, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, bookEventResponse, venueResponse] =
          await Promise.all([
            axios.get(`${import.meta.env.VITE_SERVER}/users`, { withCredentials: true }),
            axios.get(`${import.meta.env.VITE_SERVER}/eventbooks`, {
              withCredentials: true,
            }),
            axios.get(`${import.meta.env.VITE_SERVER}/venue`, { withCredentials: true }),
          ]);
        setUsers(usersResponse.data);
        setBookEvent(bookEventResponse.data);
        setVenues(venueResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const allusers = users.length;
  const allBooking = bookEvent.length;
  const allVenue = venue.length;

  const navigate = useNavigate();

  const handleOnClick = (index) => {
    if (index == 0) {
      navigate("/users");
    } else if (index == 1) {
      navigate("/booking");
    } else if (index == 2) {
      navigate("/allvenue");
    }
  };

  const data = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 7000 },
    { name: "May", revenue: 6000 },
    { name: "Jun", revenue: 8000 },
  ];

  // Dummy transactions
  const transactions = [
    {
      id: 1,
      user: "Shubham Rawat",
      amount: "₹25820",
      status: "Completed",
      date: "2025-03-07",
    },
    {
      id: 2,
      user: "Pawan",
      amount: "₹182370",
      status: "Pending",
      date: "2025-03-06",
    },
    {
      id: 3,
      user: "Nikesh Darshan",
      amount: "₹329800",
      status: "Completed",
      date: "2025-03-05",
    },
    {
      id: 4,
      user: "Raushan Yadav",
      amount: "₹4000",
      status: "Failed",
      date: "2025-03-04",
    },
  ];
  return (
    <>
      <NavbarUpper />
      {/* <Navbar /> */}
      <div className="p-6 bg-gray-100 min-h-screen pt-10 mt-5">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { title: "All Users", value: allusers, color: "bg-blue-500" },
            { title: "All Bookings", value: allBooking, color: "bg-green-500" },
            { title: "All Venues", value: allVenue, color: "bg-yellow-500" },
            { title: "Balance", value: "₹24,320", color: "bg-purple-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} p-4 text-white rounded-xl shadow-md`}
              onClick={() => handleOnClick(index)}
            >
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Revenue & Transactions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Revenue Graph */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4CAF50"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Latest Transactions */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Latest Transactions</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="p-2 text-left">User</th>
                    <th className="p-2 text-left">Amount</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((txn) => (
                    <tr key={txn.id} className="border-t">
                      <td className="p-2">{txn.user}</td>
                      <td className="p-2">{txn.amount}</td>
                      <td
                        className={`p-2 font-semibold ${
                          txn.status === "Completed"
                            ? "text-green-500"
                            : txn.status === "Pending"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {txn.status}
                      </td>
                      <td className="p-2">{txn.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightHome;
