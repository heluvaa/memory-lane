"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Memory } from "@/data/memories";

/** Deterministic pseudo-random rotation from the memory's id, so server and client agree. */
function rotationFromId(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) % 1000;
  return (hash % 13) - 6; // -6deg to +6deg
}

function offsetFromId(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 17 + id.charCodeAt(i)) % 1000;
  return (hash % 24) - 12; // -12px to +12px vertical scatter
}

interface MemoryCardProps {
  memory: Memory;
  onOpen: (memory: Memory) => void;
}

export default function MemoryCard({ memory, onOpen }: MemoryCardProps) {
  const rotate = rotationFromId(memory.id);
  const offsetY = offsetFromId(memory.id);
  const tapeLeft = memory.id.charCodeAt(0) % 2 === 0;

  return (
    <motion.button
      layoutId={`memory-${memory.id}`}
      onClick={() => onOpen(memory)}
      initial={{ rotate }}
      style={{ marginTop: offsetY }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-6 w-full max-w-[220px] shrink-0 rounded-sm bg-blossom-card p-3 pb-9 text-left shadow-lg shadow-pink-light/50"
    >
      <span
        className={`tape ${tapeLeft ? "-left-3" : "-right-3"} -top-3`}
        style={{ transform: `rotate(${tapeLeft ? -18 : 18}deg)` }}
        aria-hidden
      />

      <div className="relative aspect-square w-full overflow-hidden bg-pink-light/30">
        <img
          src={memory.type === "video" ? memory.poster ?? memory.src : memory.src}
          alt={memory.title}
          className="h-full w-full object-cover"
        />
        {memory.type === "video" && (
          <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-plum/60 backdrop-blur">
            <Play className="h-3 w-3 fill-white text-white" />
          </span>
        )}
      </div>

      <p className="mt-3 truncate font-hand text-xl text-plum">{memory.title}</p>
      <p className="font-body text-[11px] text-plum-muted">{memory.date}</p>
    </motion.button>
  );
}
