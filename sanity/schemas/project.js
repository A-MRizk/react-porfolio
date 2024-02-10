const project = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      type: 'number',
      title: 'Year',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default project;
