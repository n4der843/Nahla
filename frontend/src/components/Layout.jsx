import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ParticlesSphere } from './ParticlesSphere'

export function Layout({ children, isDark }) {
  return (
    <div className="min-h-screen relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
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
        {children}
      </div>
    </div>
  )
} 