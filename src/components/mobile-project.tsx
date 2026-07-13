import { Gamepad2 } from "lucide-react";
import { Smartphone } from "lucide-react";
import MasonryGallery from "./masonry-gallery";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// import { ExternalLink } from "lucide-react";
// import { Button } from "./ui/button";

export default function MobileProject({
  title,
  description,
  // displayLink,
  // link,
  textLeft = false,
  projectType = "app",
  imageSrcs,
  layout = "default",
  href,
  ctaLabel,
  external = false,
  statusLabel,
  tags = [],
  visual,
}: {
  title: string;
  description: string;
  // displayLink: string;
  // link: string;
  textLeft?: boolean;
  projectType?: "app" | "game";
  imageSrcs: string[];
  layout?: "default" | "masonry";
  href?: string;
  ctaLabel?: string;
  external?: boolean;
  statusLabel?: string;
  tags?: string[];
  visual?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div
        className={`flex flex-col items-center gap-12 ${
          textLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="w-full lg:w-2/3 relative group">
          <div
            className={`bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 overflow-hidden transform ${
              textLeft ? "rotate-1" : "-rotate-1"
            } hover:rotate-0 transition-transform duration-500 shadow-2xl`}
          >
            <div className="aspect-[4/5] bg-zinc-950 flex items-center justify-center">
              {visual ? (
                <div className="h-full w-full">{visual}</div>
              ) : layout === "masonry" ? (
                <MasonryGallery imageSrcs={imageSrcs} scrollSpeed={2} />
              ) : imageSrcs[0] ? (
                <Image
                  src={imageSrcs[0]}
                  alt={title}
                  fill
                  className="object-contain"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {projectType === "app" && (
              <Smartphone className="w-6 h-6 text-zinc-400" />
            )}
            {projectType === "game" && (
              <Gamepad2 className="w-6 h-6 text-zinc-400" />
            )}
            <h3 className="text-2xl md:text-3xl font-semibold text-white uppercase tracking-[0.08em]">
              {title}
            </h3>
            {statusLabel ? (
              <Badge className="border border-zinc-600 bg-zinc-900 text-zinc-300 rounded-sm">
                {statusLabel}
              </Badge>
            ) : null}
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-zinc-700 bg-zinc-950/60 text-zinc-400 rounded-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
          {href ? (
            <Button
              asChild
              className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-sm group"
            >
              <Link
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {ctaLabel ?? "View Project"}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
