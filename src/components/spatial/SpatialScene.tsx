"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  applyWheelDelta,
  cameraFromTravel,
  createScrollState,
  nearestFocus,
  stepScrollCamera,
  type ScrollCameraState,
} from "@/lib/spatialPhysics";
import {
  buildScreenLayout,
  createTextureAtlas,
  type ScreenDef,
} from "@/components/spatial/createScreenTextures";

type Props = {
  reducedMotion: boolean;
  onFocusChange?: (title: string | null, intensity: number) => void;
  onVelocityChange?: (speed: number) => void;
  wheelTarget: HTMLElement | null;
};

function DesignerAnchor() {
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load("/images/hero/desk-clouds.png");
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  const uplink = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const a = new Float32Array(120);
    for (let i = 0; i < 40; i++) {
      a[i * 3] = (Math.random() - 0.5) * 0.5;
      a[i * 3 + 1] = Math.random() * 4.5;
      a[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(a, 3));
    return geo;
  }, []);

  return (
    <group position={[0, -2.35, 11.2]}>
      {/* Small grounded creator — bottom anchor, not a hero billboard */}
      <mesh rotation={[-0.22, 0, 0]} position={[0, 0.15, 0]}>
        <planeGeometry args={[3.4, 1.9]} />
        <meshBasicMaterial map={texture} transparent opacity={0.95} />
      </mesh>
      <pointLight position={[0.4, 0.55, 0.9]} intensity={1.1} color="#FFB45C" distance={5} />
      <points position={[0, 1.8, -0.4]} geometry={uplink}>
        <pointsMaterial size={0.035} color="#20BFEA" transparent opacity={0.45} depthWrite={false} />
      </points>
    </group>
  );
}

function FloatingScreen({
  def,
  texture,
  travelRef,
}: {
  def: ScreenDef;
  texture: THREE.CanvasTexture;
  travelRef: React.MutableRefObject<ScrollCameraState>;
}) {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<THREE.MeshStandardMaterial>(null);
  const worldPos = useRef(new THREE.Vector3());
  const aspect = def.width / def.height;
  const h = 1.35 * def.scale;
  const w = h * aspect;

  useFrame(({ camera }) => {
    if (!group.current || !mat.current) return;
    group.current.getWorldPosition(worldPos.current);
    const dist = camera.position.distanceTo(worldPos.current);
    const near = THREE.MathUtils.clamp(1.4 - dist / 28, 0.2, 1);
    mat.current.opacity = 0.35 + near * 0.65;
    mat.current.emissiveIntensity = 0.15 + near * 0.55;

    const t = travelRef.current.travel;
    group.current.position.x =
      def.position[0] + Math.sin(t * 0.02 + def.position[2]) * 0.08;
    group.current.position.y =
      def.position[1] + Math.cos(t * 0.015 + def.position[0]) * 0.06;
    group.current.position.z = def.position[2];

    // Focal pull: screens near their focusTravel face + scale toward camera
    if (def.focusTravel != null) {
      const d = Math.abs(t - def.focusTravel);
      if (d < 14) {
        const pull = 1 - d / 14;
        const base = new THREE.Euler(...def.rotation);
        group.current.rotation.set(base.x, base.y, base.z);
        group.current.lookAt(camera.position);
        group.current.rotation.x = THREE.MathUtils.lerp(base.x, group.current.rotation.x, pull);
        group.current.rotation.y = THREE.MathUtils.lerp(base.y, group.current.rotation.y, pull);
        group.current.rotation.z = THREE.MathUtils.lerp(base.z, group.current.rotation.z, pull * 0.4);
        group.current.scale.setScalar(1 + pull * 0.55);
      } else {
        group.current.rotation.set(...def.rotation);
        group.current.scale.setScalar(1);
      }
    } else {
      group.current.rotation.set(...def.rotation);
    }
  });

  return (
    <group ref={group} position={def.position} rotation={def.rotation}>
      <mesh>
        <planeGeometry args={[w, h]} />
        <meshStandardMaterial
          ref={mat}
          map={texture}
          emissiveMap={texture}
          emissive={new THREE.Color("#20BFEA")}
          emissiveIntensity={0.35}
          transparent
          roughness={0.35}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Soft glow plate behind screen */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[w * 1.06, h * 1.06]} />
        <meshBasicMaterial color="#075FA8" transparent opacity={0.14} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Stars() {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(900);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = Math.random() * 50 - 5;
      arr[i * 3 + 2] = -Math.random() * 160;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial size={0.04} color="#20BFEA" transparent opacity={0.55} depthWrite={false} />
    </points>
  );
}

function CameraRig({
  stateRef,
  reducedMotion,
  onFocusChange,
  onVelocityChange,
}: {
  stateRef: React.MutableRefObject<ScrollCameraState>;
  reducedMotion: boolean;
  onFocusChange?: (title: string | null, intensity: number) => void;
  onVelocityChange?: (speed: number) => void;
}) {
  const { camera } = useThree();
  const look = useRef(new THREE.Vector3());
  const lastFocus = useRef<string | null>(null);
  const lastIntensity = useRef(-1);
  const lastSpeedBucket = useRef(-1);
  const focusLook = useRef(new THREE.Vector3());

  useFrame((_, dt) => {
    if (!reducedMotion) {
      stepScrollCamera(stateRef.current, Math.min(dt, 0.05));
    }

    const { travel, sway, velocity } = stateRef.current;
    const pose = cameraFromTravel(travel, sway);

    camera.position.set(...pose.position);
    look.current.set(...pose.lookAt);

    // Targeted zoom: pull lookAt and FOV when near a focus beat
    const { beat, distance } = nearestFocus(travel);
    const focusPull = distance < 10 ? 1 - distance / 10 : 0;
    if (focusPull > 0) {
      focusLook.current.set(
        pose.position[0] * 0.15,
        pose.position[1] + 0.2,
        pose.position[2] - 8,
      );
      look.current.lerp(focusLook.current, focusPull * 0.65);
      if ("fov" in camera) {
        const persp = camera as THREE.PerspectiveCamera;
        persp.fov = THREE.MathUtils.lerp(58, 42, focusPull);
        persp.updateProjectionMatrix();
      }
    } else if ("fov" in camera) {
      const persp = camera as THREE.PerspectiveCamera;
      persp.fov = THREE.MathUtils.lerp(persp.fov, 58, 0.08);
      persp.updateProjectionMatrix();
    }

    camera.lookAt(look.current);
    camera.rotation.z = pose.rotZ + velocity * 0.015;
    camera.rotation.x += pose.rotX * 0.2;

    const speed = Math.abs(velocity);
    const speedBucket = Math.round(speed * 20);
    if (speedBucket !== lastSpeedBucket.current) {
      lastSpeedBucket.current = speedBucket;
      onVelocityChange?.(speed);
    }

    const title = focusPull > 0.45 ? beat.title : null;
    const intensityBucket = Math.round(focusPull * 12);
    if (title !== lastFocus.current || intensityBucket !== lastIntensity.current) {
      lastFocus.current = title;
      lastIntensity.current = intensityBucket;
      onFocusChange?.(title, focusPull);
    }
  });

  return null;
}

export function SpatialScene({
  reducedMotion,
  onFocusChange,
  onVelocityChange,
  wheelTarget,
}: Props) {
  const stateRef = useRef(createScrollState());
  const screens = useMemo(() => buildScreenLayout(110), []);
  const textures = useMemo(() => createTextureAtlas(), []);

  useEffect(() => {
    if (!wheelTarget || reducedMotion) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      applyWheelDelta(stateRef.current, event.deltaY, event.deltaX, event.deltaMode);
    };

    wheelTarget.addEventListener("wheel", onWheel, { passive: false });
    return () => wheelTarget.removeEventListener("wheel", onWheel);
  }, [wheelTarget, reducedMotion]);

  // Touch support
  useEffect(() => {
    if (!wheelTarget || reducedMotion) return;
    let lastY = 0;
    let lastX = 0;

    const onStart = (e: TouchEvent) => {
      lastY = e.touches[0]?.clientY ?? 0;
      lastX = e.touches[0]?.clientX ?? 0;
    };
    const onMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? lastY;
      const x = e.touches[0]?.clientX ?? lastX;
      const dy = lastY - y;
      const dx = lastX - x;
      lastY = y;
      lastX = x;
      applyWheelDelta(stateRef.current, dy * 1.8, dx * 1.2, 0);
      e.preventDefault();
    };

    wheelTarget.addEventListener("touchstart", onStart, { passive: true });
    wheelTarget.addEventListener("touchmove", onMove, { passive: false });
    return () => {
      wheelTarget.removeEventListener("touchstart", onStart);
      wheelTarget.removeEventListener("touchmove", onMove);
    };
  }, [wheelTarget, reducedMotion]);

  return (
    <>
      <color attach="background" args={["#050B12"]} />
      <fog attach="fog" args={["#050B12", 12, 70]} />

      <ambientLight intensity={0.35} color="#197F91" />
      <directionalLight position={[4, 8, 6]} intensity={0.55} color="#20BFEA" />
      <directionalLight position={[-6, 3, 2]} intensity={0.25} color="#075FA8" />
      <pointLight position={[0, 4, 8]} intensity={0.8} color="#FFB45C" distance={18} />

      <Stars />
      <DesignerAnchor />

      {screens.map((def, i) => {
        const tex =
          textures.get(`${def.kind}:${def.label}`) ??
          textures.get("dashboard:Digiclass");
        if (!tex) return null;
        return (
          <FloatingScreen
            key={`${def.label}-${i}`}
            def={def}
            texture={tex}
            travelRef={stateRef}
          />
        );
      })}

      <CameraRig
        stateRef={stateRef}
        reducedMotion={reducedMotion}
        onFocusChange={onFocusChange}
        onVelocityChange={onVelocityChange}
      />
    </>
  );
}
