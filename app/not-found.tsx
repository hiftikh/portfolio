import Link from "next/link";
import ChangeBgColor from "@/components/ChangeBgColor";

import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";

export default async function NotFound() {
  return (
    <>
      <ChangeBgColor color="black" />
      <div className="flex justify-center items-center align-middle text-center w-full h-[70svh]">
        <div className="p-4">
          <h1 className="font-extrabold tracking-tight text-6xl mb-4 text-secondary">
            Whoops!
          </h1>
          <h2 className="font-extrabold tracking-tight text-2xl mb-4">
            This page could not be found sadly..
          </h2>
          <Button
            asChild
            variant="outline"
            className="text-white hover:bg-white"
          >
            <Link href="/">
              Return Home Safely <Undo2 />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
