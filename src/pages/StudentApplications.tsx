import React, { useEffect, useState } from "react";
import { FiEye, FiMapPin } from "react-icons/fi";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import type { Application } from "../types/application.types";

const tab = [
  { label: "All", status: "All" },
  { label: "Pending", status: "PENDING" },
  { label: "Shortlisted", status: "SHORTLISTED" },
  { label: "Rejected", status: "REJECTED" },
  { label: "Selected", status: "SELECTED" },
];

const StudentApplications: React.FC = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [initialApplications, setInitialApplications] = useState<Application[]>(
    []
  );
  const [totalPendingApp, setTotalPendingApp] = useState<number>(0);
  const [totalRejectedApp, setTotalRejectedApp] = useState<number>(0);
  const [totalSelectedApp, setTotalSelectedApp] = useState<number>(0);
  const [totalShortlistedApp, setTotalShortlistedApp] = useState<number>(0);
  const [currTab, setCurrTab] = useState<
    "All" | "Pending" | "Rejected" | "Shortlisted" | "Selected"
  >("All");

  const token = localStorage.getItem("token");

  const statusColors: Record<Application["status"], string> = {
    SHORTLISTED: "text-green-600 bg-green-50 border-green-200",
    PENDING: "text-yellow-600 bg-yellow-50 border-yellow-200",
    REJECTED: "text-red-600 bg-red-50 border-red-200",
    SELECTED: "text-blue-600 bg-blue-50 border-blue-200",
  };

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/application`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response.data", response.data);

      console.log("response.data.data", response.data.data);
      setInitialApplications(response.data.data);
      setApplications(response.data.data);

      let pendingApp = 0;
      let rejectApp = 0;
      let selectedApp = 0;
      let shortlistedApp = 0;

      initialApplications.map(app=> {
        if(app.status === 'PENDING') {
          pendingApp++;
        }else if(app.status === 'SELECTED') {
          selectedApp++;
        }else if(app.status === 'REJECTED') {
          rejectApp++;
        }else {
          shortlistedApp++;
        }
      })

      setTotalPendingApp(pendingApp);
      setTotalRejectedApp(rejectApp);
      setTotalSelectedApp(selectedApp);
      setTotalShortlistedApp(shortlistedApp);
    } catch (err) {
      toast.error("Error in fetching student applications");
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  if (StudentApplications.length === 0) {
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
              count={totalPendingApp}
            />
            <StatCard
              title="Shortlisted"
              count={totalShortlistedApp}
            />
            <StatCard
              title="Rejected"
              count={totalRejectedApp}
            />
          </div>

          {/* Filter Tabs */}
          <div className="p-4 mb-6 shadow-xs">
            <h3 className="font-semibold mb-3">Application Status</h3>
            <div className="flex gap-4 py-2 rounded-md text-sm bg-gray-50 justify-center items-center">
              {tab.map(({ label, status }) => (
                <button
                  key={status}
                  onClick={() => setCurrTab(label as typeof currTab)}
                  className={`px-3 py-1 relative transition-colors
          ${
            currTab === label
              ? "text-blue-600 font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
              : "text-gray-600 hover:text-black"
          }`}
                >
                  {label} (
                  {status === "All"
                    ? applications.length
                    : applications.filter((a) => a.status === status).length}
                  )
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center relative top-[10%]">
            <h1>No application is found</h1>
          </div>
        </main>
      </div>
    );
  }

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
            count={
              applications.filter((a) => a.status === "SHORTLISTED").length
            }
          />
          <StatCard
            title="Rejected"
            count={applications.filter((a) => a.status === "REJECTED").length}
          />
        </div>

        {/* Filter Tabs */}
        <div className="bg-white border border-black/10 rounded-md p-4 mb-6 shadow-xs">
          <h3 className="font-semibold mb-3">Application Status</h3>
          <div className="flex gap-4 py-2 rounded-md text-sm bg-gray-50 justify-center items-center">
            {tab.map(({ label, status }) => (
              <button
                key={status}
                onClick={() => setCurrTab(label as typeof currTab)}
                className={`px-3 py-1 relative transition-colors
          ${
            currTab === label
              ? "text-blue-600 font-medium after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
              : "text-gray-600 hover:text-black"
          }`}
              >
                {label} (
                {status === "All"
                  ? applications.length
                  : applications.filter((a) => a.status === status).length}
                )
              </button>
            ))}
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
                    {app.job.title}
                  </h2>
                  <p className="text-gray-500">{app.job.company.name}</p>
                  <div className="flex gap-6 mt-2 text-sm text-gray-500 flex-wrap">
                    <span className="flex items-center gap-1">
                      <FiMapPin /> {app.job.location}
                    </span>
                    {/* <span className="flex items-center gap-1">
                      <FiCalendar /> Applied on {app.}
                    </span> */}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-sm shadow-xs border ${
                    statusColors[app.status]
                  }`}
                >
                  {app.status}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm">
                {app.job.description}
              </p>

              {/* Tags */}
              {/* <div className="flex flex-wrap gap-2 mt-4">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}

              {/* Footer */}
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 border border-black/10 rounded-md text-gray-700 hover:bg-gray-100 flex items-center gap-2 text-sm transition hover:cursor-pointer"
                  onClick={() => navigate("/student/job")}
                >
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
