import type { ReactNode } from 'react'
export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <p className="reveal font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="reveal mt-1 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}
