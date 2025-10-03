import React from "react";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiTrendingUp,
} from "react-icons/fi";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "12 Applications Sent",
    subTitle: "+2 this week",
    icon: <FiFileText className="text-yellow-500 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-yellow-50 border border-yellow-100 rounded-lg p-4 shadow-sm",
    titleCss: "text-lg font-semibold text-yellow-600",
    subTitleCss: "text-sm text-yellow-500",
  },
  {
    title: "8 Job Matches",
    subTitle: "3 new matches",
    icon: <FiBriefcase className="text-blue-600 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm",
    titleCss: "text-lg font-semibold text-blue-600",
    subTitleCss: "text-sm text-blue-500",
  },
  {
    title: "15 Skills Added",
    subTitle: "Profile 85% complete",
    icon: <FiUser className="text-gray-600 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-gray-100 border border-gray-200 rounded-lg p-4 shadow-sm",
    titleCss: "text-lg font-semibold",
    subTitleCss: "text-sm text-gray-600",
  },
  {
    title: "3 Interview Calls",
    subTitle: "1 scheduled",
    icon: <FiTrendingUp className="text-green-500 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-green-50 border border-green-100 rounded-lg p-4 shadow-sm",
    titleCss: "text-lg font-semibold text-green-600",
    subTitleCss: "text-sm text-green-500",
  },
];

const recentApplications = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    time: "2 days ago",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    time: "1 week ago",
    status: "Interview",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "Full Stack Developer",
    company: "Global Inc",
    time: "2 weeks ago",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-800",
  },
];

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-50 font-sans min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-1">Welcome back, John Doe!</h1>
          <p className="text-gray-600">Here’s your job search overview</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={stat.boxCss}>
              {stat.icon}
              <div>
                <h2 className={stat.titleCss}>{stat.title}</h2>
                <p className={stat.subTitleCss}>{stat.subTitle}</p>
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
              {recentApplications.map((app, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border border-gray-100 py-3 px-4 rounded-md bg-gray-50"
                >
                  <div>
                    <strong>{app.title}</strong>
                    <p className="text-sm text-gray-600">
                      {app.company} • {app.time}
                    </p>
                  </div>
                  <span
                    className={`${app.statusColor} px-2 py-0.5 rounded text-xs font-medium`}
                  >
                    {app.status}
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
