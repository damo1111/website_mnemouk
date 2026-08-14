import React from "react";
import { motion } from "framer-motion";

export default function HoldingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Pulse mark */}
        <motion.svg
          width="56"
          height="56"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="hpPulse" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#2F6DB0" />
              <stop offset="1" stopColor="#0E9E86" />
            </linearGradient>
          </defs>
          <path
            d="M8 54 H34 L46 28 L58 74 L66 54 H92"
            stroke="url(#hpPulse)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        <p className="mt-6 font-body text-sm tracking-widest text-blue">MNEMO</p>

        <h1 className="mt-6 font-display text-3xl font-light tracking-tight text-text md:text-5xl">
          We&rsquo;ll be back shortly.
        </h1>

        <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted">
          Mnemo is temporarily offline for scheduled maintenance. Thanks for your
          patience — we&rsquo;ll be live again soon.
        </p>

        <a
          href="mailto:info@mnemolabs.co"
          className="mt-8 font-mono text-[13px] text-blue no-underline"
        >
          info@mnemolabs.co
        </a>
      </motion.div>
    </main>
  );
}
