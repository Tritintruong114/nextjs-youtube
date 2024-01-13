"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

type HeaderNavItemProps = {
  href?: HeaderNavItemDatas;
  onShowMenu?: () => void;
};
export enum HeaderNavItemDatas {
  Home = "/",
  About = "/about",
  Playground = "/playground",
  Community = "/community",
  Blog = "/blog",
  Services = "/services",
}
export const useHeader = (props: HeaderNavItemProps) => {
  const [showMobile, setShowMobile] = useState(false);

  const onShowMobile = () => {
    setShowMobile((prev) => !prev);
  };
  const pathname = usePathname();
  const { onShowMenu } = props;

  const onNavigation = (href: string) => {
    if (onShowMenu) {
      onShowMenu();
    }
    if (pathname === href) return;
  };

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("");
    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, []);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  return { onNavigation, pathname, scrollDirection };
};
