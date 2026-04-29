export default function ForSchools() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="font-display text-brand-green text-5xl mb-2">For Schools</h2>
            <p className="font-headline-md text-accent-yellow text-xl">
              Empowering the Educators of Tomorrow.
            </p>
          </div>
          <button className="mt-8 md:mt-0 font-medium text-brand-green border-2 border-brand-green px-8 py-3 rounded-full hover:bg-brand-green hover:text-white transition-all">
            Download Brochure
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-brand-green p-10 rounded-3xl text-white">
            <span className="material-symbols-outlined text-accent-yellow text-5xl mb-6">school</span>
            <h3 className="font-headline-md mb-4">Experiential Learning</h3>
            <p className="opacity-90">Take learning beyond textbooks with hands-on coding and hardware projects.</p>
          </div>

          <div className="bg-brand-green p-10 rounded-3xl text-white">
            <span className="material-symbols-outlined text-accent-yellow text-5xl mb-6">emoji_events</span>
            <h3 className="font-headline-md mb-4">School Pride</h3>
            <p className="opacity-90">Showcase your institution's tech excellence on a regional stage with Jos schools.</p>
          </div>

          <div className="bg-brand-green p-10 rounded-3xl text-white">
            <span className="material-symbols-outlined text-accent-yellow text-5xl mb-6">psychology</span>
            <h3 className="font-headline-md mb-4">Leadership Development</h3>
            <p className="opacity-90">Foster teamwork and leadership as students collaborate on complex challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
}