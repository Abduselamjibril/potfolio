'use client'

import { experiences } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section className="py-24 px-8" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-on-surface mb-16 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
          <span className="text-primary">02.</span> Experience
        </h2>

        <div className="relative space-y-12 before:absolute before:left-[17px] md:before:left-1/2 before:w-[2px] before:h-full before:bg-outline-variant/20">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
              <div className={`flex-1 md:w-1/2 pt-1 pl-12 ${index % 2 === 0 ? 'md:pl-0 md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                <p className="text-on-surface-variant font-label uppercase tracking-widest text-sm mb-4">
                  {exp.company} | {exp.period}
                </p>
              </div>

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-surface-container border-4 border-primary z-10"></div>

              <div className={`flex-1 md:w-1/2 pt-1 ${index % 2 === 0 ? 'pl-12 md:pl-8' : 'pl-12 md:pr-8'}`}>
                <div className="bg-surface-container/60 backdrop-blur-md p-6 rounded-xl border border-outline-variant/10">
                  <p className="text-on-surface-variant leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-on-surface-variant text-sm leading-relaxed flex gap-2">
                        <span className="text-primary">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
