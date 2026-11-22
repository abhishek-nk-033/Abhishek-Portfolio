// Smooth-scrolls to a section id using Lenis (falls back to native smooth scroll).
export function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: id === "home" ? 0 : -64, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
}
