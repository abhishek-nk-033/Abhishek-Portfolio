import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal from="right">
        <h2 className="heading">Projects</h2>
      </Reveal>

      <div className="mt-12 space-y-10">
        {projects.map((p, i) => (
          <Reveal key={p.title} from={i % 2 === 0 ? "left" : "right"}>
            <article className="card group p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-white transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-neutral-400">{p.subtitle}</p>
                </div>
                <div className="flex gap-3 text-xl">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`} className="rounded-full border border-line p-3 transition-colors hover:border-accent hover:text-accent">
                      <FaGithub />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="rounded-full border border-line p-3 transition-colors hover:border-accent hover:text-accent">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-300">{p.description}</p>

              <ul className="mt-5 space-y-3 text-neutral-400">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
