export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'resumeLink',
      title: 'Resume Google Doc Link',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
