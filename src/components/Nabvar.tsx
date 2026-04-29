import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b-2 border-zinc-100 dark:border-zinc-800">
      <div className="text-2xl font-black tracking-tighter text-green-600 dark:text-green-400 font-space-grotesk">
        codePlay72
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="material-symbols-outlined text-green-600 dark:text-green-500 text-3xl md:hidden"
      >
        menu
      </button>

      {/* Desktop Menu - You can expand later */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {/* Add links here if needed */}
      </div>
    </nav>
  );
}