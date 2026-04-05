'use client'

import { skillCategories } from '@/lib/portfolio-data'

export function SkillsSection() {
  const skillsList = [
    { name: 'React', icon: '⚛️' },
    { name: 'Flutter', icon: '📱' },
    { name: 'NestJS', icon: '🦅' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Laravel', icon: '🔴' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Supabase', icon: '🟢' },
    { name: 'Redis', icon: '🔴' },
  ]

  return (
    <section className="py-24 px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-on-surface mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <span className="text-primary">04.</span> Technical Arsenal
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Modern tools and frameworks I use to build world-class digital products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsList.map((skill) => (
            <div
              key={skill.name}
              className="bg-surface-container-high p-4 rounded-xl flex items-center gap-3 border border-outline-variant/10 hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-sm font-label uppercase tracking-widest text-on-surface">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-surface-container/60 backdrop-blur-md p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-bold text-primary mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
