import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

export function ParticlesSphere({ isDark }) {
  const meshRef = useRef()
  const particlesCount = 2000
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    const radius = 2

    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.6}
        color={isDark ? '#4f46e5' : '#3b82f6'}
        sizeAttenuation
      />
    </points>
  )
} 