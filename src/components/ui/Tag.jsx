import React from "react";
import { cn } from "../../lib/utils";

export default function Tag({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1 font-mono text-[10px] tracking-widest text-signal",
        "bg-signal/[0.15]",
        className
      )}
    >
      {children}
    </span>
  );
}
