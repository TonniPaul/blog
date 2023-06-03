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
      initialValue: true,
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
      previewImg: "post.image",
    },
    prepare({
      name,
      comment,
      post,
      previewImg,
    }: {
      name: string;
      comment: string;
      post: { title: string };
      previewImg: string;
    }) {
      return {
        title: `${name} comment on "${post}"`,
        subtitle: comment,
        media: previewImg,
      };
    },
  },
};

export default comment;
