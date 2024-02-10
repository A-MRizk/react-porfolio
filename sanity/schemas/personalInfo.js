const personalInfo = {
  name: 'personalInfo',
  type: 'document',
  title: 'PersonalInfo',
  fields: [
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'familyName',
      type: 'string',
      title: 'Family Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'banner',
      type: 'text',
      title: 'Description Banner',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'aboutTitle',
      type: 'string',
      title: 'About Title',
    },
    {
      name: 'about',
      type: 'text',
      title: 'Description About',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.email().required(),
    },
  ],
};

export default personalInfo;
