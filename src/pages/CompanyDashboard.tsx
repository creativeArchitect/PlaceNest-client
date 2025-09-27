import React from "react";
import {
  FiTrendingUp,
  FiBriefcase,
  FiUser,
  FiEye,
  FiMapPin,
  FiCalendar,
  FiPlus,
} from "react-icons/fi";

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white min-h-screen p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center text-blue-700 font-bold">
              📂
            </div>
            <h1 className="font-semibold text-lg">JobPortal</h1>
          </div>

          <h3 className="text-sm font-semibold mb-1">Company Dashboard</h3>
          <p className="text-xs text-gray-400 mb-6">Welcome back, Jane Smith</p>

          <nav className="space-y-2">
            <SidebarItem label="Dashboard" active icon={<FiTrendingUp />} />
            <SidebarItem label="Post Job" icon={<FiPlus />} />
            <SidebarItem label="My Jobs" icon={<FiBriefcase />} />
            <SidebarItem label="Applicants" icon={<FiUser />} />
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">Company Dashboard</h2>
              <p className="text-sm text-gray-500">Manage your job postings and recruitment</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm flex items-center gap-2">
              <FiPlus /> Post New Job
            </button>
          </header>

          {/* Stat cards */}
          <section className="grid grid-cols-4 gap-4 mb-6">
            <StatCard title="Total Jobs Posted" value={1} />
            <StatCard title="Active Jobs" value={1} />
            <StatCard title="Total Applications" value={1} />
            <StatCard title="Shortlisted" value={1} />
          </section>

          {/* Recent job postings & applications */}
          <section className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white border rounded p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Recent Job Postings</h3>
                  <p className="text-sm text-gray-500">Your latest job postings</p>
                </div>
                <button className="text-sm text-blue-600">View All</button>
              </div>

              <div className="border rounded p-4">
                <div className="font-semibold">Software Engineer - Frontend</div>
                <div className="text-sm text-gray-500 flex gap-4 mt-1">
                  <div className="flex items-center gap-1"><FiMapPin /> Bangalore, India</div>
                  <div className="flex items-center gap-1"><FiCalendar /> 1/15/2024</div>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700">active</span>
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">full-time</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">1 applications</div>
              </div>
            </div>

            <div className="bg-white border rounded p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Recent Applications</h3>
                  <p className="text-sm text-gray-500">Latest applications for your jobs</p>
                </div>
                <button className="text-sm text-blue-600">View All</button>
              </div>

              <div className="border rounded p-4 flex items-start justify-between">
                <div>
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-gray-500">student@test.com</div>
                  <div className="text-sm text-gray-500 mt-1">Applied for: Software Engineer - Frontend</div>
                </div>
                <div className="flex flex-col items-end gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1"><FiCalendar /> 1/16/2024</div>
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">shortlisted</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick actions */}
          <section className="bg-white border rounded p-6">
            <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
            <p className="text-sm text-gray-500 mb-4">Common tasks and shortcuts</p>

            <div className="grid grid-cols-3 gap-4">
              <QuickAction label="Post New Job" />
              <QuickAction label="Review Applications" />
              <QuickAction label="Manage Jobs" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ label, active, icon }: { label: string; active?: boolean; icon?: React.ReactNode }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md ${active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="border rounded-md bg-white p-4">
      <div className="text-xs text-gray-500 mb-1">{title}</div>
      <div className="text-2xl font-semibold text-gray-800">{value}</div>
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button className="border rounded-md py-4 flex items-center justify-center gap-2 hover:bg-gray-50">
      <FiPlus />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
