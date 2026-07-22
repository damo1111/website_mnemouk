import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "STRUCTURE", lines: ["Mnemo Labs Ltd", "UK Company"] },
  { label: "STAGE", lines: ["Pre-seed", "SEIS approved"] },
  { label: "STATUS", lines: ["Two live apps", "Building"] },
  { label: "MARKET", lines: ["Ambient AI", "Wearables & XR"] },
  { label: "PLATFORM", lines: ["iOS · watchOS", "visionOS"] },
  { label: "RELIEF", lines: ["Up to 50%", "Income tax"] },
];

export default function Investor() {
  return (
    <section id="invest" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 rounded-2xl border border-border bg-surface p-8 md:grid-cols-2 md:p-16">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-mono text-[11px] tracking-widest text-blue">INVEST</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-text md:text-[48px]">
            Early stage.
            <br />
            SEIS approved.
          </h2>
          <p className="mt-6 max-w-[480px] font-body text-base leading-relaxed text-muted">
            Mnemo is a UK-incorporated startup with SEIS Advance Assurance —
            offering UK investors up to 50% income tax relief on investment. We
            are raising a pre-seed round to accelerate consumer product
            development across iOS, watchOS, and visionOS.
          </p>
          <a
            href="mailto:david@moritznet.com?subject=Mnemo%20investor%20deck"
            className="group mt-8 inline-flex items-center gap-2 font-body text-sm text-blue no-underline"
          >
            Request investor deck — david@moritznet.com
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Right — stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="group grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(47,109,176,0.18)] sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5">
              <div className="font-mono text-[10px] tracking-widest text-muted">
                {stat.label}
              </div>
              <div className="mt-3 space-y-1">
                {stat.lines.map((line, i) => (
                  <div
                    key={i}
                    className={
                      i === 0
                        ? "font-mono text-[13px] text-text"
                        : "font-mono text-[11px] text-muted"
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
