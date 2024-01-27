import { fetchPageBlocks, getPosts, notion } from "@/libs/notion/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPosts();

  const blocks = await fetchPageBlocks(post.results[0].id);

  if (!post) notFound();

  const renderer = new NotionRenderer({
    client: notion,
  });

  // renderer.use(hljsPlugin({}));

  const html = await renderer.render(...blocks);

  console.log(html);
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="text-white"
      ></div>
    </div>
  );
}
