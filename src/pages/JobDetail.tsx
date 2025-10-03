import {
  FiArrowLeft,
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`px-3 py-1 border border-black/10 rounded-md text-sm text-gray-600 ${className}`}
  >
    {children}
  </span>
);

const InfoBlock = ({
  icon: Icon,
  title,
  children,
  iconColor = "text-gray-600",
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  iconColor?: string;
}) => (
  <div className="bg-white p-6 rounded-md shadow-sm border border-black/10">
    <h2 className="text-md font-semibold mb-2 flex items-center">
      <Icon className={`mr-2 ${iconColor}`} />
      {title}
    </h2>
    {children}
  </div>
);

export default function JobDetails() {
  const navigate = useNavigate();

  const job = {
    title: "Software Engineer - Frontend",
    company: "TechCorp Inc.",
    location: "Bangalore, India",
    salary: "₹6.0L - ₹12.0L",
    posted: "627 days ago",
    applyBy: "2/15/2024",
    expired: true,
    type: "FULL TIME",
    status: "Applied",
    description:
      "Join our team to build next-generation web applications using React, TypeScript, and modern frontend technologies.",
    skills: ["React", "TypeScript", "HTML/CSS", "Git"],
    departments: ["Computer Science", "Electronics"],
    graduationYears: ["2024", "2025"],
    applicationStats: {
      total: 45,
      positions: 3,
      status: "ACTIVE",
    },
    companyInfo: {
      name: "TechCorp Inc.",
      industry: "Technology",
      size: "1000+ employees",
      founded: "2010",
    },
    applicationStatus: "Application Submitted",
    applicationNote:
      "Your application is under review. You'll be notified once there's an update.",
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side bar */}
      <SideBar />

      {/* Body */}
      <main className="flex-1 pl-72 p-8">
        <div className="max-w-6xl mx-auto py-6 px-4">
          {/* Back Button */}
          <button className="flex items-center text-gray-600 mb-4 hover:bg-gray-300/20 px-2 py-1 rounded-sm hover:cursor-pointer"
          onClick={()=> navigate('/student/jobs')}>
            <FiArrowLeft className="mr-2" /> Back to Jobs
          </button>

          {/* Job Header */}
          <div className="bg-white p-6 rounded-md shadow-sm border border-black/10 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold">{job.title}</h1>
                <p className="flex items-center text-gray-600 mt-1">
                  <FiBriefcase className="mr-2" /> {job.company}
                </p>
                <div className="flex flex-wrap gap-6 text-gray-500 mt-3">
                  <span className="flex items-center">
                    <FiMapPin className="mr-1" /> {job.location}
                  </span>
                  <span>{job.salary}</span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" /> Posted {job.posted}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Apply by {job.applyBy} {job.expired && "(Expired)"}
                </p>
              </div>

              <div className="flex gap-3 text-right">
                <Badge className="bg-blue-100 !text-blue-500 font-medium rounded-sm">
                  {job.type}
                </Badge>
                <Badge className="bg-green-100 text-green-600 flex items-center font-medium rounded-sm">
                  <FiCheckCircle className="mr-1" /> {job.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6 col-span-2">
              <InfoBlock icon={FiBriefcase} title="Job Description">
                <p className="text-gray-600 text-sm">{job.description}</p>
              </InfoBlock>

              <InfoBlock icon={FiCheckCircle} title="Requirements">
                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </InfoBlock>

              <InfoBlock icon={FiBriefcase} title="Eligible Departments">
                <div className="flex flex-wrap gap-3">
                  {job.departments.map((dept) => (
                    <Badge key={dept}>{dept}</Badge>
                  ))}
                </div>
              </InfoBlock>

              <InfoBlock icon={FiClock} title="Eligible Graduation Years">
                <div className="flex flex-wrap gap-3">
                  {job.graduationYears.map((year) => (
                    <Badge key={year}>{year}</Badge>
                  ))}
                </div>
              </InfoBlock>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <InfoBlock
                icon={FiCheckCircle}
                title="Application Status"
                iconColor="text-green-600"
              >
                <p className="text-green-600 font-medium mb-1">
                  {job.applicationStatus}
                </p>
                <p className="text-gray-500 text-sm">{job.applicationNote}</p>
              </InfoBlock>

              <InfoBlock
                icon={FiInfo}
                title="About Company"
                iconColor="text-blue-600"
              >
                <p className="font-medium">{job.companyInfo.name}</p>
                <p className="text-gray-500 text-sm mb-3">Technology Company</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-medium">Industry:</span>{" "}
                    {job.companyInfo.industry}
                  </p>
                  <p>
                    <span className="font-medium">Size:</span>{" "}
                    {job.companyInfo.size}
                  </p>
                  <p>
                    <span className="font-medium">Founded:</span>{" "}
                    {job.companyInfo.founded}
                  </p>
                </div>
              </InfoBlock>

              <InfoBlock
                icon={FiBriefcase}
                title="Application Stats"
                iconColor="text-purple-600"
              >
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-medium">Total Applications:</span>{" "}
                    {job.applicationStats.total}
                  </p>
                  <p>
                    <span className="font-medium">Positions Available:</span>{" "}
                    {job.applicationStats.positions}
                  </p>
                  <p>
                    <span className="font-medium">Application Status:</span>{" "}
                    <span className="text-green-600 font-medium">
                      {job.applicationStats.status}
                    </span>
                  </p>
                </div>
              </InfoBlock>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
