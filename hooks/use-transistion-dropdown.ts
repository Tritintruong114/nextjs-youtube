"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation";
interface UseTransistionDropDownProps {
  onTransistionDropDown?: () => void;
  path?: string;
}
export const useTransistionDropDown = (props: UseTransistionDropDownProps) => {
  const router = useRouter();

  const onTransistionDropDown = (path: string) => {
    gsap.fromTo(
      ".menu_close",
      {
        height: 0,
      },
      {
        duration: 1,
        ease: "power4.inOut",
        height: "100%",
        stagger: 0.1,
      }
    );
    gsap.to(".overlay_close", {
      opacity: 1,
      duration: 1.5,
    });
    setTimeout(() => {
      router.push(`/${path}`);
    }, 1800);
  };

  return { onTransistionDropDown };
};
