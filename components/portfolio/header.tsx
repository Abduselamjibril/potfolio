'use client'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F172A]/60 backdrop-blur-xl border-b border-slate-800/50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <span className="text-primary font-bold text-lg md:text-xl tracking-tighter">▲</span>
          <span className="text-lg md:text-xl font-bold tracking-tighter text-primary" style={{ fontFamily: 'Manrope, sans-serif' }}>ABDUSELAM JIBRIL AHMED</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-slate-400 font-medium hover:text-primary transition-colors font-body uppercase tracking-[0.1em] text-xs">
            About
          </a>
          <a href="#experience" className="text-slate-400 font-medium hover:text-primary transition-colors font-body uppercase tracking-[0.1em] text-xs">
            Experience
          </a>
          <a href="#projects" className="text-slate-400 font-medium hover:text-primary transition-colors font-body uppercase tracking-[0.1em] text-xs">
            Projects
          </a>
          <a href="#skills" className="text-slate-400 font-medium hover:text-primary transition-colors font-body uppercase tracking-[0.1em] text-xs">
            Skills
          </a>
          <a href="/Abduselam_Jibril_CV.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-primary text-[#0F172A] font-bold rounded-xl hover:scale-95 transition-all duration-300 text-sm">
            Download CV
          </a>
        </div>
        <button className="md:hidden text-primary">
          <span>☰</span>
        </button>
      </nav>
    </header>
  )
}
