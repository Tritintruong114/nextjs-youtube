import {defineArrayMember, defineType} from 'sanity'

const HighlightIcon = () => <span style={{fontWeight: 'bold'}}>H</span>
const HighlightDecorator = (props: any) => (
  <span className="underline bg-blue-400 decoration-blue-400">{props.children}</span>
)

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],

      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'H', value: 'highlight', component: HighlightDecorator, icon: HighlightIcon},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
      codeBlock: {
        type: 'codeBlock',
        title: 'Code Block',
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineArrayMember({
      type: 'codeBlock',
      title: 'Code Block',
    }),
  ],
})
