import { createClient, groq } from "next-sanity";
import { Posts } from "@/interface/postInterface";
import clientConfig from "./config/client.config";

// Function to fetch all posts and set the order to the post date input
export async function getPosts(): Promise<Posts[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(date_created desc) {
      _id,
      _createdAt,
      title,
      "slug" : slug.current,
      "image" : image.asset->url,
      date_created, 
      author,
      post,
      summary
    }  `
  );
}

// Function to fetch a specific post by slug
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
      summary,
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
        }
    }`,
    { slug }
  );
}
