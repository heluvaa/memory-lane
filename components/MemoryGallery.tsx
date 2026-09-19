"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { memories, type Memory } from "@/data/memories";
import MemoryCard from "./MemoryCard";
import MemoryModal from "./MemoryModal";

export default function MemoryGallery() {
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <section className="bg-blossom px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-hand text-2xl text-pink-deep">buku tempel kita 📸</p>
          <h2 className="mt-2 font-display text-3xl italic text-plum md:text-4xl">
            Setiap foto, satu cerita.
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-plum-muted">
            Klik salah satu polaroid untuk baca ceritanya.
          </p>
        </div>

        <LayoutGroup>
          <div className="flex flex-wrap items-start justify-center gap-x-3">
            {memories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} onOpen={setSelected} />
            ))}
          </div>

          <MemoryModal memory={selected} onClose={() => setSelected(null)} />
        </LayoutGroup>
      </div>
    </section>
  );
}
