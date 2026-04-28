"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
interface NavItemProps {
  label: string;
  active?: boolean;
}

// --- Sub-components ---
const NavItem = ({ label, active }: NavItemProps) => (
  <a
    href="#"
    className={`font-['Montserrat'] text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
      active
        ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1"
        : "text-white/60 hover:text-white"
    }`}
  >
    {label}
  </a>
);

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="space-y-3 p-4 hover:bg-white/5 transition-colors rounded-lg group">
    <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <h4 className="font-['Montserrat'] text-lg font-semibold">{title}</h4>
    <p className="text-xs text-on-surface-variant leading-relaxed">
      {description}
    </p>
  </div>
);

// --- Main Component ---
const VisionaryBuild: React.FC = () => {
  const [ecoMode, setEcoMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-['Work_Sans'] selection:bg-primary selection:text-black">
      {/* Blueprint Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-white/10 flex justify-between items-center px-6 md:px-16 py-6">
        <div className="text-xl font-black tracking-tighter text-[#D4AF37]">
          Гүнд Саплай
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavItem label="Home" active />
          <NavItem label="Projects" />
          <NavItem label="3D Tour" />
          <NavItem label="Client Portal" />
        </nav>
        <button className="bg-[#D4AF37] text-neutral-950 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          Get Started
        </button>
      </header>

      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10">
            {/* Шинэ арын зураг (Барилга) */}
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="Construction site at sunset"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[12px] font-semibold text-primary tracking-[0.4em] uppercase mb-4 block">
              Дижитал Урлал & Инженерчлэл
            </span>
            <h1 className="font-['Montserrat'] text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
              Ухаалаг Барилгын <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffbb00] to-[#fde296]">
                Дижитал Шилжилт
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto font-light">
              AI-д суурилсан 3D төлөвлөлт болон байгальд ээлтэй архитектурын
              нэгдэл.
            </p>
            <button className="bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest flex items-center gap-3 mx-auto hover:shadow-[0_0_30px_rgba(242,202,80,0.4)] transition-all">
              3D Туршилт эхлүүлэх
              <span className="material-symbols-outlined">rocket_launch</span>
            </button>
          </motion.div>
        </section>

        {/* 3D Viewport Section */}
        <section className="px-6 md:px-16 mb-24 mt-30">
          <div className="max-w-[1440px] mx-auto">
            <div className="relative aspect-video bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden shadow-2xl group viewport-gradient">
              {/* Overlays */}
              <div className="absolute top-6 left-6 z-20 space-y-4">
                <div className="bg-black/60 backdrop-blur-xl p-5 border border-white/10 rounded-xl">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">
                    Техник үзүүлэлт
                  </h4>
                  <div className="space-y-2 text-[10px] font-medium text-white/70">
                    <div className="flex justify-between gap-12 border-b border-white/5 pb-1">
                      <span>Polygons</span>
                      <span className="text-white">2.4M</span>
                    </div>
                    <div className="flex justify-between gap-12 border-b border-white/5 pb-1">
                      <span>Material</span>
                      <span className="text-white">Eco-Synthetic</span>
                    </div>
                    <div className="flex justify-between gap-12">
                      <span>Engine</span>
                      <span className="text-white">RTX Real-time</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 z-20">
                <button
                  onClick={() => setEcoMode(!ecoMode)}
                  className={`px-6 py-2 rounded-full font-bold text-[10px] flex items-center gap-2 transition-all border ${
                    ecoMode
                      ? "bg-green-500 text-black border-green-400"
                      : "bg-white/5 text-white border-white/20 hover:bg-white/10"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">eco</span>
                  {ecoMode ? "Eco-Mode Active" : "Enable Eco-Mode"}
                </button>
              </div>

              {/* Simulation of 3D Model Image - Шинэ зураг (Орчин үеийн байшин) */}
              <motion.img
                animate={{ scale: ecoMode ? 1.05 : 1 }}
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Modern 3D render of a villa"
                className={`w-full h-full object-cover transition-all duration-700 ${ecoMode ? "hue-rotate-90 saturate-150" : "grayscale-0"}`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="bg-neutral-900/50 px-6 md:px-16 py-24 border-y border-white/5">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-[12px] font-bold text-primary uppercase tracking-widest">
                Тогтвортой Ирээдүй
              </span>
              <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold leading-tight">
                Байгальд ээлтэй төлөвлөлт нь ирээдүйн тогтвортой хөгжлийн үндэс
                юм
              </h2>
              <div className="grid sm:grid-cols-3 gap-8">
                <ServiceCard
                  icon="solar_power"
                  title="Solar Energy"
                  description="Нарны эрчим хүчийг хамгийн үр дүнтэйгээр ашиглах байршил."
                />
                <ServiceCard
                  icon="water_drop"
                  title="Water Recycling"
                  description="Саарал ус дахин ашиглах нэгдсэн ухаалаг систем."
                />
                <ServiceCard
                  icon="thermostat"
                  title="Thermal Efficiency"
                  description="Дулаан алдагдлыг 90% хүртэл бууруулах материал."
                />
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {/* Шинэ зураг (Ногоон архитектур) */}
              <img
                src="https://images.unsplash.com/photo-1597116827038-76635d3d4400?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Modern building with vertical gardens"
              />
            </div>
          </div>
        </section>

        {/* Client Portal Snippet */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-[1440px] mx-auto bg-[#1A1A1A] rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <h2 className="font-['Montserrat'] text-3xl font-bold mb-2">
                  Түншийн Портал
                </h2>
                <p className="text-white/50">
                  Төслийн явц болон урамшууллын хяналт
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 min-w-[140px]">
                  <span className="text-[10px] font-bold text-white/40 block uppercase mb-1">
                    Таны Оноо
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    1,500 XP
                  </span>
                </div>
                <div className="bg-primary/10 p-5 rounded-2xl border border-primary/20 min-w-[140px]">
                  <span className="text-[10px] font-bold text-primary block uppercase mb-1">
                    Цол
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    Алтан Түнш
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-black/40 p-8 rounded-2xl border border-white/5">
                <div className="flex justify-between items-end mb-6">
                  <h5 className="font-bold">Төсөл: Улаанбаатар Резиденс</h5>
                  <span className="text-xs font-bold text-primary">
                    75% Дууссан
                  </span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    className="h-full bg-primary shadow-[0_0_20px_rgba(242,202,80,0.6)]"
                  />
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      military_tech
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Diamond Status</p>
                    <p className="text-[10px] text-white/40">500 XP үлдсэн</p>
                  </div>
                </div>
                <button className="w-full mt-8 py-4 bg-transparent border border-primary text-primary font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                  Хичээл эхлүүлэх
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/5 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-black text-[#D4AF37] tracking-tighter">
              VISIONARY BUILD 3D
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Digital Craftsmanship for the Modern Era
            </p>
          </div>
          <div className="flex gap-24">
            <div className="space-y-4">
              <h6 className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Company
              </h6>
              <ul className="space-y-2 text-[10px] uppercase font-bold tracking-widest">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Technical Specs
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Legal
              </h6>
              <ul className="space-y-2 text-[10px] uppercase font-bold tracking-widest">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-4">
            <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">
                auto_awesome
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                Powered by AI
              </span>
            </div>
            <p className="text-[10px] text-white/20">
              © 2026 Visionary Build 3D. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisionaryBuild;
