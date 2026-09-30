import { useState } from 'react'
import { profile } from '../data/content'
import { ExternalIcon } from './Icons'
export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* ignore */ } }
  return (
    <section id="contact" className="bg-zinc-900 py-24 text-zinc-100">
      <div className="mx-auto max-w-6xl px-5">
        <p className="reveal font-mono text-sm text-teal-300">05 / Contact</p>
        <h2 className="reveal mt-1 text-3xl font-bold sm:text-5xl">Let's build something together.</h2>
        <div className="reveal mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn bg-white text-zinc-900 hover:bg-teal-200">{profile.email}</a>
          <button onClick={copy} className="btn border border-zinc-600 hover:border-teal-300" aria-live="polite">{copied ? 'Copied ✓' : 'Copy email'}</button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn border border-zinc-600 hover:border-teal-300">LinkedIn <ExternalIcon /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn border border-zinc-600 hover:border-teal-300">GitHub <ExternalIcon /></a>
        </div>
      </div>
    </section>
  )
}
