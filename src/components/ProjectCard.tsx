import type { Project } from '../data/content'
import { ExternalIcon } from './Icons'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="reveal group flex flex-col rounded-lg border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
      <span className="font-mono text-xs font-medium text-accent">{p.category}</span>
      <h3 className="mt-2 text-xl font-semibold text-zinc-900">{p.title}</h3>
      <p className="mt-2 text-zinc-600 line-clamp-3">{p.description}</p>

      {p.technologies.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      )}

      {/* Action footer — pushed to the bottom so buttons align across cards */}
      <div className="mt-auto pt-5">
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <span>Visit Project</span>
          <ExternalIcon />
          <span className="sr-only">: {p.title} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  )
}
