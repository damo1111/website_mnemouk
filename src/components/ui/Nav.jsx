import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Invest", href: "#invest" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-16 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className="font-body text-sm tracking-widest text-blue no-underline"
        >
          MNEMO
        </a>
        <div className="flex items-center gap-6 md:gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] text-muted no-underline transition-colors hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
