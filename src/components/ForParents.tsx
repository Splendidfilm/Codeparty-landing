import { motion } from "framer-motion";

export default function ForParents() {
  const benefits = [
    {
      icon: "shield",
      title: "Future-Proof Skills",
      desc: " Beyond basic coding, we focus on problem-solving and critical thinking to prepare your child for a tech-driven world.",
    },
    {
      icon: "groups",
      title: "Safe & Collaborative",
      desc: "A high-energy environment where your child meets fellow young innovators in Jos. All activities are supervised by experienced mentors to ensure a safe and supportive space.",
    },
    {
      icon: "visibility",
      title: "A New Perspective",
      desc: "We show them that technology isn't just for games—it’s for building a better world for their neighbors and friends.",
    },
  ];

  return (
    <section id="parents" className="w-full  bg-zinc-100 dark:bg-zinc-950 py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-brand-green text-6xl md:text-8xl tracking-tight mb-6">
            To the Parents
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-3">
            <p className="text-brand-green/90 text-2xl md:text-4xl font-light">
              Raising the Architects of Tomorrow
            </p>
            <p className="text-zin-100 text-xl md:text-3xl">
              Moving from <span className="line-through opacity-50">Screen-Time</span> to{" "}
              <span className="text-accent-yellow font-medium">Solution-Time</span>.
            </p>
          </div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-1 bg-accent-yellow mx-auto mt-10 rounded-full"
          />
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-zinc-600/90 text-lg md:text-2xl leading-relaxed">
            Your child is already a <span className="font-semibold text-brand-green">"Super Human"</span> — 
            full of curiosity, empathy, and imagination. At Codeparty 72, we introduce them to the 
            <span className="font-semibold text-accent-yellow">"Super Machine"</span> tools to amplify those gifts.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 dark:border-white/5"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-brand-green/10 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-brand-green dark:text-emerald-400 text-5xl">
                  {benefit.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white mb-4 group-hover:text-brand-green dark:group-hover:text-accent-yellow transition-colors">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg ">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}