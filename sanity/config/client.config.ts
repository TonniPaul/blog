import { createClient } from 'next-sanity';
import { SANITY_DATASET, SANITY_PRODUCT_ID, SANITY_TOKEN } from "@/helpers/constants";
import imageUrlBuilder from "@sanity/image-url";

const clientConfig = {
  projectId: SANITY_PRODUCT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2023-05-26",
  token: SANITY_TOKEN,
};

export const client =
  SANITY_PRODUCT_ID && SANITY_DATASET && SANITY_TOKEN ? createClient(clientConfig) : undefined;

const urlBuilder = imageUrlBuilder(client);

export const imageSource = (source: string) => {
  return urlBuilder.image(source);
};