"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { 
  Calendar, ChevronDown, GraduationCap, Layout, Book, Clock, 
  Search, Users, Bell, Settings, LogOut, User, FileText, 
  PieChart as PieChartIcon, Presentation, ClipboardList, MessageSquare,
  Plus, CheckCircle, XCircle, AlertCircle, Download, Upload,
  BarChart2, BookOpen, Calendar as CalendarIcon
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/Card"
import { Progress } from "../../../../components/ui/Progress"
import { Button } from "../../../../components/ui/Button"
import { Input } from "../../../../components/ui/Input"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/Avatar"
import { Badge } from "../../../../components/ui/Badge"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend,
} from "recharts"

// Data Constants
const classPerformanceData = [
  { class: "Mathematics 101", avgGrade: 85, attendance: 90, submissions: 45 },
  { class: "Physics Advanced", avgGrade: 78, attendance: 85, submissions: 40 },
  { class: "Chemistry Basics", avgGrade: 82, attendance: 88, submissions: 42 },
  { class: "Biology 201", avgGrade: 88, attendance: 92, submissions: 44 },
]

const upcomingClassesData = [
  { time: "09:00", class: "Mathematics 101", room: "Room 201", students: 25 },
  { time: "11:00", class: "Physics Advanced", room: "Lab 305", students: 18 },
  { time: "14:00", class: "Chemistry Basics", room: "Lab 102", students: 30 },
  { time: "16:00", class: "Biology 201", room: "Room 405", students: 22 },
]

const assignmentData = [
  { title: "Calculus Quiz", dueDate: "May 15", submitted: 20, total: 25, class: "Mathematics 101" },
  { title: "Physics Lab Report", dueDate: "May 18", submitted: 15, total: 18, class: "Physics Advanced" },
  { title: "Chemistry Test", dueDate: "May 20", submitted: 28, total: 30, class: "Chemistry Basics" },
  { title: "Biology Project", dueDate: "May 22", submitted: 18, total: 22, class: "Biology 201" },
]

const studentAttendanceData = [
  { name: "Present", value: 85, color: "#10B981" },
  { name: "Absent", value: 10, color: "#EF4444" },
  { name: "Late", value: 5, color: "#F59E0B" },
]

const recentSubmissionsData = [
  { student: "Alice Johnson", assignment: "Calculus Quiz", grade: "95/100", date: "May 10", status: "Graded" },
  { student: "Bob Smith", assignment: "Physics Lab", grade: "88/100", date: "May 9", status: "Graded" },
  { student: "Carol Williams", assignment: "Chemistry Test", grade: "92/100", date: "May 8", status: "Graded" },
  { student: "David Brown", assignment: "Biology Project", grade: "Pending", date: "May 11", status: "Pending" },
  { student: "Eve Wilson", assignment: "Mathematics Quiz", grade: "Pending", date: "May 11", status: "Pending" },
]

const announcementsData = [
  { title: "Midterm Schedule", date: "May 15", class: "All Classes", priority: "High" },
  { title: "Lab Safety Review", date: "May 18", class: "Physics Advanced", priority: "Medium" },
  { title: "Parent-Teacher Meeting", date: "May 20", class: "All Classes", priority: "High" },
  { title: "Study Materials Posted", date: "May 16", class: "Mathematics 101", priority: "Low" },
]

const resourcesData = [
  { title: "Lecture Slides - Week 1", type: "PDF", downloads: 45, date: "May 1" },
  { title: "Practice Problems Set", type: "DOC", downloads: 38, date: "May 5" },
  { title: "Video Tutorial - Chapter 3", type: "MP4", downloads: 52, date: "May 8" },
  { title: "Study Guide", type: "PDF", downloads: 63, date: "May 10" },
]

const studentProgressData = [
  { week: "Week 1", averageGrade: 82 },
  { week: "Week 2", averageGrade: 85 },
  { week: "Week 3", averageGrade: 88 },
  { week: "Week 4", averageGrade: 86 },
  { week: "Week 5", averageGrade: 90 },
]

const COLORS = ['#10B981', '#EF4444', '#F59E0B', '#6366F1', '#8B5CF6'] 

// Quick Stat Card Component
const QuickStatCard = ({ title, value, icon, trend }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              {icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">{title}</p>
              <h3 className="text-2xl font-bold">{value}</h3>
            </div>
          </div>
          <div className="text-sm text-gray-500">{trend}</div>
        </div>
      </CardContent>
    </Card>
  )
}

// Class Performance Card Component
const ClassPerformanceCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Class Performance</CardTitle>
        <CardDescription>Average grades and attendance by class</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgGrade" name="Average Grade" fill="#4F46E5" />
              <Bar dataKey="attendance" name="Attendance %" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// Student Progress Card Component
const StudentProgressCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Progress</CardTitle>
        <CardDescription>Average class performance over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="averageGrade" 
                stroke="#4F46E5" 
                strokeWidth={2}
                dot={{ fill: "#4F46E5" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// Upcoming Classes Card Component
const UpcomingClassesCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Classes</CardTitle>
        <CardDescription>Today's schedule</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.class}</p>
                <p className="text-sm text-gray-500">
                  {item.time} • {item.room} • {item.students} students
                </p>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Recent Submissions Card Component
const RecentSubmissionsCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
        <CardDescription>Latest assignment submissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
              <div>
                <p className="font-medium">{item.student}</p>
                <p className="text-sm text-gray-500">{item.assignment}</p>
              </div>
              <div className="text-right">
                <Badge variant={item.status === "Graded" ? "success" : "warning"}>
                  {item.grade}
                </Badge>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Attendance Overview Card Component
const AttendanceOverviewCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Overview</CardTitle>
        <CardDescription>Current semester statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// Assignments Card Component
const AssignmentsCard = ({ data }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Assignments</CardTitle>
          <CardDescription>Current and upcoming assignments</CardDescription>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Assignment
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">Due: {item.dueDate}</p>
              </div>
              <div className="text-right">
                <Progress value={(item.submitted / item.total) * 100} className="w-24" />
                <p className="text-sm text-gray-500 mt-1">
                  {item.submitted}/{item.total} submitted
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Announcements Card Component
const AnnouncementsCard = ({ data }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Announcements</CardTitle>
          <CardDescription>Latest updates and notices</CardDescription>
        </div>
        <Button variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          New Announcement
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.date} • {item.class}</p>
              </div>
              <Badge variant={
                item.priority === "High" ? "destructive" : 
                item.priority === "Medium" ? "warning" : 
                "secondary"
              }>
                {item.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Resources Card Component
const ResourcesCard = ({ data }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Teaching Resources</CardTitle>
          <CardDescription>Course materials and documents</CardDescription>
        </div>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          Upload Resource
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.type} • {item.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{item.downloads}</span>
                <Download className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState("Mathematics 101")
  const [notifications, setNotifications] = useState(5)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState(null)
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setUserData({
          name: "Dr. Sarah Wilson",
          avatar: "/placeholder.svg",
          role: "Senior Teacher",
          department: "Mathematics"
        })
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleNotificationClick = () => {
    setNotifications(0)
  }

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r">
        <div className="flex items-center h-16 px-6 border-b">
          <GraduationCap className="w-6 h-6" />
          <span className="ml-3 text-lg font-semibold">Teacher Portal</span>
        </div>
        
        <nav className="p-4 space-y-1">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-100">
            <Layout className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link 
            to="/dashboard/teacher/classes" 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
              location.pathname === '/dashboard/teacher/classes' 
                ? 'bg-gray-100' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            My Classes
          </Link>
          <Link to="/assignments" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <FileText className="w-5 h-5 mr-3" />
            Assignments
          </Link>
          <Link to="/grades" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <ClipboardList className="w-5 h-5 mr-3" />
            Grades
          </Link>
          <Link to="/attendance" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <PieChartIcon className="w-5 h-5 mr-3" />
            Attendance
          </Link>
          <Link to="/resources" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <Book className="w-5 h-5 mr-3" />
            Resources
          </Link>
          <Link to="/calendar" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <CalendarIcon className="w-5 h-5 mr-3" />
            Calendar
          </Link>
          <Link to="/reports" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <BarChart2 className="w-5 h-5 mr-3" />
            Reports
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 h-16 bg-white border-b">
          <div className="flex items-center justify-between h-full px-6">
            <h1 className="text-2xl font-semibold">Teacher Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search students, classes..."
                  className="w-[400px] h-10 pl-10 pr-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>

              <button 
                className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                onClick={handleNotificationClick}
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              <div className="relative">
                <button 
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Avatar>
                    <AvatarImage src={userData?.avatar} />
                    <AvatarFallback>SW</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Dr. Sarah Wilson</p>
                    <p className="text-xs text-gray-500">Senior Teacher</p>
                  </div>
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2">
                    <div className="px-4 py-2 border-b">
                      <p className="font-medium">Dr. Sarah Wilson</p>
                      <p className="text-sm text-gray-500">Senior Teacher</p>
                    </div>
                    
                    <div className="py-1">
                      <button 
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </button>
                      
                      <button 
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </button>
                      
                      <button 
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center text-red-600"
                        onClick={() => setIsOpen(false)}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <QuickStatCard
              title="Total Students"
              value="245"
              icon={<Users className="w-6 h-6" />}
              trend="+12% from last month"
            />
            <QuickStatCard
              title="Average Attendance"
              value="87%"
              icon={<CheckCircle className="w-6 h-6" />}
              trend="+3% from last week"
            />
            <QuickStatCard
              title="Assignments Due"
              value="12"
              icon={<FileText className="w-6 h-6" />}
              trend="4 need grading"
            />
            <QuickStatCard
              title="Class Average"
              value="85%"
              icon={<BarChart2 className="w-6 h-6" />}
              trend="+5% from last term"
            />
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <ClassPerformanceCard data={classPerformanceData} />
            <StudentProgressCard data={studentProgressData} />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <UpcomingClassesCard data={upcomingClassesData} />
            <RecentSubmissionsCard data={recentSubmissionsData} />
            <AttendanceOverviewCard data={studentAttendanceData} />
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <AssignmentsCard data={assignmentData} />
            <AnnouncementsCard data={announcementsData} />
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6">
            <ResourcesCard data={resourcesData} />
          </div>
        </main>

        <footer className="mt-6 text-center text-sm text-gray-500 pb-6">
          <p>© 2024 Teacher Portal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default TeacherDashboard 