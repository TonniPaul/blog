const comment = {
  name: "comment",
  type: "document",
  title: "Comment",
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
      postTitle: "post.title",
    },
    prepare({
      name,
      comment,
      postTitle,
    }: {
      name: string;
      comment: string;
      postTitle: string;
    }) {
      return {
        title: `${name} on ${postTitle}`,
        subtitle: comment,
      };
    },
  },
};
export default comment;
