// src/MnemoSite.jsx
import React, { useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Activity, Cpu, Eye, Lock, Shield, Mail } from "lucide-react";

function Logo({ className = "h-7 w-auto" }) {
  return (
    <img
      src={"/mnemo-mark-20251102.png?v=10"}
      alt="Mnemo"
      className={className}
      height={28}
      style={{ width: "auto" }}
    />
  );
}

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

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
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
            <a href="#overview" className="no-underline hover:opacity-70">
              Overview
            </a>
            <a href="#premise" className="no-underline hover:opacity-70">
              Premise
            </a>
            <a href="#idea" className="no-underline hover:opacity-70">
              Idea
            </a>
            <a href="#approach" className="no-underline hover:opacity-70">
              Approach
            </a>
            <a href="#product" className="no-underline hover:opacity-70">
              Product
            </a>
            <a href="#team" className="no-underline hover:opacity-70">
              Team
            </a>
            <a href="#stack" className="no-underline hover:opacity-70">
              Stack
            </a>
            <a href="#contact" className="no-underline hover:opacity-70">
              Contact
            </a>
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
            We build context aware AI that interprets subtle data from
            wearables and spatial devices. Mnemo turns raw signal into
            awareness, then into useful action.
          </p>
          <p className="mt-3 text-neutral-700">
            Mnemo builds adaptive AI from wearable and spatial signals. We model
            human state such as focus, fatigue and cognitive load so products
            can respond at the right time with the right presence. Our audience
            is product teams, researchers and developers building wellbeing,
            productivity and assistive experiences.
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section id="overview" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-neutral-800 max-w-3xl">
            Mnemo is a technology startup that develops adaptive intelligence
            from wearable and spatial signals. Our systems model cognitive
            state, such as focus and fatigue, so digital experiences can adapt
            to people, not just interactions.
          </p>
          <p className="mt-3 text-neutral-800 max-w-3xl">
          Mnemo is formally recognised as an early-stage technology company through SEIS Advance Assurance, validating our R&amp;D direction and product development plans.
          </p>
        </div>
      </section>

      {/* Premise */}
      <section id="premise" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">The premise</h2>
          </Reveal>

          <div className="mt-4 grid md:grid-cols-3 gap-6 text-neutral-800">
            <Reveal>
              <p>
                Your devices already sense how you move, breathe and react. They
                just do not understand what any of it means.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Mnemo reads motion, biometrics and context to model state and
                intent in real time. The system responds to how you feel and
                move, not just what you tap.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                That makes interactions quieter, faster and more human. Help
                arrives at the right time and disappears when it is done.
              </p>
            </Reveal>
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
              We are building a cognitive layer that interprets physiology and
              behaviour across devices. Models detect focus, fatigue and load,
              then adjust timing, tone and presence in the system around you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">The approach</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Reveal>
              <div className="rounded-2xl border p-5 bg-white">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Activity size={16} /> Sensing
                </div>
                <p className="mt-2 text-neutral-800">
                  High fidelity signals from wearables and ambient sensors, for
                  example accelerometer, heart rate variability and environment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-2xl border p-5 bg-white">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Cpu size={16} /> Interpretation
                </div>
                <p className="mt-2 text-neutral-800">
                  On device and cloud models translate signals into cognitive
                  state. Lightweight reasoning anticipates intent without
                  interruption.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border p-5 bg-white">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Eye size={16} /> Response
                </div>
                <p className="mt-2 text-neutral-800">
                  Subtle interface changes across iOS, watchOS and visionOS.
                  Systems adjust cadence and presence based on state.
                </p>
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
              Real intelligence is awareness, not automation. Mnemo helps
              systems know when to help, when to pause and when to disappear.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Product</h2>
          <p className="mt-4 text-neutral-800 max-w-3xl">
            <strong>Mnemo Core</strong> is a proprietary developer SDK and cloud
            platform that turns sensor data from wearables and spatial devices
            into cognitive signals. Applications can estimate focus, fatigue and
            engagement in real time from motion, HRV and interaction patterns.
          </p>
          <p className="mt-3 text-neutral-800 max-w-3xl">
            Mnemo Core combines on device processing with secure cloud
            inference. Developers integrate through a simple SDK and a usage
            based API rather than building their own models and infrastructure.
          </p>

          <p className="mt-4 text-neutral-800 max-w-3xl">
            <strong>What Mnemo Core includes</strong>
          </p>
          <ul className="mt-2 text-neutral-800 max-w-3xl list-disc list-inside space-y-1">
            <li>Native SDK for iOS and visionOS to capture and pre process signals</li>
            <li>
              Cloud ML pipeline on Vertex AI and Gemini for training and
              inference
            </li>
            <li>
              Real time API that returns focus, fatigue and load estimates and
              events
            </li>
            <li>
              Browser dashboard for inspecting sessions, signals and state over
              time
            </li>
          </ul>

          <p className="mt-4 text-neutral-800 max-w-3xl">
            <strong>Status:</strong> private MVP and R&amp;D. Prototypes are
            running on test and pilot data. Design partner pilots are planned
            for Q1 2026 under SEIS advance assurance.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border overflow-hidden bg-white">
              <img
                src="/assets/demo-dashboard-light.png"
                alt="Mnemo Dashboard"
                className="w-full"
              />
              <div className="p-4 text-sm text-neutral-700">
                Mnemo Core prototype dashboard that visualises cognitive state
                over time.
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden bg-white">
              <img
                src="/assets/sdk-snippet-light.png"
                alt="Mnemo SDK"
                className="w-full"
              />
              <div className="p-4 text-sm text-neutral-700">
                Early SDK and code snippet for iOS and Python integration.
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden bg-white">
              <img
                src="/assets/api-response-light.png"
                alt="Mnemo API"
                className="w-full"
              />
              <div className="p-4 text-sm text-neutral-700">
                Example API response returning focus and fatigue scores.
              </div>
            </div>
          </div>
          <p className="text-xs text-neutral-500 mt-3">
            Demos are active prototypes. Full product launch is in preparation.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Team</h2>
          <p className="mt-4 text-neutral-800 max-w-3xl">
            Mnemo is led by{" "}
            <strong>David Moritz — Founder and Product Lead</strong>, an
            experienced product and machine learning leader with a background
            building large scale consumer and applied AI systems at{" "}
            <strong>
              {" "}
              Zoopla, Tesco & Amazon to name a few
            </strong>
            . His work has spanned personalisation, behavioural modelling,
            search and platform architecture across multiple markets.
          </p>
          <p className="text-sm text-neutral-600 mt-2">
            <a
              href="https://www.linkedin.com/in/damoritz/"
              className="underline hover:opacity-70"
            >
              LinkedIn — David Moritz
            </a>
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-neutral-800">
            <a
              href="https://www.linkedin.com/company/mnemo-labs/"
              className="rounded-2xl border p-5 bg-white no-underline hover:opacity-80"
            >
              LinkedIn company page
              <div className="text-xs text-neutral-500 mt-1">
                Public updates and team information
              </div>
            </a>
            <a
              href="https://gitlab.com/mnemouk"
              className="rounded-2xl border p-5 bg-white no-underline hover:opacity-80"
            >
              GitLab organisation
              <div className="text-xs text-neutral-500 mt-1">
                Selected repos and SDKs as released
              </div>
            </a>
          </div>
          <p className="text-xs text-neutral-500 mt-3">
          Mnemo Labs Ltd holds SEIS Advance Assurance. Individual profiles available under NDA for diligence. This section will be updated as contributors are announced.
          </p>
          </p>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">Stack</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-4 grid md:grid-cols-2 gap-3 text-neutral-800">
              <li>Vertex AI and Gemini for training, evaluation and orchestration</li>
              <li>Core ML for efficient on device inference and learning</li>
              <li>HealthKit and SensorKit for consented signals on Apple devices</li>
              <li>Private cloud services with strict data controls and retention</li>
            </ul>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-neutral-800">
            <Reveal>
              <div className="rounded-2xl border p-5 bg-white">
                <Lock size={16} className="inline mr-2" />
                Privacy by design. Local first where possible, explicit controls
                everywhere.
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-2xl border p-5 bg-white">
                <Shield size={16} className="inline mr-2" />
                Security as a product requirement, not an afterthought.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">Progress</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-neutral-800 max-w-3xl">
            Mnemo Labs Ltd is SEIS Advance Assurance approved, supporting our formal R&amp;D programme. Current prototypes combine multimodal sensing with adaptive reasoning to detect focus, fatigue and cognitive load, adjusting system behaviour in real time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold">Contact</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 text-neutral-800">
              If you work at the intersection of AI, cognition and behaviour, we
              would like to talk.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6">
              <a
                href="mailto:info@mnemo.uk"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-neutral-900 text-white no-underline"
              >
                <Mail size={16} />
                info@mnemo.uk
              </a>
            </div>
          </Reveal>
          <p className="text-xs text-neutral-500 mt-3">
            We never share your details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Mnemo Labs Ltd ·{" "}
          <a
            href="https://www.linkedin.com/company/mnemo-labs/"
            className="underline hover:opacity-70"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            href="mailto:info@mnemo.uk"
            className="underline hover:opacity-70"
          >
            info@mnemo.uk
          </a>
        </div>
      </footer>
    </div>
  );
}