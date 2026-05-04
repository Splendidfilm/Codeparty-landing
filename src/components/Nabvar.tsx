import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Journey", href: "#journey" },
    { name: "For Parents", href: "#parents" },
    { name: "For Schools", href: "#schools" },
    { name: "Itinerary", href: "#itinerary" },
  ];

  return (
    <nav className="sticky w-full top-0 z-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div>
            <span className="font-display text-3xl font-bold tracking-tighter text-brand-green dark:text-accent-yellow">
              CodeParty<span className="text-zinc-400">.</span>26
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-600 dark:text-zinc-300 hover:text-brand-green dark:hover:text-accent-yellow transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green dark:bg-accent-yellow group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-brand-green dark:text-accent-yellow"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white/10 backdrop-blur-xl border-t border-zinc-200 "
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-lg font-medium">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-zinc-700 dark:text-zinc-200 hover:text-brand-green dark:hover:text-accent-yellow py-2 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}