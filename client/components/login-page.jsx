import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-500 to-cyan-600">
      <div className="relative bg-[#1e2a38] text-white w-96 rounded-xl shadow-2xl overflow-hidden">
        {/* Top SIGN IN tab */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-300 text-black px-10 py-2 rounded-b-md font-bold">
          SIGN IN
        </div>

        {/* Card Content */}
        <div className="pt-16 pb-10 px-8 flex flex-col items-center">
          {/* Avatar Icon */}
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-6">
            <FaUser className="text-4xl text-white" />
          </div>

          {/* Username Input */}
          <div className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4">
            <FaUser className="text-gray-300 mr-3" />
            <input
              type="text"
              placeholder="username"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4">
            <FaLock className="text-gray-300 mr-3" />
            <input
              type="password"
              placeholder="password"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
          </div>

          {/* Remember me and forgot password */}
          <div className="flex justify-between items-center text-sm text-gray-400 w-full mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-cyan-400" />
              Remember me
            </label>
            <a href="#" className="hover:underline text-cyan-300">
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-cyan-300 text-black py-2 font-semibold rounded-md hover:bg-cyan-400 transition">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
