# Memory Lane — untuk Fayy

Website kenangan yang dibangun dengan Next.js 14 (App Router), Tailwind CSS, dan Framer Motion.

## Struktur proyek

```
memory-lane/
├── app/
│   ├── layout.tsx      # Root layout — memuat font (Fraunces, Manrope, JetBrains Mono)
│   ├── page.tsx        # Menyusun Hero, OurStory, MemoryGallery
│   └── globals.css     # Reset dasar, scrollbar custom, reduced-motion
├── components/
│   ├── Hero.tsx         # Hero section dengan animasi masuk
│   ├── OurStory.tsx      # Seksi "Roblox era"
│   ├── MemoryGallery.tsx # Grid masonry
│   ├── MemoryCard.tsx    # Satu kartu foto/video
│   └── MemoryModal.tsx   # Detail kenangan saat kartu diklik
├── data/
│   └── memories.ts      # Mock data — GANTI dengan foto/video/ceritamu
└── tailwind.config.ts   # Palet warna & font custom
```

## Langkah 1 — Buat proyek Next.js

Kalau kamu belum punya proyek Next.js, buat dulu dari nol:

```bash
npx create-next-app@latest memory-lane --typescript --tailwind --app --src-dir=false
cd memory-lane
```

Saat ditanya, pilih:
- TypeScript: **Yes**
- Tailwind CSS: **Yes**
- App Router: **Yes**
- `src/` directory: **No**

## Langkah 2 — Salin file-file ini

Salin semua file yang sudah dibuat (`app/`, `components/`, `data/`, `tailwind.config.ts`) ke dalam proyek yang baru dibuat, menimpa file default yang sudah ada.

## Langkah 3 — Install dependency tambahan

```bash
npm install framer-motion lucide-react
```

## Langkah 4 — Siapkan asetmu

1. Buat folder `public/memories/`.
2. Masukkan semua foto (`.jpg`/`.png`) dan video (`.mp4`) kalian ke situ.
3. Untuk setiap video, buat satu gambar still sebagai poster (bisa screenshot frame pertama) — ini yang tampil sebelum video diputar.

## Langkah 5 — Isi kenangan sungguhan

Buka `data/memories.ts` dan ganti setiap entri:
- `src` → path ke foto/video di `public/memories/`
- `title` → judul singkat kenangan
- `story` → cerita lengkapnya, dengan gaya bahasamu sendiri
- `date` → tanggal kejadian
- `layout` → `"tall"`, `"wide"`, atau `"square"`, untuk variasi tinggi kartu di grid

Tambah atau kurangi jumlah entri sesuai jumlah kenangan yang kamu punya.

## Langkah 6 — Jalankan secara lokal

```bash
npm run dev
```

Buka `http://localhost:3000` di browser.

## Langkah 7 — Sesuaikan detail personal

- Ganti nama "Fayy" di `app/layout.tsx` (metadata) dan `components/Hero.tsx` kalau perlu.
- Ganti paragraf cerita di `components/OurStory.tsx` dengan kisah kalian yang sebenarnya di Roblox.

## Langkah 8 — Deploy

Cara termudah adalah lewat [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Ikuti instruksi di terminal, dan websitenya akan online dengan URL publik yang bisa langsung kamu kirim ke Fayy.

## Catatan teknis

- **Palet warna**: near-black hangat (`#100D10`) sebagai dasar, aksen rose-gold (`#C9967A`) — didefinisikan di `tailwind.config.ts` sebagai `ink` dan `rose`, bukan warna Tailwind default, supaya gampang diubah dari satu tempat.
- **Tipografi**: Fraunces (serif, untuk headline & judul kenangan) dipasangkan dengan Manrope (sans-serif, untuk teks isi), plus JetBrains Mono khusus untuk motif "system log" di seksi Our Story.
- **Animasi**: transisi kartu ke modal detail memakai `layoutId` Framer Motion, jadi fotonya benar-benar "membesar" ke posisi barunya, bukan sekadar fade. Semua animasi menghormati `prefers-reduced-motion`.
- **Video besar**: kalau video kalian berukuran besar, pertimbangkan hosting di layanan seperti Cloudinary atau Mux dan ganti `src` di `data/memories.ts` dengan URL-nya, supaya build tetap ringan.
