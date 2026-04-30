import {motion } from "framer-motion";
import { useState } from "react";
import RegistrationModal from "./RegisterModal";
// import RegistrationModal from "./RegisterModal";

export default function RegisterSchoolButton() {
  const [modalType, setModalType] = useState<"child" | "school" | null>(null);

  return (
   <>
    <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-brand-green hover:bg-emerald-700 text-white font-semibold text-xl px-14 py-6 rounded-2xl transition-all shadow-lg shadow-brand-green/30 flex-1"
              onClick={()=> setModalType('school')}
            >
              Register My School
            </motion.button>
             <RegistrationModal
                                    isOpen={modalType !== null}
                                    onClose={()=> setModalType(null)}
                                    type={modalType || "child"}
                                    />
   </>
  );
}