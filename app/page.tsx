import Button from "@/components/Button";
import { Lora } from "next/font/google";
import data from "@/json/dataURL.json";
const font = Lora({ subsets: ["latin"], display: "swap" });
import { joinClassNames } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="flex h-[70svh] justify-center items-center">
        <div className="text-center">
          <h1
            className={joinClassNames(
              "text-secondary text-4xl font-normal",
              `${font.className}`
            )}
          >
            Hi, I&apos;m&nbsp;
          </h1>
          <h1 className="text-secondary text-8xl font-bold underline decoration-accent underline-offset-8 ">
            Haris
          </h1>
          <p
            className={joinClassNames(
              "text-secondary text-2xl pt-4 mt-3",
              `${font.className}`
            )}
          >
            Keeping it Simple.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              href={data[0].github}
              icon="external-link"
              variant="outline"
              className="text-secondary hover:text-secondary"
              text="Github"
              external
            />
            <Button
              href={data[0].linkedin}
              icon="external-link"
              variant="outline"
              className="text-secondary hover:text-secondary"
              text="LinkedIn"
              external
            />
          </div>
        </div>
      </div>
    </>
  );
}
