import { motion, type Transition } from "framer-motion";

const spring: Transition = { type: "spring", stiffness: 400, damping: 15 };

export default function RegisterChildButton() {
  return (
    <a href="https://forms.gle/MFkwSxC5jLsB99g97" target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ y: -3, scale: 1.04 }}
        whileTap={{ scale: 0.93 }}
        transition={spring}
        className="
          group flex items-center gap-3
          bg-green-600 hover:bg-green-600 text-white
          font-extrabold text-lg md:text-xl
          px-9 py-[18px] rounded-[20px]
          shadow-[0_6px_0_#15803d,0_8px_20px_rgba(22,163,74,0.35)]
          font-['Nunito'] tracking-tight
          border-none transition-colors
        "
      >
        Register My Child
        <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1.5">
          arrow_forward
        </span>
      </motion.button>
    </a>
  );
}