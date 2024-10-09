import { Button } from "@/components/ui/button";
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
            Hi, I&apos;m{" "}
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
              asChild
              variant="outline"
              className="text-secondary hover:border-accent"
              aria-label="Github"
            >
              <Link href={data[0].github} target="_blank">
                Github <Icon name="external-link" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-secondary hover:border-accent"
              aria-label="LinkedIn"
            >
              <Link href={data[0].linkedin} target="_blank">
                LinkedIn <Icon name="external-link" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
