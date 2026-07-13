"use client";

import HomeHeroSection from "@/components/home-hero-section";
import CategorySection from "@/components/portfolio/category-section";
import ContactSection from "@/components/contact-section";
import SectionRail from "@/components/section-rail";
import { portfolioCategories } from "@/content/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <SectionRail />
      <HomeHeroSection />
      {portfolioCategories.map((category) => (
        <CategorySection
          key={category.id}
          category={category.id}
          label={category.label}
          anchor={category.anchor}
        />
      ))}
      <ContactSection />
    </div>
  );
}
