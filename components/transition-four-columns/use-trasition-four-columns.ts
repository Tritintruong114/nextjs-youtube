"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation";
interface UseTransistionVerticalProps {
  path?: string;
}
export const useTransistionFourColumns = (
  props: UseTransistionVerticalProps
) => {
  const router = useRouter();

  const onTransistionFourColumns = (path: string) => {
    gsap.to(".transition_el-up", {
      duration: 2,
      height: "100%",
      stagger: 0.2,
      ease: "power4.inOut",
    });
    gsap.to(".transition_el-down", {
      duration: 2,
      height: "100%",
      stagger: 0.2,
      ease: "power4.inOut",
    });
    gsap.to(".overlay", {
      duration: 2,
      opacity: 1,
      ease: "power4.inOut",
    });
    setTimeout(() => {
      router.push(`/${path}`);
    }, 2200);
  };

  return { onTransistionFourColumns };
};
