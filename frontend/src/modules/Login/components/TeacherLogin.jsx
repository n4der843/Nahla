import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { ParticlesSphere } from '../../../components/ParticlesSphere'
import { ThemeToggle } from '../../../components/ThemeToggle'
import { useTheme } from '../../../context/ThemeContext'

export default function TeacherLogin() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add authentication logic here
    console.log('Login attempt:', formData)
    navigate('/dashboard/teacher')
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="fixed inset-0">
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
              className="text-2xl font-bold text-white"
            >
              UniLMS
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <main className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-md w-full backdrop-blur-lg bg-[#0f172a]/40 p-8 rounded-xl border border-white/10">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Teacher Login
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
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

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-gray-400">
              <p>Don't have an account?{' '}
                <Link to="/signup/teacher" className="text-blue-500 hover:text-blue-400">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}