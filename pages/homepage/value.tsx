"use client";
import {
  HandHeartLeft,
  HandHeartRight,
} from "@/components/elements/icon/hand-header";
import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const HomepageValue = () => {
  useEffect(() => {
    const valueSectionRef = document.querySelector(".value_section");
    gsap.registerPlugin(ScrollTrigger);
    if (valueSectionRef) {
      gsap.to(".hand_heart", {
        ScrollTrigger: {
          trigger: valueSectionRef,
          start: "top top",
        },
        bottom: 0,
      });
    }
  }, []);
  return (
    <Section className="bg-bruno-dark-grey relative overflow-hidden value_section">
      <div className="hand_heart absolute w-full h-full z-0 -bottom-96 flex justify-center items-center pointer-events-none">
        <div className="flex items-center">
          <HandHeartRight />
        </div>
        <div className="flex items-center justify-end">
          <HandHeartLeft />
        </div>
      </div>
      <Container>
        <div className="grid sm:grid-cols-2 h-full z-10">
          <div className="my-auto h-full col-span-1 flex justify-center items-center">
            <h2 className="text-fluid-display-xl font-bebas overflow-hidden text-center text-bruno-white flex items-center justify-center flex-col leading-none">
              Let's bring your ideas into
              <div className="font-bold my-base w-1/2 overflow-hidden font-manrope text-bruno-black bg-bruno-yellow">
                <span className="leading-none">life</span>
              </div>
              together
            </h2>
          </div>
          <div className="w-full flex justify-center items-center relative">
            <button className="py-4 px-32 group bg-bruno-ximen rounded-full relative overflow-hidden text-bruno-white font-bebas text-fluid-body-xxl">
              <span className="bg-bruno-yellow -bottom-96 right-0 rounded-full w-full h-full absolute group-hover:bottom-0 duration-150"></span>
              <span className="relative group-hover:text-bruno-black duration-500">
                Let's go
              </span>
            </button>
          </div>
        </div>
        <div className="border-t text-bruno-white z-10 mt-base border-bruno-yellow py-base flex flex-col sm:flex-row gap-base justify-between items-center">
          <div>
            <p className="font-bebas">Made from Viet Nam 🇻🇳</p>
          </div>
          <div className="flex sm:justify-center items-center gap-3 sm:gap-base">
            <p className="leading-none">
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM34.0016 15.7493C35.1031 16.0516 35.9706 16.9422 36.265 18.0732C36.8 20.123 36.8 24.4 36.8 24.4C36.8 24.4 36.8 28.6768 36.265 30.7268C35.9706 31.8578 35.1031 32.7484 34.0016 33.0508C32.0054 33.6 24 33.6 24 33.6C24 33.6 15.9946 33.6 13.9983 33.0508C12.8967 32.7484 12.0292 31.8578 11.7348 30.7268C11.2 28.6768 11.2 24.4 11.2 24.4C11.2 24.4 11.2 20.123 11.7348 18.0732C12.0292 16.9422 12.8967 16.0516 13.9983 15.7493C15.9946 15.2 24 15.2 24 15.2C24 15.2 32.0054 15.2 34.0016 15.7493Z"
                  fill="#ffffff"
                />
                <path
                  d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z"
                  fill="#ffffff"
                />
              </svg>
            </p>
            <p className="font-bebas sm:text-fluid-body-xl leading-none">
              Bruno
            </p>
            <p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z"
                  fill="#ffffff"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.853 13.5067C23.0759 13.5064 23.3158 13.5065 23.5746 13.5066L24.0013 13.5067C27.4189 13.5067 27.824 13.519 29.1736 13.5803C30.4216 13.6374 31.0989 13.8459 31.5501 14.0211C32.1475 14.2531 32.5733 14.5305 33.0211 14.9785C33.4691 15.4265 33.7464 15.8532 33.979 16.4505C34.1542 16.9012 34.363 17.5785 34.4198 18.8265C34.4811 20.1759 34.4944 20.5812 34.4944 23.9972C34.4944 27.4133 34.4811 27.8186 34.4198 29.168C34.3627 30.416 34.1542 31.0933 33.979 31.544C33.747 32.1413 33.4691 32.5667 33.0211 33.0144C32.5731 33.4624 32.1477 33.7398 31.5501 33.9718C31.0995 34.1478 30.4216 34.3558 29.1736 34.4128C27.8242 34.4742 27.4189 34.4875 24.0013 34.4875C20.5834 34.4875 20.1783 34.4742 18.8289 34.4128C17.5809 34.3552 16.9036 34.1467 16.4521 33.9715C15.8548 33.7395 15.4281 33.4621 14.9801 33.0141C14.5321 32.5661 14.2548 32.1405 14.0222 31.5429C13.847 31.0923 13.6382 30.4149 13.5814 29.1669C13.5201 27.8176 13.5078 27.4122 13.5078 23.994C13.5078 20.5759 13.5201 20.1727 13.5814 18.8233C13.6385 17.5753 13.847 16.898 14.0222 16.4468C14.2542 15.8494 14.5321 15.4228 14.9801 14.9748C15.4281 14.5268 15.8548 14.2494 16.4521 14.0169C16.9033 13.8409 17.5809 13.6329 18.8289 13.5755C20.0097 13.5222 20.4674 13.5062 22.853 13.5035V13.5067ZM30.8339 15.6321C29.9859 15.6321 29.2978 16.3193 29.2978 17.1676C29.2978 18.0156 29.9859 18.7036 30.8339 18.7036C31.6819 18.7036 32.3699 18.0156 32.3699 17.1676C32.3699 16.3196 31.6819 15.6316 30.8339 15.6316V15.6321ZM17.4279 24.0002C17.4279 20.3701 20.3709 17.4269 24.001 17.4268C27.6312 17.4268 30.5736 20.37 30.5736 24.0002C30.5736 27.6304 27.6314 30.5723 24.0013 30.5723C20.3711 30.5723 17.4279 27.6304 17.4279 24.0002Z"
                  fill="#ffffff"
                />
                <path
                  d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6447 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z"
                  fill="#ffffff"
                />
              </svg>
            </p>
          </div>
          <div>
            <p className="font-bebas">All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HomepageValue;
