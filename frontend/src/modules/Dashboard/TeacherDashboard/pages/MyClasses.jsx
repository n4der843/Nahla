"use client"

import React, { useState, useEffect } from "react"
import { 
  Users, Search, Plus, MoreVertical, Edit2, Trash2, 
  Calendar, Clock, MapPin, ChevronDown, Filter, Download
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../../../components/ui/Card"
import { Button } from "../../../../components/ui/Button"
import { Input } from "../../../../components/ui/Input"
import { Badge } from "../../../../components/ui/Badge"
import { Progress } from "../../../../components/ui/Progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../components/ui/Dialog"
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/Avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/Table"

// Mock data for classes
const classesData = [
  {
    id: 1,
    name: "Mathematics 101",
    code: "MATH101",
    schedule: "MWF 09:00 - 10:30",
    room: "Room 101",
    students: 25,
    avgGrade: 85,
    attendance: 92,
    nextClass: "Monday, 09:00 AM",
    status: "Active"
  },
  {
    id: 2,
    name: "Physics Advanced",
    code: "PHYS201",
    schedule: "TTH 11:00 - 12:30",
    room: "Lab 201",
    students: 18,
    avgGrade: 88,
    attendance: 88,
    nextClass: "Tuesday, 11:00 AM",
    status: "Active"
  },
  {
    id: 3,
    name: "Chemistry Lab",
    code: "CHEM101",
    schedule: "MWF 14:00 - 15:30",
    room: "Lab 102",
    students: 30,
    avgGrade: 82,
    attendance: 85,
    nextClass: "Wednesday, 14:00 PM",
    status: "Active"
  },
  {
    id: 4,
    name: "Biology Basics",
    code: "BIO101",
    schedule: "TTH 09:00 - 10:30",
    room: "Room 303",
    students: 22,
    avgGrade: 90,
    attendance: 94,
    nextClass: "Thursday, 09:00 AM",
    status: "Active"
  }
]

// Mock student data
const studentsData = {
  1: [
    { id: 1, name: "Alice Johnson", email: "alice.j@example.com", grade: 88, attendance: 95 },
    { id: 2, name: "Bob Smith", email: "bob.s@example.com", grade: 92, attendance: 88 },
    { id: 3, name: "Carol Williams", email: "carol.w@example.com", grade: 85, attendance: 93 },
  ],
  2: [
    { id: 4, name: "David Brown", email: "david.b@example.com", grade: 78, attendance: 85 },
    { id: 5, name: "Eve Wilson", email: "eve.w@example.com", grade: 95, attendance: 92 },
  ]
}

const StudentListModal = ({ isOpen, onClose, classData, students }) => {
  console.log("Modal props:", { isOpen, classData, students });
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader className="pb-4 border-b">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">
              {classData?.name} - Students
            </DialogTitle>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`} />
                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-gray-500">Student ID: {student.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {student.grade}%
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {student.attendance}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const MyClasses = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [filteredClasses, setFilteredClasses] = useState(classesData)
  const [selectedClass, setSelectedClass] = useState(null)
  const [isStudentListOpen, setIsStudentListOpen] = useState(false)

  const handleClassClick = (classItem) => {
    console.log("Class clicked:", classItem);
    console.log("Students for this class:", studentsData[classItem.id]);
    setSelectedClass(classItem);
    setIsStudentListOpen(true);
  }

  useEffect(() => {
    const filtered = classesData.filter(classItem =>
      classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classItem.code.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredClasses(filtered)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
          <p className="text-gray-500 mt-1">Manage your classes and students</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add New Class
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search classes..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            onClick={() => setViewMode("grid")}
            className="h-10"
          >
            <Users className="h-5 w-5" />
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            onClick={() => setViewMode("table")}
            className="h-10"
          >
            <Calendar className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Classes Grid/Table */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => (
            <div 
              key={classItem.id} 
              onClick={() => handleClassClick(classItem)}
              className="cursor-pointer"
            >
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">{classItem.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">{classItem.code}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {classItem.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{classItem.students} Students</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{classItem.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{classItem.room}</span>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Attendance</span>
                        <span className="font-medium text-gray-900">{classItem.attendance}%</span>
                      </div>
                      <Progress value={classItem.attendance} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <Card className="bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class Name</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Average Grade</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClasses.map((classItem) => (
                <TableRow 
                  key={classItem.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleClassClick(classItem)}
                >
                  <TableCell className="font-medium">
                    <div>
                      {classItem.name}
                      <div className="text-sm text-gray-500">{classItem.code}</div>
                    </div>
                  </TableCell>
                  <TableCell>{classItem.schedule}</TableCell>
                  <TableCell>{classItem.room}</TableCell>
                  <TableCell>{classItem.students}</TableCell>
                  <TableCell>{classItem.avgGrade}%</TableCell>
                  <TableCell>{classItem.attendance}%</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {classItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Student List Modal */}
      {selectedClass && (
        <StudentListModal 
          isOpen={isStudentListOpen}
          onClose={() => {
            setIsStudentListOpen(false)
            setSelectedClass(null)
          }}
          classData={selectedClass}
          students={selectedClass ? studentsData[selectedClass.id] || [] : []}
        />
      )}
    </div>
  )
}

export default MyClasses 