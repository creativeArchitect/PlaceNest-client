import { useState } from "react";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { label: "Dashboard", icon: MdDashboard, tab: "dashboard", route: "/student/dashboard" },
  { label: "Profile", icon: FiUser, tab: "profile", route: "/student/profile" },
  { label: "Jobs", icon: FiBriefcase, tab: "jobs", route: "/student/jobs" },
  { label: "Applications", icon: FiFileText, tab: "applications", route: "/student/applications" },
  { label: "Resume Assistant", icon: FiMessageSquare, tab: "resume", route: "/student/resume-review" },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState<string>("jobs");
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white shadow-md p-6 h-screen fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
      <p className="text-sm text-gray-500 mb-4">Welcome back, John Doe</p>

      <nav className="space-y-2">
        {sidebarItems.map(({ label, icon: Icon, tab, route }) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                navigate(`${route}`)
              }}
              className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 
                ${isActive
                  ? "bg-blue-500/10 text-blue-600 border border-blue-500/20 hover:bg-blue-600/10"
                  : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              <Icon /> {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
