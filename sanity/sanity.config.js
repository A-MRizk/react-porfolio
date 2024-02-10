import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import schemaTypes from './schemas';

export default defineConfig({
  name: 'default',
  title: 'anthony-portfolio',

  projectId: 'mee6zky5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
