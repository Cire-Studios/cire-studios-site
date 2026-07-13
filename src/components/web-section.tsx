import { Globe } from "lucide-react";
import WebProject from "./web-project";
import SkillBadge from "./skill-badge";

export default function WebSection() {
  return (
    <section id="web-dev" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                <div className="w-14 h-14 aspect-square bg-white flex items-center justify-center">
                  <Globe className="w-7 h-7 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold text-white uppercase tracking-[0.08em]">
                  Web Development
                </h2>
              </div>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                Custom websites built with modern technologies, optimized for
                performance and user experience. From sleek business sites to
                complex web applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <SkillBadge skill="React" />
                <SkillBadge skill="TypeScript" />
                <SkillBadge skill="HTML" />
                <SkillBadge skill="Tailwind CSS" />
                <SkillBadge skill="Next.js" />
                <SkillBadge skill="PHP" />
                <SkillBadge skill="Laravel" />
                <SkillBadge skill="SQL" />
                <SkillBadge skill="Supabase" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="w-full h-96 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="absolute inset-4 bg-black border border-zinc-800/80 flex items-center justify-center">
                  <Globe className="w-24 h-24 text-zinc-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          <WebProject
            title="reqCHECK"
            description="Landing site for reqCHECK, a gate-first skill verification platform that helps companies stop AI resume spam. The site explains how recruiters can embed a quiz widget on job postings, verify scores via API, and filter applications so only real, qualified candidates reach their inbox."
            displayLink="reqcheck.io"
            link="https://www.reqcheck.io/"
            textLeft
          />
          <WebProject
            title="Chrona"
            description="Marketing site for Chrona, a progressive work journal that turns lived experience into trustworthy artifacts. It guides daily capture, weekly reflection, quarterly AI distillation, and on-demand artifact generation so professionals can build resumes and proof of work grounded in real events."
            displayLink="chrona.cloud"
            link="https://chrona.cloud/"
          />
          <WebProject
            title="Mom's Next Best Home"
            description="A comprehensive platform designed to assist families in finding the best senior care services. It offers a wide range of options from Assisted Living and Independent Living to Senior Communities. Users can easily browse and filter by location, services, and amenities, ensuring they find the perfect match for their needs. The website also provides detailed information on each facility, including reviews, pricing, and availability, making the decision-making process seamless and informed."
            displayLink="momsnextbesthome.com"
            link="https://momsnextbesthome.com/"
          />

          <WebProject
            title="The Ramekin"
            description="Online bakery featuring jumbo personal desserts served in individual ramekins. The website allows customers to order online and pick up or have delivered. It offers a rotating menu of 8 desserts every month, ensuring a fresh and exciting selection for customers. Additionally, it features a date night section where couples can assemble and bake their own desserts, providing a fun and interactive experience."
            displayLink="theramekin.cafe"
            link="https://www.theramekin.cafe/"
            textLeft
          />
          <WebProject
            title="Six Dots"
            description="Landing page for a yard game product. Features a simple and clean design with a focus on the game's unique versatility as well as an open forum for users to share their own creations."
            displayLink="sixdotsyardgame.com"
            link="https://v0-sixdots-landing-page.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}
