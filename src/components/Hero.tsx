// import { useState } from "react";
// import RegistrationModal from "./RegisterModal";
import { motion } from "framer-motion";
import RegistrationChildbutton from "./RegisterChildbutton";
import RegisterSchoolButton from "./RegisterSchoolbutton";


export default function Hero() {
// const [modalType, setModalType] = useState<"child" | "school" | null>(null);

  return (
    <header id="hero" className=" relative overflow-hidden py-20 md:py-28 hero_bg bg-cover flex items-center justify-around space-y-10 flex-col w-full ">


      
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30 pointer-events-none bg-black h-full" />
      

  <div className=" relative w-full mx-auto flex flex-col gap-16 lg:gap-20 items-center justify-center">
        <div className=" w-full mx-auto flex flex-col  items-center  justify-center  ">
        
        {/* Left Content */}
        <div className="space-y-10 md:space-y-12 w-full flex flex-col items-center animate-fade-in-up ">


          <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity:1, y: 0 }}
          transition={{ ease:'easeInOut', duration:1.5 }}
          className=" text-7xl md:text-9xl  text-center items-center font-['Bebas_Neue'] font-semibold text-[72px] leading-[0.95] text-white tracking-wider mt-6 " >
            The Civic<br />Miracle
          </motion.h1>

        <div className="flex items-center gap-4 mt-4">
        <span className="font-['Lora'] text-[22px] font-semibold text-white/90">Super Human</span>
        <span className="font-['Bebas_Neue'] text-xl text-zinc-300 bg-[#2d7a45]/30 w-8 h-8 flex items-center justify-center rounded-lg">✕</span>
        <span className="font-['Lora'] text-[22px] font-semibold text-white/90">Super Machine</span>
      </div>


         {/* Tagline */}
      <p className="font-['Lora'] text-[22px] text-white/85 mt-6">
        Where little hands build <span className="text-[#e8a020] italic relative inline-block after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[2px] after:bg-white/30 text- text-shadow-xs ">“Big Miracles.”</span>
      </p>

      {/* Subtitle */}
      <p className="font-['Lora'] text-center italic text-white/75 max-w-[420px] leading-relaxed mt-6 text-2xl ">
        Celebrate Children&apos;s Day at the <br/> <strong className="font-semibold not-italic text-[#2d7a45]  ">5th Annual Codeplay72 CodeParty</strong>.<br />
        A day of magic, logic, and limitless imagination.
      </p>


 {/* Date Badge */}
          <div className="flex items-center gap-3 bg-white/10 dark:bg-zinc-800/80 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/20 w-fit  ">
            <span className="material-symbols-outlined text-accent-yellow text-3xl">calendar_today</span>
            <div>
              <p className="font-semibold text-white text-lg">May 27, 2026</p>
              <p className="text-white/70 text-sm">Jos, Plateau State</p>
            </div>
          </div>

          {/*  */}
          <div className=" bg-white animate-bounce dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl transition-transform duration-500 border border-white/30 dark:border-white/10">
              <div className="flex items-center gap-4  ">
                <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-4xl">rocket_launch</span>
                </div>
                <div>
                  <p className="font-bold text-2xl text-zinc-900 dark:text-white">5th Anniversary</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">2022 — 2026</p>
                </div>
              </div>
            </div>



        </div>

        {/* Right Visual */}
        {/* Floating Anniversary Badge
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

            {/* Optional small floating sparkles / icons 
        
          </div>
        </div>*/}
      </div> 
  {/* </div> */}

          {/* CTA Buttons */}

            <div className=" flex md:flex-row flex-col gap-6 w-full justify-center items-center">
      <RegisterSchoolButton/>
      <RegistrationChildbutton/>
            </div>
  </div>
    </header>
  );
}