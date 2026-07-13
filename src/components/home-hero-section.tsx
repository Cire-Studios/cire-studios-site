import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function HomeHeroSection() {
  return (
    <section id="intro" className="relative overflow-hidden bg-background scroll-mt-24">
      <h1 className="sr-only">Cire Studios</h1>

      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] max-h-[70vh] min-h-[220px] brand-fade-in">
        <Image
          src="/brand/logo-wordmark.png"
          alt="Cire Studios"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 border-t border-zinc-900/80">
        <div className="container mx-auto px-6 py-10 md:py-14 text-center">
          <p className="brand-fade-in-delay text-base md:text-xl text-zinc-300 tracking-wide leading-relaxed max-w-2xl mx-auto mb-3">
            Apps. Games. Tables. Books.
          </p>
          <p className="brand-fade-in-delay text-base md:text-lg text-zinc-500 tracking-wide leading-relaxed max-w-2xl mx-auto mb-8">
            A product studio shipping work you can open, play, and read.
          </p>
          <div className="brand-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-zinc-200 text-black font-semibold tracking-wide rounded-sm px-8 py-6 text-base"
            >
              <Link href="#web">
                Explore products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-zinc-600 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-sm px-8 py-6 text-base tracking-wide"
            >
              <Link href="#board-games">Latest in development</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
