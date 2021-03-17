export default {
  name: "landingLinks",
  title: "Landing Page Links",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "pageOrderNum",
      title: "Order Number",
      type: "number",
    },
    {
      name: "link",
      title: "Link Name",
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
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
