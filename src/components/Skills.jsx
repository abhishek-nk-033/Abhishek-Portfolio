import { motion } from "framer-motion";
import { skills } from "../data/data";
import Reveal from "./Reveal";

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i) => ({ opacity: 1, scale: 1, transition: { delay: 0.25 + i * 0.04, duration: 0.4 } }),
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal from="right">
        <h2 className="heading">Skills</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} from={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.08}>
            <div className="card h-full">
              <h3 className="font-display text-xl font-bold text-white">{group.category}</h3>
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
              >
                {group.items.map((item, j) => (
                  <motion.span key={item} custom={j} variants={chipVariants} className="chip">
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
