import React from "react";
import { motion } from "framer-motion";

const columns = [
  {
    label: "PASSIVE",
    body: "No prompts. No commands. Mnemo reads ambient signals from your devices and environment.",
  },
  {
    label: "CONTEXTUAL",
    body: "Not just what you do — when, where, and how. Pattern over moment.",
  },
  {
    label: "ADAPTIVE",
    body: "The model updates continuously. Your AI gets sharper the longer you use it.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-32 md:py-40 md:px-10">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-mono text-[11px] tracking-widest text-muted"
      >
        THE INSIGHT
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-6 font-display text-3xl font-light leading-tight tracking-tight text-text text-glow md:text-[52px]"
      >
        “Current AI responds to what you type. We respond to who you are.”
      </motion.h2>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {columns.map((col, i) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="font-mono text-[10px] tracking-widest text-signal">
              {col.label}
            </div>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-muted">
              {col.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
