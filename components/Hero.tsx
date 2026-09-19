"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blossom via-blossom-soft to-pink-light/40 px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
        style={{ background: "radial-gradient(circle, #FFD1DC 0%, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-xl flex-col items-center"
      >
        <motion.span variants={rise} className="text-3xl">
          🌷
        </motion.span>

        <motion.h1
          variants={rise}
          className="mt-6 text-balance font-hand text-6xl leading-tight text-pink-deep sm:text-7xl"
        >
          untuk Fayy, dari aku
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-4 max-w-sm text-balance font-body text-base leading-relaxed text-plum-muted"
        >
          sebuah kotak kecil berisi semua momen kita — sejak pertama ketemu di
          Roblox, sampai sekarang.
        </motion.p>

        <motion.button
          variants={rise}
          onClick={scrollToStory}
          className="mt-10 rounded-full bg-pink-deep px-7 py-3 font-body text-sm font-semibold text-white shadow-md shadow-pink/30 transition-transform hover:scale-105"
        >
          Mulai perjalanan kenangan 🌸
        </motion.button>
      </motion.div>
    </section>
  );
}
