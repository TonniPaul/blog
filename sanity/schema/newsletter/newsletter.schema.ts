const newsletter: any = {
  name: "newsletter",
  type: "document",
  title: "NewsLetter Sign Ups",
  groups: [
    {
      name: "name",
      title: "Name",
    },
    {
      name: "email",
      title: "Email",
    },
  ],
  fields: [
    {
      name: "name",
      type: "string",
      readOnly: true,
      group: "name",
    },
    {
      name: "email",
      type: "string",
      readOnly: true,
      group: "email",
    },
  ],
};

export default newsletter;
