import {
  FaUserGraduate,
  FaBuilding,
} from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const cards = [
  {
    icon: <FaUserGraduate className="text-4xl text-gray-500 mx-auto mb-4" />,
    heading: "For Students",
    description:
      "Find opportunities, apply for jobs, and get AI-powered resume assistance.",
    buttonText: "Join as Student",
    boxCss: "border rounded-md border-gray-500/20 shadow-sm p-6 text-center bg-white",
    buttonCss:
      "w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 text-gray-500 hover:cursor-pointer",
  },
  {
    icon: <FaBuilding className="text-4xl text-green-500 mx-auto mb-4" />,
    heading: "For Companies",
    description:
      "Post jobs, find talented students, and manage your recruitment process.",
    buttonText: "Join as Company",
    boxCss: "border rounded-md border-green-500/20 shadow-sm p-6 text-center bg-white",
    buttonCss:
      "w-full border border-green-300 rounded-md py-2 hover:bg-green-100 text-green-500 hover:cursor-pointer",
  },
  {
    icon: <FiMessageSquare className="text-4xl text-blue-500 mx-auto mb-4" />,
    heading: "For Coordinators",
    description:
      "Manage student verifications, oversee placements, and track analytics.",
    buttonText: "Access Portal",
    boxCss: "border rounded-md border-blue-500/20 shadow-sm p-6 text-center bg-white",
    buttonCss:
      "w-full border border-blue-300 rounded-md py-2 hover:bg-blue-100 text-blue-500 hover:cursor-pointer",
  },
];

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center space-x-2 bg-blue-500 px-2 py-1 rounded-sm shadow-md">
          {/* <div className="w-6 h-6 bg-blue-500 rounded-md"></div> */}
          <h1 className="text-xl font-semibold text-white">PlaceNest</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 border border-black/20 px-4 py-1 rounded-sm shadow-sm hover:cursor-pointer hover:bg-gray-500/10">Login</button>
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Get Started
          </button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          AI-Enabled College <span className="text-blue-600">Job Portal</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Connect students with top companies, streamline recruitment with
          AI-powered tools, and manage placements efficiently.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold hover:cursor-pointer">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 px-6">
        {cards.map((c) => (
          <div className={c.boxCss} key={c.heading}>
            {c.icon}
            <h3 className="text-lg font-semibold mb-2">{c.heading}</h3>
            <p className="text-gray-600 mb-4 text-sm">
              {c.description}
            </p>
            <button className={c.buttonCss}>
              {c.buttonText}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
