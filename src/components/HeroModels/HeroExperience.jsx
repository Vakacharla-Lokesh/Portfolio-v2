import React, { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const OrbitControls = lazy(() =>
  import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls }))
);

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <Suspense fallback={null}>
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>

      <HeroLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
