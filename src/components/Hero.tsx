// import { useState } from "react";
// import RegistrationModal from "./RegisterModal";
import { motion } from "framer-motion";
import RegistrationChildbutton from "./RegisterChildbutton";
import RegisterSchoolButton from "./RegisterSchoolbutton";


export default function Hero() {
// const [modalType, setModalType] = useState<"child" | "school" | null>(null);

  return (
    <header id="hero" className=" relative overflow-hidden py-20 md:py-28 hero_bg bg-cover flex items-center justify-around space-y-10 flex-col ">


      
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
          className="font-display font-bold text-8xl md:text-9xl  leading-[1.05] text-white text-center items-center " >
            The Civic Miracle
          </motion.h1>

          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ ease:'easeInOut', duration:1.5, delay:0.3 }}
          className=" flex flex-row md:flex-col items-center space-x-2 font-display text-4xl md:text-5xl lg:text-[54px] leading-tight text-white/95 " >

              <span className="font-semibold  " >Super Human</span>
            <span className="text-zinc-200" >x</span>
            <span className=" text-zinc-100 " > Super Machine</span>

          </motion.div>


          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-white/95 items-center " >
         Where Little Hands Build Big  
        <span className="text-accent-yellow relative inline-block ml-1" >
         "Miracles."
         <motion.span 
         initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ ease:'backInOut', duration:1.5, delay:1.5 }}
      
         className="absolute -bottom-2 left-0 w-full h-1 bg-zinc-100/70 rounded-full transition-all " />
         </span>
       </h2>
            <motion.p 
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ ease:'backInOut', duration:0.5, delay:2 }}
            className="text-xl md:text-2xl text-white/90 max-w-lg animate-fade-in-up animation-delay-300">
             Celebrate Children's Day at the <strong className="text-brand-green text"  >5th Annual Codeplay72 Codeparty</strong>.<br />
             A day of magic, logic, and limitless imagination.
           </motion.p>


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