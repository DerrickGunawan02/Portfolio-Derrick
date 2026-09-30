import { profile } from '../data/content'
import { GitHubIcon, LinkedInIcon } from './Icons'
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="mx-auto w-full max-w-6xl px-5">
        <p className="reveal font-mono text-sm text-accent">Hi, I'm</p>
        <h1 className="reveal mt-2 text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl">{profile.name}</h1>
        <p className="reveal mt-4 text-xl text-zinc-700 sm:text-2xl">{profile.title}</p>
        <p className="reveal mt-1 text-zinc-500">{profile.university}</p>
        <p className="reveal mt-6 max-w-xl text-lg text-zinc-600">{profile.tagline}</p>
        <ul className="reveal mt-5 flex flex-wrap gap-2">{profile.interests.map((i) => <li key={i} className="tag">{i}</li>)}</ul>
        <div className="reveal mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href="#contact" className="btn-ghost">Let's Connect</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-ghost !px-3"><LinkedInIcon /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-ghost !px-3"><GitHubIcon /></a>
        </div>
      </div>
    </section>
  )
}
