import React from "react";
import {
  FiSearch,
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";
import SideBar from "../components/SideBar";

type Job = {
  id: number;
  title: string;
  company: string;
  description: string;
  tags: string[];
  location: string;
  salary: string;
  deadline: string;
  type: "FULL TIME" | "INTERNSHIP";
  daysAgo: number;
  applied?: boolean;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer - Frontend",
    company: "TechCorp Inc.",
    description:
      "Join our team to build next-generation web applications using React, TypeScript, and modern frontend technologies.",
    tags: ["React", "TypeScript", "HTML/CSS", "Git"],
    location: "Bangalore, India",
    salary: "₹6.0L - ₹12.0L",
    deadline: "2/15/2024",
    type: "FULL TIME",
    daysAgo: 621,
    applied: true,
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "DataTech Solutions",
    description:
      "Exciting internship opportunity to work with big data and analytics. Learn from industry experts and work on real projects.",
    tags: ["Python", "SQL", "Excel", "Statistics"],
    location: "Mumbai, India",
    salary: "₹25K - ₹40K",
    deadline: "2/20/2024",
    type: "INTERNSHIP",
    daysAgo: 616,
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovateTech",
    description:
      "Lead product development for our flagship SaaS platform. Work cross-functionally with engineering and design teams.",
    tags: ["Product Management", "Analytics", "Communication", "Leadership"],
    location: "Hyderabad, India",
    salary: "₹12.0L - ₹20.0L",
    deadline: "2/10/2024",
    type: "FULL TIME",
    daysAgo: 626,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "DesignStudio",
    description:
      "Create beautiful and intuitive user experiences. Work on mobile and web applications for various industries.",
    tags: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    location: "Remote",
    salary: "₹5.0L - ₹9.0L",
    deadline: "2/18/2024",
    type: "FULL TIME",
    daysAgo: 618,
  },
];

const AvailableJobs: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <main className="flex-1 pl-72 p-8">
        <h1 className="text-2xl font-bold mb-1">Job Opportunities</h1>
        <p className="text-gray-500 mb-6">
          Discover and apply for jobs that match your profile
        </p>

        {/* Filter Bar */}
        <div className="bg-white border border-black/10 rounded-md p-4 mb-6 shadow-xs">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <FiSearch /> Filter Jobs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search jobs or companies..."
              className="border border-black/20 rounded-md px-3 py-2 w-full"
            />
            <select className="border border-black/20 rounded-md px-3 py-2 w-full">
              <option>All Departments</option>
            </select>
            <select className="border border-black/20 rounded-md px-3 py-2 w-full">
              <option>All Types</option>
            </select>
            <input
              type="text"
              placeholder="Enter location..."
              className="border border-black/20 rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-md border border-black/10 shadow-xs transition"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    {job.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{job.company}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span
                    className={`px-3 py-1 rounded-sm shadow-xs font-medium ${
                      job.type === "FULL TIME"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <FiClock /> {job.daysAgo} days ago
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm">{job.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-5 text-sm text-gray-500 flex-wrap gap-2">
                <div className="flex gap-6 flex-wrap">
                  <span className="flex items-center gap-1">
                    <FiMapPin /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiFileText /> Deadline: {job.deadline}
                  </span>
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-black/10 rounded-md text-gray-700 hover:bg-gray-100 transition text-sm">
                    View Details
                  </button>
                  {job.applied ? (
                    <span className="px-4 py-2 rounded-md text-green-600 border border-green-600/10 bg-green-50 text-sm">
                      Applied
                    </span>
                  ) : (
                    <button className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition text-sm">
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AvailableJobs;
