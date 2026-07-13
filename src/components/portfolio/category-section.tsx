import {
  getProjectsByCategory,
  type PortfolioCategory,
} from "@/content/portfolio";
import ProjectCard from "./project-card";

export default function CategorySection({
  category,
  label,
  anchor,
}: {
  category: PortfolioCategory;
  label: string;
  anchor: string;
}) {
  const projects = getProjectsByCategory(category);

  return (
    <section
      id={anchor}
      className="py-24 md:py-32 relative overflow-hidden bg-background scroll-mt-28 lg:scroll-mt-20"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-end gap-6 mb-4">
            <h2 className="text-4xl md:text-6xl font-semibold text-white uppercase tracking-[0.1em]">
              {label}
            </h2>
          </div>
          <div className="h-px w-24 bg-white/40" aria-hidden />
        </div>

        <div className="space-y-24 md:space-y-28">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              textLeft={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
