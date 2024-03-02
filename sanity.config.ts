import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Next JS Sanity Starter",

  projectId: "6wl7e35x",
  dataset: "production",

  plugins: [structureTool(), visionTool()],
  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
});
