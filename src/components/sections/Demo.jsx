import React from "react";
import { motion } from "framer-motion";

export default function Demo() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[720px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-mono text-[11px] tracking-widest text-blue"
        >
          IN ACTION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-text md:text-[52px]"
        >
          See the signal, working.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 font-body text-lg leading-relaxed text-muted"
        >
          An early prototype turning live sensor data into cognitive signals —
          focus, fatigue and load, read continuously.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(47,109,176,0.18)]"
      >
        <video
          className="aspect-video w-full"
          controls
          preload="metadata"
          playsInline
          poster="/assets/product-demo-poster.png"
          src="/assets/product-demo.mp4"
        />
      </motion.div>

      <p className="mt-4 text-center font-mono text-[11px] text-muted">
        Early prototype footage · Mnemo signal layer
      </p>
    </section>
  );
}
