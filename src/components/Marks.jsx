import React from "react";

// BodyProof's mark (F2 Calibrated, the B gauge), geometry copied from the app's
// lib/brandMark.mjs by way of eend.app's bodyproof/_parts/brand.tsx. Change it
// there first, then here. The neon wedge only ever sits on ink.
export const BP = {
  viewBox: "0 0 48 48",
  b: "M13.5 20H22.5A10.5 10.5 0 0 1 22.5 41H13.5V7H22.5A6.5 6.5 0 0 1 22.5 20H13.5",
  bWidth: 5,
  wedge: "M16.5 30.5L26.03 25A11 11 0 0 1 27.46 29.54Z",
  pivot: { cx: 16.5, cy: 30.5, r: 2.6 },
};

export const BP_COLOURS = {
  ink: "#16171D",
  ground: "#F2F1EC",
  olive: "#5C6B1A",
  neon: "#E0F76A",
};

export function BodyProofMark({ size = 34, dark = false, title }) {
  const ink = dark ? BP_COLOURS.ground : BP_COLOURS.ink;
  const wedge = dark ? BP_COLOURS.neon : BP_COLOURS.olive;
  const label = title ? { role: "img", "aria-label": title } : { "aria-hidden": true };
  return (
    <svg width={size} height={size} viewBox={BP.viewBox} style={{ display: "block", flexShrink: 0 }} {...label}>
      <path d={BP.b} fill="none" stroke={ink} strokeWidth={BP.bWidth} strokeLinejoin="round" />
      <path d={BP.wedge} fill={wedge} />
      <circle cx={BP.pivot.cx} cy={BP.pivot.cy} r={BP.pivot.r} fill={ink} />
    </svg>
  );
}

// BODYPROOF in Geist Mono caps: BODY at 400 and PROOF at 600.
export function BodyProofWordmark() {
  return (
    <span className="bp-wm" aria-hidden="true">
      BODY<b>PROOF</b>
    </span>
  );
}

// The Mnemo M, David's artwork (public/mnemo-mark-20251102.png).
export function MnemoMark({ size = 30 }) {
  return (
    <img
      src="/mnemo-mark-20251102.png"
      width={Math.round((size * 711) / 666)}
      height={size}
      alt=""
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}

// BodyProof's app icon as it ships: the olive tile with the cream B and the
// neon wedge (the app's latest build, exported at 512 and kept at 192 here).
export function BodyProofIcon({ size = 56 }) {
  return (
    <img
      src="/icons/bodyproof-192.png"
      width={size}
      height={size}
      alt="BodyProof"
      style={{ display: "block", borderRadius: "22.4%", boxShadow: "0 0 0 1px rgba(22,23,29,.08), 0 8px 18px -10px rgba(22,23,29,.45)" }}
    />
  );
}
