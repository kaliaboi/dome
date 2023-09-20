import { createClient, groq } from "next-sanity";

export const sanityClient = createClient({
  projectId: "4fanl4tz",
  dataset: "production",
  apiVersion: "2023-09-01",
});

export async function getProjects() {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project"]{
              _id,
              _createdAt,
              order,
              title,
              client,
              "slug": slug.current,
              "cover": cover.asset->url,
          }`
  );
  return projects;
}

export async function getProject(slug: string) {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
                _id,
                _createdAt,
                order,
                title,
                client,
                "slug": slug.current,
                "cover": cover.asset->url,
                content,
                awards,
                collaborators,
                services,
          }`,
    { slug }
  );
  return projects;
}
