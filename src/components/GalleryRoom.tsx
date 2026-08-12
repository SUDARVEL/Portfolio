"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { projects } from "@/content/site";
import Link from "next/link";

function Frame({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh position={position}>
        <boxGeometry args={[1.6, 1, 0.08]} />
        <meshStandardMaterial color={color} metalness={0.2} roughness={0.45} />
      </mesh>
    </Float>
  );
}

export function GalleryRoom() {
  return (
    <div className="relative min-h-[70vh] w-full overflow-hidden border border-border bg-surface">
      <Canvas camera={{ position: [0, 0.4, 5.2], fov: 42 }}>
        <color attach="background" args={["#0c0e12"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 2]} intensity={1.2} color="#e2b87a" />
        <Frame position={[-2.1, 0.2, 0]} color="#3d2a18" />
        <Frame position={[0, 0.5, -0.4]} color="#1e3a3a" />
        <Frame position={[2.1, 0.1, 0.2]} color="#4a3020" />
        <OrbitControls enablePan={false} minDistance={3.5} maxDistance={8} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6 md:p-8">
        <p className="text-xs tracking-[0.22em] text-muted uppercase">Spatial gallery</p>
        <p className="mt-2 max-w-lg text-sm text-foreground/80">
          Drag to orbit. Each frame is a stand-in for a project cover — open the editorial path
          below for the hiring-friendly case studies.
        </p>
        <div className="pointer-events-auto mt-4 flex flex-wrap gap-4 text-sm text-accent">
          {projects.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              {project.title} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
