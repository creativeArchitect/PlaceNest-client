import { FaUserGraduate, FaBuilding, FaChalkboardTeacher } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
          <h1 className="text-xl font-semibold">JobPortal</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          AI-Enabled College{" "}
          <span className="text-blue-600">Job Portal</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Connect students with top companies, streamline recruitment with
          AI-powered tools, and manage placements efficiently.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
          Get Started →
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 px-6">
        {/* Student Card */}
        <div className="border rounded-lg shadow-sm p-6 text-center bg-white hover:shadow-md transition">
          <FaUserGraduate className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">For Students</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Find opportunities, apply for jobs, and get AI-powered resume
            assistance.
          </p>
          <button className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100">
            Join as Student
          </button>
        </div>

        {/* Company Card */}
        <div className="border rounded-lg shadow-sm p-6 text-center bg-white hover:shadow-md transition">
          <FaBuilding className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">For Companies</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Post jobs, find talented students, and manage your recruitment
            process.
          </p>
          <button className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100">
            Join as Company
          </button>
        </div>

        {/* Coordinator Card */}
        <div className="border rounded-lg shadow-sm p-6 text-center bg-white hover:shadow-md transition">
          <FaChalkboardTeacher className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">For Coordinators</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Manage student verifications, oversee placements, and track
            analytics.
          </p>
          <button className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100">
            Access Portal
          </button>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="max-w-5xl mx-auto mt-16 px-6">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
          <FiMessageSquare className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Resume Assistant</h3>
          <p className="text-gray-600 mb-4">
            Get personalized suggestions to improve your resume with our advanced
            AI assistant.
          </p>
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Try AI Assistant
          </button>
        </div>
      </section>
    </div>
  );
}
