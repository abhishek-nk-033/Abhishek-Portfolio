import { profile } from "../data/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-neutral-500">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
      </p>
    </footer>
  );
}
