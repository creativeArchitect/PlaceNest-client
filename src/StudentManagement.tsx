import React, { useEffect, useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiXCircle,
  FiSearch,
} from "react-icons/fi";
import SideBar from "./components/SideBar";
import { toast } from "sonner";
import axios from "axios";
import type { StudentVerification } from "./types/student.types";

const students = [
  {
    id: "CS21001",
    name: "John Doe",
    email: "john.doe@college.edu",
    phone: "+91 9876543210",
    department: "Computer Science",
    graduation: "Class of 2024",
    status: "Verified",
    avatar: (
      <svg
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-full bg-blue-100"
      >
        <circle cx="16" cy="16" r="16" fill="#bfdbfe" />
        <path
          d="M16 16c3 0 5.5 2.5 5.5 5.5v1.5H10.5v-1.5c0-3 2.5-5.5 5.5-5.5z"
          fill="#3b82f6"
        />
        <circle cx="16" cy="12" r="4" fill="#3b82f6" />
      </svg>
    ),
  },
  {
    id: "CS21002",
    name: "Jane Smith",
    email: "jane.smith@college.edu",
    phone: "+91 9876543211",
    department: "Computer Science",
    graduation: "Class of 2024",
    status: "Pending",
    avatar: (
      <svg
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-full bg-pink-100"
      >
        <circle cx="16" cy="16" r="16" fill="#fbcfe8" />
        <path d="M12 20c0-2 4-2 4-2s4 0 4 2v1H12v-1z" fill="#db2777" />
        <circle cx="16" cy="12" r="4" fill="#db2777" />
      </svg>
    ),
  },
  {
    id: "EC21001",
    name: "Mike Johnson",
    email: "mike.johnson@college.edu",
    phone: "+91 9876543212",
    department: "Electronics",
    graduation: "Class of 2025",
    status: "Verified",
    avatar: (
      <svg
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-full bg-yellow-100"
      >
        <circle cx="16" cy="16" r="16" fill="#fde68a" />
        <path d="M16 20c3 0 5-2 5-2v-1H11v1s2 2 5 2z" fill="#ca8a04" />
        <circle cx="16" cy="12" r="4" fill="#ca8a04" />
      </svg>
    ),
  },
];

export default function StudentManagement() {
  const [studentVerifyApplication, setStudentVerifyApplication] = useState<StudentVerification[]>([]);
  const token = localStorage.getItem("token");

  const fetchStudentVerficationApplication = async ()=> {
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/profile/verification`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        console.log("response.data.data: ", response.data.data);

        setStudentVerifyApplication(response.data.data);
    }catch(err) {
      toast.error("Error in fetching the student verfication application");
    }
  }

  useEffect(()=> {
    fetchStudentVerficationApplication();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans">
        <SideBar />

      <main className="flex-1 p-8 pl-72">
        {/* Content */}
        <section className="space-y-6">
          {/* Title & stats */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Student Management
            </h1>
            <p className="text-gray-500 mt-1">
              Verify and manage student profiles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="border border-black/10 rounded-lg p-4 text-center">
              <div className="flex justify-center items-center text-blue-500 mb-1">
                <FiUser className="text-2xl" />
              </div>
              <p className="text-xs text-gray-500">Total Students</p>
              <p className="font-bold text-lg">3</p>
            </div>
            <div className="border border-black/10 rounded-lg p-4 text-center">
              <div className="flex justify-center items-center text-gray-800 mb-1">
                <FiCheckCircle className="text-2xl" />
              </div>
              <p className="text-xs text-gray-500">Verified</p>
              <p className="font-bold text-lg">2</p>
            </div>
            <div className="border border-black/10 rounded-lg p-4 text-center">
              <div className="flex justify-center items-center text-yellow-500 mb-1">
                <FiXCircle className="text-2xl" />
              </div>
              <p className="text-xs text-gray-500">Pending</p>
              <p className="font-bold text-lg">1</p>
            </div>
            <div className="border border-black/10 rounded-lg p-4 text-center">
              <div className="flex justify-center items-center text-green-500 mb-1">
                <FiBookOpen className="text-2xl" />
              </div>
              <p className="text-xs text-gray-500">Departments</p>
              <p className="font-bold text-lg">2</p>
            </div>
          </div>

          {/* Filters */}
          <div className="border border-black/10 rounded-lg p-4">
            <h2 className="font-semibold text-gray-700 mb-2">Filters</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-black/20 rounded-md px-3 py-2 flex-grow max-w-md bg-neutral-50">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="outline-none w-full text-sm"
                />
              </div>
              <select className="border border-black/20 rounded-md px-3 py-2 text-sm text-gray-700">
                <option>All Status</option>
                <option>Verified</option>
                <option>Pending</option>
              </select>
              <select className="border border-black/20 rounded-md px-3 py-2 text-sm text-gray-700">
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Electronics</option>
              </select>
            </div>
          </div>

          {/* Student Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentVerifyApplication.map((s) => (
              <div
                key={s.id}
                className="border border-black/10 rounded-md p-4 space-y-3 shadow-xs"
              >
                <div className="flex items-center gap-4">
                  {/* <div>{s.avatar}</div> */}
                  <div>
                    <p className="font-semibold text-gray-900">{s.name}</p>
                    <p className="text-sm text-gray-500">{s.id}</p>
                  </div>
                  <span
                    className={`ml-auto px-3 py-1 text-xs font-semibold rounded-sm shadow-xs ${
                      s.verificationStatus === "APPROVED"
                        ? "bg-blue-100 text-blue-600"
                        : s.verificationStatus === "PENDING" ? "bg-gray-200 text-gray-600" : "bg-red-200 text-red-600"
                    }`}
                  >
                    {s.verificationStatus}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <FiMail /> {s.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiPhone /> {s.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiBookOpen /> {s.branch}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCalendar /> {s.year}
                  </p>
                </div>
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 border-black/10 border border-black/10-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50 text-sm hover:cursor-pointer">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M12 4h9" />
                      <path d="M4 12h16" />
                    </svg>
                    View Profile
                  </button>

                  {s.verificationStatus === "APPROVED" ? (
                    <button className="border border-red-500/10 rounded-sm py-2 px-4 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-sm text-white hover:cursor-pointer">
                      <FiXCircle />
                      Revoke
                    </button>
                  ) : (
                    <button className="border border-red-500/40 bg-red-300/10 hover:bg-red-400/10 hover:cursor-pointer text-white rounded-sm py-2 px-4 flex items-center justify-center gap-2 text-sm">
                      <FiXCircle className="text-red-500" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
