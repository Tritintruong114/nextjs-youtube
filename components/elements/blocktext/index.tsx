import urlFor from "@/utils/urlFor";
import Image from "next/image";
import Link from "next/link";
import CodeBlock from "./CodeBlock";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
    code: CodeBlock,
  },
  list: {
    bullet: ({ children }: any) => <ul className="">{children}</ul>,
    number: ({ children }: any) => <ol className="">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => <h1 className="">{children}</h1>,
    h2: ({ children }: any) => <h2 className="">{children}</h2>,
    h3: ({ children }: any) => <h3 className="">{children}</h3>,
    h4: ({ children }: any) => <h4 className="">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="">{children}</blockquote>
    ),
    normal: ({ children }: any) => (
      <div>
        <p className="">{children}</p>
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      return (
        <Link rel={rel} href={value.href} className="">
          {children}
        </Link>
      );
    },
  },
};
