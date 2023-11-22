import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

import skyScene from '../assets/3d/sky.glb'

export default function Sky({ isRotating }: any) {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
  <mesh ref={skyRef}>
    <primitive object={sky.scene} />
  </mesh>
)
}