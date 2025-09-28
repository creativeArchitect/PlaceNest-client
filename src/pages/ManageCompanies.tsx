import React from "react";
import {
  FiHome,
  FiCheckCircle,
  FiClock,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";
import SideBar from "../components/SideBar";

const companies = [
  {
    name: "TechCorp Inc.",
    initials: "TE",
    industry: "Technology",
    email: "hr@techcorp.com",
    phone: "+91 80 1234 5678",
    location: "Bangalore, India",
    size: "500+ employees",
    jobs: "1 active jobs",
    founded: "Founded 2010",
    status: "Verified",
    statusColor: "bg-green-100 text-green-600",
  },
  {
    name: "DataTech Solutions",
    initials: "DA",
    industry: "Analytics",
    email: "careers@datatech.com",
    phone: "+91 22 2345 6789",
    location: "Mumbai, India",
    size: "51-500 employees",
    jobs: "1 active jobs",
    founded: "Founded 2015",
    status: "Verified",
    statusColor: "bg-green-100 text-green-600",
  },
  {
    name: "StartupXYZ",
    initials: "ST",
    industry: "Fintech",
    email: "jobs@startupxyz.com",
    phone: "+91 40 3456 7890",
    location: "Hyderabad, India",
    size: "1-50 employees",
    jobs: "1 active jobs",
    founded: "Founded 2020",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-600",
  },
];

const stats = [
  {
    heading: "Total Jobs",
    data: 3,
    icon: <FiBriefcase className="h-6 w-6 text-gray-600" />,
    boxCss:
      "border border-gray-200 rounded-lg bg-white shadow-xs p-4 flex items-center gap-4",
    contentCss: "text-gray-700",
  },
  {
    heading: "Active Jobs",
    data: 1,
    icon: <FiCheckCircle className="h-6 w-6 text-blue-500" />,
    boxCss:
      "border border-blue-200 rounded-lg bg-blue-50 shadow-xs p-4 flex items-center gap-4",
    contentCss: "text-blue-600",
  },
  {
    heading: "Total Applications",
    data: 1,
    icon: <FiClock className="h-6 w-6 text-red-500" />,
    boxCss:
      "border border-red-200 rounded-lg bg-red-50 shadow-xs p-4 flex items-center gap-4",
    contentCss: "text-red-600",
  },
  {
    heading: "Pending Jobs",
    data: 0,
    icon: <FiHome className="h-6 w-6 text-green-500" />,
    boxCss:
      "border border-green-200 rounded-lg bg-green-50 shadow-xs p-4 flex items-center gap-4",
    contentCss: "text-green-600",
  },
];

const ManageCompanies: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-8 pl-72">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Company Management
        </h1>
        <p className="text-gray-500 mb-8">Verify and manage company profiles</p>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((s, idx) => (
            <div key={idx} className={s.boxCss}>
              {s.icon}
              <div className="flex items-center gap-2">
                <span className={`text-md font-semibold ${s.contentCss}`}>{s.heading}</span>
                <span className={`${s.contentCss} text-lg font-semibold`}>
                  {s.data}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Filters */}
        <div className="bg-white p-4 rounded-md border border-black/10 shadow-xs mb-8 flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search companies..."
            className="border border-gray-300 rounded-md px-3 py-2 w-1/3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div className="flex gap-3">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500">
              <option>All Industries</option>
            </select>
          </div>
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-md border border-black/10 shadow-xs"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                    {company.initials}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {company.name}
                    </h2>
                    <p className="text-sm text-gray-500">{company.industry}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${company.statusColor}`}
                >
                  {company.status}
                </span>
              </div>

              {/* Info */}
              <div className="text-sm text-gray-600 space-y-2 mb-3">
                <p className="flex items-center gap-2">
                  <FiMail size={14} /> {company.email}
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone size={14} /> {company.phone}
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin size={14} /> {company.location}
                </p>
                <p className="flex items-center gap-2">
                  <FiUsers size={14} /> {company.size}
                </p>
                <p className="flex items-center gap-2">
                  <FiBriefcase size={14} /> {company.jobs}
                </p>
                <p className="flex items-center gap-2">
                  <FiCalendar size={14} /> {company.founded}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-4">
                Leading technology company specializing in innovative software
                solutions and digital transformation services.
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
                  View Profile
                </button>
                <button className="flex-1 px-4 py-2 text-sm border border-red-300 bg-red-50 rounded-md text-red-600 hover:bg-red-100">
                  Revoke
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageCompanies;
