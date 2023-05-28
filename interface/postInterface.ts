import { PortableTextBlock } from "sanity";

export interface Posts {
  __id: string;
  _createdAt: string;
  title: string;
  slug: string;
  date_created: Date;
  author: string;
  post: PortableTextBlock[];
  image: string;
  summary: string;
}

export interface MyPosts {
  posts: Posts[];
}
