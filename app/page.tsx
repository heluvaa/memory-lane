import SiteExperience from "@/components/SiteExperience";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import LoveNote from "@/components/LoveNote";
import MemoryGallery from "@/components/MemoryGallery";

export default function Home() {
  return (
    <SiteExperience>
      <main>
        <Hero />
        <OurStory />
        <LoveNote />
        <MemoryGallery />
      </main>
    </SiteExperience>
  );
}
