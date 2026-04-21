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
  { href: "/#web-dev", label: "Web Development" },
  { href: "/#mobile-apps", label: "Mobile Apps" },
  { href: "/#contact", label: "Contact" },
  { href: "https://portfolio.cirestudios.dev/", label: "About Us" },
];

export default function Header() {
  return (
    <nav className="container mx-auto px-6 py-4 relative z-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/favicon.ico"
            alt="Cire Studios Logo"
            width={32}
            height={32}
          />

          <span className="text-xl font-bold">Cire Studios</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-emerald-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-emerald-400"
              >
                <Menu className="w-6 h-6 text-gray-950" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-gray-900 border-gray-800">
              <DrawerHeader>
                <DrawerTitle className="text-white text-center">
                  Navigation
                </DrawerTitle>
              </DrawerHeader>
              <div className="px-6 pb-6 space-y-4">
                {navLinks.map((item, index) => (
                  <DrawerClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-3 text-lg text-white hover:text-emerald-400 transition-colors ${
                        index !== navLinks.length - 1
                          ? "border-b border-gray-800"
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
    </nav>
  );
}
