import { skillGroups } from '../data/content'
import Section from './Section'
import SkillGroup from './SkillGroup'
export default function Skills() {
  return (<Section id="skills" eyebrow="04 / Toolkit" title="Skills"><div className="grid gap-6 md:grid-cols-3">{skillGroups.map((g) => <SkillGroup key={g.title} {...g} />)}</div></Section>)
}
