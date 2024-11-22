"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { 
  Calendar, ChevronDown, GraduationCap, Layout, Star, Trophy, 
  User, Book, Clock, Search, Users, Bookmark, CalendarDays, 
  MessageSquare, Bell, MessageCircle, Globe, Settings, LogOut 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/Card"
import { Progress } from "../../../../components/ui/Progress"
import { Button } from "../../../../components/ui/Button"
import { Input } from "../../../../components/ui/Input"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/Avatar"
import { Badge } from "../../../../components/ui/Badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../../components/ui/DropdownMenu"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend,
} from "recharts"
import "./Dashboard.css"

// Data Constants
const progressData = [
  { week: "Week 1", progress: 85 },
  { week: "Week 2", progress: 72 },
  { week: "Week 3", progress: 90 },
  { week: "Week 4", progress: 95 },
]

const scheduleData = [
  { time: "09:00", subject: "Mathematics", room: "Room 101" },
  { time: "11:00", subject: "Physics", room: "Lab 203" },
  { time: "14:00", subject: "Computer Science", room: "Lab 405" },
  { time: "16:00", subject: "English", room: "Room 302" },
]

const gradeData = [
  { subject: "Mathematics", grade: 92 },
  { subject: "Physics", grade: 88 },
  { subject: "Computer Science", grade: 95 },
  { subject: "English", grade: 89 },
]

const attendanceData = [
  { name: "Present", value: 90 },
  { name: "Absent", value: 10 },
]

const studyTimeData = [
  { day: "Mon", hours: 3 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 2 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 1 },
  { day: "Sun", hours: 2 },
]

const classmatesData = [
  { name: "Alice Johnson", avatar: "/placeholder.svg" },
  { name: "Bob Smith", avatar: "/placeholder.svg" },
  { name: "Carol Williams", avatar: "/placeholder.svg" },
  { name: "David Brown", avatar: "/placeholder.svg" },
]

const clubsData = [
  { name: "Debate Club", day: "Monday", time: "16:00" },
  { name: "Chess Club", day: "Wednesday", time: "15:30" },
  { name: "Science Club", day: "Thursday", time: "16:30" },
]

const eventsData = [
  { name: "Science Fair", date: "May 15", location: "School Gymnasium" },
  { name: "Career Day", date: "June 2", location: "Auditorium" },
  { name: "End of Year Party", date: "June 20", location: "School Grounds" },
]

const forumData = [
  { title: "Study Group for Midterms", author: "Alice J.", replies: 15, views: 89 },
  { title: "Question about Assignment 3", author: "Bob S.", replies: 7, views: 42 },
  { title: "Career Fair Tips", author: "Carol W.", replies: 23, views: 156 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const StudentDashboard = () => {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [notifications, setNotifications] = useState(3)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setUserData({
          name: "John Doe",
          avatar: "/placeholder.svg",
          role: "Student",
          year: "3rd Year"
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

  const handleChatRedirect = (chatType) => {
    console.log(`Redirecting to ${chatType} chat`)
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
          <span className="ml-3 text-lg font-semibold">Student Portal</span>
        </div>
        
        <nav className="p-4 space-y-1">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-100">
            <Layout className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/courses" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <Star className="w-5 h-5 mr-3" />
            Courses
          </Link>
          <Link to="/achievements" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <Trophy className="w-5 h-5 mr-3" />
            Achievements
          </Link>
          <Link to="/assignments" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <Book className="w-5 h-5 mr-3" />
            Assignments
          </Link>
          <Link to="/study-tracker" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <Clock className="w-5 h-5 mr-3" />
            Study Tracker
          </Link>
          <Link to="/classmates" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <Users className="w-5 h-5 mr-3" />
            Classmates
          </Link>
          <Link to="/clubs" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
            <Bookmark className="w-5 h-5 mr-3" />
            Clubs
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 h-16 bg-white border-b">
          <div className="flex items-center justify-between h-full px-6">
            <h1 className="text-2xl font-semibold">Student Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search courses, assignments..."
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
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">{userData?.name || 'John Doe'}</p>
                    <p className="text-xs text-gray-500">{userData?.role || 'Student'}</p>
                  </div>
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2">
                    <div className="px-4 py-2 border-b">
                      <p className="font-medium">{userData?.name || 'John Doe'}</p>
                      <p className="text-sm text-gray-500">{userData?.role || 'Student'}</p>
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
          {/* Current Class Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">Current Class: Advanced Mathematics</h2>
              <p className="text-gray-500 mb-4">
                Instructor: Dr. Jane Smith | Room: 101 | Time: MWF 10:00 AM - 11:30 AM
              </p>
              <p className="text-gray-700">
                This advanced course covers topics in calculus, linear algebra, and differential equations.
                Students will engage in rigorous problem-solving and theoretical discussions.
              </p>
            </CardContent>
          </Card>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Class Ranking */}
            <Card>
              <CardHeader>
                <CardTitle>Class Ranking</CardTitle>
                <CardDescription>Current position in class</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gradeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="subject" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="grade" fill="#4F46E5">
                        {gradeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
                <CardDescription>Your learning progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="progress" 
                        stroke="#4F46E5" 
                        strokeWidth={2}
                        dot={{ fill: "#4F46E5" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Cards Grid */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            {/* Schedule Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Schedule</CardTitle>
                  <CardDescription>Your daily classes</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      {selectedDay}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                      <DropdownMenuItem key={day} onClick={() => setSelectedDay(day)}>
                        {day}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduleData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                        <Calendar className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">{item.subject}</p>
                        <p className="text-sm text-gray-500">{item.time} - {item.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Time Card */}
            <Card>
              <CardHeader>
                <CardTitle>Study Time</CardTitle>
                <CardDescription>Hours spent studying this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studyTimeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="#4F46E5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Card */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance</CardTitle>
                <CardDescription>Your attendance record</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={attendanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {attendanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Classmates Card */}
            <Card>
              <CardHeader>
                <CardTitle>Classmates</CardTitle>
                <CardDescription>Your study group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classmatesData.map((classmate, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={classmate.avatar} alt={classmate.name} />
                        <AvatarFallback>{classmate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{classmate.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Clubs Card */}
            <Card>
              <CardHeader>
                <CardTitle>Clubs</CardTitle>
                <CardDescription>Your extracurricular activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clubsData.map((club, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                        <Bookmark className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">{club.name}</p>
                        <p className="text-sm text-gray-500">{club.day} at {club.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Events Card */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>School events and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventsData.map((event, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                        <CalendarDays className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">{event.name}</p>
                        <p className="text-sm text-gray-500">{event.date} - {event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Forum Card - Full Width */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Student Forum</CardTitle>
                <CardDescription>Discuss and share with your peers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forumData.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">{topic.title}</p>
                        <p className="text-sm text-gray-500">Posted by {topic.author}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="mr-4">{topic.replies} replies</span>
                        <span>{topic.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-4">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  New Topic
                </Button>
              </CardContent>
            </Card>

            {/* Chat Cards */}
            <Card className="col-span-3 md:col-span-1">
              <CardHeader>
                <CardTitle>Class Chat</CardTitle>
                <CardDescription>Chat with your classmates</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  onClick={() => handleChatRedirect('class')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Open Class Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="col-span-3 md:col-span-1">
              <CardHeader>
                <CardTitle>University Chat</CardTitle>
                <CardDescription>Connect with students across campus</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  onClick={() => handleChatRedirect('university')}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Open University Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Add this right before the closing main tag */}
        <footer className="mt-6 text-center text-sm text-gray-500">
          <p>© 2024 Student Portal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default StudentDashboard