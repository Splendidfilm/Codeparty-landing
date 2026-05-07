import { motion } from 'framer-motion';
// import React from 'react';

interface Sponsor {
  name: string;
  logo: string;
}

// interface Partner {
//   name: string;
//   logo: string;
// }

// const partners: Partner[] = [
//   { name: 'Harvard University', logo: '/images/sponsors/harvard-university.png' },
//   { name: 'Stanford University', logo: '/images/sponsors/stanford.png' },
//   { name: 'Machine Learning', logo: '/images/sponsors/Machine.png' },
//   { name: 'Scratch', logo: '/images/sponsors/scratch.webp' },
//   { name: 'Google', logo: '/images/sponsors/google.png' },
//   { name: 'Godot', logo: '/images/sponsors/godot.png' },
// ];

const sponsors: Sponsor[] = [
  { name: 'ESC', logo: '/images/sponsors/ennopng.png' },
  { name: 'netaccess', logo: '/images/sponsors/net.png' },
  { name: 'Code for Africa', logo: '/images/sponsors/JOA LOGO.png' },
  { name: 'Better earth foundation', logo: '/images/sponsors/betterearth.png' },
  { name: 'ESC', logo: '/images/sponsors/esc.jfif' },
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
          className="text-5xl md:text-6xl font-semibold text-brand-green mb-4 font-serif "
        >
          Our Sponsors
        </motion.h2>

        <p className="text-lg text-zinc-600 max-w-2xl font-serif mx-auto">
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
              className="group flex flex-col items-center justify-center gap-6 w-full max-w-[260px]"
            >
              <div className="relative w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 flex items-center justify-center 
                               rounded-3xl transition-all duration-300 overflow-hidden ">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}

          <div>

          </div>
        </div>
      {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold text-zinc-900 my-6"
        >
          Global Affiliation & Industrial Partnership
        </motion.h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16 items-center justify-items-center">
          {partners.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group flex flex-col items-center justify-center gap-6 w-full max-w-[260px]"
            >
              <div className="relative w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 flex items-center justify-center 
                               rounded-3xl border border-zinc-100 
                              group-hover:border-brand-green/30 transition-all duration-300 overflow-hidden shadow-sm">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>

            </motion.div>
          ))}

          <div>

          </div>
        </div> */}
          
      </div>
    </section>
  );
}