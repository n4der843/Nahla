import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export function SignUpDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleOptionClick = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-6 py-2 rounded-md transition-colors flex items-center space-x-2 ${
          isDark 
            ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <span>Sign Up</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 ${
          isDark 
            ? 'bg-[#1a2438] border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <button
            onClick={() => handleOptionClick('/signup/teacher')}
            className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
              isDark 
                ? 'text-gray-200 hover:bg-[#2a3649]' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Sign up as Teacher
          </button>
          <button
            onClick={() => handleOptionClick('/signup/student')}
            className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
              isDark 
                ? 'text-gray-200 hover:bg-[#2a3649]' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Sign up as Student
          </button>
        </div>
      )}
    </div>
  )
} 