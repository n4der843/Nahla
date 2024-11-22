import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { ParticlesSphere } from '../components/ParticlesSphere'
import { ThemeToggle } from '../components/ThemeToggle'
import { useTheme } from '../context/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StudentPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    gsap.utils.toArray('.animate-section').forEach((section, index) => {
      if (index === 0) {
        gsap.set(section, { opacity: 1, y: 0 })
        return
      }

      gsap.fromTo(section,
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
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
        <header className="sticky top-0 bg-[#0f172a]/80 backdrop-blur-sm p-6">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              UniLMS
            </Link>
            <div className="flex items-center space-x-8">
              <ThemeToggle />
              <button className="px-6 py-2 rounded-md border border-gray-700 bg-[#1a2438] hover:bg-[#1f2b42] text-white transition-colors">
                Sign In
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <section className="h-screen flex items-center justify-center px-4 animate-section">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#3b82f6]">
                Student Portal
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                Enhance your learning journey with powerful tools and resources
              </p>
            </div>
          </section>

          {/* Learning Tools Section */}
          <section className="min-h-screen py-20 px-4 animate-section bg-[#1a2438]/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                Learning Tools
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: '📚',
                    title: 'Course Access',
                    description: 'Access all your enrolled courses in one place'
                  },
                  {
                    icon: '📝',
                    title: 'Assignment Manager',
                    description: 'Track and submit your assignments on time'
                  },
                  {
                    icon: '📊',
                    title: 'Progress Tracking',
                    description: 'Monitor your academic progress and grades'
                  }
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="feature-card group p-8 rounded-xl backdrop-blur-lg 
                      transition-all duration-300 hover:-translate-y-2
                      bg-[#0f172a]/40 hover:bg-[#1e293b]/60 border border-white/10
                      relative overflow-hidden hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-4xl mb-6 block transform transition-transform group-hover:scale-110">
                        {tool.icon}
                      </span>
                      <h3 className="text-xl font-semibold mb-4 text-white">
                        {tool.title}
                      </h3>
                      <p className="text-gray-300">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Study Resources Section */}
          <section className="min-h-screen py-20 px-4 animate-section">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                Study Resources
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: '📖',
                    title: 'Digital Library',
                    description: 'Access course materials and reference resources'
                  },
                  {
                    icon: '🎥',
                    title: 'Video Lectures',
                    description: 'Watch recorded lectures and tutorials'
                  },
                  {
                    icon: '✏️',
                    title: 'Study Notes',
                    description: 'Access and create organized study materials'
                  }
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="feature-card group p-8 rounded-xl backdrop-blur-lg 
                      transition-all duration-300 hover:-translate-y-2
                      bg-[#0f172a]/40 hover:bg-[#1e293b]/60 border border-white/10
                      relative overflow-hidden hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-4xl mb-6 block transform transition-transform group-hover:scale-110">
                        {resource.icon}
                      </span>
                      <h3 className="text-xl font-semibold mb-4 text-white">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Collaboration Tools Section */}
          <section className="min-h-screen py-20 px-4 animate-section bg-[#1a2438]/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                Collaboration Tools
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: '👥',
                    title: 'Study Groups',
                    description: 'Join and create study groups with classmates'
                  },
                  {
                    icon: '💬',
                    title: 'Discussion Forums',
                    description: 'Participate in course discussions and debates'
                  },
                  {
                    icon: '📧',
                    title: 'Messaging',
                    description: 'Connect with professors and fellow students'
                  }
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="feature-card group p-8 rounded-xl backdrop-blur-lg 
                      transition-all duration-300 hover:-translate-y-2
                      bg-[#0f172a]/40 hover:bg-[#1e293b]/60 border border-white/10
                      relative overflow-hidden hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-4xl mb-6 block transform transition-transform group-hover:scale-110">
                        {tool.icon}
                      </span>
                      <h3 className="text-xl font-semibold mb-4 text-white">
                        {tool.title}
                      </h3>
                      <p className="text-gray-300">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 animate-section bg-[#1a2438]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Join our community of students
              </p>
              <button className="px-8 py-3 rounded-md bg-[#3b82f6] hover:bg-[#2563eb] text-white transition-colors">
                Create Student Account
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
} 