import { motion } from "framer-motion";
// import { useState } from "react";
// import RegistrationModal from "./RegisterModal";
import RegisterChildButton from "./RegisterChildbutton";
import RegisterSchoolButton from "./RegisterSchoolbutton";

export default function EventDetails() {
// const [modalType, setModalType] = useState<"child" | "school" | null>(null);

  return (
    <section className="bg-white dark:bg-zinc-950 py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full ">
      <div className="w-full mx-auto text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-10 py-3 rounded-full font-medium tracking-[2px] uppercase text-sm mb-12"
        >
          Event Details
        </motion.div>

        <h2 className="font-display text-5xl md:text-6xl text-zinc-900  mb-16 tracking-tight">
          Let&apos;s Make It Happen
        </h2>

        {/* Info Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-20">
          
          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center group"
          >
            <div className="w-20 h-20 bg-brand-green/10 dark:bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-brand-green dark:text-emerald-400 text-6xl">
                location_on
              </span>
            </div>
            <h4 className="font-semibold text-2xl text-zinc-900 dark:text-white mb-2">Location</h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Jos, Plateau State
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">(Exact Venue TBA)</p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-28 bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

          {/* Time */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center group"
          >
            <div className="w-20 h-20 bg-brand-green/10 dark:bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-brand-green dark:text-emerald-400 text-6xl">
                schedule
              </span>
            </div>
            <h4 className="font-semibold text-2xl text-zinc-900 dark:text-white mb-2">Time</h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium">
              9:00 AM — 3:30 PM
            </p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">May 27, 2026</p>
          </motion.div>
        </div>

{/* CTA */}
<section className="relative flex flex-col items-center overflow-hidden rounded-3xl w-full  py-14">

  {/* Background pattern */}
  {/* <div className="absolute inset-0 circuit-pattern opacity-70 pointer-events-none" /> */}

  {/* Card */}
  <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xl rounded-3xl  backdrop-blur-lg border border-zinc-200 p-10">

    {/* Heading */}
  

    {/* Buttons */}
    <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center  ">
      <RegisterChildButton />
      <RegisterSchoolButton />
    </div>
      <div className="flex flex-col items-center gap-1 text-center">
      <h2 className="text-white font-extrabold text-2xl md:text-3xl font-['Nunito'] tracking-tight">
        Join the programme
      </h2>
      <p className="text-zinc-500 text-base max-w-xs">
        Early bird registration is now open for families and schools
      </p>
    </div>

  </div>
</section>
       
      </div>
    </section>
  );
}