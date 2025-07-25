import React from "react";
import { FaUser, FaEnvelope, FaLock, FaCalendarAlt } from "react-icons/fa";

const RegisterCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-500 to-cyan-600">
      <div className="relative bg-[#1e2a38] text-white w-96 rounded-xl shadow-2xl overflow-hidden">
        {/* Top REGISTER tab */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-300 text-black px-10 py-2 rounded-b-md font-bold">
          REGISTER
        </div>

        {/* Card Content */}
        <div className="pt-16 pb-10 px-8 flex flex-col items-center">
          {/* Avatar */}
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-6">
            <FaUser className="text-4xl text-white" />
          </div>

          {/* Name Input */}
          <div className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4">
            <FaUser className="text-gray-300 mr-3" />
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4">
            <FaCalendarAlt className="text-gray-300 mr-3" />
            <input
              type="date"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4">
            <FaEnvelope className="text-gray-300 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4">
            <FaLock className="text-gray-300 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
          </div>

          {/* Register Button */}
          <button className="w-full bg-cyan-300 text-black py-2 font-semibold rounded-md hover:bg-cyan-400 transition">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
