import urlFor from "@/utils/urlFor";
import Image from "next/image";
import Link from "next/link";

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
  },
  list: {
    bullet: ({ children }: any) => <ul className="">{children}</ul>,
    number: ({ children }: any) => <ol className="">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-bold">{children}</h4>
    ),
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
