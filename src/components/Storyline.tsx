import { motion } from "framer-motion";

export default function Storyline() {
  return (
    <section className="bg-white dark:bg-zinc-950 py-24 md:py-32 px-6 md:px-12 lg:px-20 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              <img
                src="/images/superhuman.png"
                alt="Human and machine collaboration"
                className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/3] lg:aspect-auto"
              />
              
              {/* Decorative Overlay */}
              <div className="absolute inset-0 rounded-[3rem] border-4 border-accent-yellow/30 pointer-events-none" />
              
              {/* Floating Accent */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-900 px-8 py-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-yellow rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-zinc-900">auto_awesome</span>
                </div>
                <div>
                  <p className="font-semibold text-lg dark:text-white">Super Human</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">× Super Machine</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="font-display text-7xl md:text-6xl leading-[1.1] tracking-tight text-zinc-900 dark:text-white">
              The Future Isn&apos;t Just Automated—<span className="text-accent-yellow">It&apos;s Inspired.</span>
            </h2>

            <div className="space-y-6 text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p>
                For four years, we’ve coded, played, and innovated. For our 5th anniversary, 
                we are asking a big question: What happens when the brilliance of a child 
                <span className="font-semibold text-brand-green dark:text-accent-yellow"> (the Super Human)</span> meets 
                the power of technology <span className="font-semibold text-brand-green dark:text-accent-yellow">(the Super Machine)</span>?
              </p>

              <p>
                In the heart of Jos, we aren&apos;t just teaching kids to type lines of code; 
                we are teaching them to engineer <span className="font-semibold">"Civic Miracles."</span> 
                Whether it’s using AI to solve community challenges or building tools that make our city better, 
                the <span className="text-accent-yellow">"Age of Super Machine × Super Human"</span> starts here.
              </p>
            </div>

            {/* Quote Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-zinc-100 dark:bg-zinc-900/70 border-l-4 border-accent-yellow rounded-3xl"
            >
              <p className="italic text-2xl leading-relaxed text-zinc-700 dark:text-zinc-200">
                "When we give a child a keyboard, we aren&apos;t just teaching syntax; we are giving them 
                the wand to cast digital spells that solve real-world problems."
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                — Codeplay72 Team
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}