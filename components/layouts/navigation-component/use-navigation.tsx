"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const navigationtl = gsap.timeline({});

export const useNavigation = () => {
  useGSAP(() => {
    const navigationContainer = document.querySelector<HTMLDivElement>(
      ".navigation_container"
    );
    const contentContainer =
      document.querySelector<HTMLDivElement>(".content_container");
    const navigationTitles =
      document.querySelectorAll<HTMLParagraphElement>(".navigation_title");

    const context = gsap.context(() => {
      gsap.to(contentContainer, {
        scale: 0.9,
      });
      navigationtl
        .to(navigationContainer, {
          height: "100vh",
          bottom: 0,
          duration: 0.9,
          ease: "power4.inOut",
        })
        .to(navigationTitles, {
          bottom: 0,
          stagger: 0.1,
          ease: "power4.inOut",
        })
        .to(navigationTitles, {
          top: -96,
          bottom: 0,
          delay: 1.2,
          stagger: 0.1,
          ease: "power4.inOut",
        })
        .to(navigationContainer, {
          top: 0,
          bottom: 0,
          height: 0,
          duration: 0.6,
          ease: "power4.inOut",
        });
      gsap.to(contentContainer, {
        scale: 1,
        delay: 3.6,
      });
    }, []);
    return () => context.kill();
  }, []);
  return {};
};
