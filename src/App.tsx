import { Route, Routes } from "react-router-dom"
import IntroPage from "./pages/IntroPage"
import StudentDashboard from "./pages/StudentDashboard"
import StudentProfile from "./pages/StudentProfile"
import StudentApplications from "./pages/StudentApplications"
import CompanyDashboard from "./pages/CompanyDashboard"
import JobApplications from "./pages/JobApplications"
import ResumeAssistant from "./pages/ResumeAssitant"
import AvailableJobs from "./pages/AvailableJobs"

function App() {

  return (
    <Routes>
      <Route>
        <Route path="/" element={<IntroPage />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/applications" element={<StudentApplications />} />
        <Route path="/student/jobs" element={<AvailableJobs />} />

        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/students-applications" element={<JobApplications />} />

        <Route path="/student/resume-review" element={<ResumeAssistant />} />
      </Route>
    </Routes>
  )
}

export default App
