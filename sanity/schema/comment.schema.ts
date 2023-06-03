const comment = {
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
};
export default comment;
