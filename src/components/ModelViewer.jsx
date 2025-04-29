// components/ModelViewer.jsx

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

// Spinner Loader
function Loader() {
  return (
    <Html center>
      <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </Html>
  );
}

// Model Loader + Animation
function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y = elapsedTime * 0.5;
      modelRef.current.position.y = Math.sin(elapsedTime) * 0.2;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
}

// Full Viewer
const ModelViewer = ({ modelPath, autoRotate = true }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model url={modelPath} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={autoRotate} autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
