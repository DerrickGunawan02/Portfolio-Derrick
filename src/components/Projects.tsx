import { projects } from '../data/content'
import Section from './Section'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="02 / Work" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.link} p={p} />
        ))}
      </div>
    </Section>
  )
}