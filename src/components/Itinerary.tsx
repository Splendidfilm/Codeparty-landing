import { motion } from "framer-motion";

export default function Itinerary() {
  const schedule = [
    {
      time: "09:00 AM",
      title: "The Machine Lab",
      desc: "Dive into the silicon heart. Learn how AI thinks and build your first intelligent agent.",
      icon: "memory",
      color: "bg-white",
      accent: "brand-green",
    },
    {
      time: "11:30 AM",
      title: "The Human Creative Zone",
      desc: "Unplugged brainstorming and design thinking. Where big miracles start with a simple sketch.",
      icon: "brush",
      color: "bg-accent-yellow",
      accent: "text-on-secondary-fixed",
    },
    {
      time: "02:00 PM",
      title: "The Miracle Showcase",
      desc: "The grand stage. Demonstrating student creations to parents, mentors, and the community.",
      icon: "celebration",
      color: "bg-white",
      accent: "brand-green",
    },
  ];

  return (
    <section id="itinerary" className="bg-brand-green dark:bg-zinc-950 py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-white text-6xl md:text-7xl tracking-tight">
            The Miracle Itinerary
          </h2>
          <p className="text-white/70 mt-4 text-xl">
            A full day of creativity, technology, and celebration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className={`${item.color} dark:bg-zinc-900 rounded-3xl p-10 md:p-12 flex flex-col justify-between h-full min-h-[460px] shadow-xl group transition-all duration-500 border border-transparent hover:border-white/20`}
            >
              <div>
                {/* Time */}
                <div className="inline-block px-5 py-2 bg-black/10 dark:bg-white/10 text-sm font-medium rounded-full mb-8">
                  {item.time}
                </div>

                {/* Title */}
                <h3 className={`font-display text-5xl leading-tight mb-6 ${
                  item.accent === "brand-green" 
                    ? "text-brand-green dark:text-accent-yellow" 
                    : "text-on-secondary-fixed"
                }`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`text-xl leading-relaxed ${
                  item.accent === "brand-green" 
                    ? "text-zinc-600 dark:text-zinc-400" 
                    : "text-on-secondary-fixed/80"
                }`}>
                  {item.desc}
                </p>
              </div>

              {/* Icon Container */}
              <div className="flex justify-end mt-auto pt-8">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner
                  ${item.accent === "brand-green" 
                    ? "bg-brand-green text-white" 
                    : "bg-white text-accent-yellow"}`}>
                  <span className="material-symbols-outlined text-5xl">
                    {item.icon}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}