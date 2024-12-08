import Button from "@/components/Button";
import { Lora } from "next/font/google";
import data from "@/json/dataURL.json";
const font = Lora({ subsets: ["latin"], display: "swap" });
import { cn } from "@/lib/utils";
import FadeUpAnimation from "@/components/Animatation/FadeUp";
import FadeLeftAnimation from "@/components/Animatation/FadeLeft";
import FadeDownAnimation from "@/components/Animatation/FadeDown";
import FadeRightAnimation from "@/components/Animatation/FadeRight";

export default function Home() {
  return (
    <>
      <div className="flex h-[70svh] justify-center items-center ">
        <div className="text-center">
          <FadeDownAnimation>
            <h1
              className={cn(
                "text-secondary text-4xl font-normal",
                `${font.className}`
              )}
            >
              Hi, I&apos;m&nbsp;
            </h1>
            <h1
              className={cn(
                "text-secondary text-8xl font-bold underline decoration-accent underline-offset-8",
                `${font.className}`
              )}
            >
              Haris.
            </h1>
          </FadeDownAnimation>
          <FadeUpAnimation>
            <p
              className={cn(
                "text-secondary text-2xl pt-4 mt-3",
                `${font.className}`
              )}
            >
              Keeping it Simple.
            </p>
          </FadeUpAnimation>
          <div className="mt-10 flex justify-center gap-4">
            <FadeLeftAnimation>
              <Button
                href={data[0].github}
                icon="external-link"
                variant="outline"
                className="text-secondary hover:text-secondary"
                text="Github"
                external
              />
            </FadeLeftAnimation>
            <FadeRightAnimation>
              <Button
                href={data[0].linkedin}
                icon="external-link"
                variant="outline"
                className="text-secondary hover:text-secondary"
                text="LinkedIn"
                external
              />
            </FadeRightAnimation>
          </div>
        </div>
      </div>
    </>
  );
}
