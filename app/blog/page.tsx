/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import Image from "next/image";
import BlogCard from "./blog-card";

const BlogPage = () => {
  return (
    <main className="rounded-3xl relative no-scrollbar overflow-y-hidden">
      <Section className="bg-bruno-white">
        <Container>
          <div className="w-full justify-center items-center flex flex-col my-xl">
            <h1 className="text-fluid-display-2xl text-bruno-ximen font-bebas leading-none">
              Blog
            </h1>
            <p className="font-bold font-manrope sm:w-1/2 w-full text-fluid-body-xl text-center">
              "Be willing to share your blessings. The only riches that last are
              the ones that are given away".{" "}
              <span className="italic text-fluid-body-lg">– David Khalil</span>
            </p>
          </div>
          <div className="h-screen -mb-xxl sm:h-full">
            <div className="h-full w-full relative flex justify-start items-end group overflow-hidden cursor-pointer">
              <Image
                src="https://cdn.dribbble.com/userupload/5164366/file/original-cf7b7cab617cf9b77a8bab555ed9a200.png?resize=1504x1128"
                alt="Next JS"
                fill
                className="w-full h-full object-cover group-hover:scale-125 duration-300"
              />
              <p className="absolute -top-24 text-bruno-black text-fluid-body-xl font-bebas px-base bg-bruno-white group-hover:top-0 duration-300">
                Latest Article
              </p>
              <div className="w-full bg-bruno-black text-bruno-white flex justify-around items-center relative -bottom-96 group-hover:bottom-0 duration-300">
                <h3 className="font-bebas font-bold text-fluid-display-m">
                  Blog 1
                </h3>
                <div className="flex gap-base items-center justify-center">
                  <p className="px-base bg-bruno-ximen text-white py-xs">
                    Next JS
                  </p>
                  <p className="px-base bg-bruno-ximen text-white py-xs">
                    Swell JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <div className="bg-bruno-grey py-xxxl">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-base">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default BlogPage;
