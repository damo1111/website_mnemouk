import React, { useEffect, useState } from "react";
import { prefersReducedMotion, useSeen } from "./motion";

// One night, two devices, one honest range: the figures BodyProof's own site
// uses (synthetic, the app's mock build). Drawn as the B mark's gauge: a
// needle sweeps in, then opens into a wedge, because an honest reading is a
// range. It plays once, the first time it is seen.

const LO = 390; // 6h30
const HI = 465; // 7h45
const CX = 160;
const CY = 168;
const R = 128;

const APPLE = 412; // 6h52
const OURA = 446; // 7h26
const RANGE = [418, 438]; // 6h58 to 7h18
const MID = (RANGE[0] + RANGE[1]) / 2;
const HALF = (RANGE[1] - RANGE[0]) / 2;

const ang = (m) => Math.PI * (1 - (m - LO) / (HI - LO));
const pt = (m, r = R) => [CX + r * Math.cos(ang(m)), CY - r * Math.sin(ang(m))];
const hm = (m) => `${Math.floor(m / 60)}h ${String(Math.round(m % 60)).padStart(2, "0")}`;
const ease = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);

function wedgePath(mid, half, r) {
  const [x1, y1] = pt(mid - half, r);
  const [x2, y2] = pt(mid + half, r);
  return `M${CX} ${CY}L${x1.toFixed(2)} ${y1.toFixed(2)}A${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}Z`;
}

export default function RangeGauge() {
  const [ref, seen] = useSeen({ threshold: 0.45 });
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!seen) return undefined;
    if (prefersReducedMotion()) {
      setT(1);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const k = Math.min(1, (now - start) / 1900);
      setT(k);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen]);

  // 0 to .5: the needle sweeps from the left to the middle of the range.
  // .5 to 1: it opens into the wedge.
  const mid = LO + (MID - LO) * ease(t / 0.5);
  const half = 0.5 + (HALF - 0.5) * ease((t - 0.5) / 0.5);
  const show = (from) => ease((t - from) / 0.2);

  const ticks = [];
  for (let m = LO; m <= HI; m += 5) {
    const major = (m - LO) % 15 === 0;
    const [x1, y1] = pt(m, R + 6);
    const [x2, y2] = pt(m, R + (major ? 16 : 11));
    ticks.push(<line key={m} x1={x1} y1={y1} x2={x2} y2={y2} className={major ? "g-tick major" : "g-tick"} />);
    if (major) {
      const [lx, ly] = pt(m, R + 30);
      ticks.push(
        <text key={`l${m}`} x={lx} y={ly} className="g-lab" textAnchor="middle" dominantBaseline="middle">
          {hm(m).replace(" ", "")}
        </text>,
      );
    }
  }

  const [ax, ay] = pt(APPLE, R - 2);
  const [ox, oy] = pt(OURA, R - 2);

  return (
    <figure className="gauge" ref={ref}>
      <div className="gauge-art">
        <svg viewBox="0 0 320 190" role="img" aria-label="A gauge from 6 hours 30 to 7 hours 45 asleep. Apple Watch reads 6 hours 52, Oura 7 hours 26. BodyProof gives the range 6 hours 58 to 7 hours 18.">
          <path d={`M${CX - R} ${CY}A${R} ${R} 0 0 1 ${CX + R} ${CY}`} className="g-arc" />
          {ticks}
          <path d={wedgePath(mid, half, R - 10)} className="g-wedge" />
          <circle cx={CX} cy={CY} r="7" className="g-pivot" />
          <g style={{ opacity: show(0.15) }}>
            <circle cx={ax} cy={ay} r="6" className="g-dev" />
          </g>
          <g style={{ opacity: show(0.3) }}>
            <rect x={ox - 5.5} y={oy - 5.5} width="11" height="11" className="g-dev" />
          </g>
        </svg>
      </div>
      <dl className="readouts">
        <div style={{ opacity: show(0.1) }}>
          <dt><span className="dev-ico circ" />Apple Watch</dt>
          <dd><span className="fig">{hm(APPLE)}</span> asleep, last night</dd>
        </div>
        <div style={{ opacity: show(0.25) }}>
          <dt><span className="dev-ico sq" />Oura</dt>
          <dd><span className="fig">{hm(OURA)}</span> same night</dd>
        </div>
        <div className="bp-row" style={{ opacity: show(0.7) }}>
          <dt><span className="dev-ico wedge" />BodyProof</dt>
          <dd><span className="fig">{hm(RANGE[0])} to {hm(RANGE[1])}</span> one night, two devices, one honest range</dd>
        </div>
      </dl>
      <figcaption>A made up night, to show the idea.</figcaption>
    </figure>
  );
}
