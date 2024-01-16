"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const navigationtl = gsap.timeline({});

export const useNavigation = (pathname?: string) => {
  const router = useRouter();
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    const navigationContainer = document.querySelector<HTMLDivElement>(
      ".navigation_container"
    );

    const contentContainer =
      document.querySelector<HTMLDivElement>(".content_container");
    const navigationTitles =
      document.querySelectorAll<HTMLParagraphElement>(".navigation_title");

    const context = gsap.context(() => {
      navigationtl.to(navigationContainer, {
        bottom: "-10px",
        height: 0,
        delay: 0.9,
        duration: 0.9,
        ease: "power4.inOut",
      });

      gsap.to(navigationTitles, {
        bottom: -96,
        stagger: 0.1,
        delay: 0.6,
        ease: "power4.inOut",
      });
      gsap.to(contentContainer, {
        scale: 1,
        delay: 1,
        duration: 0.6,
        ease: "power4.inOut",
      });
      gsap.to("marquee_container", {
        bottom: 0,
      });
    });
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
    return () => context.kill();
  }, [pathname]);

  const trigger = () => {
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";

    navigationtl
      .to(".navigation_container", {
        bottom: 0,
        duration: 0.9,
        height: "100vh",
        ease: "power4.inOut",
      })
      .to(".navigation_title", {
        bottom: 0,
        stagger: 0.1,
        ease: "power4.inOut",
      });
    gsap.to(".content_container", {
      scale: 0.9,
      duration: 0.9,
      ease: "power4.inOut",
    });
  };

  const onNavigation = (href: string) => {
    trigger();
    setTimeout(() => router.push(href), 2000);
  };

  return { trigger, onNavigation, heroTitleRef };
};
