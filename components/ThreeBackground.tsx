'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null!)
  
  const particlesCount = 3000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 100
      positions[i3 + 1] = (Math.random() - 0.5) * 100
      positions[i3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [particlesCount])

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower, more gentle rotation for breathing effect
      ref.current.rotation.x -= delta * 0.02
      ref.current.rotation.y -= delta * 0.03
      // Subtle breathing scale
      const breathe = Math.sin(state.clock.elapsedTime * 0.3) * 0.02 + 1
      ref.current.scale.set(breathe, breathe, breathe)
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function WaveGrid() {
  const ref = useRef<THREE.Mesh>(null!)
  const gridSize = 50
  const gridDivisions = 50

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime()
      const geometry = ref.current.geometry
      const positions = geometry.attributes.position.array as Float32Array

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const z = positions[i + 2]
        // Gentler wave motion for breathing effect
        positions[i + 1] = Math.sin(x * 0.3 + time * 0.5) * 0.4 + Math.cos(z * 0.3 + time * 0.5) * 0.4
      }

      geometry.attributes.position.needsUpdate = true
      geometry.computeVertexNormals()
    }
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[gridSize, gridSize, gridDivisions, gridDivisions]} />
      <meshBasicMaterial
        color="#0ea5e9"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <StarField />
        <WaveGrid />
      </Canvas>
    </div>
  )
}

export default ThreeBackground

