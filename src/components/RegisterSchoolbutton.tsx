import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const spring: Transition = { type: "spring", stiffness: 400, damping: 15 };


export default function RegisterSchoolButton() {
  return (
    <a href="https://forms.gle/Sz2FgvX74ASnDN6i9" target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.93 }}
        transition={spring}
        className="
          group flex items-center gap-3
          bg-white hover:bg-green-50 text-green-600
          font-extrabold text-base md:text-lg
          px-7 py-[15px] rounded-2xl
          border-[2.5px] border-green-600
          shadow-[0_4px_0_#bbf7d0,0_6px_16px_rgba(22,163,74,0.15)]
          font-['Nunito'] tracking-tight
          transition-colors
        "
      >
        Register My School
        <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1.5">
          arrow_forward
        </span>
      </motion.button>
    </a>
  );
}