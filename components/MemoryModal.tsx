"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Memory } from "@/data/memories";

interface MemoryModalProps {
  memory: Memory | null;
  onClose: () => void;
}

export default function MemoryModal({ memory, onClose }: MemoryModalProps) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-plum/40 p-4 backdrop-blur-sm md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId={`memory-${memory.id}`}
            onClick={(e) => e.stopPropagation()}
            className="grid max-h-[88vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-blossom-card shadow-2xl md:grid-cols-2"
          >
            <div className="relative h-64 bg-pink-light/30 md:h-full">
              {memory.type === "video" ? (
                <video
                  src={memory.src}
                  poster={memory.poster}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={memory.src}
                  alt={memory.title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-col justify-center overflow-y-auto p-8 md:p-10">
              <span className="font-body text-xs text-pink-deep">{memory.date}</span>
              <h3 className="mt-3 font-hand text-4xl text-plum">{memory.title}</h3>
              <p className="mt-5 font-body text-[15px] leading-relaxed text-plum-muted">
                {memory.story}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-plum shadow transition-colors hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
