import { ArrowRight, Smartphone, Code } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#080808] to-zinc-950" />
      <div className="brand-panel brand-panel--tl opacity-40" aria-hidden />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white uppercase tracking-[0.1em]">
            Why Choose Cire Studios?
          </h2>
          <p className="text-lg text-zinc-400 tracking-wide">
            Excellence in every line of code
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
              <Code className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-[0.12em]">
              Clean Code
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Maintainable, scalable, and well-documented code that stands the
              test of time
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowRight className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-[0.12em]">
              Fast Delivery
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Agile development process ensuring quick turnaround without
              compromising quality
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
              <Smartphone className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-[0.12em]">
              Responsive Design
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Beautiful interfaces that work seamlessly across all devices and
              platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
