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
      options: {
        dateFormat: "MMMM D, YYYY",
        calendarTodayLabel: "Today",
      },
      initialValue: "2023-06-01",
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
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
        {
          type: "object",
          name: "blockquote",
          title: "Blockquote",
          fields: [
            {
              name: "content",
              title: "Content",
              type: "string",
            },
            {
              name: "citation",
              title: "Citation",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
  ],
};

export default project;
