import Image from "next/image";
import React from "react";

export const myPortableTextComponents = {
  types: {
    image: (value: any) => (
      <Image src={value?.imageUrl} alt="Image" width={320} height={320} />
    ),
  },

  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: any }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};
