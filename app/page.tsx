import Button from "@/components/Button";
import { Lora } from "next/font/google";
import Link from "next/link";
import data from "@/json/dataURL.json";
const font = Lora({ subsets: ["latin"], display: "swap" });
import { joinClassNames } from "@/lib/utils";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <>
      <div className="flex h-[70svh] justify-center items-center">
        <div className="text-center">
          <h1
            className={joinClassNames(
              "text-secondary text-7xl font-normal",
              `${font.className}`
            )}
          >
            Hi, I&apos;m&nbsp;
            <span className="font-bold underline decoration-accent underline-offset-8">
              Haris
            </span>
            .
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
              className="text-secondary hover:border-accent"
              text="Github"
            />
            <Button
              href={data[0].linkedin}
              icon="external-link"
              variant="outline"
              className="text-secondary hover:border-accent"
              text="LinkedIn"
            />
          </div>
        </div>
      </div>
    </>
  );
}
