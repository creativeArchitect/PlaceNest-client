import React, { useEffect, useState } from "react";
import {
  FiHome,
  FiCheckCircle,
  FiClock,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";
import SideBar from "../components/SideBar";
import type { Company } from "../types/companies.types";
import axios from "axios";
import { toast } from "sonner";
import { IoMdClose } from "react-icons/io";

// const companies = [
//   {
//     name: "TechCorp Inc.",
//     initials: "TE",
//     industry: "Technology",
//     email: "hr@techcorp.com",
//     phone: "+91 80 1234 5678",
//     location: "Bangalore, India",
//     size: "500+ employees",
//     jobs: "1 active jobs",
//     founded: "Founded 2010",
//     status: "Verified",
//     statusColor: "bg-green-100 text-green-600",
//   },
//   {
//     name: "DataTech Solutions",
//     initials: "DA",
//     industry: "Analytics",
//     email: "careers@datatech.com",
//     phone: "+91 22 2345 6789",
//     location: "Mumbai, India",
//     size: "51-500 employees",
//     jobs: "1 active jobs",
//     founded: "Founded 2015",
//     status: "Verified",
//     statusColor: "bg-green-100 text-green-600",
//   },
//   {
//     name: "StartupXYZ",
//     initials: "ST",
//     industry: "Fintech",
//     email: "jobs@startupxyz.com",
//     phone: "+91 40 3456 7890",
//     location: "Hyderabad, India",
//     size: "1-50 employees",
//     jobs: "1 active jobs",
//     founded: "Founded 2020",
//     status: "Pending",
//     statusColor: "bg-yellow-100 text-yellow-600",
//   },
// ];

const industries = [
  "All Industries",
  "Software Development",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
];

const status = ["All Status", "Pending", "Approved", "Rejected"];

const ManageCompanies: React.FC = () => {
  const [companiesProfiles, setCompaniesProfiles] = useState<Company[]>([]);
  const [totalCompaniesProfiles, setTotalCompaniesProfiles] = useState<
    Company[]
  >([]);
  const [totalVerifiedCompanies, setTotalVerifiedComanies] =
    useState<number>(0);
  const [totalPendingJobs, setTotalPendingJobs] = useState<number>(0);
  const [totalActiveJobs, setTotalActiveJobs] = useState<number>(0);
  const [selectedStatus, setSelectedStatus] = useState<string>("All Status");
  const [selectedIndustry, setSelectedIndustry] =
    useState<string>("All Industries");
  const token = localStorage.getItem("token");

  const stats = [
    {
      heading: "Total Companies",
      data: companiesProfiles.length,
      icon: <FiBriefcase className="h-6 w-6 text-gray-600" />,
      boxCss:
        "border border-gray-200 rounded-md bg-white shadow-xs p-4 flex items-center gap-3",
      contentCss: "text-gray-700",
    },
    {
      heading: "Verified Companies",
      data: totalVerifiedCompanies,
      icon: <FiCheckCircle className="h-6 w-6 text-blue-500" />,
      boxCss:
        "border border-blue-200 rounded-md bg-blue-50 shadow-xs p-4 flex items-center gap-3",
      contentCss: "text-blue-600",
    },
    {
      heading: "Pending Jobs",
      data: totalPendingJobs,
      icon: <FiClock className="h-6 w-6 text-red-500" />,
      boxCss:
        "border border-red-200 rounded-md bg-red-50 shadow-xs p-4 flex items-center gap-3",
      contentCss: "text-red-600",
    },
    {
      heading: "Active Jobs",
      data: totalActiveJobs,
      icon: <FiHome className="h-6 w-6 text-green-500" />,
      boxCss:
        "border border-green-200 rounded-md bg-green-50 shadow-xs p-4 flex items-center gap-3",
      contentCss: "text-green-600",
    },
  ];

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/verification`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const companiesProfiles: Company[] = [];
      response.data.data.map(c=> {
        c.role === "COMPANY" && companiesProfiles.push(c);
      })

      setCompaniesProfiles(companiesProfiles);
      setTotalCompaniesProfiles(companiesProfiles);

      let pendingJobs = 0;
      let verifiedCompanies = 0;
      let activeJobs = 0;

      companiesProfiles.map((p) => {
        if (p.verificationStatus === "APPROVED") {
          verifiedCompanies++;
        } else if (p.verificationStatus === "PENDING") {
          pendingJobs++;
        } else {
          activeJobs++;
        }
      });
      setTotalActiveJobs(activeJobs);
      setTotalPendingJobs(pendingJobs);
      setTotalVerifiedComanies(verifiedCompanies);
    } catch (err) {
      toast.error("Error in fetching the student verfication application");
    }
  };

  const handleSearch = (input: string) => {
    if (input.trim() !== "") {
      const lowerInput = input.toLowerCase();
      setCompaniesProfiles(
        totalCompaniesProfiles.filter((c) =>
          c.name.toLowerCase().includes(lowerInput)
        )
      );
    } else {
      setCompaniesProfiles(totalCompaniesProfiles);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
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
              <div className="flex items-center justify-between w-full">
                <span className={`text-md font-semibold ${s.contentCss}`}>
                  {s.heading}
                </span>
                <span className={`${s.contentCss} text-lg font-semibold`}>
                  {s.data}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Filters */}
        <div className="p-4 rounded-md shadow-xs mb-8 flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search companies..."
            className="border border-gray-300 rounded-md px-3 py-2 w-1/3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="flex gap-3">
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {status.map((i, idx) => (
                <option key={idx}>{i}</option>
              ))}
            </select>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              {industries.map((i, idx) => (
                <option key={idx}>{i}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companiesProfiles.map((company, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-md border border-black/10 shadow-xs"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-600/10 flex items-center justify-center font-bold text-sm text-blue-500">
                    LOGO
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {company.name}
                    </h2>
                    <p className="text-sm text-gray-500">{company.industry}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-sm ${
                    company.verificationStatus.toLowerCase() === "approved"
                      ? "bg-green-100 text-green-600"
                      : company.verificationStatus.toLowerCase() === "pending"
                      ? "bg-gray-100 text-gray-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {company.verificationStatus}
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
                {/* <p className="flex items-center gap-2">
                  <FiUsers size={14} /> {company.size}
                </p> */}
                <p className="flex items-center gap-2">
                  <FiBriefcase size={14} /> {company.website}
                </p>
                <p className="flex items-center gap-2">
                  <FiCalendar size={14} /> {company.founded}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-4">
                {company.description}
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                  View Profile
                </button>
                <button className="flex px-4 py-2 text-sm border border-red-300 bg-red-50 rounded-md text-red-600 hover:bg-red-100 hover:cursor-pointer">
                <IoMdClose size={20} />
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
