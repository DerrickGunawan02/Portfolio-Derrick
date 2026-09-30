import { useState } from 'react'
import { experience, type Certificate } from '../data/content'
import Section from './Section'
import CertificateLightbox from './CertificateLightbox'
import { ExpandIcon } from './Icons'
export default function ExperienceTimeline() {
  const [cert, setCert] = useState<Certificate | null>(null)
  return (
    <Section id="experience" eyebrow="03 / Involvement" title="Experience & Organizations">
      <ol className="space-y-10 border-l border-zinc-300 pl-6 sm:pl-8">
        {experience.map((o) => (
          <li key={o.name} className="reveal relative">
            <span aria-hidden className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-zinc-50 sm:-left-[39px]" />
            <div className="flex items-center gap-3">
              {o.logo ? <img src={o.logo} alt={`${o.name} logo`} className="h-10 w-10 rounded-md object-contain" />
                : <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-900 font-mono text-sm text-teal-300">{o.initials}</span>}
              <h3 className="text-lg font-semibold text-zinc-900">{o.name}</h3>
            </div>
            <ul className="mt-4 space-y-4">
              {o.roles.map((r) => (
                <li key={r.title} className="rounded-lg border border-zinc-200 bg-white p-5">
                  <h4 className="text-lg font-semibold text-zinc-900">{r.title}</h4>
                  <p className="mt-1 font-mono text-xs text-zinc-500">{r.dates} · {r.arrangement}</p>
                  <p className="mt-3 text-zinc-600">{r.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">{r.skills.map((s) => <li key={s} className="tag">{s}</li>)}</ul>
                  {r.certificate && (
                    <div className="mt-4 border-t border-zinc-100 pt-3">
                      <button type="button" aria-haspopup="dialog" onClick={() => setCert(r.certificate!)}
                        className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent hover:underline sm:min-h-0">
                        <ExpandIcon />Official Certificate
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      {cert && <CertificateLightbox cert={cert} onClose={() => setCert(null)} />}
    </Section>
  )
}
