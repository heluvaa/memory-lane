"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Memory } from "@/data/memories";

const layoutHeight: Record<Memory["layout"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

interface MemoryCardProps {
  memory: Memory;
  onOpen: (memory: Memory) => void;
}

export default function MemoryCard({ memory, onOpen }: MemoryCardProps) {
  return (
    <motion.button
      layoutId={`memory-${memory.id}`}
      onClick={() => onOpen(memory)}
      className={`group relative mb-5 block w-full overflow-hidden rounded-xl bg-ink-soft ${layoutHeight[memory.layout]} break-inside-avoid`}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {memory.type === "video" ? (
        <motion.img
          src={memory.poster ?? memory.src}
          alt={memory.title}
          variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
      ) : (
        <motion.img
          src={memory.src}
          alt={memory.title}
          variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
      )}

      {memory.type === "video" && (
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 backdrop-blur">
          <Play className="h-3.5 w-3.5 fill-parchment text-parchment" />
        </span>
      )}

      {/* Gradient + caption revealed on hover — the detail lives in the modal, this is just a hint. */}
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-4 text-left"
      >
        <p className="font-body text-sm text-parchment">{memory.title}</p>
        <p className="font-mono text-[11px] text-rose-light">{memory.date}</p>
      </motion.div>
    </motion.button>
  );
}
