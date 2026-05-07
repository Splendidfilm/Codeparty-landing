import { motion } from "framer-motion";

const details = [
  {
    icon: "school",
    headline: "Experiential Learning",
    text: "Take learning beyond textbooks with hands-on coding and hardware projects.",
  },
  {
    icon: "emoji_events",
    headline: "School Pride",
    text: "Showcase your institution's tech excellence on a regional stage with Jos schools.",
  },
  {
    icon: "psychology",
    headline: "Leadership Development",
    text: "Foster teamwork and leadership as students collaborate on complex challenges.",
  },
];

export default function ForSchools() {
  return (
    <section 
    id="schools"
    className=" w-full bg-white dark:bg-zinc-950 py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-7xl leading-tight text-zinc-900 dark:text-white">
              Empowering the Educators of Tomorrow.
            </h2>
            <p className="mt-4 text-accent-yellow text-3xl font-medium">
              Take the Classroom into the Future
            </p>
          </div>

          <div className="lg:max-w-md text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg ">
            Education is evolving. The "Civic Miracle" theme aligns with modern STEM and Social Studies curricula, 
            showing students how technology serves society and creates real impact.
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-brand-green hover:bg-emerald-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 
                         p-10 rounded-3xl text-white transition-all duration-500 border border-transparent hover:border-accent-yellow/30"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-accent-yellow text-6xl">
                  {item.icon}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-semibold text-4xl leading-tight mb-5">
                {item.headline}
              </h3>

              {/* Description */}
              <p className="text-white/90 leading-relaxed text-lg ">
                {item.text}
              </p>

              {/* Subtle Accent Bar */}
              <div className="mt-8 h-1 w-12 bg-accent-yellow/50 group-hover:w-20 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}