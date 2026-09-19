# Memory Lane — untuk Fayy 🌸

Website kenangan bertema pink pastel/bucin, dibangun dengan Next.js 14 (App Router), Tailwind CSS, dan Framer Motion.

## Struktur proyek

```
memory-lane/
├── app/
│   ├── layout.tsx        # Root layout — font Playfair Display, Quicksand, Caveat
│   ├── page.tsx          # Menyusun SiteExperience > Hero, OurStory, LoveNote, MemoryGallery
│   └── globals.css       # Palet pink, animasi kelopak jatuh, tape decoration
├── components/
│   ├── SiteExperience.tsx  # Gate "Buka Kenangan Kita", tombol musik, bungkus semua section
│   ├── FloatingHearts.tsx  # Kelopak/hati melayang di background, terus menerus
│   ├── Hero.tsx            # Judul besar handwriting + CTA
│   ├── OurStory.tsx        # Cerita awal, dikemas sebagai chat bubble ala Roblox
│   ├── LoveNote.tsx        # Teks yang muncul pelan-pelan pas discroll
│   ├── MemoryGallery.tsx   # Susunan polaroid berantakan-tapi-estetik
│   ├── MemoryCard.tsx      # Satu polaroid foto/video, rotasi acak tapi konsisten
│   └── MemoryModal.tsx     # Detail kenangan saat polaroid diklik
├── data/
│   └── memories.ts        # Mock data — GANTI dengan foto/video/ceritamu
└── public/
    └── audio/song.mp3     # ISI SENDIRI — lagu latar (lihat catatan di bawah)
```

## Langkah 1 — Buat proyek Next.js (kalau belum ada)

```bash
npx create-next-app@latest memory-lane --typescript --tailwind --app --src-dir=false
cd memory-lane
npm install framer-motion lucide-react
```

## Langkah 2 — Salin semua file di zip ini ke proyekmu, timpa yang default.

## Langkah 3 — Tambah lagu latar

1. Siapkan file musik (`.mp3`), **pastikan kamu punya hak untuk memakainya** — bisa lagu favorit kalian yang kamu beli/download resmi, atau musik bebas royalti dari situs seperti Pixabay Music/YouTube Audio Library.
2. Simpan sebagai `public/audio/song.mp3`.
3. Musik akan otomatis diputar begitu Fayy klik tombol "Buka Kenangan Kita" — ini wajib karena browser modern **tidak mengizinkan audio autoplay tanpa interaksi user**, jadi tombol itu sekaligus jadi pemicunya.
4. Tombol kecil di pojok kanan bawah (ikon speaker) bisa dipakai buat mute/unmute kapan saja.

## Langkah 4 — Isi kenangan sungguhan

Buka `data/memories.ts`, ganti tiap entri: `src`, `poster` (khusus video), `title`, `story`, `date`. Tambah/hapus objek sesuai jumlah foto — sudah dites aman untuk 50+ item.

> Untuk 50+ foto: kompres dulu sebelum dimasukkan (TinyPNG dsb.), dan kalau ada video besar, pertimbangkan host di Cloudinary/Mux lalu isi `src` dengan URL-nya, supaya repo & build tetap ringan.

## Langkah 5 — Sesuaikan teks personal

- `components/OurStory.tsx` → ganti paragraf dan isi `chatBubbles` dengan obrolan pertama kalian yang sebenarnya.
- `components/LoveNote.tsx` → ganti larik `lines` dengan kata-katamu sendiri. Sengaja dibuat terpisah dari lagu (bukan lirik lagu) supaya bebas dipasangkan dengan musik apa pun tanpa masalah hak cipta.
- `components/Hero.tsx` & `app/layout.tsx` (metadata) → ganti "Fayy" kalau perlu.

## Langkah 6 — Jalankan lokal

```bash
npm run dev
```
Buka `http://localhost:3000`.

## Langkah 7 — Push ke GitHub & deploy ke Vercel

```bash
git add .
git commit -m "update ke tema pink bucin"
git push
```
Kalau repo sudah terhubung ke Vercel, deploy otomatis jalan setiap kali kamu push.

## Catatan desain

- **Warna**: latar blush pink (`blossom` di `tailwind.config.ts`), aksen pink tegas (`pink-deep`) untuk tombol/CTA, teks plum gelap supaya tetap kebaca di atas pastel.
- **Font**: Caveat (handwriting besar untuk judul & caption polaroid), Playfair Display italic (judul section), Quicksand (isi teks).
- **Polaroid scatter**: rotasi tiap kartu dihitung dari `id`-nya (bukan random murni), jadi tetap konsisten setiap kali halaman dibuka — tidak "meloncat" saat reload.
- **Kelopak melayang**: dibuat lewat CSS keyframe (`float-down`), murah secara performa walau ada 50+ foto di galeri.
- Semua animasi tetap menghormati `prefers-reduced-motion`.
