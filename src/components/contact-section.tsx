import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 text-center relative overflow-hidden bg-background scroll-mt-28 lg:scroll-mt-20"
    >
      <div className="brand-panel brand-panel--br opacity-40" aria-hidden />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white uppercase tracking-[0.1em]">
            Stay in the loop
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Questions about a product, early access, or a custom project on
            request — reach out and we&apos;ll get back to you.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-zinc-200 text-black font-semibold tracking-wide rounded-sm text-base px-10 py-6"
            onClick={() =>
              window.open(
                "https://calendly.com/cirestudios-dev/30min",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Get in touch
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
