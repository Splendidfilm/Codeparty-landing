export default function Storyline() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJQ-rH7QjoxRXtejXu5620C9FtcyIAPmFDvPUZm0_LAPWaHLP-KuBSjE9jLx4W5AZJBTtocps9G_d0ATQiDNoyjAFFGnNjojRRoHmZ76t-FUHrjoYGAFx1wlQ0HBENj-8XDY3mfKGCF1mRDo87lY2paRcRgd4QwdAcg8i06-AjezBpK9grg0lVFjSlRx7RBV8-zXJElRsBFltHWLNsF0FVkLBxMlJEH-2H-wWP5DxsJ4EoKwoIPjpyOwdgpoUmBM4zQ-GBPUSALzk"
              alt="Human and machine"
              className="rounded-[3rem] shadow-2xl w-full"
            />
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-display text-brand-green text-5xl leading-tight">
              Super Machine x Super Human
            </h2>
            <p className="text-zinc-700 text-lg leading-relaxed">
              At Codeparty 2026, we explore the intersection where human creativity meets digital precision. 
              We believe that machines aren't here to replace us, but to amplify the magic already inside our children.
            </p>

            <div className="p-6 bg-zinc-100 rounded-2xl border-l-4 border-accent-yellow">
              <p className="italic text-zinc-600 text-lg">
                "When we give a child a keyboard, we aren't just teaching syntax; we are giving them the wand to cast digital spells that solve real-world problems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}