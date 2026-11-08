import React from "react";
import Reveal from "./Reveal";

// The lab: what Mnemo is about beyond the two apps (David, 8 Nov 2026 UTC:
// "Nimo is also meant to be that lab with neuro... we must show what we're
// about. It needs to be scientific, mystical"). Written as the lab's thesis
// and its lines of enquiry, never as results: no study, paper, patent,
// partner or approval is claimed that does not exist.

function Pulse() {
  // A heartbeat drawn as beat-to-beat intervals: the gaps vary, which is the point.
  const xs = [0, 34, 66, 102, 131, 168, 198, 236, 264, 300];
  let d = "M0 40";
  xs.slice(1).forEach((x, i) => {
    const a = xs[i];
    const m = a + (x - a) * 0.55;
    d += ` L${m - 6} 40 L${m - 3} 30 L${m} 62 L${m + 4} 6 L${m + 8} 50 L${m + 11} 40 L${x} 40`;
  });
  return (
    <svg className="lab-fig pulse" viewBox="0 0 300 70" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" pathLength="1" />
    </svg>
  );
}

function Web() {
  const n = [[30, 60], [80, 22], [96, 84], [150, 46], [200, 18], [214, 92], [262, 56]];
  const e = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [1, 4], [2, 5]];
  return (
    <svg className="lab-fig web" viewBox="0 0 300 110" aria-hidden="true">
      {e.map(([a, b], i) => (
        <line key={i} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} stroke="currentColor" strokeOpacity=".35" strokeWidth="1" />
      ))}
      {n.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 6 : 3.5} className={i === 3 ? "core" : "node"} style={{ animationDelay: `${i * 0.35}s` }} />
      ))}
    </svg>
  );
}

function Spiral() {
  let d = "";
  for (let t = 0; t <= 7 * Math.PI; t += 0.15) {
    const r = 2.4 * t;
    d += `${d ? "L" : "M"}${(150 + r * Math.cos(t)).toFixed(1)} ${(56 + r * Math.sin(t) * 0.92).toFixed(1)}`;
  }
  return (
    <svg className="lab-fig spiral" viewBox="0 0 300 112" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.3" pathLength="1" />
    </svg>
  );
}

const LINES = [
  { k: "Sense", fig: <Pulse />, t: "The signal under the signal.", d: "The interval between two heartbeats. The depth of a night. The hour attention drops. Your body keeps a record you never wrote, on your wrist, your ring, your scale and your phone. We read it passively: no prompts, no typing." },
  { k: "Understand", fig: <Web />, t: "Your own usual, learned.", d: "Not the population's average: yours. Models that learn what normal is for one person, across every device they wear, and notice when something has moved, and how sure they can be." },
  { k: "Adapt", fig: <Spiral />, t: "Instruments that sharpen with time.", d: "A reading that improves the longer it watches. Seven nights make a hint, thirty a ruling, a year a portrait. Memory is the method." },
];

const HORIZONS = [
  { k: "Neuro", d: "The autonomic nervous system, read from the wrist: heart rate variability, sleep architecture and recovery as a window on stress, mood and the mind." },
  { k: "Memory", d: "Mnemo is named for Mnemosyne, memory. A record of a life kept honestly enough to be asked questions years later." },
  { k: "Care", d: "Signals that tell a family something has changed before anyone has said it." },
  { k: "Spatial", d: "Instruments that leave the screen: your readings in the room around you, on the headsets coming next." },
];

export default function Lab() {
  return (
    <section className="sec lab" id="lab" aria-labelledby="lab-h">
      <div className="lab-sky" aria-hidden="true" />
      <div className="wrap">
        <Reveal as="p" className="sec-no on-ink">§ 1 · The lab</Reveal>
        <Reveal as="h2" id="lab-h" className="sec-h on-ink">
          We study the record your body keeps. <em>And build the instruments to read it.</em>
        </Reveal>
        <Reveal as="p" className="lab-lede">
          Mnemo Labs works where neuroscience, wearables and AI meet: the quiet, continuous signals of the body and mind, and the honest instruments needed to read them. BodyProof and The Ministry are the first two instruments out of the lab.
        </Reveal>
        <ol className="lab-lines">
          {LINES.map((l, i) => (
            <Reveal as="li" key={l.k} delay={i * 110}>
              <p className="lab-k"><span>Fig. L{i + 1}</span>{l.k}</p>
              {l.fig}
              <h3>{l.t}</h3>
              <p>{l.d}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="lab-hz">
          <p className="lab-k"><span>Horizons</span>In the lab, not in the apps yet</p>
          <dl>
            {HORIZONS.map((h) => (
              <div key={h.k}><dt>{h.k}</dt><dd>{h.d}</dd></div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
