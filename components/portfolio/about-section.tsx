'use client'

export function AboutSection() {
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              alt="Modern professional developer workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9rT8jhWglkTIAbAfYGObHJBaCK7xr4o5Mw2vQpE0FPz6rIdjXDckPSLGEAcwQxEbbWZD2pP1VZFr1H6Bak2c-tQZq_wvOFxnSHPxr8SnDV0rgYw4eAvi-aNdcmUR4-I9Jxd8W8nRJG1bFyZf-gdYsGI9eqX_e-oNmG4L9pmTQOCbWsb5rBXGfHI4xYY7c1FBAAki3JJCbFuVRnXDZWXgd4Gt64zJjGCifpR87VQ2J788H1SkJmknGDseQdzphl4CcG39OwC66Mw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-surface-container/60 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-outline-variant/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <span className="text-primary text-3xl">✓</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-on-surface leading-none">2+</p>
                <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Years Professional</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-on-surface mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Full-Stack Software Engineer with 2+ years of hands-on experience at <span className="text-on-surface font-semibold">Skylink Technologies</span>.
            </p>
            <p>
              I specialize in building production-ready web, mobile, and AI solutions using <span className="text-primary">React, Laravel, Node.js, NestJS, and Flutter</span>.
            </p>
            <p>
              Passionate about turning complex business requirements into elegant, user-centric software solutions that scale seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
