import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useTheme } from '../../../context/ThemeContext'
import { ParticlesSphere } from '../../../components/ParticlesSphere'
import { ThemeToggle } from '../../../components/ThemeToggle'

export default function SignUpTeacher() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    teacherId: '',
    specialization: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.teacherId) {
      newErrors.teacherId = 'Teacher ID is required'
    }

    if (!formData.department) {
      newErrors.department = 'Department is required'
    }

    if (!formData.specialization) {
      newErrors.specialization = 'Specialization is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Form submitted:', formData)
      navigate('/dashboard/teacher')
    } else {
      console.log('Form has errors:', errors)
    }
  }

  return (
    <div className={`min-h-screen relative ${isDark ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: isDark ? '#0f172a' : '#f8fafc' }}
        >
          <ambientLight intensity={0.5} />
          <ParticlesSphere isDark={isDark} />
        </Canvas>
      </div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 p-6">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <Link 
              to="/" 
              className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              UniLMS
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <div className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full max-w-md p-8 rounded-xl backdrop-blur-lg shadow-xl
              ${isDark 
                ? 'bg-[#1a2438]/40 border border-white/10' 
                : 'bg-white/30 border border-white/20'
              }`}
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-3xl font-bold mb-6 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Join our Teaching Community
            </motion.h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-colors
                    ${isDark 
                      ? 'bg-[#2a3649] text-white placeholder-gray-400 focus:bg-[#2f3b4e]' 
                      : 'bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Teacher ID
                </label>
                <input
                  type="text"
                  name="teacherId"
                  value={formData.teacherId}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-colors
                    ${isDark 
                      ? 'bg-[#2a3649] text-white placeholder-gray-400 focus:bg-[#2f3b4e]' 
                      : 'bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                />
                {errors.teacherId && (
                  <p className="mt-1 text-sm text-red-500">{errors.teacherId}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-colors
                    ${isDark 
                      ? 'bg-[#2a3649] text-white placeholder-gray-400 focus:bg-[#2f3b4e]' 
                      : 'bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                />
                {errors.department && (
                  <p className="mt-1 text-sm text-red-500">{errors.department}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-colors
                    ${isDark 
                      ? 'bg-[#2a3649] text-white placeholder-gray-400 focus:bg-[#2f3b4e]' 
                      : 'bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                />
                {errors.specialization && (
                  <p className="mt-1 text-sm text-red-500">{errors.specialization}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-colors
                    ${isDark 
                      ? 'bg-[#2a3649] text-white placeholder-gray-400 focus:bg-[#2f3b4e]' 
                      : 'bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-colors
                      ${isDark 
                        ? 'bg-[#2a3649] text-white placeholder-gray-400 focus:bg-[#2f3b4e]' 
                        : 'bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                      } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-colors
                    ${isDark 
                      ? 'bg-[#2a3649] text-white placeholder-gray-400 focus:bg-[#2f3b4e]' 
                      : 'bg-white/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg transition-colors font-semibold
                  ${isDark 
                    ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                type="submit"
              >
                Sign Up as Teacher
              </motion.button>
            </form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`mt-6 text-center ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Already have an account?{' '}
              <Link 
                to="/login" 
                className={`font-semibold ${
                  isDark ? 'text-[#3b82f6] hover:text-[#2563eb]' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                Sign In
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
