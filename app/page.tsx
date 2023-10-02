import Accordian from "@/components/accordian";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import { getContent, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects();
  const content = await getContent();
  console.log(projects);
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
            {content.about}
          </p>
        </Accordian>
        <Accordian title="Services">
          <p className="my-[16px] mx-[25px] md:mx-0 leading-7">
            {content.services.intro}
          </p>
          <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {content.services.categories.map((category: any, idx: number) => (
              <div className="mx-[25px] md:mx-0" key={idx}>
                <p className="font-bold">{category.title}</p>
                {category.entries.map((entry: any, idx: number) => (
                  <p key={idx}>{entry}</p>
                ))}
              </div>
            ))}
          </div>
        </Accordian>
        <Accordian title="Partners">
          <div className="mt-[16px] mx-[25px] md:mx-0 relative aspect-[640/378]">
            <Image src={content.teamPhoto} fill alt="team" objectFit="cover" />
          </div>
          <p className="mt-[16px] mx-[25px] md:mx-0 leading-7">
            {content.team.intro}
          </p>
          {content.team.partners.map((partner: any, idx: number) => (
            <>
              <p className="mt-[16px] mx-[25px] md:mx-0 leading-7 font-bold">
                {partner.name}
              </p>
              <p className="mt-[16px] mx-[25px] md:mx-0 leading-7">
                {partner.description}
              </p>
            </>
          ))}
        </Accordian>
      </div>
      <div className="border-t-[3px]">
        <Footer />
      </div>
    </main>
  );
}
