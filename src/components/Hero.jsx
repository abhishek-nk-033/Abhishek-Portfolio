import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { heroCode, profile, socials } from "../data/data";
import { goTo } from "../utils/goTo";

const word = {
  hidden: { y: "110%" },
  show: (i) => ({ y: "0%", transition: { delay: 0.25 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] } }),
};

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-8 overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="font-bold text-accent"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const first = profile.name.split(" ");
  const lines = [first[0], first.slice(1).join(" ")];

  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-16 pt-28 sm:px-8">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span custom={i} variants={word} initial="hidden" animate="show" className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 flex items-center gap-2 text-xl text-neutral-300"
          >
            I am a <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button className="btn-solid" onClick={() => goTo("contact")}>
              <FiMail /> Hire me
            </button>
            <a className="btn-ghost" href={profile.resume} download>
              <FiDownload /> Download resume
            </a>
            <div className="flex items-center gap-3 text-xl text-neutral-400">
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 transition-colors hover:text-accent">
                <FaGithub />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 transition-colors hover:text-accent">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex items-center gap-2 text-sm text-neutral-500"
          >
            <FiMapPin /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 120, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-line bg-panel shadow-[0_0_60px_rgba(61,220,132,0.12)]"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="ml-3 text-xs text-neutral-500">Abhishek.java</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-7 text-neutral-300">
              <code>
                {heroCode.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.12 }}
                    className={line.startsWith("@") ? "text-accent" : line.includes('"') ? "text-white" : ""}
                  >
                    {line || "\u00A0"}
                  </motion.div>
                ))}
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
