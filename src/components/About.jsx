import { FaGraduationCap } from "react-icons/fa";
import { about } from "../data/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal from="left">
        <h2 className="heading">{about.title}</h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-neutral-400">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} from="left" delay={i * 0.1}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-6">
          <Reveal from="right">
            <div className="card flex items-start gap-4">
              <span className="mt-1 rounded-xl bg-accent/10 p-3 text-xl text-accent">
                <FaGraduationCap />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-white">{about.education.degree}</h3>
                <p className="text-neutral-400">{about.education.school}</p>
                <p className="mt-1 text-sm text-accent">{about.education.period}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((h, i) => (
              <Reveal key={h.label} from={i % 2 ? "right" : "left"} delay={0.1 + i * 0.08}>
                <div className="card text-center">
                  <p className="font-display text-4xl font-extrabold text-accent">{h.value}</p>
                  <p className="mt-1 text-sm text-neutral-400">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
