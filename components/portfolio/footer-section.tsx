'use client'

export function FooterSection() {
  return (
    <section className="py-24 px-8 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-on-surface mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
          <span className="text-primary">05.</span> Get in Touch
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mb-12">
          I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Abduselamjibril78@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container/60 backdrop-blur-md p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container transition-all duration-300 flex items-center gap-4 group cursor-pointer"
          >
            <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
              <span className="text-primary text-2xl">✉️</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-on-surface-variant">Email</p>
              <p className="text-on-surface font-semibold">Abduselamjibril78@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+251946693599"
            className="bg-surface-container/60 backdrop-blur-md p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container transition-all duration-300 flex items-center gap-4 group cursor-pointer"
          >
            <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
              <span className="text-primary text-2xl">📱</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-on-surface-variant">Phone</p>
              <p className="text-on-surface font-semibold">+251 946693599</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/abduselam-jibril-641698371"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container/60 backdrop-blur-md p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container transition-all duration-300 flex items-center gap-4 group cursor-pointer"
          >
            <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
              <span className="text-primary text-2xl">🔗</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-on-surface-variant">LinkedIn</p>
              <p className="text-on-surface font-semibold">abduselam-jibril</p>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Abduselamjibril"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-[#0F172A] font-bold rounded-xl hover:scale-105 transition-all duration-300"
          >
            Visit GitHub
          </a>
          <a
            href="https://linkedin.com/in/abduselam-jibril-641698371"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all duration-300"
          >
            View LinkedIn
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant/20">
          <p className="text-on-surface-variant text-sm">
            © 2026 Abduselam Jibril Ahmed. Built with Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
