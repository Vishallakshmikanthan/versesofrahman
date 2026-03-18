"use client";

import { useUniverseStore } from "@/store/universeStore";
import { ViewMode } from "@/lib/types";
import { motion } from "framer-motion";

const modes: { label: string; value: ViewMode }[] = [
  { label: "Galaxy", value: "galaxy" },
  { label: "Network", value: "network" },
  { label: "Timeline", value: "timeline" },
];

export default function ModeSwitch() {
  const mode = useUniverseStore((s) => s.mode);
  const setMode = useUniverseStore((s) => s.setMode);

  return (
    <div className="flex items-center gap-2 rounded-full bg-cosmic-surface/60 p-1 backdrop-blur-md">
      {modes.map((m) => (
        <button
          key={m.value}
          onClick={() => setMode(m.value)}
          className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
            mode === m.value
              ? "text-white"
              : "text-cosmic-gray border border-cosmic-purple/30"
          }`}
        >
          {mode === m.value && (
            <motion.span
              layoutId="mode-highlight"
              className="absolute inset-0 rounded-full bg-cosmic-purple shadow-glow"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{m.label}</span>
        </button>
      ))}
    </div>
  );
}
