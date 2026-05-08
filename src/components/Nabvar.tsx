import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import RegisterChildutton from "./RegisterChildbutton";
import RegisterSchoolbutton from "./RegisterSchoolbutton";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "#hero" },
    { name: "Our Journey", href: "#journey" },
    { name: "For Parents", href: "#parents" },
    { name: "For Schools", href: "#schools" },
    { name: "Itinerary", href: "#itinerary" },
  ];

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <nav className="sticky w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            className="w-10 h-10 rounded-full ring-2 ring-brand-green/20 group-hover:ring-brand-green/50 transition-all duration-300"
            src="/Logo.png"
            alt="CodeParty Logo"
          />
          <span className="hidden md:block font-display text-2xl font-bold tracking-tight text-zinc-800">
            CodeParty<span className="text-brand-green">.26</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-500 hover:text-brand-green transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-brand-green group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        
          {/* {/* href="#register"
          className="hidden md:inline-flex items-center gap-2 bg-brand-green text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brand-green/90 active:scale-95 transition-all duration-200"
        >
          Register Now
          <span className="text-accent-yellow">→</span>
        </a> */}

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0, alignSelf:'center'  }}
            transition={{ duration: 0.25 }}
            className=" h-[2px] w-[22px] bg-brand-green rounded-full flex"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-[2px] w-[22px] bg-brand-green rounded-full"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -7, alignSelf:'center' } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className=" h-[2px] w-[22px] bg-brand-green rounded-full flex"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-zinc-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link: NavLink, index: number) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.25 }}
                  className="flex items-center justify-between py-3.5 text-[15px] font-medium text-zinc-600 hover:text-brand-green transition-colors border-b border-zinc-100 last:border-none group"
                >
                  {link.name}
                  <span className="text-zinc-300 group-hover:text-brand-green transition-colors text-lg leading-none">›</span>
                </motion.a>
              ))}

              {/* Mobile CTA */}
             <div className="  rounded-xl mt-6 p-4 flex flex-row gap-4  ">
              <RegisterChildutton/>
              <RegisterSchoolbutton/>
             </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}