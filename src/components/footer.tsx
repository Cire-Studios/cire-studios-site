import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 text-center space-y-5">
        <Link href="/" className="inline-flex items-center justify-center">
          <Image
            src="/brand/logo-mark-nav.png"
            alt="Cire Studios"
            width={48}
            height={40}
            className="h-9 w-auto"
          />
        </Link>
        <p className="text-zinc-500 text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Cire Studios. Apps, games, tables,
          and books.
        </p>
        <p className="text-zinc-600 text-xs tracking-wide">
          <Link
            href="/#contact"
            className="hover:text-zinc-400 transition-colors"
          >
            Custom work available on request
          </Link>
        </p>
      </div>
    </footer>
  );
}
