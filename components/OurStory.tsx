"use client";

import { motion } from "framer-motion";

const logLines = [
  "> menghubungkan ke server...",
  "> Fayy telah bergabung.",
  "> kalian berdua online bersama.",
];

export default function OurStory() {
  return (
    <section id="our-story" className="bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:items-center md:gap-20">
        <div>
          <p className="font-body text-sm text-rose">Awal mula</p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-parchment md:text-4xl">
            Kita bertemu di tempat yang tidak pernah kubayangkan akan berarti
            sebesar ini.
          </h2>
          <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-parchment-muted">
            Ganti paragraf ini dengan ceritamu sendiri: bagaimana kalian
            pertama kali mengobrol di Roblox, permainan apa yang sedang
            dimainkan, dan apa yang membuat percakapan pertama itu terasa
            berbeda dari yang lain.
          </p>
        </div>

        {/* A quiet nod to the Roblox origin — styled like a join log, not a game screenshot. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-ink-line bg-ink-soft p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-dim" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
          </div>
          <div className="space-y-2 font-mono text-[13px] leading-relaxed text-parchment-muted">
            {logLines.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
