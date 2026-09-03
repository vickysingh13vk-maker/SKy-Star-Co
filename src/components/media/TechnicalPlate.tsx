import type { ReactNode } from "react";

export type PlateVariant =
  | "port"
  | "hardware"
  | "lighting"
  | "appliances"
  | "warehouse"
  | "freight";

export type PlateTone = "dark" | "light";

/**
 * Drawn stand-in for production photography.
 *
 * Each plate is a technical elevation in the Sky Star drawing language —
 * hairline geometry on a measurement grid, one brass emphasis, corner
 * registration marks. It holds the composition at full visual weight until a
 * photograph is supplied, at which point `TradeImage` renders the photo
 * instead and this component is never mounted for that slot.
 *
 * Geometry is drawn in a 1200x900 space and cropped like a photograph
 * (`slice`), so a plate can fill any aspect ratio without distortion.
 */

const VB = { w: 1200, h: 900 };

interface PlateColours {
  ground: string;
  line: string;
  fill: string;
  grid: string;
}

const palette: Record<PlateTone, PlateColours> = {
  dark: {
    ground: "#0A1A2B",
    line: "#8CA3B5",
    fill: "#12304A",
    grid: "rgba(255,255,255,0.055)",
  },
  light: {
    ground: "#EAE4D9",
    line: "#3E5468",
    fill: "#DCD5C8",
    grid: "rgba(10,26,43,0.05)",
  },
};

const BRASS = "#B98A2E";

function Port({ c }: { c: PlateColours }) {
  // Ship-to-shore gantry over stacked containers on the quay. Composed so the
  // crane reads inside the central band that a portrait crop leaves visible.
  const rows = [
    { y: 630, blocks: [80, 150, 120, 190, 140, 110, 170, 130] },
    { y: 688, blocks: [130, 100, 180, 120, 160, 150, 110, 140] },
    { y: 746, blocks: [110, 170, 140, 200, 130, 120, 160, 100] },
  ];
  let seed = 0;
  return (
    <>
      {/* distant cranes, only fully seen in wider crops */}
      <g stroke={c.line} strokeWidth="2" fill="none" opacity="0.28">
        <path d="M60 596 L60 330 M150 596 L150 330 M20 330 L300 330 M105 330 L105 268" />
        <path d="M1040 596 L1040 300 M1130 596 L1130 300 M990 300 L1190 300 M1085 300 L1085 240" />
      </g>

      {/* survey annotation across the sky */}
      <g stroke={BRASS} strokeWidth="1" opacity="0.45">
        <path d="M380 150 L920 150 M380 142 L380 158 M920 142 L920 158" />
      </g>

      <g stroke={c.line} strokeWidth="2.5" fill="none" opacity="0.9">
        {/* portal legs and sills */}
        <path d="M380 600 L380 265 M520 600 L520 265 M780 600 L780 265 M920 600 L920 265" />
        <path d="M380 600 L520 600 M780 600 L920 600" />
        {/* main girder with sea-side cantilever and back-reach */}
        <path d="M230 265 L1010 265" strokeWidth="4" />
        <path d="M230 265 L230 312" />
        {/* A-frame mast with stays to each end of the boom */}
        <path d="M600 265 L650 168 L700 265" />
        <path d="M650 168 L262 262 M650 168 L992 262" strokeWidth="1.5" opacity="0.7" />
        {/* machinery house */}
        <rect x="712" y="221" width="96" height="44" fill={c.fill} />
      </g>

      {/* trolley, hoist ropes and spreader carrying a container */}
      <g stroke={BRASS} strokeWidth="2.5" fill="none">
        <rect x="428" y="239" width="74" height="26" fill={BRASS} opacity="0.9" stroke="none" />
        <path d="M446 265 L446 452 M484 265 L484 452" strokeWidth="1.5" />
        <rect x="424" y="452" width="82" height="14" fill={BRASS} opacity="0.9" stroke="none" />
        <rect x="418" y="466" width="94" height="42" fill={BRASS} opacity="0.26" stroke={BRASS} />
      </g>

      {/* quay line */}
      <line x1="0" y1="602" x2={VB.w} y2="602" stroke={c.line} strokeWidth="1.5" opacity="0.55" />

      {/* container stacks */}
      {rows.map((row) =>
        row.blocks.map((w, i) => {
          const x = row.blocks.slice(0, i).reduce((a, b) => a + b + 14, 70);
          seed += 1;
          return (
            <rect
              key={`${row.y}-${i}`}
              x={x}
              y={row.y}
              width={w}
              height="50"
              fill={c.fill}
              stroke={c.line}
              strokeWidth="1.5"
              opacity={seed % 6 === 0 ? 0.95 : 0.68}
            />
          );
        }),
      )}
    </>
  );
}

function Hardware({ c }: { c: PlateColours }) {
  // Component study: fastener, bracket, bearing — with dimension lines.
  return (
    <>
      <g stroke={c.line} fill="none" strokeWidth="2">
        {/* hex nut */}
        <polygon points="300,250 372,292 372,376 300,418 228,376 228,292" fill={c.fill} />
        <circle cx="300" cy="334" r="42" />
        {/* bearing */}
        <circle cx="640" cy="334" r="96" fill={c.fill} />
        <circle cx="640" cy="334" r="62" />
        <circle cx="640" cy="334" r="20" stroke={BRASS} />
        {/* bolt */}
        <rect x="880" y="300" width="210" height="68" fill={c.fill} />
        <path d="M910 300 L910 368 M940 300 L940 368 M970 300 L970 368 M1000 300 L1000 368" opacity="0.5" />
        {/* bracket */}
        <path d="M240 560 L240 760 L520 760" strokeWidth="18" opacity="0.75" />
        <circle cx="290" cy="710" r="16" strokeWidth="2" />
        <circle cx="460" cy="710" r="16" strokeWidth="2" />
        {/* washer stack */}
        <ellipse cx="800" cy="640" rx="110" ry="34" fill={c.fill} />
        <ellipse cx="800" cy="640" rx="44" ry="13" />
        <ellipse cx="800" cy="700" rx="110" ry="34" fill={c.fill} />
        <ellipse cx="800" cy="700" rx="44" ry="13" />
      </g>
      {/* dimension line */}
      <g stroke={BRASS} strokeWidth="1.5" opacity="0.85">
        <path d="M228 470 L372 470 M228 458 L228 482 M372 458 L372 482" />
      </g>
    </>
  );
}

function Lighting({ c }: { c: PlateColours }) {
  // Luminaire array with photometric distribution below one unit.
  const units = [0, 1, 2, 3].map((i) => 150 + i * 240);
  return (
    <>
      {units.map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="190"
            width="185"
            height="46"
            fill={i === 1 ? BRASS : c.fill}
            stroke={i === 1 ? BRASS : c.line}
            strokeWidth="2"
            opacity={i === 1 ? 0.9 : 0.8}
          />
          <g stroke={c.line} strokeWidth="1" opacity={i === 1 ? 0.65 : 0.3}>
            <path d={`M${x + 20} 236 L${x - 40} 470`} />
            <path d={`M${x + 92} 236 L${x + 92} 470`} />
            <path d={`M${x + 165} 236 L${x + 225} 470`} />
          </g>
        </g>
      ))}
      {/* photometric arcs */}
      <g stroke={c.line} fill="none" strokeWidth="1.5" opacity="0.5">
        <path d="M250 700 A 240 190 0 0 1 730 700" />
        <path d="M330 700 A 160 126 0 0 1 650 700" />
      </g>
      <line x1="90" y1="700" x2="1110" y2="700" stroke={c.line} strokeWidth="1.5" opacity="0.6" />
      <line x1="490" y1="236" x2="490" y2="700" stroke={BRASS} strokeWidth="1.5" strokeDasharray="6 8" />
    </>
  );
}

function Appliances({ c }: { c: PlateColours }) {
  // Front elevations: drum appliance, upright unit, hob.
  return (
    <g stroke={c.line} strokeWidth="2" fill="none">
      <rect x="140" y="230" width="300" height="420" fill={c.fill} />
      <circle cx="290" cy="430" r="118" />
      <circle cx="290" cy="430" r="86" stroke={BRASS} />
      <rect x="180" y="266" width="220" height="34" opacity="0.6" />

      <rect x="510" y="180" width="260" height="520" fill={c.fill} />
      <line x1="510" y1="360" x2="770" y2="360" />
      <line x1="735" y1="250" x2="735" y2="320" strokeWidth="8" opacity="0.7" />
      <line x1="735" y1="400" x2="735" y2="470" strokeWidth="8" opacity="0.7" />

      <rect x="840" y="380" width="300" height="220" fill={c.fill} />
      <circle cx="915" cy="450" r="42" />
      <circle cx="1065" cy="450" r="42" />
      <circle cx="915" cy="540" r="42" />
      <circle cx="1065" cy="540" r="42" />
      <line x1="140" y1="700" x2="1140" y2="700" opacity="0.5" />
    </g>
  );
}

function Warehouse({ c }: { c: PlateColours }) {
  // Pallet racking elevation with loaded bays.
  const uprights = [120, 400, 680, 960, 1120];
  const beams = [300, 460, 620, 760];
  const bays = [
    { x: 140, y: 320, w: 240 },
    { x: 420, y: 320, w: 240 },
    { x: 700, y: 320, w: 240 },
    { x: 140, y: 480, w: 240 },
    { x: 700, y: 480, w: 240 },
    { x: 420, y: 640, w: 240 },
  ];
  return (
    <>
      <g stroke={c.line} strokeWidth="3" opacity="0.8">
        {uprights.map((x) => (
          <line key={x} x1={x} y1="240" x2={x} y2="770" />
        ))}
        {beams.map((y) => (
          <line key={y} x1="120" y1={y} x2="1120" y2={y} />
        ))}
      </g>
      {bays.map((b, i) => (
        <rect
          key={`${b.x}-${b.y}`}
          x={b.x}
          y={b.y}
          width={b.w}
          height="118"
          fill={i === 2 ? BRASS : c.fill}
          opacity={i === 2 ? 0.85 : 0.65}
          stroke={i === 2 ? BRASS : c.line}
          strokeWidth="1.5"
        />
      ))}
      <line x1="60" y1="770" x2="1140" y2="770" stroke={c.line} strokeWidth="2" />
      <g stroke={c.line} strokeWidth="1" opacity="0.35">
        <path d="M60 240 L1140 240" strokeDasharray="4 10" />
      </g>
    </>
  );
}

function Freight({ c }: { c: PlateColours }) {
  // Vessel profile with stacked containers and a routing arc overhead.
  const stack = [
    { x: 330, y: 430, w: 90 },
    { x: 430, y: 430, w: 90 },
    { x: 530, y: 430, w: 90 },
    { x: 630, y: 430, w: 90 },
    { x: 730, y: 430, w: 90 },
    { x: 380, y: 375, w: 90 },
    { x: 480, y: 375, w: 90 },
    { x: 580, y: 375, w: 90 },
    { x: 680, y: 375, w: 90 },
    { x: 530, y: 320, w: 90 },
  ];
  return (
    <>
      <path
        d="M120 300 Q 620 90 1080 300"
        stroke={BRASS}
        strokeWidth="2"
        fill="none"
        strokeDasharray="10 12"
      />
      <circle cx="120" cy="300" r="9" fill={BRASS} />
      <circle cx="1080" cy="300" r="9" fill="none" stroke={BRASS} strokeWidth="2.5" />

      {stack.map((s) => (
        <rect
          key={`${s.x}-${s.y}`}
          x={s.x}
          y={s.y}
          width={s.w}
          height="48"
          fill={c.fill}
          stroke={c.line}
          strokeWidth="1.5"
          opacity="0.8"
        />
      ))}

      <g stroke={c.line} strokeWidth="2.5" fill={c.fill} opacity="0.9">
        <path d="M250 490 L900 490 L860 600 L320 600 Z" />
        <rect x="880" y="400" width="80" height="90" />
      </g>
      <g stroke={c.line} strokeWidth="1" opacity="0.45">
        <path d="M80 650 L1120 650 M140 690 L1060 690 M220 730 L980 730" />
      </g>
    </>
  );
}

const variants: Record<PlateVariant, (props: { c: PlateColours }) => ReactNode> = {
  port: Port,
  hardware: Hardware,
  lighting: Lighting,
  appliances: Appliances,
  warehouse: Warehouse,
  freight: Freight,
};

interface TechnicalPlateProps {
  variant: PlateVariant;
  tone?: PlateTone;
  className?: string;
}

/** Drawings whose subject sits on a ground line stay anchored to the bottom
 *  when the frame crops them, the way a photograph would be composed. */
const focal: Partial<Record<PlateVariant, string>> = {
  port: "xMidYMax slice",
  warehouse: "xMidYMax slice",
};

export function TechnicalPlate({ variant, tone = "dark", className = "" }: TechnicalPlateProps) {
  const c = palette[tone];
  const Drawing = variants[variant];

  return (
    <div
      className={`plate-grid absolute inset-0 ${className}`}
      style={
        {
          background: c.ground,
          "--plate-line": c.grid,
          "--plate-step": "48px",
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        preserveAspectRatio={focal[variant] ?? "xMidYMid slice"}
        className="absolute inset-0 h-full w-full"
        role="presentation"
        focusable="false"
      >
        <Drawing c={c} />
      </svg>
    </div>
  );
}
