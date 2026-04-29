export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-brand-green circuit-pattern py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="font-display text-4xl md:text-6xl lg:text-[80px] text-white leading-tight">
            Where Little Hands Build <span className="text-accent-yellow">Big Miracles</span>.
          </h1>

          <p className="text-lg md:text-xl text-white opacity-90 max-w-xl">
            Celebrate Children's Day at the 5th Annual Codeplay72 Codeparty. 
            A day of magic, logic, and limitless imagination.
          </p>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 w-fit">
            <span className="material-symbols-outlined text-accent-yellow">calendar_today</span>
            <span className="font-medium text-white">May 27, 2026 | Jos, Plateau State</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-accent-yellow hover:bg-yellow-400 text-on-secondary-fixed font-semibold text-xl px-10 py-5 rounded-full btn-lift transition-all active:scale-95">
              Register My Child
            </button>
            <button className="border-2 border-white text-white font-semibold text-xl px-10 py-5 rounded-full hover:bg-white hover:text-brand-green transition-all">
              Register My School
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-accent-yellow shadow-2xl rotate-3">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDusTzIw2CXfsYxsx5TXUQ3924MowtvvMVKnD-OPyUvuUFMsOkrP2sEQNbE5sLcQPLXoFTqqCu_dxx7un0wY829MkY5PlvwinA75hpnhjz_9C73cE7OnHW9thtkZMFfr_VI1ubvmnzrjRj_rKrz1IEjHhRRdFxfz2-dNnyWWO4TF88SyoCDkXrJ8BeLT7UlMCU6KgN9mClTtvffuxqEuihnftBgbOgdaOYIKW8NWHEBOD26r9sEGN3JE0GcOAmDCBZiqR1KPxWZVCI"
              alt="Children coding happily"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl -rotate-3 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
              </div>
              <div>
                <p className="font-semibold text-zinc-900">5th Anniversary</p>
                <p className="text-xs text-zinc-500">2022 — 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}