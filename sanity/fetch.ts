import { groq } from "next-sanity";

export const allPostsQuery = groq`*[_type == 'post' && !(_id in path("drafts.**"))]{
	...,
   "slug" : slug.current,
   "image" : image.asset->url,
  } | order(publish_date desc) [0...12]`;


export const postQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
		...,
      "slug" : slug.current,
      "image" : image.asset->url,
		'comments': *[_type == "comment" && post._ref == ^._id] | order(_createdAt desc){
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
        }
	}`;

export const currentPath = groq`*[_type == "post" && defined(slug.current)][].slug.current`