import { motion } from 'framer-motion';

interface Sponsor {
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  { name: 'ESC', logo: '/images/sponsors/ennopng.png' },
  { name: 'netaccess', logo: '/images/sponsors/net.png' },
  { name: 'Code for Africa', logo: '/images/sponsors/JOA LOGO.png' },
  { name: 'Better earth foundation', logo: '/images/sponsors/betterearth.png' },
  { name: 'ESC', logo: '/images/sponsors/esc.jfif' },
  { name: '72 Academy and Innovations', logo: '/images/sponsors/Acad.png' },
];

// Duplicate for seamless loop
const marqueeSponsors = [...sponsors, ...sponsors];

export default function Sponsors() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold text-brand-green mb-4 font-serif"
        >
          Our Sponsors
        </motion.h2>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl font-serif mx-auto">
          Those who have fostered our efforts and made this journey possible.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 flex overflow-hidden">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {marqueeSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-2xl transition-all duration-300 overflow-hidden "
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-28 h-28 md:w-36 md:h-36 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}