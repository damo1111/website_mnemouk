import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";

// Clean, scalable logo with consistent proportions
function LogoMark({ className = "h-6 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-label="Mnemo logomark" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111111"/>
          <stop offset="100%" stopColor="#4b5563"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="none" stroke="url(#g)" strokeWidth="3"/>
      <path d="M14 44 V20 L32 36 L50 20 V44" fill="none" stroke="#111111" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 44 C22 30, 42 30, 50 44" fill="none" stroke="#111111" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LogoLockup({ size = "h-6" }){
  return (
    <div className="flex items-center gap-2">
      <LogoMark className={`${size} w-auto`} />
      <span className="font-semibold text-xl tracking-tight">Mnemo</span>
    </div>
  );
}

export default function Site() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="block"><LogoLockup size="h-7 md:h-8" /></a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#vision" className="hover:opacity-70">Vision</a>
            <a href="#approach" className="hover:opacity-70">Approach</a>
            <a href="#tech" className="hover:opacity-70">Tech</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-600 mb-3">
              <Sparkles size={14}/> Intelligence designed for humans
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Subtle, powerful AI for real-world impact.
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Mnemo develops intelligent systems that integrate seamlessly into everyday tools and workflows. Our goal is clarity, efficiency, and meaningful outcomes, not overload.
            </p>
            <p className="mt-3 text-sm text-neutral-500">Built on Google Cloud, Vertex AI and Gemini.</p>
          </motion.div>

          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.05}} className="relative">
            <div className="w-full rounded-3xl border overflow-hidden shadow-sm grid place-items-center py-10">
              <div className="flex flex-col items-center gap-4">
                <LogoMark className="h-[88px] md:h-[112px] w-auto" />
                <span className="font-semibold text-2xl md:text-3xl tracking-tight">Mnemo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            We believe intelligence should be precise, adaptive, and trustworthy. Mnemo is shaping AI experiences that amplify human capability, making technology feel natural, not forced.
          </p>
        </div>
      </section>

      <section id="approach" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            Our approach is exploratory yet pragmatic. We combine advanced research with practical design, creating systems that adapt to context and deliver results without complexity. Mnemo is about intelligence that works quietly in the background but drives real value.
          </p>
        </div>
      </section>

      <section id="tech" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Tech</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-neutral-700">
            <li>Distributed intelligence across edge and cloud</li>
            <li>Adaptive reasoning with Vertex AI and Gemini</li>
            <li>Streamlined front ends, serverless back ends</li>
            <li>Privacy and security by design</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-neutral-700">Interested in partnering or exploring Mnemo further?</p>
          <form className="mt-6 max-w-xl grid gap-3" action="mailto:info@yourdomain.com" method="post" encType="text/plain">
            <input type="text" name="name" placeholder="Your name" className="border rounded-xl px-4 py-3" />
            <input type="email" name="email" placeholder="Work email" className="border rounded-xl px-4 py-3" />
            <textarea name="message" placeholder="How can we connect?" className="border rounded-xl px-4 py-3 min-h-[120px]"/>
            <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-neutral-900 text-white w-fit">
              <Mail size={16}/> Send
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Mnemo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}