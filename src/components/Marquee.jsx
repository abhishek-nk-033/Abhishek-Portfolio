import { skills } from "../data/data";

export default function Marquee() {
  const items = skills.flatMap((s) => s.items).slice(0, 24);
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-white/[0.02] py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-2xl font-bold text-neutral-600">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
