import React from "react";
import { motion } from "framer-motion";
import SignalWave from "../ui/SignalWave";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Ambient signal glow behind the headline */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[38%] top-[42%] h-[520px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(126,168,216,0.20) 0%, rgba(126,168,216,0) 68%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Signature waveform, vertically centred behind the content */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <SignalWave className="opacity-90" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-5 pt-24 md:px-10"
      >
        <motion.p
          variants={item}
          className="font-mono text-[11px] tracking-widest text-signal"
        >
          AMBIENT AI · WEARABLES · SPATIAL COMPUTING
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-[15ch] font-display text-[48px] font-light leading-[1.04] tracking-tight text-text text-glow md:text-[84px]"
        >
          Intelligence that understands you, not your clicks.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-[520px] font-body text-lg leading-relaxed text-muted"
        >
          Mnemo reads the human signal — from your wrist, your environment, your
          context — and builds AI that adapts without being asked.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-sm bg-blue px-6 py-3 font-body text-sm font-medium text-bg no-underline transition-opacity hover:opacity-90"
          >
            Request early access
          </a>
          <a
            href="#invest"
            className="rounded-sm border border-blue px-6 py-3 font-body text-sm text-blue no-underline transition-colors hover:bg-blue/10"
          >
            For investors →
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-16 font-mono text-[10px] tracking-widest text-muted"
        >
          iOS · watchOS · visionOS · SEIS Approved · UK
        </motion.p>
      </motion.div>
    </section>
  );
}
