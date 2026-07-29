import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Tag from "./Tag";
import { cn } from "../../lib/utils";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 18 },
  },
};

function AppFlow({ product }) {
  return (
    <div className="relative flex-1">
      {/* soft accent glow behind the device */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 rounded-[2rem] blur-2xl"
        style={{ background: `radial-gradient(60% 60% at 50% 40%, ${product.accent}22, transparent 70%)` }}
      />
      <div
        className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[2rem] border shadow-[0_30px_60px_-30px_rgba(20,30,60,0.35)]"
        style={{ borderColor: `${product.accent}40` }}
      >
        <video
          className="block aspect-[9/16] w-full object-cover"
          src={product.video}
          poster={product.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  const imageLeft = product.imageSide === "left";

  const copy = (
    <div className="flex flex-1 flex-col items-start justify-center">
      <Tag>{product.tag}</Tag>
      <h3 className="mt-6 font-display text-4xl font-light tracking-tight text-text">
        {product.name}
      </h3>
      <p className="mt-3 font-display text-xl font-light tracking-tight text-blue">
        {product.tagline}
      </p>
      <p className="mt-5 max-w-[460px] font-body text-base leading-relaxed text-muted">
        {product.description}
      </p>

      <ul className="mt-7 grid w-full max-w-[460px] gap-4 sm:grid-cols-1">
        {product.features.map((f) => (
          <li key={f.title} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full"
              style={{ background: product.accent }}
            />
            <span className="font-body text-sm leading-relaxed text-muted">
              <span className="font-medium text-text">{f.title}.</span>{" "}
              {f.description}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-7 font-mono text-[11px] text-muted">{product.detail}</p>
      <a
        href={product.href}
        target="_blank"
        rel="noreferrer"
        className="group mt-4 inline-flex items-center gap-2 font-body text-sm text-blue no-underline"
      >
        {product.linkLabel}
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );

  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "flex flex-col gap-10 rounded-2xl border border-border bg-surface p-8 md:min-h-[480px] md:items-center md:p-16",
        imageLeft ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {copy}
      <AppFlow product={product} />
    </motion.article>
  );
}
