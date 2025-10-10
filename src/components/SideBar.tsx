import { useState } from "react";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { IconType } from "react-icons";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { RiPassValidLine } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";

type SideBarType = {
  label: string;
  icon: IconType;
  tab: string;
  route: string;
};

const studentSidebarItems: SideBarType[] = [
  { label: "Dashboard", icon: MdDashboard, tab: "dashboard", route: "/student/dashboard" },
  { label: "Profile", icon: FiUser, tab: "profile", route: "/student/profile" },
  { label: "Jobs", icon: FiBriefcase, tab: "jobs", route: "/student/jobs" },
  { label: "Applications", icon: FiFileText, tab: "applications", route: "/student/applications" },
  { label: "Resume Assistant", icon: FiMessageSquare, tab: "resume", route: "/student/resume-review" },
];

const companySidebarItems: SideBarType[] = [
  { label: "Dashboard", icon: MdDashboard, tab: "dashboard", route: "/company/dashboard" },
  { label: "Profile", icon: FiUser, tab: "profile", route: "/company/profile" },
  { label: "Post Jobs", icon: IoMdAddCircleOutline, tab: "jobs", route: "/company/post-job" },
  { label: "My Jobs", icon: FiBriefcase, tab: "jobs", route: "/company/jobs" },
  { label: "Applicants", icon: TbUsers, tab: "applicants", route: "/company/applicants" },
];

const coordinatorSidebarItems: SideBarType[] = [
  { label: "Dashboard", icon: MdDashboard, tab: "dashboard", route: "/coordinator/dashboard" },
  { label: "Profile", icon: FiUser, tab: "profile", route: "/coordinator/profile" },
  { label: "Students Verification", icon: RiPassValidLine, tab: "verify-students", route: "/coordinator/manage-students" },
  { label: "Job Approvals", icon: GrValidate, tab: "job-approvals", route: "/coordinator/job-approvals" },
  { label: "Companies", icon: FaRegBuilding, tab: "companies", route: "/coordinator/companies" }
];


const SideBar = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const navigate = useNavigate();
  const { user } = useAuth();

  let sidebarItems: SideBarType[] = [];

  if (user?.role === "STUDENT") {
    sidebarItems = studentSidebarItems;
  } else if (user?.role === "COMPANY") {
    sidebarItems = companySidebarItems;
  } else if (user?.role === "COORDINATOR") {
    sidebarItems = coordinatorSidebarItems;
  }

  return (
    <aside className="w-64 bg-white shadow-md p-6 h-screen fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6">{`${user?.role} Dashboard`}</h2>
      <p className="text-sm text-gray-500 mb-4">{`Welcome back, ${user?.name}`}</p>

      <nav className="space-y-2">
        {sidebarItems.map(({ label, icon: Icon, tab, route }) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                navigate(`${route}`);
              }}
              className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 
                ${
                  isActive
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
