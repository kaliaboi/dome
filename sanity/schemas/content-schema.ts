const content = {
  name: "content",
  title: "Home Content",
  type: "document",
  fields: [
    {
      name: "version",
      title: "Version",
      type: "number",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "services",
      title: "Services",
      type: "object",
      fields: [
        { name: "intro", title: "Intro", type: "string" },
        {
          name: "categories",
          title: "Categories",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string", title: "Title" },
                {
                  name: "entries",
                  type: "array",
                  title: "Entries",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "team",
      title: "Team",
      type: "object",
      fields: [
        {
          name: "photo",
          title: "Team Photo",
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
          name: "intro",
          title: "Intro",
          type: "string",
        },
        {
          name: "partners",
          title: "Partners",
          type: "array",
          of: [
            {
              name: "partner",
              title: "Partner",
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "description", title: "Description", type: "string" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default content;
