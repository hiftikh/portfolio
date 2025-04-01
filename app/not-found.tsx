import Link from "next/link";
import ChangeBgColor from "@/components/ChangeBgColor";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function NotFound() {
  return (
    <>
      <ChangeBgColor color="black" />
      <div className="flex justify-center items-center align-middle text-center w-full h-[70svh]">
        <div className="p-4">
          <h1 className="font-extrabold tracking-tight text-6xl mb-1">
            Whoops!
          </h1>
          <h2 className="font-extrabold tracking-tight text-2xl mb-4">
            This page could not be found sadly..
          </h2>
          <Button asChild variant="default" size="lg" className="mt-3">
            <Link href="/">
              Return Home Safely <ArrowLeft />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
