import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-32 md:px-10 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="font-display text-5xl font-light tracking-tight text-text text-glow md:text-[64px]">
          Get in touch.
        </h2>
        <p className="mx-auto mt-6 max-w-md font-body text-base text-muted">
          For early access, investment enquiries, or press.
        </p>
        <div className="mt-8">
          <a
            href="mailto:david@moritznet.com"
            className="group relative inline-block font-mono text-sm text-blue no-underline"
          >
            david@moritznet.com
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
        <p className="mt-10 font-mono text-[11px] tracking-widest text-muted">
          MNEMO LABS LTD · UNITED KINGDOM · MNEMOLABS.CO
        </p>
      </motion.div>
    </section>
  );
}
