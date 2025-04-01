import Button from "@/components/Button";
import { Lora } from "next/font/google";
import data from "@/json/dataURL.json";
const font = Lora({ subsets: ["latin"], display: "swap" });
import { cn } from "@/lib/utils";

import SlideAnimation from "@/components/Animatation/Transition/Slide";

export default function Home() {
  return (
    <>
      <div className="flex h-[70svh] justify-center items-center">
        <div className="text-center">
          <SlideAnimation dirY={-50} delay={0.3}>
            <h1
              className={cn(
                "text-secondary text-4xl font-normal",
                `${font.className}`
              )}
            >
              Hi, I&apos;m&nbsp;
            </h1>
          </SlideAnimation>
          <SlideAnimation dirY={-50} delay={0.4}>
            <h1
              className={cn(
                "text-secondary text-8xl font-bold",
                `${font.className}`
              )}
            >
              Haris.
              <SlideAnimation dirX={-200} delay={1.5}>
                <div className="bg-accent h-3 w-full"></div>
              </SlideAnimation>
            </h1>
          </SlideAnimation>
          <SlideAnimation dirY={50} delay={1}>
            <p
              className={cn(
                "text-secondary text-2xl pt-4 mt-3",
                `${font.className}`
              )}
            >
              Keeping it Simple.
            </p>
          </SlideAnimation>
          <div className="mt-8 flex justify-center gap-4">
            <SlideAnimation dirX={-50} delay={2}>
              <Button
                href={data[0].github}
                icon="external-link"
                variant="secondary"
                text="Github"
                external={true}
                size="lg"
              />
            </SlideAnimation>
            <SlideAnimation dirX={50} delay={2}>
              <Button
                href={data[0].linkedin}
                icon="external-link"
                variant="secondary"
                text="LinkedIn"
                external={true}
                size="lg"
              />
            </SlideAnimation>
          </div>
        </div>
      </div>
    </>
  );
}
