import { FiMapPin, FiCalendar, FiPlus } from "react-icons/fi";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import axios from "axios";
import type { Job } from "../types/job.types";

type Application = {
  id: string;
  jobTitle: string;
  candidateName: string;
  email: string;
  date: string;
  status: string;
};

// ✅ Mock data (used for now)
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    location: "Bangalore, India",
    lastDate: "10/11/2025",
    status: "active",
    type: "full-time",
    applications: [1, 2, 3], // dummy array just to get count
  },
  {
    id: "2",
    title: "Backend Developer",
    location: "Noida, India",
    lastDate: "10/15/2025",
    status: "closed",
    type: "full-time",
    applications: [1, 2],
  },
  {
    id: "3",
    title: "UI/UX Designer",
    location: "Remote",
    lastDate: "11/01/2025",
    status: "active",
    type: "part-time",
    applications: [],
  },
];

const mockApplications: Application[] = [
  {
    id: "a1",
    jobTitle: "Frontend Developer",
    candidateName: "John Doe",
    email: "john@example.com",
    date: "10/01/2025",
    status: "shortlisted",
  },
  {
    id: "a2",
    jobTitle: "Backend Developer",
    candidateName: "Jane Smith",
    email: "jane@example.com",
    date: "10/03/2025",
    status: "pending",
  },
  {
    id: "a3",
    jobTitle: "UI/UX Designer",
    candidateName: "Alex Johnson",
    email: "alex@example.com",
    date: "10/04/2025",
    status: "shortlisted",
  },
];

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const [companyJobs, setCompanyJobs] = useState<Job[]>(mockJobs);
  const [jobApplications, setJobApplications] = useState<Application[]>(mockApplications);
  const [activeJobs, setActiveJobs] = useState<number>(0);
  const [shortlistedApplications, setShortlistedApplications] = useState<number>(0);

  // ✅ Keeping logic for future use (commented out)
  /*
  const fetchJobPosts = async () => {
    const token = localStorage.getItem("auth");
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/company/jobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        const jobs = response.data?.data || [];
        setCompanyJobs(jobs);
        setActiveJobs(jobs.filter((job: Job) => job.status === "active").length);
      }
    } catch (err) {
      toast.error("Error in fetching jobs");
    }
  };

  const fetchJobApplications = async () => {
    const token = localStorage.getItem("auth");
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/company/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        const apps = response.data?.data || [];
        setJobApplications(apps);
        setShortlistedApplications(apps.filter((app: Application) => app.status === "shortlisted").length);
      }
    } catch (err) {
      toast.error("Error in fetching job applications");
    }
  };
  */

  useEffect(() => {
    // ✅ You can uncomment this when backend is ready
    // fetchJobPosts();
    // fetchJobApplications();

    // const interval = setInterval(fetchJobApplications, 5000);
    // return () => clearInterval(interval);

    // Logic for mock data
    setActiveJobs(mockJobs.filter((job) => job.status === "active").length);
    setShortlistedApplications(mockApplications.filter((app) => app.status === "shortlisted").length);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="flex">
        <SideBar />

        <main className="flex-1 p-8 pl-72">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">Company Dashboard</h2>
              <p className="text-sm text-gray-500">
                Manage your job postings and recruitment
              </p>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm flex items-center gap-2 hover:cursor-pointer"
              onClick={() => navigate("/company/post-job")}
            >
              <FiPlus /> Post New Job
            </button>
          </header>

          {/* Stat cards */}
          <section className="grid grid-cols-4 gap-4 mb-6">
            <StatCard title="Total Jobs Posted" value={companyJobs.length} />
            <StatCard title="Active Jobs" value={activeJobs} />
            <StatCard title="Total Applications" value={jobApplications.length} />
            <StatCard title="Shortlisted" value={shortlistedApplications} />
          </section>

          {/* Job Postings & Applications */}
          <section className="grid grid-cols-2 gap-6 mb-6">
            {/* Recent Job Postings */}
            <div className="bg-white border border-black/10 rounded p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Recent Job Postings</h3>
                  <p className="text-sm text-gray-500">Your latest job postings</p>
                </div>
                <button
                  className="text-sm text-blue-600 hover:text-blue-500"
                  onClick={() => navigate("/company/jobs")}
                >
                  View All
                </button>
              </div>
              <div className="flex flex-col gap-2 h-80 overflow-y-auto">
                {companyJobs.slice(0, 5).map((j) => (
                  <div key={j.id} className="flex justify-between border border-black/10 rounded px-4 py-3">
                    <div className="flex flex-col gap-1 mt-1">
                      <div className="font-semibold">{j.title}</div>
                      <div className="flex gap-2 items-center text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <FiMapPin /> {j.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiCalendar /> {j.lastDate}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {j.applications?.length ?? 0} applications
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-2 text-xs">
                      <div className="flex gap-3">
                        <span className="px-2 py-1 rounded-sm shadow-xs bg-blue-100 text-blue-700 border border-blue-500/30">
                          {j.status}
                        </span>
                        <span className="px-2 py-1 rounded-sm shadow-xs bg-gray-100 text-gray-700 border border-gray-500/30">
                          {j.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white border border-black/10 rounded p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Recent Applications</h3>
                  <p className="text-sm text-gray-500">
                    Latest applications for your jobs
                  </p>
                </div>
                <button className="text-sm text-blue-600">View All</button>
              </div>
              <div className="flex flex-col gap-2 h-80 overflow-y-auto">
                {jobApplications.length === 0 ? (
                  <p className="text-sm text-gray-500">No applications yet</p>
                ) : (
                  jobApplications.slice(0, 5).map((app) => (
                    <div key={app.id} className="border border-black/10 rounded p-4 flex items-start justify-between">
                      <div>
                        <div className="font-semibold">{app.candidateName}</div>
                        <div className="text-sm text-gray-500">{app.email}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Applied for: {app.jobTitle}
                        </div>
                        <div className="text-gray-500 flex items-center gap-1 text-xs mt-1">
                          <FiCalendar /> {app.date}
                        </div>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-sm shadow-xs text-xs border
                          ${
                            app.status === "shortlisted"
                              ? "bg-green-100 text-green-700 border-green-500/30"
                              : "bg-gray-100 text-gray-700 border-gray-500/30"
                          }
                        `}
                      >
                        {app.status}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="border border-black/20 rounded-md bg-white p-4">
      <div className="text-xs text-gray-500 mb-1">{title}</div>
      <div className="text-2xl font-semibold text-gray-800">{value}</div>
    </div>
  );
}
