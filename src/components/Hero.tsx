import { useState } from "react";
import RegistrationModal from "./RegisterModal";
// import { motion } from "framer-motion";
import RegistrationChilbutton from "./RegisterChildbutton";


export default function Hero() {
const [modalType, setModalType] = useState<"child" | "school" | null>(null);

  return (
    <header id="hero" className="relative overflow-hidden bg-gradient-to-br from-brand-green via-emerald-700 to-teal-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-black py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-20 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative ">
        
        {/* Left Content */}
        <div className="space-y-8 lg:space-y-12">
          <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-sm font-medium text-white">
            <span className="material-symbols-outlined text-accent-yellow text-xl">celebration</span>
            Children's Day 2026
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-[82px] leading-[1.05] text-white tracking-tighter animate-fade-in-up">
            The Big Reveal
          </h1>

          <h2 className="font-display text-4xl md:text-5xl lg:text-[54px] leading-tight text-white/95">
            Where Little Hands Build{' '}
            <span className="text-accent-yellow relative inline-block">
              Big Miracles
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-yellow/40 rounded-full" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 max-w-lg animate-fade-in-up animation-delay-300">
            Celebrate Children's Day at the <strong>5th Annual Codeplay72 Codeparty</strong>.<br />
            A day of magic, logic, and limitless imagination.
          </p>

          {/* Date Badge */}
          <div className="flex items-center gap-3 bg-white/10 dark:bg-zinc-800/80 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/20 w-fit">
            <span className="material-symbols-outlined text-accent-yellow text-3xl">calendar_today</span>
            <div>
              <p className="font-semibold text-white text-lg">May 27, 2026</p>
              <p className="text-white/70 text-sm">Jos, Plateau State</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <RegistrationChilbutton/>
           

            <button className="border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-semibold text-xl px-10 py-6 rounded-2xl transition-all duration-300 backdrop-blur-sm"
            onClick={() => setModalType('school')}
            >
              Register My School
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-500">
          <div className="relative">
            {/* Main Image Container */}
            <div className="aspect-square w-full max-w-[520px] rounded-[3rem] overflow-hidden border-8 border-accent-yellow shadow-2xl shadow-black/50 rotate-[2deg] hover:rotate-0 transition-transform duration-700">
              <img
              src="/images/hero.png"
                alt="Children coding happily"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Anniversary Badge */}
            <div className="absolute -bottom-8 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500 border border-white/30 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-4xl">rocket_launch</span>
                </div>
                <div>
                  <p className="font-bold text-2xl text-zinc-900 dark:text-white">5th Anniversary</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">2022 — 2026</p>
                </div>
              </div>
            </div>

            {/* Optional small floating sparkles / icons */}
            <div className="absolute -top-8 -right-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur p-4 rounded-2xl shadow-lg rotate-6 text-4xl animate-bounce-slow">
              ✨
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
      <RegistrationModal
      isOpen={modalType !== null}
      onClose={()=> setModalType(null)}
      type={modalType || "child"}
      />
    </header>
  );
}