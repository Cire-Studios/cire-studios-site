import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-gray-950"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            {
              " Let's bring your digital vision to life. Contact us today for a free consultation and see how we can transform your ideas into reality."
            }
          </p>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold text-xl px-12 py-6 transform hover:scale-105 transition-all shadow-xl"
          >
            Get In Touch
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
