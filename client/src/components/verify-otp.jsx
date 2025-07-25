import React, { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { VerifyOtpAPI } from "../api/api";

const VerifyOtpCard = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await VerifyOtpAPI(formData);

    if (res.success) {
      alert("OTP verified successfully!, Please login");
      navigate("/");
    } else {
      alert(res.error);
    }
    setIsLoading(false);
  };

  const fields = [
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      icon: <FaEnvelope className="text-gray-300 mr-3" />,
    },
    {
      name: "otp",
      placeholder: "Enter OTP",
      type: "text",
      icon: <FaKey className="text-gray-300 mr-3" />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-500 to-cyan-600">
      <form
        onSubmit={handleSubmit}
        className="relative bg-[#1e2a38] text-white w-96 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-300 text-black px-10 py-2 rounded-b-md font-bold">
          VERIFY OTP
        </div>

        <div className="pt-16 pb-10 px-8 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-6">
            <FaEnvelope className="text-4xl text-white" />
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

          <button
            type="submit"
            className="w-full bg-cyan-300 text-black py-2 font-semibold rounded-md hover:bg-cyan-400 transition"
            disabled={isLoading}
          >
            {isLoading ? "Verifying.." : "VERIFY OTP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtpCard;
