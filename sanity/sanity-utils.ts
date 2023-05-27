import { createClient, groq } from "next-sanity";
import { Posts } from "@/interface/postInterface";

export async function getPosts(): Promise<Posts[]> {
  const client = createClient({
    projectId: "8vq19kgu",

    dataset: "production",

    apiVersion: "2023-05-26",
  });

  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug" : slug.current,
      "image" : image.asset->url,
      date_created, 
      author,
      post,
      summary
    }`
  );
}
