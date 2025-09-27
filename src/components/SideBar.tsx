import {
    FiUser,
    FiBriefcase,
    FiFileText,
    FiMessageSquare,
  } from "react-icons/fi";
  
  const SideBar = () => {
    return (
      <aside className="w-64 bg-white shadow-md p-6 h-screen fixed top-0 left-0">
        <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
        <p className="text-sm text-gray-500 mb-4">Welcome back, John Doe</p>
        <nav className="space-y-2">
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2 text-gray-700">
            <FiUser /> Profile
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md bg-blue-500/10 text-blue-600 border border-blue-500/20 hover:bg-blue-600/10 flex items-center gap-2">
            <FiBriefcase /> Jobs
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2 text-gray-700">
            <FiFileText /> Applications
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 flex items-center gap-2 text-gray-700">
            <FiMessageSquare /> Resume Assistant
          </button>
        </nav>
      </aside>
    );
  };
  
  export default SideBar;
  