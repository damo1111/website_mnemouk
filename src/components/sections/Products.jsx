import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../ui/ProductCard";
import { products } from "../../data/products";

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-mono text-[11px] tracking-widest text-blue"
      >
        PRODUCTS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-text md:text-[52px]"
      >
        Two apps.
        <br />
        One thesis.
      </motion.h2>

      <div className="mt-14 flex flex-col gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
