import { getPosts, Post } from "@/sanity/queries/posts";
import Image from "next/image";

const BlogPage = async () => {
  const postsData: Post[] = await getPosts();

  console.log(postsData);
  return (
    <section
      id="section"
      className="py-6 sm:py-24 pt-24 max-h-[1120px] sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
    >
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="py-12">
          <h1 className="text-white text-3xl">Our Blog</h1>
        </div>
        <div className="grid justify-between w-full gap-6 grid-cols-1 sm:grid-cols-3">
          {postsData.map((post, index) => {
            return (
              <div
                key={index}
                className="w-full col-span-1 group shrink-0 border border-white px-3 py-2"
              >
                <div className="flex flex-col mb-6">
                  <h2 className="text-white text-xl">{post.title}</h2>

                  <div className="flex justify-between w-full">
                    <span className="text-white text-sm">{post.author}</span>
                    <span className="text-white text-sm">
                      {" "}
                      {post.publishedAt}
                    </span>
                  </div>
                </div>
                <div className="h-[250px] w-full relative overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title || ""}
                    width={320}
                    height={450}
                    className="absolute w-full group-hover:scale-110 duration-300 h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
