"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
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
          className="bg-transparent text-secondary mt-6 hover:border-accent"
        >
          <Link href="/">Return Home Safely</Link>
        </Button>
      </div>
      <style jsx global>
        {`
          body {
            background: black};
          }
        `}
      </style>
    </div>
  );
}
