"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import navigation from "../json/navagation.json";
import Image from "next/image";

import { joinclassNames } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="Haris Iftikhar"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map(
                    (item) =>
                      !item.show || (
                        <Link
                          href={item.href}
                          key={item.id}
                          aria-current={
                            item.href === pathname ? "page" : undefined
                          }
                          className={joinclassNames(
                            "px-2 py-2 text-sm font-normal text-white underline-offset-8 decoration-2",
                            item.href === pathname
                              ? "underline font-extrabold decoration-accent text-accent"
                              : "hover:underline"
                          )}
                        >
                          {item.name}
                        </Link>
                      )
                  )}
                </div>
              </div>
            </div>
            <Sheet>
              <SheetTrigger className="md:hidden">
                <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-secondary hover:bg-accent hover:text-white">
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                </div>
              </SheetTrigger>

              <SheetContent className="w-screen pt-10">
                <SheetTitle className="text-center text-accent text-sm hidden">
                  MENU
                </SheetTitle>
                <SheetDescription>
                  {navigation.map(
                    (item) =>
                      !item.show || (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={
                            item.href === pathname ? "page" : undefined
                          }
                          className={joinclassNames(
                            "text-left py-3 block text-3xl text-slate-300",
                            item.href === pathname
                              ? "font-bold text-white underline underline-offset-8"
                              : "hover:text-white"
                            // "block rounded-md py-3 text-3xl font-light text-center text-secondary"
                          )}
                        >
                          {item.name}
                        </a>
                      )
                  )}
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
