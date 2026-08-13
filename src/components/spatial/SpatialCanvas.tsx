"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { SpatialScene } from "@/components/spatial/SpatialScene";

type Props = {
  reducedMotion: boolean;
  onFocusChange?: (title: string | null, intensity: number) => void;
  onVelocityChange?: (speed: number) => void;
};

export function SpatialCanvas({
  reducedMotion,
  onFocusChange,
  onVelocityChange,
}: Props) {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 1.75));
  }, []);

  return (
    <div ref={setRoot} className="h-full w-full touch-none">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 3.4, 22], fov: 58, near: 0.1, far: 220 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#050B12");
        }}
      >
        <SpatialScene
          reducedMotion={reducedMotion}
          onFocusChange={onFocusChange}
          onVelocityChange={onVelocityChange}
          wheelTarget={root}
        />
      </Canvas>
    </div>
  );
}
