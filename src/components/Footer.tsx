import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20 md:py-28 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
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

          {/* Social Links */}
          <div className="flex gap-10 text-4xl mb-16">
            <a href="#" className="text-zinc-400 hover:text-accent-yellow transition-all hover:scale-110 duration-300">
              <span className="material-symbols-outlined">hub</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-accent-yellow transition-all hover:scale-110 duration-300">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-accent-yellow transition-all hover:scale-110 duration-300">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-accent-yellow transition-all hover:scale-110 duration-300">
              <span className="material-symbols-outlined">smart_display</span> {/* You can change to Instagram/X icon */}
            </a>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6 mb-16 text-sm uppercase tracking-widest font-medium">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Full Schedule</a>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              <p className="text-zinc-500">
                © 2026 Codeplay72 Codeparty • Expertly Playful
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 text-zinc-400">
                <span>
                  Philip: <span className="text-emerald-400 font-medium">+234-XXX-XXXX</span>
                </span>
                <span>
                  Paulmike: <span className="text-emerald-400 font-medium">+234-XXX-XXXX</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}