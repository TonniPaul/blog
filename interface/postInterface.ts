import { PortableTextBlock } from "sanity";
import { CommentInterface } from "./comment.interface";

export interface Posts {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  date_created: Date;
  author: string;
  post: PortableTextBlock[];
  image: string;
  summary: string;
  comments: CommentInterface;
}

export interface MyPosts {
  posts: Posts[];
}
