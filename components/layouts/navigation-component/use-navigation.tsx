"use client";
import { useSafeLayout } from "@/hooks/useSafeLayout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const navigationtl = gsap.timeline({});

export const useNavigation = (pathname?: string) => {
  const router = useRouter();
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    const navigationContainer = document.querySelector<HTMLDivElement>(
      ".navigation_container"
    );

    console.log(heroTitleRef.current);
    const contentContainer =
      document.querySelector<HTMLDivElement>(".content_container");
    const navigationTitles =
      document.querySelectorAll<HTMLParagraphElement>(".navigation_title");

    const context = gsap.context(() => {
      navigationtl.to(navigationContainer, {
        bottom: 0,
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
      duration: 0.6,
      ease: "power4.in",
    });
  };

  const onNavigation = (href: string) => {
    trigger();
    setTimeout(() => router.push(href), 2000);
  };

  return { trigger, onNavigation, heroTitleRef };
};
