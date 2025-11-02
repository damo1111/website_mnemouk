// src/MnemoSite.jsx
import React, { useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Activity, Cpu, Eye, Lock, Shield, Mail } from "lucide-react";

function Logo({ className = "h-7 w-auto" }) {
  return (
    <img
      src={"/mnemo-mark.png?v=10"}
      alt="Mnemo"
      className={className}
      height={28}
      style={{ width: "auto" }}
    />
  );
}

// Simple reveal wrapper for scroll-in animations
function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

// Thin progress bar at the very top
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 h-[2px] origin-left bg-neutral-900 z-50"
    />
  );
}

export default function MnemoSite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  // Hero subtly fades as you start scrolling
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 12]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 no-underline">
            <Logo />
            <span className="font-semibold text-xl tracking-tight">Mnemo</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#premise" className="no-underline hover:opacity-70">Premise</a>
            <a href="#idea" className="no-underline hover:opacity-70">Idea</a>
            <a href="#approach" className="no-underline hover:opacity-70">Approach</a>
            <a href="#stack" className="no-underline hover:opacity-70">Stack</a>
            <a href="#contact" className="no-underline hover:opacity-70">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-600 mb-3">
            Intelligence for the human signal
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Intelligence that understands you, not your clicks
          </h1>
          <p className="mt-4 text-neutral-800 text-lg">
            We build context-aware AI that interprets the subtle data streams from wearables and spatial devices. Mnemo turns raw signal into awareness, and awareness into useful action.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="mt-10 rounded-3xl border overflow-hidden shadow-sm grid place-items-center py-10"
            style={{
              backgroundImage:
                "radial-gradient(1200px 400px at 50% 0%, rgba(0,0,0,0.06), rgba(0,0,0,0))"
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <Logo className="h-[96px] md:h-[112px] w-auto" />
              <span className="font-semibold text-2xl md:text-3xl tracking-tight">Mnemo</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Premise */}
      <section id="premise" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">The premise</h2>
          </Reveal>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-neutral-800">
            <Reveal><p>Your devices already sense how you move, breathe and react. They just don’t understand what any of it means.</p></Reveal>
            <Reveal delay={0.05}><p>Mnemo reads motion, biometrics and context to model state and intent in real time. The system responds to how you feel and move, not just what you tap.</p></Reveal>
            <Reveal delay={0.1}><p>That makes interactions quieter, faster and more human. Help arrives at the right time and disappears when it’s done.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Idea */}
      <section id="idea" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">The idea</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-neutral-800 max-w-3xl">
              We’re building a cognitive layer that interprets physiology and behaviour across devices. Our models detect focus, fatigue and load, then adapt the system around you through timing, tone and presence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><h2 className="text-2xl font-semibold">The approach</h2></Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Reveal>
              <div className="rounded-2xl border p-5 bg-white">
                <div className="flex items-center gap-2 text-sm text-neutral-600"><Activity size={16}/> Sensing</div>
                <p className="mt-2 text-neutral-800">High fidelity signals from wearables and ambient sensors. Accelerometer, heart rate variability, motion context and environment.</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-2xl border p-5 bg-white">
                <div className="flex items-center gap-2 text-sm text-neutral-600"><Cpu size={16}/> Interpretation</div>
                <p className="mt-2 text-neutral-800">On device and cloud models translate signals into cognitive state. Lightweight reasoning anticipates intent, not interrupts it.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border p-5 bg-white">
                <div className="flex items-center gap-2 text-sm text-neutral-600"><Eye size={16}/> Response</div>
                <p className="mt-2 text-neutral-800">Subtle interface changes in iOS, watchOS and visionOS. Systems adjust cadence and presence based on state, then step back.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principle */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">The principle</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-neutral-800 max-w-3xl">
              True intelligence is not automation. It is awareness. Mnemo is designed to help systems know when to help, when to pause and when to disappear.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><h2 className="text-2xl font-semibold">Stack</h2></Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-4 grid md:grid-cols-2 gap-3 text-neutral-800">
              <li>Vertex AI and Gemini for training, evaluation and orchestration</li>
              <li>Core ML for efficient on device inference and learning</li>
              <li>HealthKit and SensorKit for consented signals on Apple devices</li>
              <li>Private cloud services with strict data controls and retention</li>
            </ul>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-neutral-800">
            <Reveal><div className="rounded-2xl border p-5 bg-white"><Lock size={16} className="inline mr-2"/> Privacy by design. Local first where possible, explicit controls everywhere.</div></Reveal>
            <Reveal delay={0.05}><div className="rounded-2xl border p-5 bg-white"><Shield size={16} className="inline mr-2"/> Security as a product requirement, not an afterthought.</div></Reveal>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><h2 className="text-2xl font-semibold">Progress</h2></Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-neutral-800 max-w-3xl">
              Mnemo is in active R&D with SEIS advance assurance. Current prototypes combine multimodal sensing with adaptive reasoning to detect focus and cognitive load and adjust assistance in real time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><h2 className="text-2xl font-semibold">Contact</h2></Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 text-neutral-800">If you’re working at the intersection of AI, cognition and behaviour, we would like to talk.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6">
              <a href="mailto:info@mnemo.uk" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-neutral-900 text-white no-underline">
                <Mail size={16}/> info@mnemo.uk
              </a>
            </div>
          </Reveal>
          <p className="text-xs text-neutral-500 mt-3">We never share your details.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Mnemo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}