import { Button } from "@/components/ui/button";
import { Lora } from "next/font/google";
import Link from "next/link";
import data from "@/json/dataURL.json";
const font = Lora({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <>
      <div className="flex h-[70svh] justify-center items-center">
        <div className="text-center">
          <h1
            className={`text-secondary text-7xl ${font.className} font-normal`}
          >
            Hi, I'm{" "}
            <span className="font-bold underline decoration-accent underline-offset-8">
              Haris
            </span>
            .
          </h1>
          <p className={`text-secondary text-2xl ${font.className}  pt-4`}>
            Keeping it Simple.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild variant="outline" className="text-secondary">
              <Link href={data[0].github}>Github</Link>
            </Button>
            <Button asChild variant="outline" className="text-secondary">
              <Link href={data[0].linkedin}>LinkedIn</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
