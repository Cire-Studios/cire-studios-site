import { Gamepad2 } from "lucide-react";

import { ExternalLink } from "lucide-react";

import { Smartphone } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileProject({
  title,
  description,
  // displayLink,
  // link,
  textLeft = false,
  projectType = "app",
}: {
  title: string;
  description: string;
  // displayLink: string;
  // link: string;
  textLeft?: boolean;
  projectType?: "app" | "game";
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
              <div className="text-center">
                {projectType === "app" && (
                  <Smartphone className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                )}
                {projectType === "game" && (
                  <Gamepad2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                )}
                <p className="text-gray-500">App Preview</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 space-y-6">
          <div className="flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-emerald-400" />
            <h3 className="text-3xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold group">
            View Details
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
