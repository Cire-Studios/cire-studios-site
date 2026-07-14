import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/last-hit/rulebook",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Last Hit - Rulebook.pdf"',
          },
          { key: "Content-Type", value: "application/pdf" },
        ],
      },
      {
        source: "/last-hit/prototype",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Last Hit - Prototype.pdf"',
          },
          { key: "Content-Type", value: "application/pdf" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/last-hit/rulebook",
        destination: "/last-hit/Last-Hit-Rulebook-v1.5.pdf",
      },
      {
        source: "/last-hit/prototype",
        destination: "/last-hit/Last-Hit-Prototype-v1.5.pdf",
      },
    ];
  },
};

export default nextConfig;
