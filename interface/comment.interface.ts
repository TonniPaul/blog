import { PortableTextBlock } from "sanity";

export interface CommentInterface {
  _id: string;
  _createdAt: Date;
  name: string;
  email: string;
  comment: string;
}
