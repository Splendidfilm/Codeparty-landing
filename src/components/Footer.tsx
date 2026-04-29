export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="text-3xl font-black tracking-tighter text-white font-space-grotesk">
            codePlay72
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl">
            <a href="#" className="font-medium text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-all">Terms</a>
            <a href="#" className="font-medium text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-all">Privacy</a>
            <a href="#" className="font-medium text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-all">Contact</a>
            <a href="#" className="font-medium text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-all">Schedule</a>
          </div>

          <div className="flex gap-8 text-green-500">
            <span className="material-symbols-outlined text-4xl cursor-pointer hover:text-white transition-colors">hub</span>
            <span className="material-symbols-outlined text-4xl cursor-pointer hover:text-white transition-colors">alternate_email</span>
            <span className="material-symbols-outlined text-4xl cursor-pointer hover:text-white transition-colors">public</span>
          </div>

          <div className="border-t border-zinc-800 pt-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-space-grotesk text-sm uppercase tracking-widest text-zinc-500">
                © 2026 Codeparty. Expertly Playful.
              </p>
              <div className="flex gap-6 text-sm">
                <span className="text-zinc-400">Philip: <span className="text-green-500">+234-XXX-XXXX</span></span>
                <span className="text-zinc-400">Paulmike: <span className="text-green-500">+234-XXX-XXXX</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}