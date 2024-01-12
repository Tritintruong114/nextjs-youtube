import { useSafeLayout } from "@/hooks/useSafeLayout";
import gsap from "gsap";

export const useCursor = () => {
  useSafeLayout(() => {
    const cursor = document.querySelector<HTMLDivElement>(".cursor");
    const projectCards = gsap.utils.toArray<HTMLDivElement>(".project_card");
    const cursorMarquee =
      document.querySelector<HTMLDivElement>(".cursor_marquee");

    if (cursor) {
      document.body.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
      projectCards.forEach((card, index) => {
        card.addEventListener("mouseover", () => {
          gsap.to(cursor, {
            width: "120px",
            height: "45px",
            borderRadius: 0,
          });
          gsap.to(cursorMarquee, {
            display: "flex",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(cursorMarquee, {
            display: "none",
          });
          gsap.to(cursor, {
            display: "block",
            width: "15px",
            height: "15px",
          });
        });
      });
    }
  }, []);
  return {};
};
