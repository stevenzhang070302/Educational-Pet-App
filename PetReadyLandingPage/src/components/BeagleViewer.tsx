import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';

function Model() {
  // Load the 3D model using the GLTF loader
  const { scene } = useGLTF('/assets/Beagle.glb'); // Use your actual model path
  return <primitive object={scene} scale={0.037} position={[0.5, -0.3, 0]} rotation={[0, 0.47, 0]} />;
}

export default function BeagleViewer() {
  return (
    <div style={{ width: '100%', height: '64vh'}}> {/* Expand height */}
      <Canvas camera={{ position: new Vector3(1.5, 1, 2), fov: 45 }}>
        {/* Add ambient and directional lights */}
        <ambientLight intensity={0.8} />  // Increased ambient light intensity
        <directionalLight intensity={1.5} position={[5, 5, 5]} />
        <pointLight position={[-2, 5, -2]} intensity={0.8} />  // Increased point light intensity
        <pointLight position={[2, -3, 5]} intensity={0.8} color="#ffffff" />  // Added another point light

        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* <OrbitControls enableZoom={true} /> */}
      </Canvas>
    </div>
  );
}
