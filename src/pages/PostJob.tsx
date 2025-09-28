import { FiBriefcase, FiUsers, FiEye, FiSave, FiPlus } from "react-icons/fi";
import SideBar from "../components/SideBar";

export default function PostJob() {
  return (
    <div className="min-h-screen bg-white text-gray-700">
      {/* Side-bar */}
      <SideBar />

      <main className="flex-1 mx-auto p-6 pl-72">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Post New Job</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-black/20 px-3 py-2 rounded text-sm hover:bg-gray-100 hover:cursor-pointer">
              <FiEye /> Preview
            </button>
            <button className="flex items-center gap-2 border border-blue-500/20 bg-blue-400/20 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-500/20 hover:cursor-pointer">
              <FiSave /> Save Draft
            </button>
          </div>
        </header>

        <div className="max-w-6xl mx-auto py-6 grid gap-6">
          {/* Basic Info + Eligibility */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Basic Info */}
            <section className="lg:col-span-2 border border-black/10 p-6 rounded-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <FiBriefcase /> Basic Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm block mb-1">Job Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer - Frontend"
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Location *</label>
                  <input
                    type="text"
                    placeholder="e.g. Bangalore, India"
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Job Type *</label>
                  <select className="w-full border border-black/20 px-3 py-2 rounded bg-white">
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm block mb-1">Min Salary</label>
                    <input
                      type="number"
                      className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="text-sm block mb-1">Max Salary</label>
                    <input
                      type="number"
                      className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm block mb-1">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>
              </div>
            </section>

            {/* Eligibility */}
            <section className="border border-black/10 p-6 rounded-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <FiUsers /> Eligibility Criteria
              </h3>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">
                  Eligible Departments *
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Computer Science",
                    "Mechanical",
                    "Chemical",
                    "Electronics",
                    "Civil",
                    "Electrical",
                  ].map((dept) => (
                    <label key={dept} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {dept}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Graduation Years *</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Class of 2024",
                    "Class of 2025",
                    "Class of 2026",
                    "Class of 2027",
                  ].map((year) => (
                    <label key={year} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {year}
                    </label>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Job Description */}
          <section className="border border-black/10 p-6 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <p className="text-sm text-gray-500 mb-2">
              Detailed description of the role and responsibilities
            </p>
            <textarea
              className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50 h-32"
              placeholder="Describe the role, responsibilities, and what you’re looking for in a candidate..."
            />
          </section>

          {/* Requirements & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <section className="border border-black/10 p-6 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <p className="text-sm text-gray-500 mb-2">
                Skills and qualifications needed
              </p>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="flex-1 border border-black/20 px-3 py-2 rounded bg-gray-50"
                  placeholder="Add a requirement"
                />
                <button className="px-4 bg-blue-600 text-white rounded flex items-center gap-1 hover:cursor-pointer hover:bg-blue-500">
                  <FiPlus className="text-sm" /> Add
                </button>
              </div>
            </section>

            {/* Benefits */}
            <section className="border border-black/10 p-6 rounded-md">
              <h3 className="text-lg font-semibold mb-2">
                Benefits (Optional)
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                What you offer to employees
              </p>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="flex-1 border border-black/20 px-3 py-2 rounded bg-gray-50"
                  placeholder="Add a benefit"
                />
                <button className="px-4 bg-blue-600 text-white rounded flex items-center gap-1 hover:cursor-pointer hover:bg-blue-500">
                  <FiPlus className="text-sm" /> Add
                </button>
              </div>
            </section>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button className="px-4 py-2 border border-black/10 rounded text-sm hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm flex items-center gap-2 hover:cursor-pointer hover:bg-blue-500">
              <FiPlus /> Publish Job
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
