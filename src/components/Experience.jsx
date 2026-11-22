import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal from="left">
        <h2 className="heading">Experience and internships</h2>
      </Reveal>

      <div className="relative mt-12 border-l border-line pl-8 sm:pl-12">
        {experience.map((e, i) => (
          <Reveal key={e.company} from={i % 2 === 0 ? "right" : "left"}>
            <div className="relative">
              <span className="absolute -left-[46px] top-1 grid h-8 w-8 place-items-center rounded-full border border-accent bg-ink text-accent sm:-left-[62px]">
                <FiBriefcase />
              </span>
              <div className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold text-white">{e.role}</h3>
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-accent">{e.period}</span>
                </div>
                <p className="mt-1 text-neutral-400">
                  {e.company}, {e.location}
                </p>
                <ul className="mt-5 space-y-3 text-neutral-400">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
