// src/MnemoSite.jsx
import React, { useEffect } from "react";
import ScrollProgress from "./components/ui/ScrollProgress";
import Nav from "./components/ui/Nav";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Products from "./components/sections/Products";
import Technology from "./components/sections/Technology";
import Demo from "./components/sections/Demo";
import Investor from "./components/sections/Investor";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function MnemoSite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg font-body text-text">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Products />
        <Technology />
        <Demo />
        <Investor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
