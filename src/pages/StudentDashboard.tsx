import React, { useEffect, useState } from "react";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiTrendingUp,
} from "react-icons/fi";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import axios from "axios";
import type { Job } from "../types/job.types";


const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = async ()=> {
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/job`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

      setJobs(response.data.data);
    }catch(err) {
      toast.error("Error in fetching the jobs");
    }
  }

  useEffect(()=> {
    fetchJobs();
  }, [])

  const stats = [
    {
      title: "Applications Sent",
      val: user.applications.length,
      icon: <FiFileText className="text-yellow-500 h-8 w-8" />,
      boxCss:
        "flex items-center gap-5 bg-white border border-yellow-300 rounded-lg p-4 shadow-sm",
      titleCss: "text-lg font-semibold text-yellow-600",
      valCss: "text-yellow-500",
    },
    {
      title: "Available Job",
      val: jobs.length,
      icon: <FiBriefcase className="text-blue-600 h-8 w-8" />,
      boxCss:
        "flex items-center gap-5 bg-white border border-blue-300 rounded-lg p-4 shadow-sm",
      titleCss: "text-lg font-semibold text-blue-600",
      valCss: "text-blue-500",
    },
    {
      title: "Skills Added",
      val: 15,
      icon: <FiUser className="text-gray-600 h-8 w-8" />,
      boxCss:
        "flex items-center gap-5 bg-white border border-gray-300 rounded-lg p-4 shadow-sm",
      titleCss: "text-lg font-semibold",
      valCss: "text-gray-600",
    },
    {
      title: "Interview Calls",
      val: 3,
      icon: <FiTrendingUp className="text-green-500 h-8 w-8" />,
      boxCss:
        "flex items-center gap-5 bg-white border border-green-300 rounded-lg p-4 shadow-sm",
      titleCss: "text-lg font-semibold text-green-600",
      valCss: "text-green-500",
    },
  ];

  return (
    <div className="flex bg-gray-50 font-sans min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-1">Welcome back, {user?.name} 👋</h1>
          <p className="text-gray-600">Here's your job search overview</p> 
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={stat.boxCss}>
              {stat.icon}
              <div className="flex justify-between items-center w-full">
                <h2 className={stat.titleCss}>{stat.title}</h2>
                <p className={`font-semibold text-xl ${stat.valCss}`}>{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 📄 Recent Applications */}
          <section className="col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Recent Applications</h3>

            <div className="flex flex-col gap-3">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border border-gray-100 py-3 px-4 rounded-md bg-gray-50"
                >
                  <div>
                    <strong>{job.title}</strong>
                    <p className="text-sm text-gray-600">
                      {job.company.name} • {job.createdAt}
                    </p>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded text-xs font-medium"
                  >
                    {job.status}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-4 border border-gray-200 text-blue-600 py-2 px-4 rounded-md text-sm hover:bg-blue-50 hover:cursor-pointer"
            onClick={()=> navigate('/student/jobs')}>
              View All Applications
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
