import { createClient, groq } from "next-sanity";

export const sanityClient = createClient({
  projectId: "4fanl4tz",
  dataset: "production",
  apiVersion: "2023-09-21",
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
              "cover": media[0].image.asset->url,
              media[]{
                "image":image.asset->url,
                title
              },
              "videoID": video.videoID
          }`
  );
  return projects;
}

export async function getContent() {
  const content = await sanityClient.fetch(
    groq`*[_type == "content"]{
              _id,
              _createdAt,
              version,
              about,
              services,
              "teamPhoto": team.photo.asset->url,
              "teamIntro": team.intro,
              team,
          }`
  );
  return content[0];
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
                media[]{
                  "image":image.asset->url,
                  title
                },
                "videoID": video.videoID,
                content,
                awards,
                collaborators,
                services,
          }`,
    { slug }
  );
  return projects;
}
