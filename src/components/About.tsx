import { profile } from '../data/content'
import Section from './Section'
export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="About Me">
      <div className="reveal max-w-3xl space-y-4 text-lg text-zinc-600">{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
      <div className="mt-10 grid max-w-3xl items-center gap-8 md:mt-12 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-10">
        <figure className="reveal mx-auto w-full max-w-[16rem] md:mx-0 md:max-w-none">
          {/* Source photo is 4:5; aspect ratio is preserved, never stretched */}
          <img
            src="/images/profile.png"
            alt="Portrait of Derrick Gunawan standing beside a red sports car, holding a camera"
            width={960}
            height={1199}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-lg border border-zinc-200 object-cover object-[70%_30%]"
          />
        </figure>
        <dl className="reveal grid gap-3">
          {profile.facts.map((f) => (
            <div key={f.label} className="rounded-lg border border-zinc-200 bg-white p-4">
              <dt className="font-mono text-xs uppercase tracking-wide text-zinc-500">{f.label}</dt>
              <dd className="mt-1 font-medium text-zinc-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
