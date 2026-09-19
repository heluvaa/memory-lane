"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

export default function SiteExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setEntered(true);
    // Browsers require a real user gesture before audio can play — this click is it.
    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      {/* Replace src with your own song file in public/audio/. Keep it a file you have the rights to use. */}
      <audio ref={audioRef} src="/audio/song.mp3" loop />

      <FloatingHearts />

      <AnimatePresence>
        {!entered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#FFEEF2] via-[#FFE3EA] to-[#FFD1DC] px-6 text-center"
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl animate-pulse-soft"
            >
              💌
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-hand text-5xl text-pink-deep sm:text-6xl"
            >
              untuk Fayy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-xs font-body text-sm text-plum-muted"
            >
              ada kenangan kecil yang mau aku tunjukkin ke kamu
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              onClick={handleEnter}
              className="rounded-full bg-pink-deep px-8 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-pink/30 transition-transform hover:scale-105"
            >
              Buka Kenangan Kita 🌸
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <button
          onClick={toggleMusic}
          aria-label={playing ? "Matikan musik" : "Putar musik"}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-pink-deep shadow-lg shadow-pink-light/60 transition-transform hover:scale-110"
        >
          {playing ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </button>
      )}

      {children}
    </>
  );
}
