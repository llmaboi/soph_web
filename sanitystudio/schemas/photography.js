export default {
  name: "photography",
  title: "Photography",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageAlt",
      title: "Image alt text",
      type: "string",
    },
    {
      name: "imageOrderNum",
      title: "Order Number",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
