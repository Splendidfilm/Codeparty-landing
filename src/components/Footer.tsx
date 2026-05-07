import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="bg-zinc-950 text-white py-20 md:py-28 px-6 border-t border-zinc-800 w-full">
      <div className="max-w-7xl mx-auto flex flex-col  items-center">
        <img src="/Logo.png" alt="Codepartylogo" className=" size-36" />
        <div className="flex flex-col items-center text-center">
          
          {/* Main Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 mb-8">
              <span className="text-accent-yellow text-3xl">✨</span>
              <span className="font-display text-3xl md:text-4xl font-bold tracking-tighter">
                Join the Movement
              </span>
            </div>
          </motion.div>

          <p className="max-w-2xl text-zinc-300 text-lg leading-relaxed mb-12">
            5 Years of Code. 5 Years of Play.<br />
            1 Big Miracle is coming.
          </p>

          {/* Social Links - Now clickable to open modal */}
          <div className="flex gap-10 text-4xl mb-16">
            <button
              onClick={openModal}
              className="text-zinc-400 hover:text-accent-yellow transition-all hover:scale-110 duration-300"
              aria-label="Open social links"
            >
              <span className="material-symbols-outlined">hub</span>
            </button>

            <button
              onClick={openModal}
              className="text-zinc-400 hover:text-accent-yellow transition-all hover:scale-110 duration-300"
              aria-label="Open social links"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </button>

            <button
              onClick={openModal}
              className="text-zinc-400 hover:text-accent-yellow transition-all hover:scale-110 duration-300"
              aria-label="Open social links"
            >
              <span className="material-symbols-outlined">public</span>
            </button>

           
          </div>

       

          {/* Bottom Bar with Clickable Phone Numbers */}
          <div className="border-t border-zinc-800 pt-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              <p className="text-zinc-500">
                © 2026 Codeplay72 Codeparty • Expertly Playful
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 text-zinc-400">
                <span>
                  Philip:{" "}
                  <a
                    href="tel:+2349127730659"
                    className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    +234 912 773 0659
                  </a>
                </span>
                <span>
                  Paulmike:{" "}
                  <a
                    href="tel:+2348140534075"
                    className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    +234 814 053 4075
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <span className="text-5xl mb-4 block">🌟</span>
              <h3 className="text-3xl font-bold mb-3">Connect With Us</h3>
              <p className="text-zinc-400">
                We’d love to hear from you! Reach out on any of our platforms.
              </p>
            </div>

            <div className="space-y-4">
              {/* You can replace these with real links later */}
              

              <a
                href=""
                target="_blank"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 p-4 rounded-2xl transition-colors"
              >
                <span className="text-3xl">✉️</span>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-zinc-500">codeplay72@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/codeplay72/"
                target="_blank"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 p-4 rounded-2xl transition-colors"
              >
                <span className="text-3xl">📸</span>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-zinc-500">@codeplay72</p>
                </div>
              </a>

             
            </div>

            <button
              onClick={closeModal}
              className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-white/90 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </footer>
  );
}