import { Smartphone } from "lucide-react";
import MobileProject from "./mobile-project";
import SkillBadge from "./skill-badge";
import CaravanShowcaseVisual from "./caravan/caravan-showcase-visual";
import { caravanHeroTags, caravanPortfolioProject } from "@/content/caravan";
import { vectraPortfolioProject } from "@/content/vectra-fitness";
import { chefLabPortfolioProject } from "@/content/chef-lab";

export default function MobileSection() {
  return (
    <section
      id="mobile-apps"
      className="py-32 relative overflow-hidden bg-zinc-950"
    >
      <div className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold text-white uppercase tracking-[0.08em]">
                  Mobile Apps
                </h2>
              </div>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                Native and cross-platform mobile products with polished user
                interfaces, thoughtful interaction design, and enough depth to
                support both serious workflows and playful experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <SkillBadge skill="React Native" />
                <SkillBadge skill="Unity" />
                <SkillBadge skill="Firebase" />
                <SkillBadge skill="SQLite" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="w-full h-96 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800">
                <div className="absolute inset-4 bg-black border border-zinc-800/80 flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-zinc-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          <MobileProject
            title={caravanPortfolioProject.title}
            description={caravanPortfolioProject.description}
            projectType="app"
            imageSrcs={[]}
            href={caravanPortfolioProject.href}
            ctaLabel={caravanPortfolioProject.ctaLabel}
            statusLabel="In active development"
            tags={caravanHeroTags}
            visual={<CaravanShowcaseVisual />}
          />
          <MobileProject
            title={chefLabPortfolioProject.title}
            description={chefLabPortfolioProject.description}
            projectType="app"
            textLeft
            imageSrcs={["/chef-lab/preview.svg"]}
            href={chefLabPortfolioProject.href}
            ctaLabel={chefLabPortfolioProject.ctaLabel}
            statusLabel={chefLabPortfolioProject.statusLabel}
            tags={chefLabPortfolioProject.tags}
          />
          <MobileProject
            title={vectraPortfolioProject.title}
            description={vectraPortfolioProject.description}
            projectType="app"
            imageSrcs={["/vectra-fitness/hero-mark.svg"]}
            href={vectraPortfolioProject.href}
            ctaLabel={vectraPortfolioProject.ctaLabel}
            statusLabel="Current product"
            tags={["AI coaching", "2-week blocks", "Mobile app"]}
          />
          <MobileProject
            title="Xact Fitness"
            description="Comprehensive fitness tracking and workout planning app with personalized routines, progress analytics, and an AI coach that evaluates and adjusts your workouts every 2 weeks."
            projectType="app"
            imageSrcs={[
              "/xact-fitness/barbell-input.png",
              "/xact-fitness/create-workout.png",
              "/xact-fitness/edit-view.png",
              "/xact-fitness/exercise-details.png",
              "/xact-fitness/exercise-library.png",
              "/xact-fitness/log-keyboard.png",
              "/xact-fitness/rest-timer.png",
              "/xact-fitness/workout-drawer.png",
            ]}
            layout="masonry"
          />
          <MobileProject
            title="Space Bots"
            description="Casual puzzle game with simple controls and addictive gameplay."
            projectType="game"
            textLeft
            imageSrcs={["/space-bots/preview.png"]}
          />
        </div>
      </div>
    </section>
  );
}
