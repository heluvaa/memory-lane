"use client";

import { motion } from "framer-motion";

const chatBubbles = [
  { from: "them", text: "hai, boleh gabung main?" },
  { from: "me", text: "boleh banget! gas 🎮" },
  { from: "them", text: "ternyata seru juga ngobrol sama kamu" },
];

export default function OurStory() {
  return (
    <section id="our-story" className="bg-blossom-soft px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:items-center md:gap-20">
        <div>
          <p className="font-hand text-2xl text-pink-deep">awal mula 🌸</p>
          <h2 className="mt-3 font-display text-3xl italic leading-snug text-plum md:text-4xl">
            Kita ketemu di tempat yang nggak pernah kubayangkan bakal
            berarti sebesar ini.
          </h2>
          <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-plum-muted">
            Ganti paragraf ini dengan ceritamu sendiri: game apa yang lagi
            dimainkan waktu itu, gimana awal ngobrolnya, dan momen kecil apa
            yang bikin kamu sadar dia beda dari yang lain.
          </p>
        </div>

        {/* Nod ke asal-usul Roblox, dikemas sebagai chat bubble pastel, bukan terminal. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-blossom-card p-6 shadow-lg shadow-pink-light/50"
        >
          <div className="flex flex-col gap-3">
            {chatBubbles.map((bubble, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: bubble.from === "me" ? 16 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 font-body text-sm ${
                  bubble.from === "me"
                    ? "self-end bg-pink-deep text-white"
                    : "self-start bg-pink-light/60 text-plum"
                }`}
              >
                {bubble.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
