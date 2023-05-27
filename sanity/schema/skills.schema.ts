const skills = {
  name: "tech_stacks",
  title: "Tech Stacks",
  type: "document",
  fields: [
    {
      name: "stack_name",
      title: "Stack Name",
      type: "string",
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
  ],
};

export default skills;
