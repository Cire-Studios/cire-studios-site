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
            className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden transform ${
              textLeft ? "rotate-2" : "-rotate-2"
            } hover:rotate-0 transition-transform duration-500 shadow-2xl`}
          >
            <div className="aspect-[4/5] bg-gray-900 flex items-center justify-center">
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
              <Smartphone className="w-6 h-6 text-emerald-400" />
            )}
            {projectType === "game" && (
              <Gamepad2 className="w-6 h-6 text-emerald-400" />
            )}
            <h3 className="text-3xl font-bold text-white">{title}</h3>
            {statusLabel ? (
              <Badge className="border border-emerald-500/20 bg-emerald-500/10 text-emerald-200">
                {statusLabel}
              </Badge>
            ) : null}
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-gray-700 bg-gray-900/60 text-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
          {href ? (
            <Button
              asChild
              className="bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold group"
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
