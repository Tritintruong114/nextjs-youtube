import gsap from "gsap";
import { useRouter } from "next/navigation";
interface UseTransistionVerticalProps {
  onTransistionVertical?: () => void;
  path?: string;
}
export const useTransistionVertical = (props: UseTransistionVerticalProps) => {
  const router = useRouter();

  const onTransistionVertical = (path: string) => {
    gsap.to(".menu", {
      duration: 1,
      height: "100%",
      stagger: 0.1,
      ease: "power4.inOut",
    });
    gsap.to(".overlay", {
      opacity: 1,
      delay: 0.5,
    });
    setTimeout(() => {
      router.push(`/${path}`);
    }, 1500);
  };

  return { onTransistionVertical };
};
