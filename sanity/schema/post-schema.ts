const project = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => [
        Rule.required()
          .min(10)
          .error("A title of min. 10 characters is required"),
        Rule.max(90).warning("Shorter titles are usually better"),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "post",
      title: "Blog Post",
      type: "array",
      validation: (Rule: any) => Rule.required(),
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },

    {
      name: "summary",
      title: "Summary",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default project;
