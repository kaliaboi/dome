import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

export const sanityConfig = defineConfig({
  projectId: "4fanl4tz",
  dataset: "production",
  title: "Dome Studio",
  apiVersion: "2023-09-01",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});
