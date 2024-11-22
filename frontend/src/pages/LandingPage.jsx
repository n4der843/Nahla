'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { ParticlesSphere } from '../components/ParticlesSphere'
import { ThemeToggle } from '../components/ThemeToggle'
import { useTheme } from '../context/ThemeContext'
import { SignUpDropdown } from '../components/SignUpDropdown'

export default function LandingPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDark ? 'bg-[#0f172a]' : 'bg-gray-50'
    }`}>
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
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
              className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              UniLMS
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                ['Courses', '/courses'],
                ['For Teachers', '/for-teachers'],
                ['For Students', '/for-students'],
                ['About', '/about'],
                ['Contact', '/contact']
              ].map(([item, url]) => (
                <Link
                  key={item}
                  to={url}
                  className={`text-[15px] transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </Link>
              ))}
              
              <ThemeToggle />
              <SignUpDropdown />
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="min-h-screen flex flex-col justify-center items-center px-4">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? 'text-[#3b82f6]' : 'text-blue-600'
          }`}>
            Welcome to UniLMS
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mb-12 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Your learning management system
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/login/student">
              <button className={`px-8 py-3 rounded-md transition-colors ${
                isDark 
                  ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}>
                Student Login
              </button>
            </Link>
            <Link to="/login/teacher">
              <button className={`px-8 py-3 rounded-md transition-colors ${
                isDark 
                  ? 'border border-gray-700 bg-[#1a2438] hover:bg-[#1f2b42] text-white' 
                  : 'border border-gray-200 bg-white hover:bg-gray-50 text-gray-900'
              }`}>
                Teacher Login
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}