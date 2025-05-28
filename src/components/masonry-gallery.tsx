"use client";

import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

interface AutoScrollMasonryProps {
  imageSrcs: string[];
  scrollSpeed?: number;
  gap?: number;
}

export default function AutoScrollMasonryGallery({
  imageSrcs,
  scrollSpeed = 50,
  gap = 16,
}: AutoScrollMasonryProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [duplicatedImages, setDuplicatedImages] = useState<string[]>([
    ...imageSrcs,
    ...imageSrcs,
    ...imageSrcs,
  ]);

  useEffect(() => {
    const duplicateImages = [];
    let shuffledImages = [...imageSrcs];
    for (let i = 0; i < 3; i++) {
      shuffledImages = [...shuffledImages].sort(() => Math.random() - 0.5);
      duplicateImages.push(...shuffledImages);
    }

    setDuplicatedImages(duplicateImages);
  }, [imageSrcs]);

  // stagger the heights slightly for mor masonry effect
  const getRandomHeight = (index: number) => {
    const heights = [200, 250, 300, 350, 400, 300, 280, 320];
    return heights[index % heights.length];
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        overscrollBehavior: "none",
        touchAction: "none",
      }}
    >
      <div
        className="columns-2 sm:columns-3 md:columns-3 space-y-4"
        style={{
          gap: `${gap}px`,
          animation: `scrollUp ${
            (duplicatedImages.length * 4) / scrollSpeed
          }s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="break-inside-avoid mb-4"
            style={{ height: `${getRandomHeight(index)}px` }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-sm">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${index}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {isPaused && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          Paused
        </div>
      )}

      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-66.666%);
          }
        }
      `}</style>
    </div>
  );
}
