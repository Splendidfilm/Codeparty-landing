import { motion } from "framer-motion";

export default function Journey() {
  const years = [
    { year: "2022", title: "The Spark", desc: "The very first gathering of curious minds in Jos city.", url: "/images/2024/6.jpg" },
    { year: "2023", title: "Digital Inclusion", desc: "The Gateway to Infinite Possibilities", url: "/images/2024/14.jpg" },
    { year: "2024", title: "Bold Builders", desc: "Launched dedicated AI-assisted creative stations for kids.", url: "/images/2024/25.jpg" },
    { year: "2025", title: "Digital Leverage", desc: "Starting Jos Early.", url: "/images/2024/19.jpg" },
  ];

  return (
    <section id="journey" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl md:text-5xl lg:text-[54px] font-semibold leading-tight text-brand-green"
          >
            Our Journey to{" "}
            <span className="italic relative inline-block text-accent-yellow">
              "Civic Miracle"
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ ease: "backInOut", duration: 1.5, delay: 1 }}
                className="absolute -bottom-1 left-0 h-[3px] bg-brand-green/60 rounded-full"
              />
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-brand-green/70 text-lg md:text-xl italic font-serif max-w-xl"
          >
            Every miracle begins with a leap of faith
          </motion.p>
        </div>

        {/* Timeline Cards */}
        <div className="flex flex-col gap-8">
          {years.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px -12px rgba(0,0,0,0.15)" }}
                className={`group grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-zinc-200/60 bg-white shadow-md transition-all duration-500 min-h-[280px] ${isReversed ? "md:[direction:rtl]" : ""}`}
              >
                {/* Text side */}
                <div className="relative flex flex-col justify-center p-8 md:p-10 overflow-hidden [direction:ltr]">
                  {/* Ghost year */}
                  <span className="absolute -bottom-4 -left-2 font-display text-[120px] leading-none text-brand-green/[0.06] select-none pointer-events-none">
                    {item.year}
                  </span>

                  {/* Year pill */}
                  <span className="inline-flex w-fit items-center font-display text-base tracking-widest text-brand-green border-[1.5px] border-brand-green px-3 py-1 rounded mb-4">
                    {item.year}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-zinc-800 group-hover:text-brand-green transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <div className="w-8 h-[3px] bg-accent-yellow rounded-full mb-3" />

                  <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-600 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Image side */}
                <div className="relative overflow-hidden min-h-[200px] [direction:ltr]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}