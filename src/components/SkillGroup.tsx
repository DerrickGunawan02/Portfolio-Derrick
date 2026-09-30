export default function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="reveal rounded-lg border border-zinc-200 bg-white p-6">
      <h3 className="font-semibold text-zinc-900">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">{items.map((i) => <li key={i} className="tag !text-sm !px-3 !py-1">{i}</li>)}</ul>
    </div>
  )
}
