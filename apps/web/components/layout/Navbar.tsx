"use client";

import ModeSwitch from "./ModeSwitch";
import { useUniverseStore } from "@/store/universeStore";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/analytics", label: "Analytics" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const toggleSearch = useUniverseStore((s) => s.toggleSearch);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="glass-panel fixed top-0 left-0 z-50 flex h-[52px] w-full items-center justify-between px-6"
    >
      {/* LEFT — Brand */}
      <span className="font-[family-name:var(--font-orbitron)] text-sm font-semibold tracking-wider text-cosmic-cyan">
        VERSES OF RAHMAN
      </span>

      {/* CENTER — Mode Switch */}
      <ModeSwitch />

      {/* RIGHT — Search + Nav Links */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSearch}
          className="rounded-full border border-cosmic-purple/30 px-3 py-1 text-sm text-cosmic-gray transition-colors hover:text-cosmic-cyan"
        >
          Search
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-cosmic-gray transition-colors hover:text-cosmic-cyan"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
