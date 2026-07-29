import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "yourProjectId";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "urondo",
  title: "Urondo お知らせ",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
});
