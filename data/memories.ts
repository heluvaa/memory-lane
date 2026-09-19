export type MemoryType = "photo" | "video";

export interface Memory {
  /** Unique, stable id — used as the React key and for deep-linking later. */
  id: string;
  type: MemoryType;
  /** Path under /public, or a remote URL. For video, this is the video file itself. */
  src: string;
  /** Only used for type "video" — a still frame shown before playback. */
  poster?: string;
  /** Short line shown on the card itself, before it's opened. */
  title: string;
  /** Full story shown in the detail view. Keep it in your own voice. */
  story: string;
  date: string; // e.g. "14 Februari 2023"
  /** Controls how tall the card is in the masonry grid: "tall" | "wide" | "square". */
  layout: "tall" | "wide" | "square";
}

/**
 * Replace every entry below with your own photos, videos, dates, and stories.
 * `id` should stay unique and stable — don't reuse an id for a different memory.
 */
export const memories: Memory[] = [
  {
    id: "m1",
    type: "photo",
    src: "/memories/01.jpg",
    title: "Server pertama kita",
    story:
      "Ganti dengan ceritamu: malam itu kita masuk server yang sama, dan tanpa rencana, kita ngobrol sampai lupa waktu.",
    date: "3 Januari 2023",
    layout: "tall",
  },
  {
    id: "m2",
    type: "photo",
    src: "/memories/02.jpg",
    title: "Panggilan suara pertama",
    story: "Ganti dengan ceritamu di sini.",
    date: "18 Januari 2023",
    layout: "square",
  },
  {
    id: "m3",
    type: "video",
    src: "/memories/03.mp4",
    poster: "/memories/03-poster.jpg",
    title: "Main bareng sampai pagi",
    story: "Ganti dengan ceritamu di sini.",
    date: "2 Februari 2023",
    layout: "wide",
  },
  {
    id: "m4",
    type: "photo",
    src: "/memories/04.jpg",
    title: "Ketemu langsung, akhirnya",
    story: "Ganti dengan ceritamu di sini.",
    date: "14 Februari 2023",
    layout: "square",
  },
  {
    id: "m5",
    type: "photo",
    src: "/memories/05.jpg",
    title: "Liburan kecil kita",
    story: "Ganti dengan ceritamu di sini.",
    date: "10 Mei 2023",
    layout: "tall",
  },
  {
    id: "m6",
    type: "video",
    src: "/memories/06.mp4",
    poster: "/memories/06-poster.jpg",
    title: "Ulang tahunmu",
    story: "Ganti dengan ceritamu di sini.",
    date: "27 Juli 2023",
    layout: "wide",
  },
];
