import React, { useState } from "react";
import {
  FaUserGraduate,
  FaBuilding,
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaInfoCircle,
} from "react-icons/fa";
import { toast } from "sonner";
import type { RegisterFormType } from "../types/auth.types";
import axios from "axios";

const Register: React.FC = () => {
  const [role, setRole] = useState<"STUDENT" | "COMPANY" | "COORDINATOR">(
    "STUDENT"
  );
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Token is not exists, please login!!!");
  }

  const [formData, setFormData] = useState<RegisterFormType>({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "STUDENT",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((pre) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (err) {
      toast.error("Error in login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFEFE] px-4 py-5">
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
        <div className="bg-white w-full rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Sign in to access your professional dashboard
          </p>

          {/* Role Selector */}
          <div className="flex border border-black/10 rounded-md overflow-hidden mb-4">
            <button
              onClick={() => {
                setRole("STUDENT");
                setFormData((pre) => ({
                  ...pre,
                  role: "STUDENT",
                }));
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm ${
                role === "STUDENT" ? "bg-gray-100 font-medium" : "bg-white"
              }`}
            >
              <FaUserGraduate /> STUDENT
            </button>
            <button
              onClick={() => {
                setRole("COMPANY");
                setFormData((pre) => ({
                  ...pre,
                  role: "COMPANY",
                }));
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm ${
                role === "COMPANY" ? "bg-gray-100 font-medium" : "bg-white"
              }`}
            >
              <FaBuilding /> COMPANY
            </button>
            <button
              onClick={() => {
                setRole("COORDINATOR");
                setFormData((pre) => ({
                  ...pre,
                  role: "COORDINATOR",
                }));
              }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm ${
                role === "COORDINATOR" ? "bg-gray-100 font-medium" : "bg-white"
              }`}
            >
              <FaUserShield /> COORDINATOR
            </button>
          </div>

          {/* Info */}
          <div className="flex items-center gap-2 text-sm bg-gray-50 border border-black/10 rounded px-3 py-2 mb-4 text-gray-600">
            {role === "STUDENT" ? (
              <>
                <FaInfoCircle className="text-blue-500" />
                <span>Access your job applications and career dashboard</span>
              </>
            ) : role === "COMPANY" ? (
              <>
                <FaInfoCircle className="text-blue-500" />
                <span>Manage job postings and recruitment pipeline</span>
              </>
            ) : (
              <>
                <FaInfoCircle className="text-blue-500" />
                <span>Oversee platform operations and user management</span>
              </>
            )}
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="block text-sm mb-1 text-gray-600">
              Full Name
            </label>
            <div className="flex items-center border border-black/10 rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                name="name"
                value={formData.name}
                type="name"
                onChange={handleChange}
                placeholder="Enter your name"
                className="flex-1 outline-none text-sm text-gray-700"
              />
            </div>
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
                onChange={handleChange}
                placeholder="Enter your email address"
                className="flex-1 outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* phone */}
          <div className="mb-3">
            <label className="block text-sm mb-1 text-gray-600">Phone</label>
            <div className="flex items-center border border-black/10 rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                name="phone"
                value={formData.phone}
                type="phone"
                onChange={handleChange}
                placeholder="Enter your phone"
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
                onChange={handleChange}
                placeholder="Enter your password"
                className="flex-1 outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Register */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 font-medium mb-4 transition">
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
