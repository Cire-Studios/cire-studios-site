import { ArrowRight, Smartphone } from "lucide-react";

import { Code } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Why Choose Cire Studios?
          </h2>
          <p className="text-xl text-gray-400">
            Excellence in every line of code
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-xl">
              <Code className="w-10 h-10 text-gray-950" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Clean Code</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Maintainable, scalable, and well-documented code that stands the
              test of time
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-xl">
              <ArrowRight className="w-10 h-10 text-gray-950" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Fast Delivery
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Agile development process ensuring quick turnaround without
              compromising quality
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-xl">
              <Smartphone className="w-10 h-10 text-gray-950" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Responsive Design
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Beautiful interfaces that work seamlessly across all devices and
              platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
