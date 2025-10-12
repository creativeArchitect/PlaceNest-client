import { FiBriefcase, FiUsers, FiEye, FiSave, FiPlus } from "react-icons/fi";
import SideBar from "../components/SideBar";
import { useState } from "react";
import type { Job, Branch } from "../types/job.types";
import { toast } from "sonner";
import axios from "axios";

const jobTypes = [
  { label: "Full Time", value: "FullTime" },
  { label: "Part Time", value: "PartTime" },
  { label: "Internship", value: "Internship" },
  { label: "Contract", value: "Contract" },
] as const;

const branches: { label: string; value: Branch }[] = [
  { label: "Computer Science", value: "CS" },
  { label: "Chemical", value: "CY" },
  { label: "Information Tech", value: "IT" },
  { label: "Mechanical", value: "ME" },
  { label: "Electronics & Comm", value: "ECE" },
  { label: "Electronics & Instrumentation", value: "EIC" },
  { label: "Electrical", value: "EE" },
  { label: "Civil", value: "CE" },
];

export default function PostJob() {
  const [formData, setFormData] = useState<Job>({
    type: "FullTime",
    title: "",
    description: "",
    location: "",
    position: "",
    salary: 0,
    cgpaCutOff: 0,
    deadline: "",
    status: "DRAFT",
    branchCutOff: [], 
  });
  const token = localStorage.getItem("token");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBranchToggle = (branch: Branch) => {
    setFormData((prev) => {
      const isSelected = prev.branchCutOff.includes(branch);
      const updatedBranches = isSelected
        ? prev.branchCutOff.filter((b) => b !== branch)
        : [...prev.branchCutOff, branch];

      return {
        ...prev,
        branchCutOff: updatedBranches,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/job`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if(response.data.success){
        toast.success(response.data.message);
      }
    }catch(err) {
      toast.error("Error in post job");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-700">
      <SideBar />

      <main className="flex-1 mx-auto p-6 pl-72">
        <header className="flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold">Post New Job</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-black/20 px-3 py-2 rounded text-sm hover:bg-gray-100">
              <FiEye /> Preview
            </button>
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 border border-blue-500/20 bg-blue-400/20 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-500/20"
            >
              <FiSave /> Save Draft
            </button>
          </div>
        </header>

        <div className="max-w-6xl mx-auto py-6 grid gap-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2 border border-black/10 p-6 rounded-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <FiBriefcase /> Basic Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm block mb-1">Job Title *</label>
                  <input
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer - Frontend"
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Location *</label>
                  <input
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Bangalore, India"
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Job Type *</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-black/20 px-3 py-2 rounded bg-white"
                  >
                    {jobTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm block mb-1">Position *</label>
                  <input
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Software Developer or Full stack developer..."
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Expected Salary</label>
                  <input
                    name="salary"
                    type="number"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1">Application Deadline</label>
                  <input
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                  />
                </div>
              </div>
            </section>

              {/* Branch Eligibility + Year Eligibility*/}
            <div className="flex flex-col gap-3">
              {/* Eligibility */}
            <section className="border border-black/10 p-6 rounded-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <FiUsers /> Eligibility Criteria
              </h3>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Eligible Branches *</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {branches.map((branch) => (
                    <label key={branch.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.branchCutOff.includes(branch.value)}
                        onChange={() => handleBranchToggle(branch.value)}
                      />
                      {branch.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm block mb-1">CGPA Cutoff</label>
                <input
                  name="cgpaCutOff"
                  type="number"
                  value={formData.cgpaCutOff}
                  onChange={handleChange}
                  className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                />
              </div>

            {/* Year Cutoff */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Eligible Passout Year *</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {branches.map((branch) => (
                    <label key={branch.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.branchCutOff.includes(branch.value)}
                        onChange={() => handleBranchToggle(branch.value)}
                      />
                      {branch.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm block mb-1">CGPA Cutoff</label>
                <input
                  name="cgpaCutOff"
                  type="number"
                  value={formData.cgpaCutOff}
                  onChange={handleChange}
                  className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50"
                />
              </div>
            </section>
            </div>
          </div>

          {/* Job Description */}
          <section className="border border-black/10 p-6 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <p className="text-sm text-gray-500 mb-2">
              Detailed description of the role and responsibilities
            </p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-black/20 px-3 py-2 rounded bg-gray-50 h-32"
              placeholder="Describe the role, responsibilities, and what you’re looking for in a candidate..."
            />
          </section>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button className="px-4 py-2 border border-black/10 rounded text-sm hover:bg-gray-100">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm flex items-center gap-2 hover:bg-blue-500"
            >
              <FiPlus /> Publish Job
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
