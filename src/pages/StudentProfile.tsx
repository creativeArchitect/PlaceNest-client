import React, { useState } from "react";
import { FiUser, FiCheckCircle, FiUpload } from "react-icons/fi";
import SideBar from "../components/SideBar";
import type { StudentProfile } from "../types/student.types";

const StudentProfile: React.FC = () => {
  const [formData, setFormData] = useState<StudentProfile>({
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    cgpa: 0,
    activeBacklog: false,
    backlogs: 0,
    resumeUrl: "",
    description: ""
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
  //   e.preventDefault();
  //   setFormData(pre=> (
  //     {...pre}
  //     [e.target.name]: e.target.value
  //   ))
  // }

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">
        {/* Header */}
        <header className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Edit Profile
          </button>
        </header>
        <p className="text-gray-600 mb-6">
          Manage your profile information and settings
        </p>

        {/* Profile Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Basic Info */}
          <section className="col-span-2 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-lg font-medium mb-1">
              <FiUser /> Basic Information
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Your personal and academic details
            </p>
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm font-medium text-gray-700">
                Full Name
                <input
                  type="text"
                  value="John Doe"
                  readOnly
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  value="student@test.com"
                  readOnly
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Roll Number
                <input
                  type="text"
                  value="CS21001"
                  readOnly
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Graduation Year
                <input
                  type="text"
                  value="2024"
                  readOnly
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Department
                <input
                  type="text"
                  value="Computer Science"
                  readOnly
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Phone
                <input
                  type="text"
                  value="+91 9876543210"
                  readOnly
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                CGPA
                <input
                  type="text"
                  value="8.5"
                  readOnly
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm"
                />
              </label>
            </div>
          </section>

          {/* Account Status */}
          <section className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-1">Account Status</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your profile verification status
            </p>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm mb-4 border border-green-500/20">
              <FiCheckCircle className="text-green-500" />
              Profile Verified
            </div>
            <div className="text-center border border-dashed border-gray-300 p-6 rounded-md text-gray-500">
              <FiUpload className="mx-auto mb-2" size={22} />
              <p className="text-sm mb-2">No resume uploaded</p>
              <button className="bg-blue-500 text-white px-3 py-2 rounded-sm shadow-sm text-sm hover:cursor-pointer hover:bg-blue-600">
                Upload Resume
              </button>
            </div>
          </section>
        </div>

        {/* About Me */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium mb-1">About Me</h3>
          <p className="text-sm text-gray-600 mb-3">
            Tell recruiters about yourself
          </p>
          <textarea
            readOnly
            value="Passionate computer science student with experience in full-stack web development. Looking for opportunities to apply my skills in a professional environment."
            className="w-full min-h-[80px] rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm resize-none"
          />
        </section>

        {/* Skills */}
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-1">Skills</h3>
          <p className="text-sm text-gray-600 mb-3">
            Add your technical and soft skills
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "Python", "JavaScript", "TypeScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-gray-700 px-3 py-1 rounded-sm text-sm border border-gray-600/20"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentProfile;
