import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";
import { SANITY_DATASET, SANITY_PRODUCT_ID } from "./helpers/constants";

export default defineConfig({
  title: "Dashboard",
  projectId: SANITY_PRODUCT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2023-05-26",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});
