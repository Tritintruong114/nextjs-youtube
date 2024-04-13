import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

export default function PostBody({
  content,
}: {
  content: PortableTextBlock[]
}) {
  return (
    <div className="mx-auto max-w-2xl text-white">
      <PortableText value={content} />
    </div>
  )
}
