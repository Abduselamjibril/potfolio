'use client'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-8 overflow-hidden pt-20" id="hero">
      {/* Background Decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <span className="font-label uppercase tracking-[0.2em] text-primary mb-6 block text-sm">
          Available for Freelance & Full-time
        </span>

        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
          ABDUSELAM <br /> <span className="text-gradient">JIBRIL&nbsp;&nbsp;AHMED</span>
        </h1>

        <p className="text-lg md:text-2xl text-on-surface-variant mb-4 font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Software Engineer | Full-Stack & Flutter Developer
        </p>

        <p className="text-base md:text-lg text-on-surface-variant/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building production-ready web, mobile, and AI solutions that clients actually use.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-[#0F172A] font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/Abduselam_Jibril_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-outline-variant/50 hover:bg-surface-container text-on-surface font-bold rounded-xl transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-16 text-on-surface-variant">
          <a
            href="https://linkedin.com/in/abduselam-jibril-641698371"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>🔗</span> LinkedIn
          </a>
          <a
            href="https://github.com/Abduselamjibril"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>💻</span> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
