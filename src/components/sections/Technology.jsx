import React from "react";
import { motion } from "framer-motion";

/* --- Signature pillar icons (inline SVG, blue/signal palette) --- */

function WaveformIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <motion.path
        d="M2 22 Q9 6 16 22 T30 22 T44 22"
        stroke="#2F6DB0"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0.3, opacity: 0.6 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <path d="M2 22 Q9 38 16 22 T30 22 T44 22" stroke="#0E9E86" strokeOpacity="0.5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function NodesIcon() {
  const nodes = [
    [8, 10], [34, 8], [22, 22], [10, 34], [36, 34],
  ];
  const edges = [
    [0, 2], [1, 2], [2, 3], [2, 4], [0, 3], [1, 4],
  ];
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#7EA8D8"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill={i === 2 ? "#0E9E86" : "#2F6DB0"}
          initial={{ scale: 0.4, opacity: 0.4 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
  );
}

function SpiralIcon() {
  // Archimedean spiral sampled into a path
  const cx = 22;
  const cy = 22;
  let d = "";
  for (let t = 0; t <= 6 * Math.PI; t += 0.2) {
    const r = 1.5 * t;
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    d += d === "" ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <motion.path
        d={d}
        stroke="#6A5AD1"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, rotate: -30 }}
        whileInView={{ pathLength: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{ originX: "50%", originY: "50%" }}
      />
    </svg>
  );
}

const pillars = [
  {
    Icon: WaveformIcon,
    label: "SENSE",
    title: "Signal capture",
    body: "Passive data from Apple Watch, iPhone sensors, Health app, calendar, and spatial context. No manual input required.",
  },
  {
    Icon: NodesIcon,
    label: "UNDERSTAND",
    title: "Pattern modelling",
    body: "On-device models identify patterns across time, behaviour, and context. Your data stays on your device.",
  },
  {
    Icon: SpiralIcon,
    label: "ADAPT",
    title: "Continuous learning",
    body: "The model updates as you change. Mnemo gets more useful every day, without being retrained or prompted.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-surface py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-[600px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-mono text-[11px] tracking-widest text-blue"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-text md:text-[52px]"
          >
            The human signal layer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6 font-body text-lg leading-relaxed text-muted"
          >
            Most AI waits to be asked. Mnemo listens continuously — to your
            movement, your schedule, your health data — and builds a living model
            of you.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-bg p-8"
            >
              <pillar.Icon />
              <div className="mt-6 font-mono text-[10px] tracking-widest text-signal">
                {pillar.label}
              </div>
              <h3 className="mt-3 font-display text-2xl font-light text-text">
                {pillar.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
