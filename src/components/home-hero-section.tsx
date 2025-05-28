import Image from "next/image";
// import { Button } from "./ui/button";
// import { ArrowRight } from "lucide-react";

export default function HomeHeroSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 relative">
            <div className="justify-center items-center">
              <Image
                className="mx-auto"
                src="/CireLogoLarge.png"
                alt="Cire Studios Logo"
                width={512}
                height={512}
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Cire Studios
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Crafting exceptional digital experiences through innovative web
            development and mobile app solutions
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all shadow-lg"
            >
              View Our Work
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-gray-950 font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all"
            >
              Get Started
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
