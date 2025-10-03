import React, { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaLock,
  FaInfoCircle,
} from "react-icons/fa";
import type { LoginFormType } from "../types/auth.types";
import axios from "axios";
import { toast } from "sonner";

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormType>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((pre) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async ()=> {
    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(response.data.success){
        toast.success(response.data.message);
      }
    }catch(err){
      toast.error("Error in login");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFEFE] px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
            <FaBuilding className="text-white text-2xl" />
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-800">PlaceNest</h1>
          <p className="text-gray-500 text-sm">AI-Enabled College Job Portal</p>
        </div>

        {/* Card */}
        <div className="bg-white w-full rounded-md shadow-sm p-6  border border-black/10">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Login to access your professional dashboard
          </p>

          {/* Info */}
          <div className="flex items-center gap-2 text-sm bg-gray-50 border border-black/10 rounded px-3 py-2 mb-4 text-gray-600">
            <FaInfoCircle className="text-blue-500" />
            Access your job applications and career dashboard
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm mb-1 text-gray-600">
              Email Address
            </label>
            <div className="flex items-center border border-black/10 rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                name="email"
                value={formData.email}
                type="email"
                placeholder="Enter your email address"
                className="flex-1 outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-600">Password</label>
            <div className="flex items-center border border-black/10 rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                name="password"
                value={formData.password}
                type="password"
                placeholder="Enter your password"
                className="flex-1 outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Login */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 font-medium mb-4 transition">
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline" onClick={handleSubmit}>
              Create one now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
