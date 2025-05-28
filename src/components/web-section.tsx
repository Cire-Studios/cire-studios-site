import { Globe } from "lucide-react";
import WebProject from "./web-project";
import { Badge } from "./ui/badge";
export default function WebSection() {
  return (
    <section id="web-dev" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-emerald-500/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                <div className="w-16 h-16 aspect-square bg-emerald-500 rounded-2xl flex items-center justify-center transform rotate-12">
                  <Globe className="w-8 h-8 text-gray-950" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white">
                  Web Development
                </h2>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Custom websites built with modern technologies, optimized for
                performance and user experience. From sleek business sites to
                complex web applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  React
                </Badge>
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  TypeScript
                </Badge>
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  Tailwind CSS
                </Badge>
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  Next.js
                </Badge>
                <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
                  PHP
                </Badge>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform rotate-3 shadow-2xl border border-gray-700">
                <div className="absolute inset-4 bg-gray-950 rounded-2xl flex items-center justify-center">
                  <Globe className="w-24 h-24 text-emerald-400/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          <WebProject
            title="Mom's Next Best Home"
            description="A comprehensive platform designed to assist families in finding the best senior care services. It offers a wide range of options from Assisted Living and Independent Living to Senior Communities. Users can easily browse and filter by location, services, and amenities, ensuring they find the perfect match for their needs. The website also provides detailed information on each facility, including reviews, pricing, and availability, making the decision-making process seamless and informed."
            displayLink="momsnextbesthome.com"
            link="https://www.momsnextbesthome.com/"
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
