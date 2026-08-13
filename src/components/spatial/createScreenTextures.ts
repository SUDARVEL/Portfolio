import * as THREE from "three";

const PALETTE = {
  bg: "#0a1624",
  panel: "#0f2133",
  card: "#132a40",
  blue: "#075FA8",
  cyan: "#20BFEA",
  teal: "#197F91",
  warm: "#FFB45C",
  text: "#d7e8f5",
  muted: "#6f8aa0",
  line: "rgba(32,191,234,0.22)",
};

type Kind =
  | "dashboard"
  | "mobile"
  | "wireframe"
  | "auth"
  | "typography"
  | "case"
  | "system";

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function paintChrome(ctx: CanvasRenderingContext2D, w: number, h: number, title: string) {
  ctx.fillStyle = PALETTE.bg;
  roundedRect(ctx, 0, 0, w, h, 18);
  ctx.fill();

  ctx.fillStyle = "#0c1a28";
  ctx.fillRect(0, 0, w, 36);
  ctx.fillStyle = "#ff5f57";
  ctx.beginPath();
  ctx.arc(18, 18, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#febc2e";
  ctx.beginPath();
  ctx.arc(34, 18, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#28c840";
  ctx.beginPath();
  ctx.arc(50, 18, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = PALETTE.muted;
  ctx.font = "600 12px system-ui, sans-serif";
  ctx.fillText(title, 68, 22);
}

function drawDashboard(ctx: CanvasRenderingContext2D, w: number, h: number, label: string) {
  paintChrome(ctx, w, h, label);
  ctx.fillStyle = PALETTE.panel;
  roundedRect(ctx, 18, 52, 110, h - 70, 12);
  ctx.fill();

  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = i === 1 ? PALETTE.cyan : PALETTE.card;
    roundedRect(ctx, 34, 72 + i * 42, 78, 28, 8);
    ctx.fill();
  }

  ctx.fillStyle = PALETTE.card;
  roundedRect(ctx, 146, 52, w - 168, 110, 14);
  ctx.fill();
  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(170, 130);
  ctx.bezierCurveTo(220, 70, 280, 150, 340, 90);
  ctx.bezierCurveTo(380, 60, 420, 120, w - 40, 80);
  ctx.stroke();

  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = PALETTE.card;
    roundedRect(ctx, 146 + i * ((w - 180) / 3), 180, (w - 200) / 3, 90, 12);
    ctx.fill();
    ctx.fillStyle = i === 0 ? PALETTE.cyan : i === 1 ? PALETTE.warm : PALETTE.teal;
    ctx.font = "700 22px system-ui, sans-serif";
    ctx.fillText(["250+", "+15%", "−18%"][i], 162 + i * ((w - 180) / 3), 222);
    ctx.fillStyle = PALETTE.muted;
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText(["Sessions", "Efficiency", "Errors"][i], 162 + i * ((w - 180) / 3), 246);
  }
}

function drawMobile(ctx: CanvasRenderingContext2D, w: number, h: number, label: string) {
  ctx.fillStyle = "#071018";
  roundedRect(ctx, 0, 0, w, h, 28);
  ctx.fill();
  ctx.fillStyle = PALETTE.panel;
  roundedRect(ctx, 10, 10, w - 20, h - 20, 22);
  ctx.fill();

  ctx.fillStyle = PALETTE.muted;
  ctx.font = "600 11px system-ui, sans-serif";
  ctx.fillText(label, 28, 42);

  ctx.fillStyle = PALETTE.cyan;
  ctx.font = "700 20px system-ui, sans-serif";
  ctx.fillText("Live roll call", 28, 78);

  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = PALETTE.card;
    roundedRect(ctx, 24, 100 + i * 58, w - 48, 48, 12);
    ctx.fill();
    ctx.fillStyle = PALETTE.text;
    ctx.font = "600 13px system-ui, sans-serif";
    ctx.fillText(["Present", "Late", "Absent", "Sync"][i], 40, 128 + i * 58);
    ctx.fillStyle = [PALETTE.cyan, PALETTE.warm, "#e76f6f", PALETTE.teal][i];
    roundedRect(ctx, w - 78, 114 + i * 58, 40, 20, 10);
    ctx.fill();
  }
}

function drawWireframe(ctx: CanvasRenderingContext2D, w: number, h: number, label: string) {
  paintChrome(ctx, w, h, label);
  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 1.5;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const x = 24 + col * ((w - 60) / 3);
      const y = 56 + row * ((h - 80) / 3);
      roundedRect(ctx, x, y, (w - 80) / 3, (h - 100) / 3, 8);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 8, y + 16);
      ctx.lineTo(x + (w - 80) / 3 - 8, y + 16);
      ctx.stroke();
    }
  }
}

function drawAuth(ctx: CanvasRenderingContext2D, w: number, h: number, label: string) {
  paintChrome(ctx, w, h, label);
  ctx.fillStyle = PALETTE.text;
  ctx.font = "700 28px system-ui, sans-serif";
  ctx.fillText("Welcome back", 40, 100);
  ctx.fillStyle = PALETTE.muted;
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText("Sign in to continue designing", 40, 128);

  ctx.fillStyle = PALETTE.card;
  roundedRect(ctx, 40, 160, w - 80, 44, 10);
  ctx.fill();
  roundedRect(ctx, 40, 220, w - 80, 44, 10);
  ctx.fill();

  ctx.fillStyle = PALETTE.cyan;
  roundedRect(ctx, 40, 290, w - 80, 48, 12);
  ctx.fill();
  ctx.fillStyle = "#041018";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.fillText("Continue", 40 + (w - 80) / 2 - 34, 320);
}

function drawTypography(ctx: CanvasRenderingContext2D, w: number, h: number, label: string) {
  paintChrome(ctx, w, h, label);
  ctx.fillStyle = PALETTE.text;
  ctx.font = "700 64px Georgia, serif";
  ctx.fillText("Aa", 36, 140);
  ctx.fillStyle = PALETTE.cyan;
  ctx.font = "600 18px system-ui, sans-serif";
  ctx.fillText("Product / Display", 36, 180);

  const swatches = [PALETTE.blue, PALETTE.cyan, PALETTE.teal, PALETTE.warm];
  swatches.forEach((color, i) => {
    ctx.fillStyle = color;
    roundedRect(ctx, 36 + i * 70, 220, 58, 58, 12);
    ctx.fill();
  });
}

function drawCase(ctx: CanvasRenderingContext2D, w: number, h: number, label: string) {
  paintChrome(ctx, w, h, label);
  ctx.fillStyle = PALETTE.cyan;
  ctx.font = "700 11px system-ui, sans-serif";
  ctx.fillText("CASE STUDY", 36, 70);
  ctx.fillStyle = PALETTE.text;
  ctx.font = "700 26px system-ui, sans-serif";
  ctx.fillText(label, 36, 108);
  ctx.fillStyle = PALETTE.muted;
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText("Outcome-first narrative · research → UI", 36, 136);

  ctx.fillStyle = PALETTE.card;
  roundedRect(ctx, 36, 170, w - 72, h - 210, 14);
  ctx.fill();
  ctx.fillStyle = PALETTE.teal;
  roundedRect(ctx, 56, 198, 120, 10, 5);
  ctx.fill();
  ctx.fillStyle = "rgba(215,232,245,0.15)";
  roundedRect(ctx, 56, 226, w - 140, 10, 5);
  ctx.fill();
  roundedRect(ctx, 56, 250, w - 180, 10, 5);
  ctx.fill();
}

function drawSystem(ctx: CanvasRenderingContext2D, w: number, h: number, label: string) {
  paintChrome(ctx, w, h, label);
  const comps = ["Button", "Input", "Card", "Chip", "Nav", "Modal"];
  comps.forEach((name, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 28 + col * ((w - 56) / 3);
    const y = 56 + row * 110;
    ctx.fillStyle = PALETTE.card;
    roundedRect(ctx, x, y, (w - 80) / 3, 92, 12);
    ctx.fill();
    ctx.fillStyle = PALETTE.cyan;
    roundedRect(ctx, x + 14, y + 28, (w - 80) / 3 - 28, 28, 8);
    ctx.fill();
    ctx.fillStyle = PALETTE.muted;
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText(name, x + 14, y + 78);
  });
}

const PAINTERS: Record<Kind, typeof drawDashboard> = {
  dashboard: drawDashboard,
  mobile: drawMobile,
  wireframe: drawWireframe,
  auth: drawAuth,
  typography: drawTypography,
  case: drawCase,
  system: drawSystem,
};

const LABELS = [
  "Digiclass",
  "OncoSmart",
  "Infinity AI",
  "Hiremi 2.0",
  "Attendance",
  "Rehab flow",
  "FinTech chat",
  "Design system",
  "Wireframes",
  "Dashboard",
  "Mobile UX",
  "Usability",
];

export type ScreenDef = {
  kind: Kind;
  width: number;
  height: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  label: string;
  focusTravel?: number;
};

export function buildScreenLayout(count = 110): ScreenDef[] {
  const kinds: Kind[] = [
    "dashboard",
    "mobile",
    "wireframe",
    "auth",
    "typography",
    "case",
    "system",
  ];
  const screens: ScreenDef[] = [];

  // Dense organic cloud in front of the establishing camera
  for (let i = 0; i < count; i++) {
    const layer = i % 5;
    const kind = kinds[i % kinds.length];
    const isMobile = kind === "mobile";
    const angle = (i * 2.399963) % (Math.PI * 2);
    const radius =
      layer === 0
        ? 14 + (i % 9)
        : layer === 1
          ? 9 + (i % 6)
          : layer === 2
            ? 5.5 + (i % 5)
            : layer === 3
              ? 3.2 + (i % 4)
              : 1.4 + (i % 3) * 0.55;

    // Spread along the flight corridor (z from near to deep)
    const depth = 8 - (i / count) * 130 - layer * 2.2;
    const x = Math.cos(angle) * radius + Math.sin(i * 0.73) * 1.8;
    const y = 2.8 + Math.sin(i * 0.51) * 4.2 + (i % 5) * 0.25;

    const scale =
      layer === 0
        ? 0.16 + (i % 3) * 0.03
        : layer === 1
          ? 0.28 + (i % 3) * 0.04
          : layer === 2
            ? 0.5 + (i % 3) * 0.06
            : layer === 3
              ? 0.85 + (i % 2) * 0.12
              : 1.25 + (i % 3) * 0.22;

    screens.push({
      kind,
      width: isMobile ? 280 : 520,
      height: isMobile ? 520 : 340,
      position: [x, y, depth],
      rotation: [
        Math.sin(i * 0.3) * 0.1,
        Math.sin(i * 0.41) * 0.42,
        Math.sin(i * 0.21) * 0.1,
      ],
      scale,
      label: LABELS[i % LABELS.length],
    });
  }

  // Guaranteed focal screens on the flight path
  const focals: Array<[string, Kind, number, [number, number, number]]> = [
    ["Digiclass Roll Call", "case", 28, [0.15, 3.8, -2]],
    ["OncoSmart", "dashboard", 72, [-1.1, 6.2, -28]],
    ["Infinity AI", "mobile", 118, [1.5, 9.0, -55]],
    ["Design system", "system", 165, [-0.35, 12.2, -84]],
  ];

  focals.forEach(([label, kind, travel, position], idx) => {
    screens.push({
      kind,
      width: kind === "mobile" ? 300 : 560,
      height: kind === "mobile" ? 560 : 360,
      position,
      rotation: [0.02, idx % 2 === 0 ? -0.12 : 0.14, 0],
      scale: 1.55,
      label,
      focusTravel: travel,
    });
  });

  return screens;
}

export function createTextureAtlas() {
  const kinds = Object.keys(PAINTERS) as Kind[];
  const map = new Map<string, THREE.CanvasTexture>();

  for (const kind of kinds) {
    for (let i = 0; i < LABELS.length; i++) {
      const label = LABELS[i];
      const isMobile = kind === "mobile";
      const w = isMobile ? 280 : 520;
      const h = isMobile ? 520 : 340;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;
      PAINTERS[kind](ctx, w, h, label);
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      map.set(`${kind}:${label}`, tex);
    }
  }

  return map;
}
