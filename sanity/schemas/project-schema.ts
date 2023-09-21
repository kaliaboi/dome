const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "cover",
      title: "Cover",
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
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "video",
      title: "Video",
      type: "string",
    },
    {
      name: "media",
      title: "Media",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Highlight", value: "highlight" },
            ],
          },
          // ...annotations, styles, lists and marks you already have
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "awards",
      title: "Awards",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Highlight", value: "highlight" },
            ],
          },
          // ...annotations, styles, lists and marks you already have
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "collaborators",
      title: "Collaborators",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Highlight", value: "highlight" },
            ],
          },
          // ...annotations, styles, lists and marks you already have
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "services",
      title: "Services",
      type: "string",
    },
  ],
};

export default project;
