"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number; // vw
  duration: number; // seconds
  delay: number; // seconds
  size: number; // px
  drift: number; // px
  emoji: string;
}

const EMOJIS = ["🌸", "💗", "🌷", "✨"];

export default function FloatingHearts() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 12,
      size: 14 + Math.random() * 14,
      drift: (Math.random() - 0.5) * 120,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));
    setPetals(generated);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 select-none opacity-0 animate-float-down"
          style={{
            left: `${p.left}vw`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // @ts-expect-error -- custom property consumed by the keyframe
            "--drift": `${p.drift}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
