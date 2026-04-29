export default function ForParents() {
  return (
    <section className="bg-brand-green py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-white text-5xl">For Parents</h2>
          <p className="font-headline-md text-accent-yellow text-xl">
            Moving from Screen-Time to Solution-Time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-brand-green text-4xl">shield</span>
            </div>
            <h3 className="font-headline-md text-zinc-900 mb-4">Future-Proof Skills</h3>
            <p className="text-zinc-600">Equip your child with logic, problem-solving, and digital literacy that transcends the classroom.</p>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-brand-green text-4xl">groups</span>
            </div>
            <h3 className="font-headline-md text-zinc-900 mb-4">Safe &amp; Collaborative</h3>
            <p className="text-zinc-600">A supervised, high-energy environment where children learn to build together in teams.</p>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-brand-green text-4xl">visibility</span>
            </div>
            <h3 className="font-headline-md text-zinc-900 mb-4">A New Perspective</h3>
            <p className="text-zinc-600">Help them see technology not as a distraction, but as a tool to engineer miracles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}