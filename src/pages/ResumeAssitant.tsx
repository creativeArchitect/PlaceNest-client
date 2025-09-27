// src/pages/ResumeAssistant.tsx
import React from "react";
import {
  FiUpload,
  FiSend,
} from "react-icons/fi";
import SideBar from "../components/SideBar";

const ResumeAssistant: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 pl-72 p-8 h-screen">
        <h1 className="text-2xl font-bold">AI Resume Assistant</h1>
        <p className="text-gray-500 mb-6">
          Get personalized suggestions to improve your resume
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Resume Upload Section */}
          <div className="bg-white border border-black/10 rounded-md p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Resume Analysis</h3>
            <p className="text-gray-500 text-sm mb-4">
              Upload your resume for AI-powered analysis
            </p>
            <div className="border-2 border-dashed border-black/20 rounded-md p-8 flex flex-col items-center justify-center text-center text-gray-500">
              <FiUpload className="text-3xl mb-2" />
              <p className="mb-4">Upload your resume</p>
              <button className="px-4 py-2 border border-black/10 rounded-md bg-gray-50 hover:bg-gray-100 hover:cursor-pointer">
                Choose File
              </button>
            </div>
          </div>

          {/* Chat with AI Assistant */}
          <div className="bg-white border border-black/10 rounded-md p-6 shadow-sm flex flex-col">
            <h3 className="font-semibold mb-2">Chat with AI Assistant</h3>
            <p className="text-gray-500 text-sm mb-4">
              Ask questions about resume writing and get expert advice
            </p>

            {/* Chat Window */}
            <div className="flex-1 border border-black/10 rounded-md p-4 bg-gray-50 overflow-y-auto mb-4 h-64">
              <div className="flex flex-col gap-3 overflow-y-scroll h-72">
              <div className="bg-white border border-black/20 rounded-md p-3 shadow-xs w-fit max-w-[75%]">
                <p className="text-gray-700 text-sm">
                  Hello! I'm your AI Resume Assistant. I can help you improve
                  your resume by analyzing it and providing personalized
                  suggestions. Please upload your resume to get started, or ask
                  me any questions about resume writing!
                </p>
                <p className="text-xs text-gray-400 mt-2">12:15 AM</p>
              </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask me anything about resume writing..."
                className="flex-1 border border-black/20 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button className="p-2 rounded-md shadow-xs bg-blue-600 text-white hover:bg-blue-700 transition">
                <FiSend />
              </button>
            </div>

            {/* Quick Suggestions */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {quickSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="px-3 py-1 text-sm border border-black/20 rounded-sm flex items-center gap-1 hover:bg-gray-100 transition"
                >
                  {/* <FiSparkles className="text-blue-500" /> */}
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeAssistant;

const quickSuggestions: string[] = [
  "Professional Summary",
  "Technical Skills",
  "Project Descriptions",
  "Achievements",
  "Work Experience",
  "Soft Skills",
];
