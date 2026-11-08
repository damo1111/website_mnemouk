import React from "react";
import { useSeen } from "./motion";

// Rises 14px and fades in once, the first time it is seen.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, seen] = useSeen({ threshold: 0.15 });
  return (
    <Tag
      ref={ref}
      className={`rv${seen ? " in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
