import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaCalendarAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAPI } from "../api/api";

const RegisterCard = () => {
  // Fields configuration
  const fields = [
    { name: "name", placeholder: "Name", type: "text", icon: <FaUser /> },
    { name: "dob", placeholder: "Date of Birth", type: "date", icon: <FaCalendarAlt /> },
    { name: "email", placeholder: "Email", type: "email", icon: <FaEnvelope /> },
    { name: "password", placeholder: "Password", type: "password", icon: <FaLock /> },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister =  async () => {
    setIsLoading(true);
    const res = await RegisterAPI(formData);
    if(res.success){
      alert("Registered successfully! Please login")
      navigate("/");
    } else {
      alert(res.error)
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-500 to-cyan-600">
      <div className="relative bg-[#1e2a38] text-white w-96 rounded-xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-300 text-black px-10 py-2 rounded-b-md font-bold">
          REGISTER
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
              <span className="text-gray-300 mr-3">{field.icon}</span>
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

          <button
            onClick={handleRegister}
            className="w-full bg-cyan-300 text-black py-2 font-semibold rounded-md hover:bg-cyan-400 transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <p className="text-sm text-gray-400 pt-2">
            Already have an account?{" "}
            <Link to="/" className="text-cyan-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
