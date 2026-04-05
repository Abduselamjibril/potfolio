'use client'

import { projects } from '@/lib/portfolio-data'
import Image from 'next/image'

export function ProjectsSection() {
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-on-surface mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <span className="text-primary">03.</span> Featured Projects
            </h2>
            <p className="text-on-surface-variant">A collection of engineering solutions built with precision.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.2)] flex flex-col"
            >
              {project.image ? (
                <div className="h-48 bg-slate-900 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={project.title}
                    src={project.image}
                  />
                </div>
              ) : (
                <div className="h-48 bg-slate-800 overflow-hidden flex items-center justify-center">
                  <span className="text-6xl text-primary/20">
                    {project.id === 'basirah' ? '📺' : project.id === 'diabetic' ? '⚕️' : '⚙️'}
                  </span>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-label font-bold uppercase tracking-wider bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-on-surface mb-2">{project.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.id === 'cafe' ? (
                  <span className="text-on-surface-variant/60 text-xs flex items-center gap-1">
                    <span>📍</span> Live in Addis Ababa
                  </span>
                ) : project.id === 'diabetic' ? (
                  <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Graduation Capstone</span>
                ) : project.id === 'hobbe' ? (
                  <span className="text-amber-500/80 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                    <span>🚧</span> In Development
                  </span>
                ) : project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-bold flex items-center gap-1">
                    {project.id === 'alfaruk' || project.id === 'basirah' ? 'View on Play Store' : 'Live Demo'}{' '}
                    <span>→</span>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
