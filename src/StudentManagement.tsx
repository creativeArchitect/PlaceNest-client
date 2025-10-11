import { useEffect, useState } from "react";
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

const stats = [
  {
    label: "Total Students",
    value: 3,
    icon: <FiUser className="text-2xl text-blue-500" />,
    boxCss: "border border-blue-500/40 rounded-md p-4 text-center",
    textCss: "text-blue-500",
  },
  {
    label: "Verified",
    value: 2,
    icon: <FiCheckCircle className="text-2xl text-gray-800" />,
    boxCss: "border border-black/20 rounded-md p-4 text-center",
    textCss: "text-gray-800",
  },
  {
    label: "Pending",
    value: 1,
    icon: <FiXCircle className="text-2xl text-yellow-500" />,
    boxCss: "border border-yellow-500/40 rounded-md p-4 text-center",
    textCss: "text-yellow-500",
  },
  {
    label: "Departments",
    value: 2,
    icon: <FiBookOpen className="text-2xl text-green-500" />,
    boxCss: "border border-green-500/40 rounded-md p-4 text-center",
    textCss: "text-green-500",
  },
];

const filters = [
  {
    label: "All Status",
    options: ["All Status", "Verified", "Pending"],
  },
  {
    label: "All Departments",
    options: ["All Departments", "Computer Science", "Electronics"],
  },
];

export default function StudentManagement() {
  const [studentVerifyApplication, setStudentVerifyApplication] = useState<
    StudentVerification[]
  >([]);
  const token = localStorage.getItem("token");

  const fetchStudentVerficationApplication = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/profile/verification`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response.data.data: ", response.data.data);

      setStudentVerifyApplication(response.data.data);
    } catch (err) {
      toast.error("Error in fetching the student verfication application");
    }
  };

  useEffect(() => {
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
            {stats.map((stat, index) => (
              <div key={index} className={stat.boxCss}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center mb-1">
                      {stat.icon}
                    </div>
                    <p className={`${stat.textCss}`}>{stat.label}</p>
                  </div>
                  <p className={`${stat.textCss} text-xl font-semibold`}>
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="rounded-md p-4 flex items-center justify-between">
            <div className="flex justify-between w-full">
              <div className="flex items-center border border-black/20 rounded-md px-3 py-2 flex-grow max-w-md">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="outline-none w-full text-sm"
                />
              </div>
              <div className="flex gap-3">
                {filters.map((filter, index) => (
                  <select
                    key={index}
                    className="border border-black/20 rounded-md px-3 py-2 text-sm text-gray-700"
                  >
                    {filter.options.map((option, idx) => (
                      <option key={idx}>{option}</option>
                    ))}
                  </select>
                ))}
              </div>
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
                        : s.verificationStatus === "PENDING"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-red-200 text-red-600"
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
