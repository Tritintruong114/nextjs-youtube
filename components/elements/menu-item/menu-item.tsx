"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({
  href,
  title,
  imageUrl,
}: {
  href: string;
  title: string;
  imageUrl: string;
}) => {
  const pathname = usePathname();

  return (
    <div className="col-span-1 group relative border-white border-2">
      <Link href={href}>
        <Image
          src={imageUrl}
          alt=""
          width={450}
          height={450}
          className={`w-full h-0 bottom-0 group-hover:top-0 group-hover:h-full duration-500 object-cover absolute ${
            pathname === href ? "h-full" : ""
          }`}
        />
        <p className="font-bebas text-[6vw] text-white relative px-3 text-center">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default MenuItem;
