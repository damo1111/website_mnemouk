import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import LogoMarkURL from "./assets/mnemo-mark.svg";

function LogoMark({ className = "h-7 w-auto" }) {
  return <img src={LogoMarkURL + "?v=3"} alt="Mnemo logomark" className={className} height={28} style={{width:"auto",display:"block"}} />;
}

function LogoLockup({ size = "h-7" }){
  return (
    <div className="flex items-center gap-2">
      <LogoMark className={`${size} w-auto`} />
      <span className="font-semibold text-xl tracking-tight">Mnemo</span>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORM_ID"; // replace

  async function onSubmit(e){
    e.preventDefault();
    setStatus("sending");
    try{
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {"Content-Type":"application/json", "Accept":"application/json"},
        body: JSON.stringify(form)
      });
      if(res.ok){ setStatus("success"); setForm({name:"",email:"",message:""}); }
      else setStatus("error");
    }catch{ setStatus("error"); }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-xl grid gap-3">
      <input className="border rounded-xl px-4 py-3" placeholder="Your name" required
        value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
      <input className="border rounded-xl px-4 py-3" type="email" placeholder="Work email" required
        value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
      <textarea className="border rounded-xl px-4 py-3 min-h-[120px]" placeholder="How can we connect?" required
        value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
      <button disabled={status==="sending"} type="submit" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-neutral-900 text-white w-fit disabled:opacity-60">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        {status==="sending" ? "Sending…" : "Send"}
      </button>
      {status==="success" && <p className="text-sm text-green-700">Thanks. We’ll be in touch shortly.</p>}
      {status==="error" && <p className="text-sm text-red-700">Something went wrong. Email <a className="underline" href="mailto:info@mnemo.uk">info@mnemo.uk</a>.</p>}
      <p className="text-xs text-neutral-500">We never share your details. Submits over HTTPS.</p>
    </form>
  );
}

export default function Site(){
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="block"><LogoLockup size="h-7" /></a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#vision" className="hover:opacity-70">Vision</a>
            <a href="#product" className="hover:opacity-70">Product</a>
            <a href="#use-cases" className="hover:opacity-70">Use cases</a>
            <a href="#tech" className="hover:opacity-70">Tech</a>
            <a href="#security" className="hover:opacity-70">Security</a>
            <a href="#roadmap" className="hover:opacity-70">Roadmap</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#team" className="hover:opacity-70">Team</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-600 mb-3">
              <Sparkles size={14}/> Intelligence designed for humans
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Subtle, powerful AI for real world impact
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Mnemo develops intelligent systems that integrate into everyday tools and workflows. The aim is clarity, efficiency, and measurable outcomes, not noise.
            </p>
            <p className="mt-3 text-sm text-neutral-500">Built on Google Cloud, Vertex AI and Gemini.</p>
          </div>

          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.05}} className="relative">
            <div className="w-full rounded-3xl border overflow-hidden shadow-sm grid place-items-center py-10">
              <div className="flex flex-col items-center gap-4">
                <LogoMark className="h-[112px] w-auto" />
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
            We build adaptive intelligence that feels natural. Mnemo focuses on precision, context and trust. We amplify human capability by making complex systems simple to use and simple to reason about.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-700">
            <div>
              <h3 className="font-medium">The problem</h3>
              <p className="mt-2">Teams operate across many tools, channels and data silos. Signal is buried. People waste time finding, summarising and deciding. The result is slow cycles and inconsistent outcomes.</p>
            </div>
            <div>
              <h3 className="font-medium">Our approach</h3>
              <p className="mt-2">Start with context. Use adaptive models to understand goals, constraints and history. Deliver small, accurate actions that fit the moment. No ceremony. No training burden.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Product</h2>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            Mnemo is a modular platform. Each module can run alone or work together through a shared context layer.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-800">
            <div className="rounded-2xl border p-5">
              <h3 className="font-medium">Context Engine</h3>
              <p className="mt-2 text-neutral-700">Captures state across tools, maps entities and events, and maintains lightweight memory over time. Powers relevant actions without manual tagging.</p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-medium">Reasoning & Orchestration</h3>
              <p className="mt-2 text-neutral-700">Combines structured prompts with tool use and guardrails. Chooses the right model and the right step sequence for the task.</p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-medium">Summarise & Decide</h3>
              <p className="mt-2 text-neutral-700">Produces concise summaries, options and recommendations. Designed for fast review and clear next steps.</p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-medium">Integrations</h3>
              <p className="mt-2 text-neutral-700">Modern connectors for documents, messaging, calendars and data stores. Private by default. Opt in per source.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <ul className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-neutral-700 list-disc pl-5">
            <li>Weekly briefings from dense notes and documents with linked actions</li>
            <li>Decision support that weighs options against goals and constraints</li>
            <li>Lightweight research with source trails you can audit</li>
            <li>Inbox and thread digests that preserve nuance and remove noise</li>
            <li>Meeting prep that pulls context, risks and open questions</li>
            <li>Post‑mortems and summaries with consistent structure</li>
          </ul>
        </div>
      </section>

      <section id="tech" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Technology</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6 text-neutral-700">
            <div>
              <h3 className="font-medium">Stack</h3>
              <ul className="mt-2 list-disc pl-5">
                <li>Google Cloud Platform: Cloud Run, Cloud Functions, Cloud Storage</li>
                <li>Vertex AI and Gemini models with routing and fallbacks</li>
                <li>PostgreSQL and vector search for memory and retrieval</li>
                <li>Vercel front ends, serverless back ends</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Engineering principles</h3>
              <ul className="mt-2 list-disc pl-5">
                <li>Small composable services</li>
                <li>Deterministic prompts with tests</li>
                <li>Observability on cost, latency and safety</li>
                <li>Human review paths for critical actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Security and privacy</h2>
          <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-2 max-w-4xl">
            <li>Data ownership remains with the customer. No training on private data without explicit consent.</li>
            <li>PII minimised and encrypted at rest and in transit. Regional hosting on Google Cloud on request.</li>
            <li>Granular source permissions. Each connector is opt in.</li>
            <li>Audit trails for actions and model calls.</li>
          </ul>
        </div>
      </section>

      <section id="roadmap" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Roadmap</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-neutral-700">
            <div className="rounded-2xl border p-5">
              <h3 className="font-medium">R&D</h3>
              <p className="mt-2">Model exploration, context layer, early prototypes. 2025 to early 2026.</p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-medium">Private pilots</h3>
              <p className="mt-2">Targeted pilots for small teams. Measured outcomes and hard feedback. Mid 2026.</p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-medium">Launch</h3>
              <p className="mt-2">Subscription plans and enterprise integrations. Late 2026 and 2027.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-700">
            <div>
              <h3 className="font-medium">Is Mnemo a consultancy</h3>
              <p className="mt-2">No. Mnemo is a product company. We build software and offer it as subscriptions and integrations.</p>
            </div>
            <div>
              <h3 className="font-medium">What about data privacy</h3>
              <p className="mt-2">Customer data stays private. We do not train global models on customer content without explicit consent.</p>
            </div>
            <div>
              <h3 className="font-medium">Which models do you use</h3>
              <p className="mt-2">We route to Vertex AI and Gemini and use smaller task specific models when it improves speed or cost.</p>
            </div>
            <div>
              <h3 className="font-medium">How can I take part in pilots</h3>
              <p className="mt-2">Email <a className="underline" href="mailto:info@mnemo.uk">info@mnemo.uk</a> with a short note on your workflow and goals. We prioritise small teams with clear problems and measurable outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Team</h2>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            Mnemo is founder led in the UK with experience across consumer platforms, search and applied AI. The company is hiring in 2026 across AI engineering, product design and partnerships.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-neutral-700">For partnerships or introduction, email <a className="underline" href="mailto:info@mnemo.uk">info@mnemo.uk</a>.</p>
          <p className="mt-1 text-neutral-700">Website: <a className="underline" href="https://mnemo.uk" target="_blank" rel="noreferrer">mnemo.uk</a></p>
          <ContactForm />
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
