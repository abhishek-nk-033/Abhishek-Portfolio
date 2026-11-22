import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contact, profile, socials } from "../data/data";
import Reveal from "./Reveal";

const field =
  "w-full rounded-xl border border-line bg-ink px-4 py-3 text-white placeholder:text-neutral-600 transition-colors focus:border-accent focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (contact.formspreeId === "YOUR_FORM_ID") {
      setError("Add your Formspree form ID in src/data/data.js to enable the form.");
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.map((x) => x.message).join(", ") || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Check your connection and try again.");
      setStatus("error");
    }
  };

  const info = [
    { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <FiPhone />, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <FiMapPin />, label: profile.location },
  ];

  return (
    <section id="contact" className="section">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal from="left">
            <h2 className="heading">{contact.heading}</h2>
          </Reveal>
          <Reveal from="left" delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-400">{contact.text}</p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {info.map((it, i) => (
              <Reveal as="li" key={it.label} from="left" delay={0.15 + i * 0.08}>
                <div className="flex items-center gap-4 text-neutral-300">
                  <span className="rounded-xl bg-accent/10 p-3 text-accent">{it.icon}</span>
                  {it.href ? (
                    <a href={it.href} className="transition-colors hover:text-accent">{it.label}</a>
                  ) : (
                    <span>{it.label}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal from="left" delay={0.4}>
            <div className="mt-8 flex gap-3 text-xl">
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-line p-3 transition-colors hover:border-accent hover:text-accent"><FaGithub /></a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-line p-3 transition-colors hover:border-accent hover:text-accent"><FaLinkedinIn /></a>
            </div>
          </Reveal>
        </div>

        <Reveal from="right">
          <form onSubmit={submit} className="card space-y-5 p-7 sm:p-9">
            {/* Honeypot field to reduce spam */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-neutral-400">
                Name
                <input className={`${field} mt-2`} type="text" name="name" required placeholder="Your name" />
              </label>
              <label className="block text-sm text-neutral-400">
                Email
                <input className={`${field} mt-2`} type="email" name="email" required placeholder="you@company.com" />
              </label>
            </div>
            <label className="block text-sm text-neutral-400">
              Subject
              <input className={`${field} mt-2`} type="text" name="subject" required placeholder="Job opportunity" />
            </label>
            <label className="block text-sm text-neutral-400">
              Message
              <textarea className={`${field} mt-2 resize-none`} name="message" rows={5} required placeholder="Tell me about the role or project" />
            </label>

            <button type="submit" disabled={status === "sending"} className="btn-solid w-full justify-center disabled:opacity-60">
              <FiSend /> {status === "sending" ? "Sending..." : "Send message"}
            </button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-accent" role="status">
                  Message sent. I will get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p key="err" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-neutral-200" role="alert">
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
