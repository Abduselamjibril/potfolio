'use client'

import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section className="py-24 px-8 bg-surface-container/30" id="education">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-on-surface mb-16 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
          <span className="text-primary">04.</span> Education
        </h2>

        <div className="max-w-3xl mx-auto bg-surface-container rounded-2xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">{education.degree}</h3>
              <p className="text-primary font-bold">{education.school}</p>
              <p className="text-on-surface-variant text-sm mt-1 flex items-center gap-2">
                <span>📍</span> {education.location}
              </p>
            </div>
            
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold font-label tracking-widest text-sm">
              Started in {education.year}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
