const comment: any = {
  name: "comment",
  type: "document",
  title: "Comment",
  groups: [
    {
      name: "email",
      title: "Email",
    },
  ],
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
    },
    {
      group: "email",
      name: "email",
      type: "string",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
    },
    prepare({
      name,
      comment,
      post,
    }: {
      name: string;
      comment: string;
      post: { title: string };
    }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      };
    },
  },
};

export default comment;
