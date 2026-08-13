/** Scroll → camera thrust physics for the spatial canvas */

export type ScrollCameraState = {
  /** Accumulated travel distance through the universe */
  travel: number;
  /** Current thrust velocity */
  velocity: number;
  /** Horizontal sway from shift/trackpad */
  sway: number;
  swayVelocity: number;
};

export const SCROLL_PHYSICS = {
  /** How hard one wheel notch pushes the camera */
  sensitivity: 0.0072,
  /** Trackpad / high-res wheel multiplier */
  pixelSensitivity: 0.0021,
  /** Velocity damping per frame @60fps baseline */
  damping: 0.74,
  /** Max |velocity| clamp */
  maxVelocity: 3.6,
  /** Travel units per velocity unit per second */
  thrust: 58,
  /** Soft overscroll spring near travel bounds */
  minTravel: -4,
  maxTravel: 220,
  swayDamping: 0.82,
  swaySensitivity: 0.0014,
} as const;

export function createScrollState(): ScrollCameraState {
  return { travel: 0, velocity: 0, sway: 0, swayVelocity: 0 };
}

export function applyWheelDelta(
  state: ScrollCameraState,
  deltaY: number,
  deltaX: number,
  deltaMode: number,
) {
  // deltaMode: 0 = pixels, 1 = lines, 2 = pages
  const lineScale = deltaMode === 1 ? 18 : deltaMode === 2 ? 120 : 1;
  const dy = deltaY * lineScale;
  const dx = deltaX * lineScale;

  const thrust =
    Math.abs(dy) > 40
      ? dy * SCROLL_PHYSICS.pixelSensitivity
      : dy * SCROLL_PHYSICS.sensitivity;

  state.velocity += thrust;
  state.velocity = Math.max(
    -SCROLL_PHYSICS.maxVelocity,
    Math.min(SCROLL_PHYSICS.maxVelocity, state.velocity),
  );

  state.swayVelocity += dx * SCROLL_PHYSICS.swaySensitivity;
}

/** Integrate one frame. dt in seconds. */
export function stepScrollCamera(state: ScrollCameraState, dt: number) {
  const frameScale = Math.min(dt * 60, 2.5);

  state.travel += state.velocity * SCROLL_PHYSICS.thrust * dt;
  state.velocity *= Math.pow(SCROLL_PHYSICS.damping, frameScale);

  state.sway += state.swayVelocity * 28 * dt;
  state.swayVelocity *= Math.pow(SCROLL_PHYSICS.swayDamping, frameScale);
  state.sway *= Math.pow(0.94, frameScale);

  // Soft bounds
  if (state.travel < SCROLL_PHYSICS.minTravel) {
    state.travel += (SCROLL_PHYSICS.minTravel - state.travel) * 0.12;
    state.velocity *= 0.5;
  }
  if (state.travel > SCROLL_PHYSICS.maxTravel) {
    state.travel += (SCROLL_PHYSICS.maxTravel - state.travel) * 0.12;
    state.velocity *= 0.5;
  }

  if (Math.abs(state.velocity) < 0.0004) state.velocity = 0;
  if (Math.abs(state.swayVelocity) < 0.0002) state.swayVelocity = 0;
}

/** Camera pose along the flight path */
export function cameraFromTravel(travel: number, sway: number) {
  // Aggressive forward flight with diagonal cinematic arcs
  // Start elevated so the establishing shot shows the floating canvas,
  // with the designer reading as a small bottom-edge anchor.
  const t = travel;
  const x = Math.sin(t * 0.045) * 3.2 + Math.sin(t * 0.11) * 1.4 + sway * 2.4;
  const y = 3.4 + t * 0.09 + Math.sin(t * 0.07) * 1.1;
  const z = 22 - t * 0.62;

  const lookX = x + Math.sin(t * 0.05) * 0.8 + sway * 0.6;
  const lookY = y - 0.15 + Math.sin(t * 0.09) * 0.35;
  const lookZ = z - 16;

  const rotZ = Math.sin(t * 0.04) * 0.04 + sway * 0.012;
  const rotX = -0.12 + Math.sin(t * 0.03) * 0.03;

  return {
    position: [x, y, z] as [number, number, number],
    lookAt: [lookX, lookY, lookZ] as [number, number, number],
    rotZ,
    rotX,
  };
}

/** Focal project waypoints for targeted zoom moments */
export const FOCUS_BEATS = [
  { travel: 28, title: "Digiclass Roll Call", slug: "digiclass-roll-call" },
  { travel: 72, title: "OncoSmart", slug: "oncosmart" },
  { travel: 118, title: "Infinity AI", slug: "infinity-ai-fintech" },
  { travel: 165, title: "Design systems", slug: "work" },
] as const;

export function nearestFocus(travel: number) {
  let best: (typeof FOCUS_BEATS)[number] = FOCUS_BEATS[0];
  let bestDist = Infinity;
  for (const beat of FOCUS_BEATS) {
    const d = Math.abs(travel - beat.travel);
    if (d < bestDist) {
      bestDist = d;
      best = beat;
    }
  }
  return { beat: best, distance: bestDist };
}
