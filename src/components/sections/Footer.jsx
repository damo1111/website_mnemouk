import React from "react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mnemo-labs/" },
  { label: "SEIS", href: "#invest" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-10">
        <p className="font-mono text-[11px] text-muted">
          © {year} Mnemo Labs Ltd
        </p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-mono text-[11px] text-muted no-underline transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
