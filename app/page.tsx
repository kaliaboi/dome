import Accordian from "@/components/accordian";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import { getProjects } from "@/sanity/sanity-utils";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  projects.sort((a: any, b: any) => a.order - b.order);
  return (
    <main className="bg-light dark:bg-dark min-h-full">
      <Nav />
      <div className="">
        <Projects projects={projects} />
      </div>
      <div className="mt-[48px] w-full flex flex-col">
        <Accordian title="About">
          <p className="my-[16px] mx-[25px] md:mx-0 leading-7">
            Dome is an experience design studio that builds complex physical and
            digital spaces with impact. Founded in 2014 in Brooklyn, New York,
            Dome has successfully built teams that traverse multiple disciplines
            and mediums to answer complex projects with original solutions. We
            believe that every project we take on—large or small—is big, and
            that its impact has everything to do with how it&apos;s done and the
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
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mx-[25px] md:mx-0">
              <p className="font-bold">Strategy & Research</p>
              <p>Stakeholder workshops</p>
              <p>Interviews & audits</p>
              <p>Exhibit strategy</p>
              <p>Content strategy</p>
            </div>
            <div className="mx-[25px] md:mx-0">
              <p className="font-bold">Concepts & Prototypes</p>
              <p>Exhibit planning</p>
              <p>Prototypes & user-testing</p>
              <p>Technology specification</p>
              <p>Fundraising materials</p>
            </div>
            <div className="mx-[25px] md:mx-0">
              <p className="font-bold">Communication Design</p>
              <p>Exhibit & experience design </p>
              <p>Identity & graphic design</p>
              <p>Interaction & media design</p>
              <p>Product & web design</p>
            </div>
            <div className="mx-[25px] md:mx-0">
              <p className="font-bold">Development & Launch</p>
              <p>Software & media production</p>
              <p>Interactive installation</p>
              <p>AV hardware coordination</p>
              <p>Fabrication oversight</p>
            </div>
          </div>
        </Accordian>
        <Accordian title="Partners">
          <div className="mt-[16px] mx-[25px] md:mx-0 relative aspect-[640/378]">
            <Image src={"/team.png"} fill alt="team" />
          </div>
          <p className="mt-[16px] mx-[25px] md:mx-0 leading-7">
            We are a studio of founding partners Lynn Kiang and Katie Lee, who
            design large-scale projects by collaborating closely with our
            clients, building teams with experts, and carefully managing
            production through launch.
          </p>
          <p className="mt-[16px] mx-[25px] md:mx-0 leading-7 font-bold">
            Lynn Kiang
          </p>
          <p className="mt-[16px] mx-[25px] md:mx-0 leading-7">
            Lynn is the co-founder and partner of Dome. She is a
            multi-disciplinary designer and creative director in experience
            design, graphic design and built environments. She is also Director
            of the MPS Communication Design at Parsons School of Design. She
            received her MFA in Graphic Design from the Rhode Island School of
            Design, a Certificate of Collegiate Teaching from Brown University,
            and a BS in Psychology from the University of California at Los
            Angeles.
          </p>
          <p className="mt-[16px] mx-[25px] md:mx-0 leading-7 font-bold">
            Katie Lee
          </p>
          <p className="mt-[16px] mx-[25px] md:mx-0 leading-7">
            We are a studio of founding partners Lynn Kiang and Katie Lee, who
            design large-scale projects by collaborating closely with our
            clients, building teams with experts, and carefully managing
            production through launch.
          </p>
        </Accordian>
      </div>
      <div className="border-t-[3px]">
        <Footer />
      </div>
    </main>
  );
}
