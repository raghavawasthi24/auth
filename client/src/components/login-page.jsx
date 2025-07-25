import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../api/api";

const LoginCard = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await LoginAPI(formData);

    if (res.success) {
      navigate("/dashboard");
    } else {
      alert(res.error);
    }
  };

  const fields = [
    {
      name: "username",
      placeholder: "Username",
      type: "text",
      icon: <FaUser className="text-gray-300 mr-3" />,
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      icon: <FaLock className="text-gray-300 mr-3" />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-500 to-cyan-600">
      <form
        onSubmit={handleSubmit}
        className="relative bg-[#1e2a38] text-white w-96 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-300 text-black px-10 py-2 rounded-b-md font-bold">
          SIGN IN
        </div>

        <div className="pt-16 pb-10 px-8 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-6">
            <FaUser className="text-4xl text-white" />
          </div>

          {fields.map((field) => (
            <div
              key={field.name}
              className="flex items-center w-full bg-gray-700 rounded-md px-4 py-2 mb-4"
            >
              {field.icon}
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
              />
            </div>
          ))}

          <div className="flex justify-between items-center text-sm text-gray-400 w-full mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-cyan-400" />
              Remember me
            </label>
            <a href="#" className="hover:underline text-cyan-300">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-300 text-black py-2 font-semibold rounded-md hover:bg-cyan-400 transition"
          >
            LOGIN
          </button>

          <p className="text-sm text-gray-400 pt-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-cyan-300">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
