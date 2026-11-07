import React, { useEffect, useRef, useState } from "react";
import Phone from "./Phone";
import { BODYPROOF_SCREENS } from "../data/screens";

const [TODAY, HRV, SOBER, MEDS] = BODYPROOF_SCREENS.map((x) => x.shot);

// BodyProof's screens, one at a time: on a wide screen the phone is pinned and
// the screen changes as each note scrolls past its middle; on a phone each note
// carries its own phone.

const STEPS = [
  {
    shot: TODAY,
    fig: "4a",
    t: "Today",
    d: "The day so far in one sentence, then small rings for food, HRV, doses and the alcohol free run. Every figure opens its own page.",
  },
  {
    shot: HRV,
    fig: "4b",
    t: "Heart rate variability, balanced",
    d: "Each watch is set against the others on the nights they share. Your usual is drawn as a band, never a goal line, and a hand off with no shared nights is drawn as a break.",
  },
  {
    shot: SOBER,
    fig: "4c",
    t: "Alcohol free",
    d: "The run, the days in all and the longest run. A drink restarts the run, nothing more. Then what your nights have done since quit day, said only once they have earned it.",
  },
  {
    shot: MEDS,
    fig: "4d",
    t: "Medications",
    d: "A pill a dose, the notes kept beside them, and in time what your own nights did after a dose and without one.",
  },
];

export default function BodyProofSteps() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="steps">
      <ol className="steps-list">
        {STEPS.map((s, i) => (
          <li
            key={s.fig}
            data-i={i}
            ref={(el) => (refs.current[i] = el)}
            className={`step${i === active ? " on" : ""}`}
          >
            <div className="step-phone">
              <Phone shot={s.shot} />
            </div>
            <p className="fig-no">Fig. {s.fig}</p>
            <h3 className="step-t">{s.t}</h3>
            <p className="step-d">{s.d}</p>
          </li>
        ))}
      </ol>
      <div className="steps-stage" aria-hidden="true">
        <div className="steps-pin">
          <Phone stack={STEPS.map((s) => s.shot)} active={active} />
          <p className="stage-cap">
            <span className="fig-no">Fig. {STEPS[active].fig}</span> BodyProof: {STEPS[active].t}
          </p>
        </div>
      </div>
    </div>
  );
}
