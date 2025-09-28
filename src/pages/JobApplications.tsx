import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiXCircle,
  FiChevronDown,
  FiDownload,
  FiEye,
} from "react-icons/fi";
import SideBar from "../components/SideBar";

type Application = {
  id: string;
  name: string;
  email: string;
  degree: string;
  appliedOn: string;
  position: string;
  status: "shortlisted" | "pending" | "rejected" | "selected";
};

const MOCK: Application[] = [
  {
    id: "1",
    name: "John Doe",
    email: "student@test.com",
    degree: "Computer Science",
    appliedOn: "1/16/2024",
    position: "Software Engineer - Frontend",
    status: "shortlisted",
  },
  {
    id: "2",
    name: "John Doe",
    email: "student@test.com",
    degree: "Computer Science",
    appliedOn: "1/21/2024",
    position: "Unknown Job",
    status: "pending",
  },
  {
    id: "3",
    name: "John Doe",
    email: "student@test.com",
    degree: "Computer Science",
    appliedOn: "1/19/2024",
    position: "Unknown Job",
    status: "rejected",
  },
];

const stats = [
  {
    heading: "Total Applications",
    data: 3,
    icon: <FiUser className="h-6 w-6" />,
    boxCss: "border border-gray-500/20 rounded-md bg-gray-300/10 p-4 flex items-center gap-4",
    contentCss: "text-neutral-500"
  },
  {
    heading: "Shortlisted",
    data: 1,
    icon: <FiCheckCircle className="h-6 w-6 text-blue-500" />,
    boxCss: "border border-blue-500/20 rounded-md bg-blue-400/10 p-4 flex items-center gap-4",
    contentCss: "text-blue-500"
  },
  {
    heading: "Rejected",
    data: 1,
    icon: <FiXCircle className="h-6 w-6 text-red-500" />,
    boxCss: "border border-red-500/20 rounded-md bg-red-400/10 p-4 flex items-center gap-4 p-4 flex items-center gap-4",
    contentCss: "text-red-500"
  },
  {
    heading: "Selected",
    data: 0,
    icon: <FiCheckCircle className="h-6 w-6 text-green-500" />,
    boxCss: "border border-green-500/20 rounded-md bg-green-400/10 p-4 flex items-center gap-4",
    contentCss: "text-green-500"
  }
]

export default function JobApplications() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const counts = {
    total: MOCK.length,
    shortlisted: MOCK.filter((m) => m.status === "shortlisted").length,
    rejected: MOCK.filter((m) => m.status === "rejected").length,
    selected: MOCK.filter((m) => m.status === "selected").length,
  };

  const filtered = MOCK.filter((a) => {
    if (statusFilter !== "all" && a.status !== statusFilter) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="flex">
        {/* Sidebar */}
        <SideBar />

        {/* Main content */}
        <main className="flex-1 p-8 pl-72">
          <header className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">Applicant Management</h2>
              <p className="text-sm text-gray-500">Review and manage applications for your jobs</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">Company User</div>
              <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center">JS</div>
            </div>
          </header>

          {/* stat cards */}
          <section className="grid grid-cols-4 gap-4 mb-6">
            {
              stats.map(s=> (
                <div className={`${s.boxCss} flex`}>
                {s.icon}
                <div className="flex gap-3">
                    <span className={`${s.contentCss} text-md font-semibold`}>{s.heading} </span>
                    <span className={`${s.contentCss} font-semibold`}>{s.data}</span>
                  </div>
              </div>
              ))
            }
          </section>

          {/* Filters */}
          <section className="bg-white border border-black/10 rounded p-6 mb-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">🔎</span> Filter Applications
            </h4>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Search</label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name or email..."
                    className="pl-10 pr-4 py-2 w-full border border-black/20 border-black/20 rounded-md bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Status</label>
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none w-full py-2 px-3 border border-black/20 rounded-md bg-white"
                  >
                    <option value="all">All Status</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                    <option value="selected">Selected</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Job Position</label>
                <div className="relative">
                  <select className="appearance-none w-full py-2 px-3 border border-black/20 rounded-md bg-white">
                    <option>All Jobs</option>
                    <option>Software Engineer - Frontend</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>
          </section>

          {/* Applications list */}
          <section className="bg-white border border-black/10 rounded p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Applications ({filtered.length})</h3>
                <p className="text-sm text-gray-500">Review and take action on applications</p>
              </div>
            </div>

            <div className="space-y-4">
              {filtered.map((app) => (
                <div key={app.id} className="border border-black/10 shadow-xs rounded-md p-4 flex items-start justify-between bg-neutral-200/10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center text-white font-semibold">JD</div>
                    <div>
                      <div className="font-semibold">{app.name}</div>
                      <div className="text-sm text-gray-500">{app.email}</div>

                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1"><FiBriefcase /> <span>{app.degree}</span></div>
                        <div className="flex items-center gap-1"><FiCalendar /> <span>Applied {app.appliedOn}</span></div>
                      </div>

                      <div className="mt-3 text-sm text-gray-600">Applied for: <span className="font-medium">{app.position}</span></div>

                      <div className="mt-3 flex items-center gap-2">
                        <button className="flex items-center gap-2 px-3 py-1 border border-black/10 rounded-sm text-sm hover:cursor-pointer"><FiEye /> View Profile</button>
                        <button className="flex items-center gap-2 px-3 py-1 bg-black/80 hover:cursor-pointer text-white rounded-sm text-sm"><FiDownload /> Resume</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <StatusBadge status={app.status} />

                    <div className="flex items-center gap-2">
                      {app.status === "shortlisted" && (
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-sm shadow-xs text-sm">Select Candidate</button>
                      )}

                      {app.status === "pending" && (
                        <>
                          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-sm shadow-xs text-sm flex items-center gap-2">Shortlist</button>
                          <button className="px-3 py-1 bg-red-100 text-red-700 rounded-sm shadow-xs text-sm">Reject</button>
                        </>
                      )}

                      {app.status === "rejected" && (
                        <div className="text-sm text-gray-400">—</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md ${active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}>
      <FiUser />
      <span className="text-sm">{label}</span>
    </div>
  );
}

function StatCard({ title, value, icon, green, red }: { title: string; value: number; icon: React.ReactNode; green?: boolean; red?: boolean; }) {
  return (
    <div className="">
      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center">{icon}</div>
      <div>
        <div className="">{title}</div>
        <div className={`text-2xl font-semibold ${green ? "text-green-600" : red ? "text-red-500" : "text-gray-800"}`}>{value}</div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Application["status"] }) {
  const map = {
    shortlisted: { text: "SHORTLISTED", className: "bg-green-100 text-green-700 rounded-sm shadow-xs" },
    pending: { text: "PENDING", className: "bg-yellow-100 text-yellow-700 rounded-sm shadow-xs" },
    rejected: { text: "REJECTED", className: "bg-red-100 text-red-700 rounded-sm shadow-xs" },
    selected: { text: "SELECTED", className: "bg-green-100 text-green-700 rounded-sm shadow-xs" },
  } as const;
  const info = map[status];
  return <div className={`px-3 py-1 text-xs rounded-full font-semibold ${info.className}`}>{info.text}</div>;
}
