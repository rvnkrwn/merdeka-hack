import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Timeline from "@/components/main/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Timeline />
      </div>
    </main>
  );
}
