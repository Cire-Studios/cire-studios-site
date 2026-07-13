import Link from "next/link";

/** Flat website iframe preview — no physical device chrome. */
export default function WebsitePreview({
  src,
  href,
  external = false,
}: {
  src: string;
  href: string;
  external?: boolean;
}) {
  const host = (() => {
    try {
      return new URL(src, "https://cirestudios.dev").hostname;
    } catch {
      return src;
    }
  })();

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-sm border border-zinc-700/80 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-3 py-2">
          <span className="size-2 rounded-full bg-zinc-600" />
          <span className="size-2 rounded-full bg-zinc-600" />
          <span className="size-2 rounded-full bg-zinc-600" />
          <div className="ml-2 flex-1 truncate rounded-sm bg-zinc-950 px-3 py-1 text-xs tracking-wide text-zinc-500">
            {host}
          </div>
        </div>
        <div className="relative aspect-[16/10] w-full bg-black">
          <iframe
            src={src}
            title="Website preview"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>

      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="absolute inset-0 z-10"
        aria-label="Open website"
      />
    </div>
  );
}
