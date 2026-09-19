"use client";

import { motion } from "framer-motion";

/**
 * Ganti setiap baris dengan kata-katamu sendiri.
 * Ini SENGAJA bukan lirik lagu — supaya kamu bebas menaruh musik favorit kalian
 * di /public/audio/song.mp3 tanpa terikat pada teks di sini.
 */
const lines = [
  "Aku nggak pernah nyangka,",
  "obrolan random di satu server itu",
  "akan bawa aku sampai ke sini,",
  "ke kamu.",
];

export default function LoveNote() {
  return (
    <section className="bg-blossom px-6 py-28 md:py-36">
      <div className="mx-auto max-w-xl text-center">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.5, duration: 0.7, ease: "easeOut" }}
            className="font-hand text-3xl leading-relaxed text-plum sm:text-4xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
