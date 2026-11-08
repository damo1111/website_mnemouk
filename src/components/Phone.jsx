import React from "react";

// A phone drawn in CSS around a real screen from one of our apps, after the
// eend sites' Phone, with a thin iPhone bezel: the body's padding is under 2%
// of its width, a 1px light rim, and the screen's corner is the body's corner
// less that padding. The screens are captured without a system status bar,
// so the frame adds one (9:41, signal, wi-fi, battery) in the screen's own top
// colour, with the Dynamic Island and the home bar. The screen is shown whole
// at the phone's width: nothing is cropped.

function StatusBar() {
  return (
    <div className="ph-status" aria-hidden="true">
      <span className="ph-clock">9:41</span>
      <span className="ph-icons">
        <svg viewBox="0 0 18 12" width="18" height="12"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
        <svg viewBox="0 0 16 12" width="16" height="12"><path d="M8 2.2c2.4 0 4.6.9 6.3 2.5l1.2-1.3A10.7 10.7 0 0 0 8 .4C5.1.4 2.5 1.5.5 3.4l1.2 1.3A8.9 8.9 0 0 1 8 2.2Zm0 3.6c1.4 0 2.7.5 3.7 1.4l1.2-1.3A7.3 7.3 0 0 0 8 4c-1.9 0-3.6.7-4.9 1.9l1.2 1.3c1-.9 2.3-1.4 3.7-1.4Zm0 3.5c-.6 0-1.1.2-1.5.6L8 11.6l1.5-1.7c-.4-.4-.9-.6-1.5-.6Z" /></svg>
        <span className="ph-batt"><span /></span>
      </span>
    </div>
  );
}

// With `stack`, several screens share one frame and only `active` shows. The
// first screen sets the height; the rest sit over it.
export default function Phone({ shot, stack, active = 0, eager = false, className = "" }) {
  const shots = stack ?? [shot];
  const first = shots[0];
  return (
    <div className={`ph ${className}`} style={{ "--ph-top": shots[active]?.top ?? first.top }}>
      <div className="ph-body">
        <span className="ph-btn ph-act" aria-hidden="true" />
        <span className="ph-btn ph-vup" aria-hidden="true" />
        <span className="ph-btn ph-vdn" aria-hidden="true" />
        <span className="ph-btn ph-pwr" aria-hidden="true" />
        <div className="ph-glass">
          <StatusBar />
          <div
            className={`ph-screen${stack ? " is-stack" : ""}`}
            style={{ aspectRatio: `${first.w} / ${first.h}` }}
          >
            {shots.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                width={s.w}
                height={s.h}
                alt={stack && i !== active ? "" : s.alt}
                aria-hidden={stack && i !== active ? true : undefined}
                loading={eager ? "eager" : "lazy"}
                decoding="async"
                className={stack ? (i === active ? "on" : i < active ? "past" : "") : ""}
              />
            ))}
          </div>
          <span className="ph-island" aria-hidden="true" />
          <span className="ph-home" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
