// import { useState } from "react";
// import RegistrationModal from "./RegisterModal";
import { motion } from "framer-motion";


export default function RegisterChildButton() {
  // const [modalType, setModalType] = useState<'child' | 'school' | null>(null);
  // https://forms.gle/Sz2FgvX74ASnDN6i9

  return (

    <a href="https://forms.gle/MFkwSxC5jLsB99g97" target="_blank" rel="noopener noreferrer">
    <motion.button
              
              className=" bg-brand-green hover:bg-emerald-700 text-white font-semibold text-lg md:text-xl px-14 py-6 rounded-2xl   transition-all shadow-lg  flex-1 t active:scale-90  group flex items-center justify-center gap-3 bg-white/10 border border-zinc-200 backdrop-blur-m font-['DM_Sans']  ">
              Register My Child <span className="material-symbols-outlined group-hover:translate-x-3 transition-all text-2xl " >trending_flat</span>
            </motion.button>
            </a>                  
)}