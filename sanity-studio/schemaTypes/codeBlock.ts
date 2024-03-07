import {defineType} from 'sanity'
export default defineType({
  title: 'Code Block',
  name: 'codeBlock',
  type: 'code',
  options: {
    language: 'javascript',
    languageAlternatives: [
      {title: 'Javascript', value: 'javascript'},
      {title: 'HTML', value: 'html'},
      {title: 'CSS', value: 'css'},
    ],
    withFilename: true,
  },
})
