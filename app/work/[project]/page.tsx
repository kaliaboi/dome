import Footer from "@/components/footer";
import Accordian from "@/components/accordian";
import Mcny from "@/components/mcny";
import Nav from "@/components/nav";
import { getContent, getProject } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

export const dynamic = "force-dynamic";

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  block: {
    normal: (props) => {
      return <p className="mb-12">{props.children}</p>;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="underline dark:text-white hover:bg-[#252EFF] hover:text-white transition-all"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function WorkPage({ params }: any) {
  const slug = params.project;
  const project = await getProject(slug);
  const content = await getContent();
  console.log(project);
  return (
    <>
      <main className="bg-light dark:bg-dark min-h-full">
        <div className="fixed top-0 left-0 right-0 z-50 bg-light dark:bg-dark">
          <Nav />
        </div>
        <div className="md:mx-0 lg:mt-24">
          <Mcny project={project} />
        </div>
        <div className="mx-[24px] md:mx-[160px] mt-12 block flex-row xl:flex justify-between text-[20px] gap-12">
          <div className="max-w-[800px]">
            <PortableText
              value={project.content}
              components={portableComponents}
            />
          </div>

          <div className="mt-12 xl:mt-0">
            <div className="my-[16px] w-[333px] lg:my-0 md:mx-0">
              {project.services && (
                <>
                  <p className="font-bold mt-[32px] lg:mt-0">Services</p>
                  <p>{project.services}</p>
                </>
              )}
              {project.collaborators && (
                <>
                  <p className="font-bold mt-[32px]">Collaborators</p>
                  <PortableText value={project.collaborators} />
                </>
              )}
              {project.awards && (
                <>
                  <p className="font-bold mt-[32px]">Awards</p>
                  <PortableText
                    value={project.awards}
                    components={portableComponents}
                  />
                </>
              )}
            </div>
          </div>
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
              <Image
                src={content.teamPhoto}
                fill
                alt="team"
                objectFit="cover"
              />
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
    </>
  );
}
