import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const sanityConfig = defineConfig({
  projectId: "4fanl4tz",
  dataset: "production",
  title: "Dome Studio",
  apiVersion: "2023-09-21",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
