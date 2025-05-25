"use client";

import WebSection from "@/components/web-section";
import MobileSection from "@/components/mobile-section";
import WhyUsSection from "@/components/why-us-section";
import ContactSection from "@/components/contact-section";
import HomeHeroSection from "@/components/home-hero-section";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <HomeHeroSection />
      <WebSection />
      <MobileSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
}
