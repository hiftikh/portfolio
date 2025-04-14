"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navigation from "@/json/navagation.json";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="mx-auto w-10/12 lg:max-w-6xl">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/img/hi-logo.svg"
                  alt="Haris Iftikhar"
                  width={30}
                  height={41}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-10 flex items-baseline space-x-4 min-h-full">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.id}
                    aria-current={item.href === pathname ? "page" : undefined}
                    className={cn(
                      "px-1 py-2 text-sm font-normal text-secondary underline-offset-8 decoration-2",
                      item.href === pathname
                        ? "underline font-extrabold decoration-accent"
                        : "hover:underline"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden" aria-label="MobileMenu" asChild>
              <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-secondary hover:bg-accent hover:text-white">
                <Menu
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
              </div>
            </SheetTrigger>

            <SheetContent
              className="w-screen pt-10 p-8 bg-primary"
              side="right"
            >
              <SheetTitle className="text-white/60 text-sm">MENU</SheetTitle>
              <SheetDescription className="mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.href === pathname ? "page" : undefined}
                    className={cn(
                      "text-left py-2 block text-3xl text-slate-300",
                      item.href === pathname
                        ? "font-bold text-white underline underline-offset-8"
                        : "hover:text-white"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </SheetDescription>
              <SheetFooter>
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/img/hi-logo.svg"
                    alt="Haris Iftikhar"
                    width={30}
                    height={41}
                    className="text-left absolute bottom-8"
                  />
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
