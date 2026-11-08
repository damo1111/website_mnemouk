import React, { useEffect, useRef, useState } from "react";
import Phone from "./Phone";
import { prefersReducedMotion } from "./motion";

// A phone that steps through an app's screens on its own, every few seconds,
// with a callout naming what the screen on show does. It waits while it is
// off screen or the tab is hidden, stops for good once someone picks a screen
// with the dots, and never moves with reduced motion (the dots still work).

export default function CyclingPhone({ screens, fig, app, every = 3200, offset = 0, eager = false, className = "" }) {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const n = screens.length;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (n < 2 || held || !visible || prefersReducedMotion()) return undefined;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        if (!document.hidden) setI((k) => (k + 1) % n);
      }, every);
    }, offset);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [n, held, visible, every, offset]);

  const s = screens[i];
  return (
    <figure className={`cyc ${className}`} ref={ref}>
      <Phone stack={screens.map((x) => x.shot)} active={i} eager={eager} />
      <figcaption className="callout">
        <span className="callout-head">
          <span className="fig-no">Fig. {fig}{n > 1 ? String.fromCharCode(97 + i) : ""}</span>
          <span className="callout-app">{app}</span>
        </span>
        <span key={i} className="callout-body">
          <b>{s.label}</b>
          <span>{s.line}</span>
        </span>
        {n > 1 && (
          <span className="dots" role="group" aria-label={`${app} screens`}>
            {screens.map((x, k) => (
              <button
                key={x.shot.src}
                type="button"
                className={k === i ? "on" : ""}
                aria-label={x.label}
                aria-pressed={k === i}
                onClick={() => {
                  setHeld(true);
                  setI(k);
                }}
              />
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
