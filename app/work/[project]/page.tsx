import Footer from "@/components/footer";
import Mcny from "@/components/mcny";
import Nav from "@/components/nav";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

export default async function WorkPage({ params }: any) {
  const slug = params.project;
  const project = await getProject(slug);
  console.log(project);
  return (
    <main className="bg-light dark:bg-dark min-h-full">
      <Nav />
      <div className="md:mx-[160px]">
        <Mcny project={project} />
      </div>
      <div className="mx-[24px] md:mx-[160px] mt-12 block lg:flex justify-between text-[20px]">
        <div className="lg:w-[800px] ">
          <PortableText value={project.content} />
        </div>

        <div>
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
                <PortableText value={project.awards} />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
