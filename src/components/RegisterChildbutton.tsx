import { useState } from "react";
import RegistrationModal from "./RegisterModal";
import { motion } from "framer-motion";


export default function RegisterChildButton() {
  const [modalType, setModalType] = useState<'child' | 'school' | null>(null);
  

  return (
  
  <>
                        <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative bg-accent-yellow hover:bg-yellow-300 active:scale-95 text-zinc-900 font-semibold text-xl px-10 py-6 rounded-2xl transition-all duration-300 shadow-xl shadow-yellow-500/30 flex items-center justify-center gap-3 overflow-hidden"
              onClick={()=> setModalType('child')}
            >
              Register My Child
            </motion.button>
                  <RegistrationModal
                        isOpen={modalType !== null}
                        onClose={()=> setModalType(null)}
                        type={modalType || "child"}
                        />
                        </>
  );
}