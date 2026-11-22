import { PiCertificateFill } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { certificates } from "../data/data";
import Reveal from "./Reveal";

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <Reveal from="left">
        <h2 className="heading">Certificates</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {certificates.map((c, i) => (
          <Reveal key={c.title} from={i % 2 === 0 ? "left" : "right"} delay={Math.floor(i / 2) * 0.1}>
            <div className="card flex h-full items-start gap-4">
              <span className="rounded-xl bg-accent/10 p-3 text-2xl text-accent">
                <PiCertificateFill />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-white">{c.title}</h3>
                <p className="text-neutral-400">{c.issuer}</p>
                <p className="mt-1 text-sm text-accent">{c.year}</p>
              </div>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" aria-label={`View ${c.title} certificate`} className="p-2 text-neutral-400 transition-colors hover:text-accent">
                  <FiExternalLink />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
