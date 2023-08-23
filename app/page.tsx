import Nav from "@/components/nav";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="bg-light dark:bg-dark min-h-full">
      <Nav />
      <div className="md:mx-[160px]">
        <Projects />
      </div>
    </main>
  );
}
