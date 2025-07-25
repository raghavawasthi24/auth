import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";

const VerifyOtpCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-500 to-cyan-600">
      <div className="relative bg-[#1e2a38] text-white w-96 rounded-xl shadow-2xl overflow-hidden">
        {/* Top VERIFY OTP tab */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-300 text-black px-10 py-2 rounded-b-md font-bold">
          VERIFY OTP
        </div>

        {/* Card Content */}
        <div className="pt-16 pb-10 px-8 flex flex-col items-center">
          {/* Envelope Icon */}
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-6">
            <FaEnvelope className="text-4xl text-white" />
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

          {/* OTP Input */}
          <div className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4">
            <FaKey className="text-gray-300 mr-3" />
            <input
              type="text"
              placeholder="Enter OTP"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
          </div>

          {/* Verify Button */}
          <button className="w-full bg-cyan-300 text-black py-2 font-semibold rounded-md hover:bg-cyan-400 transition">
            VERIFY OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpCard;
