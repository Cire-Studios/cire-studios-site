import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/#web", label: "Web" },
  { href: "/#mobile", label: "Mobile" },
  { href: "/#games", label: "Games" },
  { href: "/#board-games", label: "Board Games" },
  { href: "/#books", label: "Books" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-900/80 bg-[#080808]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-2.5">
        <div className="flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/brand/logo-mark-nav.png"
              alt="Cire Studios"
              width={48}
              height={40}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.18em] uppercase text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-zinc-300 hover:bg-white/5"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-zinc-950 border-zinc-800">
                <DrawerHeader>
                  <DrawerTitle className="text-white text-center font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-sm">
                    Navigation
                  </DrawerTitle>
                </DrawerHeader>
                <div className="px-6 pb-6 space-y-1">
                  {navLinks.map((item, index) => (
                    <DrawerClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-3 text-base tracking-wide text-zinc-300 hover:text-white transition-colors ${
                          index !== navLinks.length - 1
                            ? "border-b border-zinc-800"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </DrawerClose>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
