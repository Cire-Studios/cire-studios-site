"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type DeviceKind = "desktop" | "tablet" | "mobile";

const DEVICES: Record<
  DeviceKind,
  {
    viewportWidth: number;
    viewportHeight: number;
    frameWidth: number;
  }
> = {
  desktop: {
    viewportWidth: 1440,
    viewportHeight: 900,
    frameWidth: 560,
  },
  tablet: {
    viewportWidth: 768,
    viewportHeight: 1024,
    frameWidth: 240,
  },
  mobile: {
    viewportWidth: 390,
    viewportHeight: 844,
    frameWidth: 132,
  },
};

function useDesktopPreviews() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnabled(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return enabled;
}

function SinglePreview({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-sm border border-zinc-700/80 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-3 py-2">
        <span className="size-2 rounded-full bg-zinc-600" />
        <span className="size-2 rounded-full bg-zinc-600" />
        <span className="size-2 rounded-full bg-zinc-600" />
      </div>
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={src}
          title="Product preview"
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
}

function Screen({
  src,
  kind,
  width,
  height,
  scale,
}: {
  src: string;
  kind: DeviceKind;
  width: number;
  height: number;
  scale: number;
}) {
  return (
    <div
      className="relative overflow-hidden bg-black"
      style={{ width, height }}
    >
      <iframe
        src={src}
        title={`${kind} preview`}
        loading="lazy"
        className="pointer-events-none absolute top-0 left-0 border-0 origin-top-left"
        style={{
          width: DEVICES[kind].viewportWidth,
          height: DEVICES[kind].viewportHeight,
          transform: `scale(${scale})`,
        }}
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}

function Laptop({ src }: { src: string }) {
  const device = DEVICES.desktop;
  const bezel = 10;
  const scale = (device.frameWidth - bezel * 2) / device.viewportWidth;
  const screenW = device.frameWidth - bezel * 2;
  const screenH = device.viewportHeight * scale;
  const lidW = device.frameWidth;

  return (
    <div className="relative flex flex-col items-center drop-shadow-[0_28px_40px_rgba(0,0,0,0.65)]">
      {/* Lid / screen housing */}
      <div
        className="relative rounded-t-[12px] rounded-b-[4px] bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 p-[1px]"
        style={{ width: lidW }}
      >
        <div
          className="rounded-t-[11px] rounded-b-[3px] bg-gradient-to-b from-zinc-800 to-zinc-950"
          style={{ padding: `${bezel + 8}px ${bezel}px ${bezel}px` }}
        >
          {/* Camera */}
          <div
            className="absolute top-2 left-1/2 z-10 size-1.5 -translate-x-1/2 rounded-full bg-zinc-600 ring-1 ring-zinc-500/40"
            aria-hidden
          />
          <div className="overflow-hidden rounded-[3px] ring-1 ring-black/60">
            <Screen
              src={src}
              kind="desktop"
              width={screenW}
              height={screenH}
              scale={scale}
            />
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        className="h-1.5 rounded-sm bg-gradient-to-b from-zinc-600 to-zinc-800"
        style={{ width: lidW * 0.92 }}
        aria-hidden
      />

      {/* Base / deck */}
      <div
        className="relative h-3 rounded-b-[10px] bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-800"
        style={{ width: lidW * 1.12 }}
        aria-hidden
      >
        <div className="absolute top-1 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-zinc-400/50" />
      </div>

      {/* Soft ground shadow */}
      <div
        className="pointer-events-none absolute -bottom-3 left-1/2 h-4 -translate-x-1/2 rounded-[100%] bg-black/50 blur-md"
        style={{ width: lidW * 1.05 }}
        aria-hidden
      />
    </div>
  );
}

function Tablet({ src, frameWidth }: { src: string; frameWidth?: number }) {
  const device = DEVICES.tablet;
  const width = frameWidth ?? device.frameWidth;
  const bezelX = 14;
  const bezelY = 18;
  const scale = (width - bezelX * 2) / device.viewportWidth;
  const screenW = width - bezelX * 2;
  const screenH = device.viewportHeight * scale;
  const bodyW = width;
  const bodyH = screenH + bezelY * 2;

  return (
    <div className="relative drop-shadow-[0_30px_36px_rgba(0,0,0,0.7)]">
      {/* Outer metal rim */}
      <div
        className="rounded-[22px] bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 p-[1.5px]"
        style={{ width: bodyW, height: bodyH }}
      >
        <div
          className="relative h-full w-full rounded-[20.5px] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
          style={{ padding: `${bezelY}px ${bezelX}px` }}
        >
          {/* Front camera */}
          <div
            className="absolute top-2.5 left-1/2 z-10 size-1.5 -translate-x-1/2 rounded-full bg-zinc-700"
            aria-hidden
          />
          <div className="overflow-hidden rounded-[6px] ring-1 ring-black/50">
            <Screen
              src={src}
              kind="tablet"
              width={screenW}
              height={screenH}
              scale={scale}
            />
          </div>
          {/* Home indicator */}
          <div
            className="absolute bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-zinc-600/80"
            aria-hidden
          />
        </div>
      </div>

      {/* Side volume hint */}
      <div
        className="absolute top-16 -left-[2px] h-8 w-[2px] rounded-l-sm bg-zinc-500"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-4 left-1/2 h-5 -translate-x-1/2 rounded-[100%] bg-black/45 blur-md"
        style={{ width: bodyW * 0.85 }}
        aria-hidden
      />
    </div>
  );
}

function Phone({ src, frameWidth }: { src: string; frameWidth?: number }) {
  const device = DEVICES.mobile;
  const width = frameWidth ?? device.frameWidth;
  const bezelX = 9;
  const bezelY = 14;
  const scale = (width - bezelX * 2) / device.viewportWidth;
  const screenW = width - bezelX * 2;
  const screenH = device.viewportHeight * scale;
  const bodyW = width;
  const bodyH = screenH + bezelY * 2;

  return (
    <div className="relative drop-shadow-[0_28px_32px_rgba(0,0,0,0.75)]">
      <div
        className="rounded-[26px] bg-gradient-to-br from-zinc-200 via-zinc-500 to-zinc-800 p-[2px]"
        style={{ width: bodyW, height: bodyH }}
      >
        <div
          className="relative h-full w-full rounded-[24px] bg-gradient-to-b from-zinc-900 to-black"
          style={{ padding: `${bezelY}px ${bezelX}px` }}
        >
          {/* Dynamic island */}
          <div
            className="absolute top-3.5 left-1/2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black"
            aria-hidden
          />
          <div className="overflow-hidden rounded-[14px] ring-1 ring-white/5">
            <Screen
              src={src}
              kind="mobile"
              width={screenW}
              height={screenH}
              scale={scale}
            />
          </div>
          {/* Home indicator */}
          <div
            className="absolute bottom-2 left-1/2 h-1 w-9 -translate-x-1/2 rounded-full bg-zinc-500/70"
            aria-hidden
          />
        </div>
      </div>

      {/* Side buttons */}
      <div
        className="absolute top-14 -left-[2px] h-5 w-[2px] rounded-l-sm bg-zinc-500"
        aria-hidden
      />
      <div
        className="absolute top-[5.5rem] -left-[2px] h-8 w-[2px] rounded-l-sm bg-zinc-500"
        aria-hidden
      />
      <div
        className="absolute top-20 -right-[2px] h-10 w-[2px] rounded-r-sm bg-zinc-500"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-3 left-1/2 h-4 -translate-x-1/2 rounded-[100%] bg-black/50 blur-md"
        style={{ width: bodyW * 0.9 }}
        aria-hidden
      />
    </div>
  );
}

function ScaledDevice({
  src,
  kind,
  large = false,
}: {
  src: string;
  kind: DeviceKind;
  large?: boolean;
}) {
  if (kind === "desktop") return <Laptop src={src} />;
  if (kind === "tablet") {
    return <Tablet src={src} frameWidth={large ? 320 : undefined} />;
  }
  return <Phone src={src} frameWidth={large ? 176 : undefined} />;
}

export default function DeviceIframeStack({
  src,
  href,
  external = false,
  variant = "web",
}: {
  src: string;
  href: string;
  external?: boolean;
  variant?: "web" | "app";
}) {
  const showLivePreviews = useDesktopPreviews();

  return (
    <div className="relative w-full">
      {!showLivePreviews ? (
        <SinglePreview src={src} />
      ) : variant === "web" ? (
        <div className="relative mx-auto flex h-[420px] w-full max-w-[720px] items-end justify-center sm:h-[480px] lg:h-[560px]">
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-[56%] scale-[0.78] sm:scale-[0.9] lg:scale-100 origin-bottom">
            <ScaledDevice src={src} kind="desktop" />
          </div>
          <div className="absolute bottom-2 right-0 z-20 scale-[0.78] sm:scale-[0.9] lg:scale-100 origin-bottom sm:right-[1%]">
            <ScaledDevice src={src} kind="tablet" />
          </div>
          <div className="absolute bottom-1 left-[1%] z-30 scale-[0.78] sm:scale-[0.9] lg:scale-100 origin-bottom sm:left-[4%]">
            <ScaledDevice src={src} kind="mobile" />
          </div>
        </div>
      ) : (
        <div className="relative mx-auto flex h-[480px] w-full max-w-[640px] items-end justify-center sm:h-[560px] lg:h-[640px]">
          <div className="relative z-10 -mr-10 scale-[0.82] sm:-mr-12 sm:scale-95 lg:scale-100 origin-bottom">
            <ScaledDevice src={src} kind="tablet" large />
          </div>
          <div className="relative z-20 translate-y-3 scale-[0.82] sm:scale-95 lg:scale-100 origin-bottom">
            <ScaledDevice src={src} kind="mobile" large />
          </div>
        </div>
      )}

      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="absolute inset-0 z-40"
        aria-label="Open product"
      />
    </div>
  );
}
