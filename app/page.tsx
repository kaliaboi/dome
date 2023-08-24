import Accordian from "@/components/accordian";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="bg-light dark:bg-dark min-h-full">
      <Nav />
      <div className="md:mx-[160px]">
        <Projects />
      </div>
      <div className="mt-[48px] w-full flex flex-col">
        <Accordian title="About">
          <p className="my-[16px] mx-[25px] md:mx-0 leading-7">
            Dome is an experience design studio that builds complex physical and
            digital spaces with impact. Founded in 2014 in Brooklyn, New York,
            Dome has successfully built teams that traverse multiple disciplines
            and mediums to answer complex projects with original solutions. We
            believe that every project we take on—large or small—is big, and
            that its impact has everything to do with how it's done and the
            people behind it. Dome is certified as a Minority Women-Owned
            Business Enterprise (M/WBE) in New York City and State.
          </p>
        </Accordian>
        <Accordian title="Services">
          <p className="my-[16px] mx-[25px] md:mx-0 leading-7">
            We approach each project simply. We co-create from the start,
            facilitating charrettes and strategy workshops with leadership and
            conducting audience research. We are medium agnostic, employing a
            suite of physical and digital design solutions appropriate for your
            audience and story. We build the right team of specialists to meet
            the bespoke needs of each project from concept through launch.
          </p>
        </Accordian>
        <Accordian title="Partners">
          <p className="mt-[16px] mx-[25px] md:mx-0 leading-7">
            Dome is an experience design studio that builds complex physical and
            digital spaces with impact. Founded in 2014 in Brooklyn, New York,
            Dome has successfully built teams that traverse multiple disciplines
            and mediums to answer complex projects with original solutions. We
            believe that every project we take on—large or small—is big, and
            that its impact has everything to do with how it's done and the
            people behind it. Dome is certified as a Minority Women-Owned
            Business Enterprise (M/WBE) in New York City and State.
          </p>
        </Accordian>
      </div>
      <Footer />
    </main>
  );
}
