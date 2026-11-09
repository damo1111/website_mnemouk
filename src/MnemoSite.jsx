import React from "react";
import CyclingPhone from "./components/CyclingPhone";
import { BODYPROOF_SCREENS, SUSAN_HERO } from "./data/screens";

const MINISTRY = "https://www.theministry.care";
import Reveal from "./components/Reveal";
import Lab from "./components/Lab";
import RangeGauge from "./components/RangeGauge";
import BodyProofSteps from "./components/BodyProofSteps";
import { BodyProofIcon, BodyProofWordmark, MnemoMark } from "./components/Marks";

// mnemolabs.co, "Field Notes": the studio's page as a lab notebook. Paper,
// ink, a serif for what we think, mono for figures and captions, and the two
// apps as real screens in real phones, captioned like figures.
//
// Claims stay to what each app does today (BodyProof: damo1111/davanity
// CLAUDE.md; The Ministry: the description this repo already carried).
// Nothing here says where the company is registered, its tax status, or any
// platform the apps do not run on. Copy: UK English, no dashes as punctuation,
// the apps speak as "we", people are never "users".

const EMAIL = "info@mnemolabs.co";
const BODYPROOF = "https://bodyproof.health";
const BODYPROOF_JOIN = "https://bodyproof.health/#join";
const EEND = "https://eend.app";
const LINKEDIN = "https://www.linkedin.com/company/mnemo-labs/";

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label="Mnemo Labs, top of the page">
          <MnemoMark size={30} />
          <span className="brand-wm">Mnemo Labs</span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a className="hide-s" href="#lab">The lab</a>
          <a className="hide-s" href="#bodyproof">BodyProof</a>
          <a className="hide-s" href="#susan">The Ministry</a>
          <a className="nav-cta" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="kicker">Mnemo Labs <span>A lab for the human signal</span></p>
          <h1>
            Honest instruments for the people you look after.{" "}
            <em>Starting with yourself.</em>
          </h1>
          <p className="lede">
            We make two apps. <b>BodyProof</b> reads your health across every device you wear and says only what your nights have earned. <b>The Ministry</b> runs the care of someone you love, from anywhere: the people, the pills and the paperwork, with each person seeing their part.
          </p>
          <div className="ctas">
            <a className="btn btn-ink" href={BODYPROOF_JOIN}>Join the BodyProof beta</a>
            <a className="btn btn-line" href="#bodyproof">Read the notes</a>
          </div>
        </div>
        <div className="hero-art">
          <CyclingPhone className="hero-fig f1" screens={BODYPROOF_SCREENS} fig="1" app="BodyProof" eager />
          <CyclingPhone className="hero-fig f2" screens={SUSAN_HERO} fig="2" app="The Ministry" offset={1600} eager />
        </div>
      </div>
    </section>
  );
}

const RULES = [
  {
    n: "01",
    t: "A range, not a false number.",
    d: "Where a reading is uncertain we show how uncertain. Where two devices disagree, we show both, and the range they leave.",
  },
  {
    n: "02",
    t: "Say only what has been earned.",
    d: "BodyProof rules nothing under 7 nights. From 7 it gives a hint, from 30 a ruling, and it says how many nights each one rests on.",
  },
  {
    n: "03",
    t: "Each person sees their part.",
    d: "In The Ministry the family admin sees everything, carers see the care and their own pay, and family get a warm window in.",
  },
];

function Rules() {
  return (
    <section className="sec rules" aria-labelledby="rules-h">
      <div className="wrap">
        <Reveal as="p" className="sec-no">§ 2</Reveal>
        <Reveal as="h2" id="rules-h" className="sec-h">What we hold to.</Reveal>
        <ol className="rule-list">
          {RULES.map((r, i) => (
            <Reveal as="li" key={r.n} delay={i * 90}>
              <span className="rule-n">{r.n}</span>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function BodyProof() {
  return (
    <section className="sec bp" id="bodyproof" aria-labelledby="bp-h">
      <div className="wrap">
        <Reveal as="p" className="sec-no">§ 3</Reveal>
        <Reveal className="bp-head">
          <div className="bp-brand">
            <BodyProofIcon size={56} />
            <BodyProofWordmark />
          </div>
          <h2 id="bp-h" className="sec-h">Your health, read honestly.</h2>
          <p className="body">
            Your watch, your scale and your food log each tell a different story. BodyProof sets them against each other and against your own usual, through Apple Health or Health Connect, read only.
          </p>
        </Reveal>

        <div className="bp-truth">
          <Reveal className="bp-truth-copy">
            <p className="fig-no">Fig. 3 The truth layer</p>
            <h3 className="sub-h">Two watches, two answers. One line you can trust.</h3>
            <p className="body">
              Every device app shows its own number. We set yours against each other on the nights they share, correct the offset, and weigh each by how well it agrees with the rest.
            </p>
            <blockquote className="quote">
              &ldquo;Your Whoop reads 0.7 bpm lower than your Apple Watch on 267 shared nights; corrected.&rdquo;
            </blockquote>
            <p className="quote-by">How BodyProof says it, from the founder&apos;s own record.</p>
          </Reveal>
          <Reveal className="bp-truth-art" delay={120}>
            <RangeGauge />
          </Reveal>
        </div>

        <BodyProofSteps />

        <Reveal className="bp-foot">
          <div>
            <p className="bp-status"><span className="dot" />Beta opening soon on iPhone and Android.</p>
            <p className="fine">Wellness, not medical advice. Made by Mnemo Labs in collaboration with <a href={EEND}>eend</a>.</p>
          </div>
          <div className="ctas">
            <a className="btn btn-ink" href={BODYPROOF_JOIN}>Join the beta</a>
            <a className="btn btn-line" href={BODYPROOF}>bodyproof.health</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MinistryMark({ size = 64 }) {
  // The Ministry's mark (website_eend.app src/app/ministry/_parts/brand.tsx):
  // the person cared for as a gold dot, the day's visits as four arcs round them.
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#1F3A30" />
      <path d="M40.45 16.11A18 18 0 0 1 49.82 34.51 M46.56 42.58A18 18 0 0 1 31.37 49.99 M23.00 47.59A18 18 0 0 1 14.70 27.04 M19.05 19.50A18 18 0 0 1 31.37 14.01" fill="none" stroke="#F5F1E8" strokeWidth="6" strokeLinecap="round" />
      <circle cx="32" cy="32" r="7.5" fill="#E2B653" />
    </svg>
  );
}

function Susan() {
  return (
    <section className="sec susan" id="susan" aria-labelledby="susan-h">
      <div className="wrap">
        <div className="susan-in">
          <div className="susan-copy">
            <Reveal as="p" className="sec-no">§ 4</Reveal>
            <Reveal>
              <p className="tag">The Ministry <span className="pill"><span className="dot sage" />Private beta</span></p>
              <h2 id="susan-h" className="sec-h">The care team, finally on the same page.</h2>
              <p className="body">
                For anyone caring for someone at home, and for the care providers who visit: the family and every carer in one record of visits, notes, medicines and money. Everyone gets their own view. The admin sees everything, carers see care and their own pay, family get a warm window in. Opening to a few more families in the UK and Australia.
              </p>
            </Reveal>
          </div>
          <Reveal className="susan-cta">
            <a className="ministry-mark" href={MINISTRY} aria-label="The Ministry"><MinistryMark size={88} /></a>
            <a className="btn btn-line" href={MINISTRY}>theministry.care <span aria-hidden="true">→</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <Reveal as="p" className="sec-no">§ 5</Reveal>
        <Reveal as="h2" id="contact-h" className="sec-h">Write to us.</Reveal>
        <Reveal className="contact-grid">
          <div>
            <h3>Press, partners, anything</h3>
            <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div>
            <h3>Talk to us about investing</h3>
            <a className="mail" href={`mailto:${EMAIL}?subject=Investing%20in%20Mnemo%20Labs`}>{EMAIL}</a>
          </div>
          <div>
            <h3>Try BodyProof</h3>
            <a className="mail" href={BODYPROOF_JOIN}>Join the beta</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div className="brand">
          <MnemoMark size={24} />
          <span className="brand-wm">Mnemo Labs</span>
        </div>
        <ul className="foot-links">
          <li><a href={BODYPROOF}>bodyproof.health</a></li>
          <li><a href={EEND}>eend.app</a></li>
          <li><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        </ul>
        <p className="foot-c">© {new Date().getFullYear()} Mnemo Labs, United Kingdom</p>
        <p className="foot-c">This site counts visits with PostHog, hosted in the EU. No advertising cookies, nothing passed to advertisers.</p>
      </div>
    </footer>
  );
}

export default function MnemoSite() {
  return (
    <>
      <a className="skip" href="#main">Skip to the page</a>
      <Nav />
      <main id="main">
        <Hero />
        <Lab />
        <Rules />
        <BodyProof />
        <Susan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
