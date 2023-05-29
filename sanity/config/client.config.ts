const clientConfig = {
  projectId: process.env.SANITY_PRODUCT_ID,

  dataset: process.env.SANITY_DATASET,

  apiVersion: process.env.SANITY_API_VERSION,
};

export default clientConfig;
