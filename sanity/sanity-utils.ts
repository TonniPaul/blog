import { createClient, groq } from "next-sanity";
import { Posts } from "@/interface/postInterface";
import clientConfig from "./config/client.config";

export async function getPosts(): Promise<Posts[]> {
  return createClient(clientConfig).fetch(
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

export async function getPost(slug: string): Promise<Posts> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug" : slug.current,
      "image" : image.asset->url,
      date_created, 
      author,
      post,
      summary
    }`,
    { slug }
  );
}