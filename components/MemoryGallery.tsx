"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { memories, type Memory } from "@/data/memories";
import MemoryCard from "./MemoryCard";
import MemoryModal from "./MemoryModal";

export default function MemoryGallery() {
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <section className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-body text-sm text-rose">Kenangan kita</p>
          <h2 className="mt-4 font-display text-3xl text-parchment md:text-4xl">
            Setiap momen, disimpan.
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm text-parchment-muted">
            Klik salah satu untuk membaca ceritanya.
          </p>
        </div>

        <LayoutGroup>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
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
