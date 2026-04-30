import { motion } from "framer-motion";

export default function Journey() {
  const years = [
    { year: "2022", title: "The Spark", desc: "The very first gathering of  curious minds in Jos city." },
    { year: "2023", title: "Expansion", desc: "Reached 20 schools and introduced coding workshops." },
    { year: "2024", title: "The Machine Lab", desc: "Launched dedicated AI-assisted creative stations for kids." },
    { year: "2025", title: "Miracle Makers", desc: "Children building software solutions." },
  ];

  return (
    <section className="bg-brand-green dark:bg-zinc-950 py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-white dark:text-white tracking-tight">
            Our Journey
          </h2>
          <p className="mt-4 text-white/80 dark:text-zinc-400 text-lg md:text-xl max-w-2xl">
            Every miracle begins with a leap of faith
          </p>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-1 bg-accent-yellow mt-6 rounded-full"
          />
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {years.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white/10 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl p-10 hover:border-accent-yellow/30 transition-all duration-500 shadow-xl"
            >
              {/* Year Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="inline-block bg-white dark:bg-zinc-800 text-brand-green dark:text-accent-yellow font-display text-6xl font-bold px-7 py-4 rounded-2xl shadow-inner mb-8 group-hover:rotate-3 transition-transform"
              >
                {item.year}
              </motion.div>

              {/* Content */}
              <h3 className="text-3xl font-semibold text-white dark:text-white mb-4 group-hover:text-accent-yellow transition-colors">
                {item.title}
              </h3>

              <p className="text-white/75 dark:text-zinc-400 leading-relaxed text-[17px]">
                {item.desc}
              </p>

              {/* Subtle bottom accent */}
              <div className="absolute bottom-6 right-8 w-12 h-1 bg-accent-yellow/40 group-hover:bg-accent-yellow rounded-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}