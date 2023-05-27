import { type } from "os";
import { title } from "process";

const project = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "date_created",
      title: "Publish Date",
      type: "date",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },

    {
      name: "post",
      title: "Blog Post",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
  ],
};

export default project;
