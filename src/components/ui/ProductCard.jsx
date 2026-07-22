import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Tag from "./Tag";
import { cn } from "../../lib/utils";

function Mockup({ gradient, accent, name }) {
  return (
    <div
      className="relative flex min-h-[300px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-border"
      style={{ background: gradient }}
    >
      {/* Placeholder device silhouette until a screengrab is dropped in */}
      <div
        className="h-[78%] w-[46%] max-w-[220px] rounded-[2rem] border"
        style={{ borderColor: `${accent}55`, boxShadow: `0 0 60px ${accent}22` }}
      >
        <div
          className="mx-auto mt-4 h-1 w-10 rounded-full"
          style={{ background: `${accent}66` }}
        />
      </div>
      <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-text/30">
        {name.toUpperCase()}
      </span>
    </div>
  );
}

export default function ProductCard({ product }) {
  const imageLeft = product.imageSide === "left";

  const media = <Mockup gradient={product.gradient} accent={product.accent} name={product.name} />;

  const copy = (
    <div className="flex flex-1 flex-col items-start justify-center">
      <Tag>{product.tag}</Tag>
      <h3 className="mt-6 font-display text-4xl font-light text-text">
        {product.name}
      </h3>
      <p className="mt-4 max-w-[440px] font-body text-base leading-relaxed text-muted">
        {product.description}
      </p>
      <p className="mt-6 font-mono text-[11px] text-muted">{product.detail}</p>
      <a
        href={product.href}
        target="_blank"
        rel="noreferrer"
        className="group mt-6 inline-flex items-center gap-2 font-body text-sm text-blue no-underline"
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className={cn(
        "flex flex-col gap-10 rounded-2xl border border-border bg-surface p-8 md:min-h-[480px] md:p-16",
        imageLeft ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {copy}
      {media}
    </motion.article>
  );
}
