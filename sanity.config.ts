import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";

export default defineConfig({
  name: "default",
  title: "BLOG DASHBOARD",

  projectId: "8vq19kgu",
  dataset: "production",

  apiVersion: "2023-05-26",

  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});
