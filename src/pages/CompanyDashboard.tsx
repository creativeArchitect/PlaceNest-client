import React from "react";
import {
  FiMapPin,
  FiCalendar,
  FiPlus,
} from "react-icons/fi";
import SideBar from "../components/SideBar";

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="flex">
        {/* Sidebar */}
        <SideBar />

        {/* Main content */}
        <main className="flex-1 p-8 pl-72">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">Company Dashboard</h2>
              <p className="text-sm text-gray-500">Manage your job postings and recruitment</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm flex items-center gap-2 hover:cursor-pointer">
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
            <div className="bg-white border border-black/10 rounded p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Recent Job Postings</h3>
                  <p className="text-sm text-gray-500">Your latest job postings</p>
                </div>
                <button className="text-sm text-blue-600">View All</button>
              </div>

              <div className="border border-black/10 rounded p-4">
                <div className="font-semibold">Software Engineer - Frontend</div>
                <div className="text-sm text-gray-500 flex gap-4 mt-1">
                  <div className="flex items-center gap-1"><FiMapPin /> Bangalore, India</div>
                  <div className="flex items-center gap-1"><FiCalendar /> 1/15/2024</div>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-sm shadow-xs bg-blue-100 text-blue-700">active</span>
                  <span className="px-2 py-1 rounded-sm shadow-xs bg-gray-100 text-gray-700">full-time</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">1 applications</div>
              </div>
            </div>

            <div className="bg-white border border-black/10 rounded p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Recent Applications</h3>
                  <p className="text-sm text-gray-500">Latest applications for your jobs</p>
                </div>
                <button className="text-sm text-blue-600">View All</button>
              </div>

              <div className="border border-black/10 rounded p-4 flex items-start justify-between">
                <div>
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-gray-500">student@test.com</div>
                  <div className="text-sm text-gray-500 mt-1">Applied for: Software Engineer - Frontend</div>
                </div>
                <div className="flex flex-col items-end gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1"><FiCalendar /> 1/16/2024</div>
                  <span className="px-2 py-1 rounded-sm shadow-xs bg-green-100 text-green-700 text-xs">Shortlisted</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick actions */}
          <section className="bg-white border border-black/20 rounded p-6">
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
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md ${active ? "bg-blue-50 border border-blue-500/10 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="border border-black/20 rounded-md bg-white p-4">
      <div className="text-xs text-gray-500 mb-1">{title}</div>
      <div className="text-2xl font-semibold text-gray-800">{value}</div>
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button className="border border-black/20 rounded-md py-4 flex items-center justify-center gap-2 hover:bg-gray-50">
      <FiPlus />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
