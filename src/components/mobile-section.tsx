import { Smartphone } from "lucide-react";
import MobileProject from "./mobile-project";
import { Badge } from "./ui/badge";

export default function MobileSection() {
  return (
    <section
      id="mobile-apps"
      className="py-32 relative overflow-hidden bg-gray-900/50"
    >
      <div className="absolute top-1/4 right-0 w-1 h-1/2 bg-gradient-to-b from-emerald-500/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center transform -rotate-12">
                  <Smartphone className="w-8 h-8 text-gray-950" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white">
                  Mobile Apps
                </h2>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Native and cross-platform mobile applications with engaging user
                interfaces, smooth performance, and captivating gaming
                experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  React Native
                </Badge>
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  Flutter
                </Badge>
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  Unity
                </Badge>
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  Swift
                </Badge>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform -rotate-3 shadow-2xl border border-gray-700">
                <div className="absolute inset-4 bg-gray-950 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-emerald-400/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {/* Xact Fitness */}
          <MobileProject
            title="Xact Fitness"
            description="Comprehensive fitness tracking and workout planning app with personalized routines, progress analytics, and social features."
            projectType="app"
          />
          <MobileProject
            title="Space Bots"
            description="Casual puzzle game with simple controls and addictive gameplay."
            projectType="game"
            textLeft
          />

          <MobileProject
            title="Cube Jump"
            description="Addictive puzzle platformer with intuitive controls, challenging levels, and satisfying physics-based gameplay."
            projectType="game"
          />
        </div>
      </div>
    </section>
  );
}
