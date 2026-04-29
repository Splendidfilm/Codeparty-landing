export default function Journey() {
  const years = [
    { year: "2022", title: "The Spark", desc: "The very first gathering of 50 curious minds in Jos city." },
    { year: "2023", title: "Expansion", desc: "Reached 20 schools and introduced robotics workshops." },
    { year: "2024", title: "The Machine Lab", desc: "Launched dedicated AI-assisted creative stations for kids." },
    { year: "2025", title: "Miracle Makers", desc: "Over 1,000 children building software solutions." },
  ];

  return (
    <section className="bg-brand-green py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-white text-4xl md:text-5xl mb-12 flex items-center gap-4">
          Our Journey
          <div className="h-1 flex-grow bg-white/20 rounded-full"></div>
        </h2>

        <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar scroll-smooth">
          {years.map((item) => (
            <div
              key={item.year}
              className="min-w-[300px] bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl group hover:bg-white hover:scale-105 transition-all duration-300"
            >
              <span className="text-5xl font-display text-accent-yellow mb-4 block group-hover:text-brand-green">
                {item.year}
              </span>
              <h3 className="font-headline-md text-white mb-2 group-hover:text-zinc-900">
                {item.title}
              </h3>
              <p className="font-body-md text-white/80 group-hover:text-zinc-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}