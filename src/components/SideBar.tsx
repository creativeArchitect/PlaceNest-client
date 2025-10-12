import { useState } from "react";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";
import { MdDashboard, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { IconType } from "react-icons";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { RiPassValidLine } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";

type SideBarType = {
  label: string;
  icon: IconType;
  tab: string;
  route: string;
};

const studentSidebarItems: SideBarType[] = [
  { label: "Dashboard", icon: MdDashboard, tab: "dashboard", route: "/student/dashboard" },
  { label: "Profile", icon: FiUser, tab: "profile", route: "/profile" },
  { label: "jobs", icon: FiBriefcase, tab: "jobs", route: "/student/jobs" },
  { label: "Applications", icon: FiFileText, tab: "applications", route: "/student/applications" },
  { label: "Resume Assistant", icon: FiMessageSquare, tab: "resume", route: "/student/resume-review" },
];

const companySidebarItems: SideBarType[] = [
  { label: "Dashboard", icon: MdDashboard, tab: "dashboard", route: "/company/dashboard" },
  { label: "Profile", icon: FiUser, tab: "profile", route: "/profile" },
  { label: "Post Jobs", icon: IoMdAddCircleOutline, tab: "jobs", route: "/company/post-job" },
  { label: "My Jobs", icon: FiBriefcase, tab: "jobs", route: "/company/manage-jobs" },
  { label: "Applicants", icon: TbUsers, tab: "applicants", route: "/company/students-applications" },
];

const coordinatorSidebarItems: SideBarType[] = [
  { label: "Dashboard", icon: MdDashboard, tab: "dashboard", route: "/coordinator/dashboard" },
  { label: "Profile", icon: FiUser, tab: "profile", route: "/profile" },
  { label: "Students Verification", icon: RiPassValidLine, tab: "verify-students", route: "/coordinator/manage-students" },
  // { label: "Job Approvals", icon: GrValidate, tab: "job-approvals", route: "/coordinator/manage-jobs" },
  { label: "Companies Verifications", icon: FaRegBuilding, tab: "companies", route: "/coordinator/manage-companies" }
];


const SideBar = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  let sidebarItems: SideBarType[] = [];

  if (user?.role === "STUDENT") {
    sidebarItems = studentSidebarItems;
  } else if (user?.role === "COMPANY") {
    sidebarItems = companySidebarItems;
  } else if (user?.role === "COORDINATOR") {
    sidebarItems = coordinatorSidebarItems;
  }

  return (
    <aside className="w-64 bg-white shadow-md p-6 h-screen fixed top-0 left-0 flex flex-col justify-between">
  {/* Header */}
  <div>
    <h2 className="text-lg font-bold mb-6">{`${user?.role} Dashboard`}</h2>
    <p className="text-sm text-gray-500 mb-6">{`Welcome back, ${user?.name}`}</p>

    {/* Navigation */}
    <nav className="space-y-2">
      {sidebarItems.map(({ label, icon: Icon, tab, route }) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={label}
            onClick={() => {
              setActiveTab(tab);
              navigate(`${route}`);
            }}
            className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200
              ${
                isActive
                  ? "bg-blue-500/10 text-blue-600 border border-blue-500/20 hover:bg-blue-600/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        );
      })}
    </nav>
  </div>

  {/* Logout */}
  <button
     // Add your logout function
    className="w-full text-left px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200 text-red-500 hover:cursor-pointer hover:bg-red-500/10 hover:border hover:border-red-500/20"
    onClick={()=>{
      logout();
      navigate('/');
    }}
  >
    <MdLogout />
    Logout
  </button>
</aside>

  );
};

export default SideBar;
