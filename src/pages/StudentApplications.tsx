// src/pages/Applications.tsx
import React from "react";
import {
  FiBriefcase,
  FiFileText,
  FiEye,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import SideBar from "../components/SideBar";

type Application = {
  id: number;
  title: string;
  company: string;
  location: string;
  appliedDate: string;
  description: string;
  tags: string[];
  status: "PENDING" | "SHORTLISTED" | "REJECTED" | "SELECTED";
};

const applications: Application[] = [
  {
    id: 1,
    title: "Software Engineer - Frontend",
    company: "TechCorp Inc.",
    location: "Bangalore, India",
    appliedDate: "1/16/2024",
    description:
      "Join our team to build next-generation web applications using React, TypeScript, and modern frontend technologies.",
    tags: ["React", "TypeScript", "HTML/CSS", "+1"],
    status: "SHORTLISTED",
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "DataTech Solutions",
    location: "Mumbai, India",
    appliedDate: "1/12/2024",
    description:
      "Exciting internship opportunity to work with big data and analytics. Learn from industry experts and work on real projects.",
    tags: ["Python", "SQL", "Excel", "+1"],
    status: "PENDING",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "Remote",
    appliedDate: "1/19/2024",
    description:
      "Create beautiful and intuitive user experiences. Work on mobile and web applications for various industries.",
    tags: ["Figma", "Adobe Creative Suite", "User Research", "+1"],
    status: "REJECTED",
  },
];

const statusColors: Record<Application["status"], string> = {
  SHORTLISTED: "text-green-600 bg-green-50 border-green-200",
  PENDING: "text-yellow-600 bg-yellow-50 border-yellow-200",
  REJECTED: "text-red-600 bg-red-50 border-red-200",
  SELECTED: "text-blue-600 bg-blue-50 border-blue-200",
};

const StudentApplications: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <main className="flex-1 pl-72 p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-1">My Applications</h1>
        <p className="text-gray-500 mb-6">
          Track the status of your job applications
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard title="Total Applications" count={applications.length} />
          <StatCard
            title="Pending"
            count={applications.filter((a) => a.status === "PENDING").length}
          />
          <StatCard
            title="Shortlisted"
            count={applications.filter((a) => a.status === "SHORTLISTED").length}
          />
          <StatCard
            title="Rejected"
            count={applications.filter((a) => a.status === "REJECTED").length}
          />
        </div>

        {/* Filter Tabs */}
        <div className="bg-white border border-black/10 rounded-md p-4 mb-6 shadow-xs">
          <h3 className="font-semibold mb-3">Application Status</h3>
          <div className="flex gap-4 pb-2 text-sm">
            <Tab label="All" count={applications.length} active />
            <Tab
              label="Pending"
              count={applications.filter((a) => a.status === "PENDING").length}
            />
            <Tab
              label="Shortlisted"
              count={applications.filter((a) => a.status === "SHORTLISTED").length}
            />
            <Tab
              label="Rejected"
              count={applications.filter((a) => a.status === "REJECTED").length}
            />
            <Tab
              label="Selected"
              count={applications.filter((a) => a.status === "SELECTED").length}
            />
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white p-6 rounded-md border border-gray-200 shadow-xs"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {app.title}
                  </h2>
                  <p className="text-gray-500">{app.company}</p>
                  <div className="flex gap-6 mt-2 text-sm text-gray-500 flex-wrap">
                    <span className="flex items-center gap-1">
                      <FiMapPin /> {app.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> Applied on {app.appliedDate}
                    </span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-sm shadow-xs border ${statusColors[app.status]}`}
                >
                  {app.status}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm">{app.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-end mt-4">
                <button className="px-4 py-2 border border-black/10 rounded-md text-gray-700 hover:bg-gray-100 flex items-center gap-2 text-sm transition">
                  <FiEye /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentApplications;

const StatCard = ({ title, count }: { title: string; count: number }) => (
  <div className="bg-white p-4 rounded-md border border-black/10 shadow-xs">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

const Tab = ({
  label,
  count,
  active,
}: {
  label: string;
  count: number;
  active?: boolean;
}) => (
  <button
    className={`pb-2 border-b-2 text-sm font-medium ${
      active
        ? "text-blue-600 border-blue-600"
        : "text-gray-500 border-transparent hover:text-blue-600"
    }`}
  >
    {label} ({count})
  </button>
);
