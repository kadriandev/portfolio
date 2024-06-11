"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Me", href: "/contact" },
  ];

  return (
    <>
      <nav className="py-2 animate-fade-in hidden md:flex">
        <ul className="flex items-center justify-center align-middle gap-8">
          <Link
            href={"/"}
            className="font-bold text-lg text-white duration-500 hover:text-zinc-300"
          >
            kadriandev
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-md duration-500 hover:text-zinc-300",
                item.href === "/contact" ? "text-violet-400" : "text-zinc-400",
                item.href === pathname && "text-teal-300",
              )}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <nav className="flex w-full m-1 md:hidden items-center justify-between">
        <span>
          <Link href={"/"} className="font-bold ml-2">
            kadriandev
          </Link>
          <span>{pathname !== "/" && pathname}</span>
        </span>
        <Sheet>
          <SheetTrigger className="flex m-2 self-end">
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <ul className="flex flex-col gap-10 pt-16">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-md duration-500 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700"
                >
                  <SheetClose
                    className={cn(
                      "w-full text-md duration-500 hover:text-zinc-300",
                      item.href === "/contact"
                        ? "text-violet-500"
                        : "text-zinc-400",
                      item.href === pathname && "text-teal-300",
                    )}
                  >
                    {item.name}
                  </SheetClose>
                </Link>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
