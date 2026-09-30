import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { LinkedInIcon } from './Icons'
const links = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach((l) => { const el = document.getElementById(l.toLowerCase()); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-200 bg-zinc-50/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-mono text-sm font-semibold text-zinc-900">derrick<span className="text-accent">.dev</span></a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} aria-current={active === l.toLowerCase() ? 'true' : undefined}
              className={`border-b-2 py-1 text-sm transition ${active === l.toLowerCase() ? 'border-accent text-zinc-900' : 'border-transparent text-zinc-500 hover:text-zinc-900'}`}>{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-primary hidden !min-h-[40px] sm:inline-flex"><LinkedInIcon /> LinkedIn</a>
          <button className="btn-ghost !px-3 md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-zinc-200 bg-zinc-50 px-5 pb-4 md:hidden">
          {links.map((l) => (<li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-zinc-700">{l}</a></li>))}
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-primary mt-2 w-full"><LinkedInIcon /> LinkedIn</a></li>
        </ul>
      )}
    </header>
  )
}
