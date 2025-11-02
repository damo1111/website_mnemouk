import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Cpu, Eye, Lock, Shield, Mail } from "lucide-react";

function Logo({ className="h-7 w-auto" }) {
  return <img src={"/mnemo-mark.png?v=9"} alt="Mnemo" className={className} height={28} style={{width:"auto"}}/>;
}

export default function MnemoSite(){
  useEffect(()=>{ window.scrollTo(0,0); },[]);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <nav className="section h-16 flex items-center justify-between">
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

      <section className="section pt-16 pb-24">
        <motion.div style={{opacity: heroOpacity}}>
          <p className="kicker">Intelligence for the human signal</p>
          <h1 className="h1 mt-2">Intelligence that understands you, not your clicks</h1>
          <p className="mt-4 copy text-lg">We build context-aware AI that interprets the subtle data streams from wearables and spatial devices. Mnemo turns raw signal into awareness, and awareness into useful action.</p>
          <div className="mt-10 rounded-3xl border overflow-hidden shadow-sm grid place-items-center py-10 fadebg">
            <div className="flex flex-col items-center gap-4">
              <Logo className="h-[96px] md:h-[112px] w-auto" />
              <span className="font-semibold text-2xl md:text-3xl tracking-tight">Mnemo</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="premise" className="bg-neutral-50 py-16">
        <div className="section">
          <h2 className="h2">The premise</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6 copy">
            <p>Your devices already sense how you move, breathe and react. They just don’t understand what any of it means.</p>
            <p>Mnemo reads motion, biometrics and context to model state and intent in real time. The system responds to how you feel and move, not just what you tap.</p>
            <p>That makes interactions quieter, faster and more human. Help arrives at the right time and disappears when it’s done.</p>
          </div>
        </div>
      </section>

      <section id="idea" className="py-16">
        <div className="section">
          <h2 className="h2">The idea</h2>
          <p className="mt-4 copy max-w-3xl">We’re building a cognitive layer that interprets physiology and behaviour across devices. Our models detect focus, fatigue and load, then adapt the system around you through timing, tone and presence.</p>
        </div>
      </section>

      <section id="approach" className="bg-neutral-50 py-16">
        <div className="section">
          <h2 className="h2">The approach</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border p-5 bg-white">
              <div className="flex items-center gap-2 text-sm text-neutral-600"><Activity size={16}/> Sensing</div>
              <p className="mt-2 copy">High fidelity signals from wearables and ambient sensors. Accelerometer, heart rate variability, motion context and environment.</p>
            </div>
            <div className="rounded-2xl border p-5 bg-white">
              <div className="flex items-center gap-2 text-sm text-neutral-600"><Cpu size={16}/> Interpretation</div>
              <p className="mt-2 copy">On device and cloud models translate signals into cognitive state. Lightweight reasoning anticipates intent, not interrupts it.</p>
            </div>
            <div className="rounded-2xl border p-5 bg-white">
              <div className="flex items-center gap-2 text-sm text-neutral-600"><Eye size={16}/> Response</div>
              <p className="mt-2 copy">Subtle interface changes in iOS, watchOS and visionOS. Systems adjust cadence and presence based on state, then step back.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section">
          <h2 className="h2">The principle</h2>
          <p className="mt-4 copy max-w-3xl">True intelligence is not automation. It’s awareness. Mnemo is designed to help systems know when to help, when to pause and when to disappear.</p>
        </div>
      </section>

      <section id="stack" className="bg-neutral-50 py-16">
        <div className="section">
          <h2 className="h2">Stack</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 copy">
            <li>Vertex AI and Gemini for training, evaluation and orchestration</li>
            <li>Core ML for efficient on device inference and learning</li>
            <li>HealthKit and SensorKit for consented signals on Apple devices</li>
            <li>Private cloud services with strict data controls and retention</li>
          </ul>
          <div className="mt-6 grid md:grid-cols-2 gap-4 copy">
            <div className="rounded-2xl border p-5 bg-white"><Lock size={16} className="inline mr-2"/> Privacy by design. Local first where possible, explicit controls everywhere.</div>
            <div className="rounded-2xl border p-5 bg-white"><Shield size={16} className="inline mr-2"/> Security as a product requirement, not an afterthought.</div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section">
          <h2 className="h2">Progress</h2>
          <p className="mt-4 copy max-w-3xl">Mnemo is in active R&D with SEIS advance assurance. Current prototypes combine multimodal sensing with adaptive reasoning to detect focus and cognitive load and adjust assistance in real time.</p>
        </div>
      </section>

      <section id="contact" className="bg-neutral-50 py-16">
        <div className="section">
          <h2 className="h2">Contact</h2>
          <p className="mt-2 copy">If you’re working at the intersection of AI, cognition and behaviour, we’d like to talk.</p>
          <div className="mt-6">
            <a href="mailto:info@mnemo.uk" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-neutral-900 text-white no-underline">
              <Mail size={16}/> info@mnemo.uk
            </a>
          </div>
          <p className="text-xs text-neutral-500 mt-3">We never share your details.</p>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="section text-sm text-neutral-600">© {new Date().getFullYear()} Mnemo. All rights reserved.</div>
      </footer>
    </div>
  );
}
