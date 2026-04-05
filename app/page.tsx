import { Header } from '@/components/portfolio/header'
import { HeroSection } from '@/components/portfolio/hero-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { EducationSection } from '@/components/portfolio/education-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { FooterSection } from '@/components/portfolio/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <FooterSection />
    </main>
  )
}
