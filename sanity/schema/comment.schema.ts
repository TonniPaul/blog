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
    {
      name: "previewImg",
      type: "image",
    },
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
      previewImg: "post.image.asset.url",
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
        title: `${name} on ${post}`,
        subtitle: comment,
        imageUrl: previewImg,
      };
    },
  },
};

export default comment;
