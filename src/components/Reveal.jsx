import { motion } from "framer-motion";

const offsets = {
  left: { x: -90, y: 0 },
  right: { x: 90, y: 0 },
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
};

/**
 * Slides content in from a side whenever it enters the viewport.
 * once:false means it replays when scrolling up or down again.
 */
export default function Reveal({ children, from = "left", delay = 0, className = "", as = "div" }) {
  const Tag = motion[as] || motion.div;
  const { x, y } = offsets[from];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
