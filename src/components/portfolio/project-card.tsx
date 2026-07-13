import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";
import CaravanShowcaseVisual from "@/components/caravan/caravan-showcase-visual";
import InDevelopmentPanel from "./in-development-panel";
import DeviceIframeStack from "./device-iframe-stack";
import WebsitePreview from "./website-preview";

function canIframe(project: PortfolioProject) {
  if (!project.href) return false;
  return project.external === true || project.href.startsWith("/");
}

function iframeVariant(project: PortfolioProject): "web" | "app" {
  return project.category === "web" ? "web" : "app";
}

function ProjectCta({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const Icon = external ? ExternalLink : ArrowRight;

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative inline-flex w-fit items-center font-[family-name:var(--font-display)] text-sm tracking-[0.18em] uppercase text-white"
    >
      <span className="relative z-10 border-b border-white/80 bg-background pb-0.5 pr-0.5 transition-colors group-hover:border-white">
        {label}
      </span>
      <Icon
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-full z-0 size-3.5 -translate-y-1/2 -translate-x-4 text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:opacity-100"
      />
    </Link>
  );
}

export default function ProjectCard({
  project,
  textLeft = false,
}: {
  project: PortfolioProject;
  textLeft?: boolean;
}) {
  const renderMedia = () => {
    if (canIframe(project) && project.href) {
      if (project.category === "board-games") {
        return (
          <WebsitePreview
            src={project.href}
            href={project.href}
            external={project.external}
          />
        );
      }

      if (
        project.category === "web" ||
        project.category === "mobile" ||
        project.category === "games"
      ) {
        return (
          <DeviceIframeStack
            src={project.href}
            href={project.href}
            external={project.external}
            variant={iframeVariant(project)}
          />
        );
      }
    }

    if (project.media === "visual-caravan") {
      return (
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-800 bg-zinc-950">
          <CaravanShowcaseVisual />
        </div>
      );
    }

    if (project.media === "image" && project.imageSrc) {
      return (
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-800 bg-zinc-950">
          <Image
            src={project.imageSrc}
            alt=""
            fill
            className="object-contain p-6"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      );
    }

    return (
      <div className="aspect-[4/5] w-full">
        <InDevelopmentPanel
          label={
            project.status === "in-development" ? "In Development" : null
          }
        />
      </div>
    );
  };

  return (
    <article className="relative">
      <div
        className={`flex flex-col items-stretch gap-10 lg:gap-14 ${
          textLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="w-full lg:w-3/5">{renderMedia()}</div>

        <div className="lg:w-2/5 flex flex-col justify-center space-y-5">
          {project.status === "in-development" ? (
            <span className="w-fit border border-zinc-700 bg-zinc-950 px-2.5 py-1 font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] uppercase text-zinc-400">
              In Development
            </span>
          ) : null}

          <h3 className="text-2xl md:text-3xl font-semibold text-white uppercase tracking-[0.08em]">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed">{project.hook}</p>

          {project.href ? (
            <ProjectCta
              href={project.href}
              label={project.ctaLabel ?? "Open"}
              external={project.external}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}
