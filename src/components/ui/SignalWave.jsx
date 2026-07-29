import React, { useId } from "react";
import { motion } from "framer-motion";

/**
 * Build a sine-wave SVG path across `width`, centred vertically in `height`.
 * `cycles` controls frequency, `amplitude` the height of the wave.
 * Two full canvases are drawn side by side so the path can translate left
 * by exactly one canvas width and loop seamlessly.
 */
function buildWavePath(width, height, amplitude, cycles, phase) {
  const mid = height / 2;
  const step = 4;
  const totalWidth = width * 2;
  let d = "";
  for (let x = 0; x <= totalWidth; x += step) {
    const theta = (x / width) * cycles * Math.PI * 2 + phase;
    const y = mid + Math.sin(theta) * amplitude;
    d += x === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }
  return d;
}

function Wave({ color, opacity, amplitude, cycles, phase, duration, width, height }) {
  const path = buildWavePath(width, height, amplitude, cycles, phase);
  return (
    <motion.path
      d={path}
      fill="none"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth={1.5}
      strokeLinecap="round"
      initial={{ x: 0 }}
      animate={{ x: -width }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    />
  );
}

export default function SignalWave({ className = "" }) {
  // Fixed logical canvas; SVG scales responsively via viewBox.
  const width = 1440;
  const height = 120;
  const gradId = useId();

  return (
    <svg
      className={className}
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FBFCFE" stopOpacity="1" />
          <stop offset="12%" stopColor="#FBFCFE" stopOpacity="0" />
          <stop offset="88%" stopColor="#FBFCFE" stopOpacity="0" />
          <stop offset="100%" stopColor="#FBFCFE" stopOpacity="1" />
        </linearGradient>
        <mask id={`${gradId}-mask`}>
          <rect width={width} height={height} fill="white" />
          <rect width={width} height={height} fill={`url(#${gradId})`} />
        </mask>
      </defs>
      <g mask={`url(#${gradId}-mask)`}>
        {/* Wave 1 — blue, 8s */}
        <Wave color="#2F6DB0" opacity={0.28} amplitude={30} cycles={4} phase={0} duration={8} width={width} height={height} />
        {/* Wave 2 — purple, 12s, phase offset */}
        <Wave color="#6A5AD1" opacity={0.2} amplitude={20} cycles={6} phase={1.6} duration={12} width={width} height={height} />
        {/* Wave 3 — signal, 6s, phase offset */}
        <Wave color="#0E9E86" opacity={0.18} amplitude={40} cycles={2.5} phase={3.1} duration={6} width={width} height={height} />
      </g>
    </svg>
  );
}
