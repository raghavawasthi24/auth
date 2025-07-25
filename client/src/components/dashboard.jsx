import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("info");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUsers(Array.isArray(parsedData) ? parsedData : [parsedData]);
      } catch (err) {
        console.error("Error parsing localStorage data:", err);
      }
    }
  }, []);

  return (
    <div className="flex justify-center p-6 bg-gradient-to-r from-teal-100 to-cyan-100 min-h-screen">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          User Dashboard
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-cyan-500 text-white text-left">
                <th className="p-4 text-sm uppercase tracking-wide">ID</th>
                <th className="p-4 text-sm uppercase tracking-wide">Name</th>
                <th className="p-4 text-sm uppercase tracking-wide">Email</th>
                <th className="p-4 text-sm uppercase tracking-wide">Username</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={index}
                    className={`transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-cyan-100`}
                  >
                    <td className="p-4 border-b text-gray-700">
                      {user.id || index + 1}
                    </td>
                    <td className="p-4 border-b text-gray-700">{user.name}</td>
                    <td className="p-4 border-b text-gray-700">{user.email}</td>
                    <td className="p-4 border-b text-gray-700">{user.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-500 italic"
                  >
                    No user data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
