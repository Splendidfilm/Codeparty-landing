export default function EventDetails() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block bg-zinc-900 text-white rounded-full px-8 py-3 mb-12">
          <p className="font-medium tracking-widest uppercase">Event Details</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-brand-green text-5xl mb-4">location_on</span>
            <h4 className="font-headline-md text-zinc-900">Location</h4>
            <p className="text-zinc-600 text-lg">Jos, Plateau State (Venue TBA)</p>
          </div>

          <div className="w-px h-24 bg-zinc-200 hidden md:block"></div>

          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-brand-green text-5xl mb-4">schedule</span>
            <h4 className="font-headline-md text-zinc-900">Time</h4>
            <p className="text-zinc-600 text-lg">9:00 AM — 3:00 PM</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-brand-green text-white font-semibold text-xl px-12 py-5 rounded-full hover:shadow-2xl transition-all">
            Register My Child
          </button>
          <button className="bg-accent-yellow text-on-secondary-fixed font-semibold text-xl px-12 py-5 rounded-full btn-lift transition-all">
            Register My School
          </button>
        </div>
      </div>
    </section>
  );
}