"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      {/* Soft radial glow behind the headline — the one bold gesture on this screen. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, #C9967A 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-2xl flex-col items-center"
      >
        <motion.span
          variants={rise}
          className="font-mono text-xs text-rose/80"
        >
          untuk Fayy
        </motion.span>

        <motion.h1
          variants={rise}
          className="mt-6 text-balance font-display text-4xl italic leading-tight text-parchment sm:text-5xl md:text-6xl"
        >
          Dari satu server yang sama,
          <br />
          sampai sejauh ini.
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-6 max-w-md text-balance font-body text-base leading-relaxed text-parchment-muted"
        >
          Setiap tangkapan layar, setiap rekaman singkat — aku kumpulkan supaya
          kamu bisa melihat kembali apa yang sudah kita lalui bersama.
        </motion.p>

        <motion.button
          variants={rise}
          onClick={scrollToStory}
          className="mt-10 rounded-full border border-rose-dim bg-transparent px-7 py-3 font-body text-sm text-parchment transition-colors duration-300 hover:border-rose hover:bg-rose/10"
        >
          Mulai perjalanan kenangan
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 h-10 w-[1px] bg-gradient-to-b from-rose-dim to-transparent"
        aria-hidden
      />
    </section>
  );
}
