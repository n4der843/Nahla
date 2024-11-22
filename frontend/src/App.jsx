import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import LandingPage from './pages/LandingPage'
import StudentPage from './pages/StudentPage'
import TeacherPage from './pages/TeacherPage'
import SignUpTeacher from './modules/SignUp/components/signUpTeacher'
import SignUpStudent from './modules/SignUp/components/SignUpStudent'
import StudentDashboard from './modules/Dashboard/StudentDashboard'
import TeacherDashboard from './modules/Dashboard/TeacherDashboard'
import MyClasses from './modules/Dashboard/TeacherDashboard/pages/MyClasses'
import StudentLogin from './modules/Login/components/StudentLogin'
import TeacherLogin from './modules/Login/components/TeacherLogin'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/for-students" element={<StudentPage />} />
            <Route path="/for-teachers" element={<TeacherPage />} />
            <Route path="/signup/student" element={<SignUpStudent />} />
            <Route path="/signup/teacher" element={<SignUpTeacher />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/dashboard/teacher/classes" element={<MyClasses />} />
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/teacher" element={<TeacherLogin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
