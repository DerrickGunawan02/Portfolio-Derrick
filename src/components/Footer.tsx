import { profile } from '../data/content'
export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-10 text-sm text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6 px-5">
        <div><p className="font-semibold text-zinc-100">{profile.name}</p><p>{profile.title}</p><p>{profile.university}</p>
          <p className="mt-3">© {new Date().getFullYear()} {profile.name}</p></div>
        <nav aria-label="Footer" className="flex gap-4">
          <a className="hover:text-teal-300" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-teal-300" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-teal-300" href={`mailto:${profile.email}`}>Email</a>
          <a className="hover:text-teal-300" href={profile.github} target="_blank" rel="noreferrer">View Source</a>
        </nav>
      </div>
    </footer>
  )
}
