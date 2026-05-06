import { motion } from 'framer-motion';
import React from 'react';

interface Sponsor {
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  { name: 'Harvard University', logo: '/images/harvard-university.png' },
  { name: 'Better Earth Foundation', logo: '/images/betterEarth.jpg' },
  { name: 'Stanford University', logo: '/images/stanford.png' },
  { name: 'CSFirst', logo: '/Logo.png' },
  { name: 'Google', logo: '/Logo.png' },
];

export default function Sponsors() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold text-brand-green mb-4"
        >
          Our Sponsors
        </motion.h2>

        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Those who have fostered our efforts and made this journey possible.
        </p>

        {/* Sponsors Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group flex flex-col items-center justify-center gap-6 w-full max-w-[260px]"
            >
              {/* Extra Large Logo Container */}
              <div className="relative w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 flex items-center justify-center 
                              bg-zinc-50 rounded-3xl border border-zinc-100 
                              group-hover:border-brand-green/30 transition-all duration-300 overflow-hidden shadow-sm">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bold Name */}
              <p className="text-base md:text-lg font-semibold text-zinc-800 text-center leading-tight tracking-tight px-4">
                {sponsor.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}