const comment = {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Username",
      type: "string",
      readOnly: true,
    },
    {
      name: "userComment",
      title: "Comment",
      type: "text",
      readOnly: true,
    },
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: [
        {
          type: "post",
        },
      ],
    },
  ],
};
export default comment;
