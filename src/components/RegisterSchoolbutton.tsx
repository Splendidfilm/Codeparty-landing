import {motion } from "framer-motion";
import { useState } from "react";
// import RegistrationModal from "./RegisterModal";
// import RegistrationModal from "./RegisterModal";

export default function RegisterSchoolButton() {
  // const [modalType, setModalType] = useState<"child" | "school" | null>(null);

  return (
   <a href="https://forms.gle/Sz2FgvX74ASnDN6i9" target='_blank' rel="Click to register for school" >
    <motion.button
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-brand-green hover:bg-emerald-700 text-white font-semibold text-xl px-14 py-6 rounded-2xl  shadow-brand-green/30  transition-all shadow-lg  flex-1 t active:scale-90  group flex items-center justify-center gap-3"
              // onClick={()=> setModalType('school')}
            >
              Register My School
               <span className=" material-symbols-outlined group-hover:translate-x-3 transition-all text-2xl " >trending_flat</span>
            </motion.button>
            </a>
  );
}