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
export default function Header() {
  return (
    <nav className="container mx-auto px-6 py-4 relative z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/favicon.ico"
            alt="Cire Studios Logo"
            width={32}
            height={32}
          />

          <span className="text-xl font-bold">Cire Studios</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="#web-dev"
            className="hover:text-emerald-800 transition-colors"
          >
            Web Development
          </Link>
          <Link
            href="#mobile-apps"
            className="hover:text-emerald-800 transition-colors"
          >
            Mobile Apps
          </Link>
          <Link
            href="#contact"
            className="hover:text-emerald-800 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="https://portfolio.cirestudios.dev/"
            className="hover:text-emerald-800 transition-colors"
          >
            About Us
          </Link>
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
                <DrawerClose asChild>
                  <Link
                    href="#web-dev"
                    className="block py-3 text-lg text-white hover:text-emerald-400 transition-colors border-b border-gray-800"
                  >
                    Web Development
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="#mobile-apps"
                    className="block py-3 text-lg text-white hover:text-emerald-400 transition-colors border-b border-gray-800"
                  >
                    Mobile Apps
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="#contact"
                    className="block py-3 text-lg text-white hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="https://portfolio.cirestudios.dev/"
                    className="block py-3 text-lg text-white hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </Link>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
