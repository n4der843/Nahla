import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { ParticlesSphere } from '../../../components/ParticlesSphere'
import { ThemeToggle } from '../../../components/ThemeToggle'
import { useTheme } from '../../../context/ThemeContext'

export default function SignUpStudent() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    major: '',
    yearLevel: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Navigate to student dashboard
    navigate('/dashboard/student')
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Canvas */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: isDark ? '#0f172a' : '#f8fafc' }}
        >
          <ambientLight intensity={0.5} />
          <ParticlesSphere isDark={isDark} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 p-6">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-white"
            >
              UniLMS
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-md w-full backdrop-blur-lg bg-[#0f172a]/40 p-8 rounded-xl border border-white/10">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Create Student Account
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Student ID */}
              <div>
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-300 mb-1">
                  Student ID
                </label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Major */}
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-300 mb-1">
                  Major
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Year Level */}
              <div>
                <label htmlFor="yearLevel" className="block text-sm font-medium text-gray-300 mb-1">
                  Year Level
                </label>
                <select
                  id="yearLevel"
                  name="yearLevel"
                  value={formData.yearLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Year Level</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1e293b] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-md transition-colors duration-200"
              >
                Create Account
              </button>
            </form>

            {/* Sign In Link */}
            <p className="mt-4 text-center text-gray-400">
              Already have an account?{' '}
              <Link to="/signin" className="text-blue-400 hover:text-blue-300">
                Sign In
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
