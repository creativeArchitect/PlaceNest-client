import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import IntroPage from "./pages/IntroPage"
import StudentDashboard from "./pages/StudentDashboard"
import StudentProfile from "./pages/StudentProfile"
import StudentApplications from "./pages/StudentApplications"
import CompanyDashboard from "./pages/CompanyDashboard"
import JobApplications from "./pages/JobApplications"
import ResumeAssistant from "./pages/ResumeAssitant"
import PostJob from "./pages/PostJob"
import ManageJobs from "./pages/ManageJobs"
import CoordinatorDashboard from "./CoordinatorDashboard"
import StudentManagement from "./StudentManagement"
import JobManagement from "./pages/JobManagement"
import ManageCompanies from "./pages/ManageCompanies"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { useAuth } from "./context/AuthContext"
import StudentJobs from "./pages/StudentJobs"
import JobDetailsPage from "./pages/JobDetail"
import JobDetails from "./pages/JobDetail"

const PublicOnlyRoute = ()=> {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <Outlet />;
  }

  switch (user.role) {
    case "STUDENT":
      return <Navigate to="/student/dashboard" />;
    case "COMPANY":
      return <Navigate to="/company/dashboard" />;
    case "COORDINATOR":
      return <Navigate to="/coordinator/dashboard" />;
    default:
      return <Navigate to="/" />;
  }
}

function App() {

  return (
    <Routes>
      <Route element={<PublicOnlyRoute />}>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/applications" element={<StudentApplications />} />
        <Route path="/student/jobs" element={<StudentJobs />} />
        <Route path="/student/job" element={<JobDetails />} />

        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/students-applications" element={<JobApplications />} />
        <Route path="/company/post-job" element={<PostJob />} />
        <Route path="/company/manage-jobs" element={<ManageJobs />} />

        <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />
        <Route path="/coordinator/manage-students" element={<StudentManagement />} />
        <Route path="/coordinator/manage-jobs" element={<JobManagement />} />
        <Route path="/coordinator/manage-companies" element={<ManageCompanies />} />

        <Route path="/student/resume-review" element={<ResumeAssistant />} />
    </Routes>
  )
}

export default App
