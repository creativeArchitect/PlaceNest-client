import {
    FiUsers,
    FiCheckCircle,
    FiClipboard,
    FiBriefcase,
    FiUserCheck,
    FiCheck,
    FiTrendingUp,
  } from "react-icons/fi";
  import SideBar from "./components/SideBar";
  
  // Data Arrays for Dynamic Rendering
  
  const stats = [
    {
      icon: <FiUsers className="text-xl" />,
      count: 3,
      title: "Total Students",
      subtitle: "2 verified",
      subtitleColor: "text-green-600",
      iconColor: "text-blue-600",
    },
    {
      icon: <FiBriefcase className="text-xl" />,
      count: 3,
      title: "Registered Companies",
      subtitle: "2 verified",
      subtitleColor: "text-green-600",
      iconColor: "text-green-600",
    },
    {
      icon: <FiClipboard className="text-xl" />,
      count: 4,
      title: "Active Job Openings",
      subtitle: "3 applications",
      subtitleColor: "text-green-600",
      iconColor: "text-yellow-600",
    },
    {
      icon: <FiCheckCircle className="text-xl" />,
      count: 0,
      title: "Students Placed",
      subtitle: "Placement Rate: 0%",
      subtitleColor: "text-gray-400 text-xs",
      iconColor: "text-green-600",
    },
  ];
  
  const pendingActions = [
    {
      heading: "Student Verifications",
      data: "1 students pending verification",
      buttonText: "Review",
      buttonCss:
        "bg-yellow-500 text-white text-sm px-3 py-1 rounded-sm shadow-xs hover:bg-yellow-600",
      boxCss:
        "flex justify-between items-center rounded-md p-3 bg-yellow-500/10 border border-yellow-500/40",
    },
    {
      heading: "Job Approvals",
      data: "2 job postings pending approval",
      buttonText: "Review",
      buttonCss:
        "bg-blue-500 text-white text-sm px-3 py-1 rounded-sm hover:bg-blue-600",
      boxCss: "flex justify-between items-center rounded-md p-3 bg-blue-500/10 border border-blue-500/40",
    },
    {
      heading: "Company Verifications",
      data: "1 company pending verification",
      buttonText: "Review",
      buttonCss:
        "bg-green-500 text-white text-sm px-3 py-1 rounded-sm hover:bg-green-600",
      boxCss: "flex justify-between items-center rounded-md p-3 bg-green-500/10 border border-green-500/40",
    },
  ];
  
  const recentActivities = [
    {
      icon: <FiUsers className="mt-1 text-blue-500" />,
      description: "John Doe from Computer Science registered",
      time: "2 hours ago",
    },
    {
      icon: <FiBriefcase className="mt-1 text-green-500" />,
      description: "TechStart Inc. (Technology) registered",
      time: "4 hours ago",
    },
    {
      icon: <FiClipboard className="mt-1 text-yellow-500" />,
      description: "Frontend Developer posted by TechCorp",
      time: "6 hours ago",
    },
    {
      icon: <FiUsers className="mt-1 text-blue-500" />,
      description: "Jane Smith applied for Data Analyst",
      time: "8 hours ago",
    },
    {
      icon: <FiCheck className="mt-1 text-green-500" />,
      description: "Mike Johnson selected by InnovateTech",
      time: "1 day ago",
    },
  ];
  
  const departments = [
    { dep: "Computer Science", total: 45, placed: 12, pct: 27 },
    { dep: "Electronics", total: 38, placed: 8, pct: 21 },
    { dep: "Mechanical", total: 42, placed: 10, pct: 24 },
    { dep: "Civil", total: 35, placed: 6, pct: 17 },
    { dep: "Chemical", total: 28, placed: 5, pct: 18 },
  ];
  
  const quickActions = [
    { icon: <FiUserCheck size={24} />, label: "Verify Students" },
    { icon: <FiBriefcase size={24} />, label: "Manage Companies" },
    { icon: <FiClipboard size={24} />, label: "Review Jobs" },
    { icon: <FiTrendingUp size={24} />, label: "View Analytics" },
  ];
  
  export default function CoordinatorDashboard() {
    return (
      <div className="min-h-screen bg-white p-6 font-sans text-gray-700">
        <SideBar />
  
        <main className="flex-1 p-8 pl-72">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold mb-1">Placement Dashboard</h2>
            <p className="text-sm text-gray-400">
              Overview of placement activities and statistics
            </p>
          </div>
  
          {/* Stats */}
          <div className="flex flex-wrap gap-4 my-6">
            {stats.map(({ icon, count, title, subtitle, subtitleColor, iconColor }) => (
              <div
                key={title}
                className="flex-1 min-w-[160px] bg-white border border-gray-200 rounded-md p-4"
              >
                <div className={`flex items-center gap-2 ${iconColor}`}>
                  {icon}
                  <p className="font-semibold text-lg">{count}</p>
                </div>
                <p className="text-gray-500 mt-1">{title}</p>
                <p className={`${subtitleColor} text-sm mt-1`}>{subtitle}</p>
              </div>
            ))}
          </div>
  
          {/* Pending Actions & Recent Activities */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Pending Actions */}
            <div className="flex-1 bg-white border border-gray-200 rounded-md p-4">
              <h3 className="font-semibold mb-3">Pending Actions</h3>
              <p className="text-gray-400 text-xs mb-4">
                Items requiring your attention
              </p>
              <div className="space-y-3">
                {pendingActions.map(({ heading, data, buttonText, buttonCss, boxCss }) => (
                  <div key={heading} className={boxCss}>
                    <div>
                      <p className="font-semibold text-sm">{heading}</p>
                      <p className="text-xs text-gray-600">{data}</p>
                    </div>
                    <button className={buttonCss}>{buttonText}</button>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Recent Activities */}
            <div className="flex-1 bg-white border border-gray-200 rounded-md p-4">
              <h3 className="font-semibold mb-3">Recent Activities</h3>
              <p className="text-gray-400 text-xs mb-4">Latest platform activities</p>
              <ul className="space-y-3">
                {recentActivities.map(({ icon, description, time }) => (
                  <li key={description} className="flex gap-3 items-start text-sm">
                    {icon}
                    <div>
                      <p className="font-semibold">{description}</p>
                      <p className="text-gray-400 text-xs">{time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Department-wise Placement Statistics */}
          <div className="bg-white border border-gray-200 rounded-md p-4 mb-6">
            <h3 className="font-semibold mb-3">Department-wise Placement Statistics</h3>
            <p className="text-gray-400 text-xs mb-6">Placement performance by department</p>
            <div className="space-y-4">
              {departments.map(({ dep, total, placed, pct }) => (
                <div key={dep} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{dep}</p>
                    <p className="text-xs text-gray-500">
                      {total} students &bull; {placed} placed
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-48">
                    <p className="text-xs text-gray-500">{pct}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-md p-4">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <p className="text-gray-400 text-xs mb-6">
              Frequently used administrative tasks
            </p>
            <div className="flex flex-wrap gap-4">
              {quickActions.map(({ icon, label }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-2 border p-4 rounded-md hover:bg-gray-50 transition w-full sm:w-auto"
                >
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
  