import React from "react";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiMessageSquare,
  FiTrendingUp,
} from "react-icons/fi";
import SideBar from "../components/SideBar";

// 📊 Stats Configuration
const stats = [
  {
    title: "12 Applications Sent",
    subTitle: "+2 this week",
    icon: <FiFileText className="text-yellow-500 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-yellow-400/10 border border-yellow-500/20 rounded-lg p-4",
    titleCss: "text-lg font-semibold text-yellow-500",
    subTitleCss: "text-sm text-yellow-500",
  },
  {
    title: "8 Job Matches",
    subTitle: "3 new matches",
    icon: <FiBriefcase className="text-blue-600 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4",
    titleCss: "text-lg font-semibold text-blue-600",
    subTitleCss: "text-sm text-blue-500",
  },
  {
    title: "15 Skills Added",
    subTitle: "Profile 85% complete",
    icon: <FiUser className="text-gray-600 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-neutral-500/10 border border-neutral-500/20 rounded-lg p-4",
    titleCss: "text-lg font-semibold",
    subTitleCss: "text-sm text-gray-500",
  },
  {
    title: "3 Interview Calls",
    subTitle: "1 scheduled",
    icon: <FiTrendingUp className="text-green-400 h-8 w-8" />,
    boxCss:
      "flex items-center gap-5 bg-green-300/10 border border-green-500/20 rounded-lg p-4",
    titleCss: "text-lg font-semibold text-green-500",
    subTitleCss: "text-sm text-green-500",
  },
];

// 📝 Recent Applications Data
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

// ⚡ Quick Actions Data
const quickActions = [
  {
    label: "Browse Jobs",
    icon: <FiBriefcase />,
    btnCss:
      "flex items-center gap-2 w-full bg-blue-600/10 text-blue-600 border border-blue-500/10 px-3 py-2 rounded-md mb-2 hover:bg-blue-700/10 hover:cursor-pointer",
  },
  {
    label: "Update Profile",
    icon: <FiUser />,
    btnCss:
      "flex items-center gap-2 w-full bg-gray-50 border border-black/10 text-gray-800 px-3 py-2 rounded-md mb-2 hover:bg-gray-100 hover:cursor-pointer",
  },
  {
    label: "Resume Assistant",
    icon: <FiMessageSquare />,
    btnCss:
      "flex items-center gap-2 w-full bg-gray-50 border border-black/10 text-gray-800 px-3 py-2 rounded-md hover:bg-gray-100 hover:cursor-pointer",
  },
];

const StudentDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">
            Welcome back, John Doe!
          </h1>
          <p className="text-gray-600">Here’s your job search overview</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={stat.boxCss}>
              {stat.icon}
              <div>
                <h2 className={stat.titleCss}>{stat.title}</h2>
                <small className={stat.subTitleCss}>{stat.subTitle}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid: Applications & Quick Actions */}
        <div className="grid grid-cols-3 gap-6">
          {/* 📄 Recent Applications */}
          <section className="col-span-2 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Recent Applications</h3>

            <div className="flex flex-col gap-2">
              {recentApplications.map((app, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border border-gray-500/10 py-3 px-4 rounded-md shadow-xs"
                >
                  <div>
                    <strong>{app.title}</strong>
                    <p className="text-sm text-gray-600">
                      {app.company} • {app.time}
                    </p>
                  </div>
                  <span
                    className={`${app.statusColor} px-2 py-0.5 rounded-sm text-xs`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-4 w-1/4 border border-black/10 text-blue-700 py-2 rounded-md text-sm hover:bg-blue-50 hover:cursor-pointer">
              View All Applications
            </button>
          </section>

          {/* ⚡ Quick Actions */}
          <section className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            {quickActions.map((action, index) => (
              <button key={index} className={action.btnCss}>
                {action.icon}
                {action.label}
              </button>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
