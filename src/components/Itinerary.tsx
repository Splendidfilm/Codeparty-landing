export default function Itinerary() {
  return (
    <section className="bg-brand-green py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-white text-5xl text-center mb-16">
          The Miracle Itinerary
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Machine Lab */}
          <div className="bg-white rounded-[2.5rem] p-12 flex flex-col justify-between group h-[480px] hover:scale-105 transition-transform">
            <div>
              <h3 className="font-display text-brand-green text-4xl mb-6">The Machine Lab</h3>
              <p className="text-zinc-600 text-lg">
                Dive into the silicon heart. Learn how AI thinks and build your first intelligent agent.
              </p>
            </div>
            <div className="flex justify-between items-end">
              <span className="font-medium text-zinc-400">09:00 AM</span>
              <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">memory</span>
              </div>
            </div>
          </div>

          {/* Human Creative Zone */}
          <div className="bg-accent-yellow rounded-[2.5rem] p-12 flex flex-col justify-between group h-[480px] hover:scale-105 transition-transform">
            <div>
              <h3 className="font-display text-on-secondary-fixed text-4xl mb-6">The Human Creative Zone</h3>
              <p className="text-on-secondary-fixed/80 text-lg">
                Unplugged brainstorming and design thinking. Where big miracles start with a simple sketch.
              </p>
            </div>
            <div className="flex justify-between items-end">
              <span className="font-medium text-on-secondary-fixed/50">11:30 AM</span>
              <div className="w-16 h-16 bg-white text-accent-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">brush</span>
              </div>
            </div>
          </div>

          {/* Miracle Showcase */}
          <div className="bg-white rounded-[2.5rem] p-12 flex flex-col justify-between group h-[480px] hover:scale-105 transition-transform">
            <div>
              <h3 className="font-display text-brand-green text-4xl mb-6">The Miracle Showcase</h3>
              <p className="text-zinc-600 text-lg">
                The grand stage. Demonstrating student creations to parents, mentors, and the community.
              </p>
            </div>
            <div className="flex justify-between items-end">
              <span className="font-medium text-zinc-400">02:00 PM</span>
              <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">celebration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
