import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Camera,
  FlaskConical,
  GitBranchPlus,
  LibraryBig,
  ScanSearch,
  TimerReset,
  UtensilsCrossed,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  chefLabCurrentBuild,
  chefLabFeatureCards,
  chefLabHeroTags,
  chefLabJourneySteps,
  chefLabRealityNote,
  chefLabValueProps,
} from "@/content/chef-lab";

export const metadata: Metadata = {
  title: "Chef Lab | Cire Studios",
  description:
    "Chef Lab is a culinary R&D platform built around structured experiments, branching variants, guided cook sessions, knowledge capture, AI assistance, and visual progression.",
};

const featureIcons = [
  FlaskConical,
  GitBranchPlus,
  TimerReset,
  LibraryBig,
  Brain,
  Camera,
];

export default function ChefLabPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#1d1a18] text-[#f4efe8]">
      <section className="relative overflow-hidden border-b border-[#4b473e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(151,161,143,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(177,116,79,0.16),transparent_34%),linear-gradient(180deg,#1f1b19_0%,#181514_100%)]" />
        <div className="absolute left-6 top-20 h-40 w-40 rounded-full bg-[#97a18f]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#b1744f]/10 blur-3xl" />

        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl space-y-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="border border-[#97a18f]/25 bg-[#97a18f]/12 text-[#dfe5d7]">
                  Product Spotlight
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#6e6a62] bg-[#2a2522]/70 text-[#d5cec4]"
                >
                  In Development
                </Badge>
              </div>

              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#97a18f]">
                  Culinary R&amp;D Platform
                </p>
                <h1 className="max-w-4xl text-5xl font-black tracking-tight text-[#f4efe8] md:text-7xl">
                  Chef Lab is built for cooks who develop recipes through
                  structured experimentation.
                </h1>
                <p className="max-w-2xl text-xl leading-relaxed text-[#c7c0b5] md:text-2xl">
                  It is not a recipe storage app with a prettier shell. Chef Lab
                  helps users capture ideas, branch versions, run cooks, score
                  outcomes, save what they learned, and come back with a better
                  next attempt.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {chefLabHeroTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-[#4b473e] bg-[#272320] px-3 py-1 text-sm text-[#ddd6cc]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="rounded-r-2xl border-l-4 border-[#d7a13f] bg-[#2a2522] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7a13f]">
                  Chef Lab point of view
                </p>
                <p className="mt-2 text-base leading-relaxed text-[#c7c0b5]">
                  The product is shaped around real iteration: what changed,
                  what happened in the cook, and what deserves the next branch.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#97a18f] px-8 text-base font-semibold text-[#1d1a18] hover:bg-[#a6af9f]"
                >
                  <Link href="/#contact">
                    Talk With Cire Studios
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#5b564d] bg-[#272320] px-8 text-base text-[#f4efe8] hover:bg-[#312b27] hover:text-[#f4efe8]"
                >
                  <Link href="/#mobile-apps">Back To Featured Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-[#97a18f]/15 blur-2xl lg:block" />
              <div className="rounded-[2rem] border border-[#4b473e] bg-[#272320]/90 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] border border-[#4b473e] bg-[#211d1b]">
                  <div className="flex items-center gap-3 border-b border-[#4b473e] px-5 py-4">
                    <div className="h-3 w-3 rounded-full bg-[#97a18f]/45" />
                    <div className="h-3 w-3 rounded-full bg-[#d7a13f]/35" />
                    <div className="h-3 w-3 rounded-full bg-[#b1744f]/30" />
                    <div className="ml-3 text-sm font-medium text-[#c8c1b6]">
                      Chef Lab workflow preview
                    </div>
                  </div>
                  <div className="relative aspect-[6/7]">
                    <Image
                      src="/chef-lab/preview.svg"
                      alt="Chef Lab product preview illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#97a18f]">
              Why it matters
            </p>
            <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
              Chef Lab changes the job from saving recipes to improving them.
            </h2>
            <p className="text-lg leading-relaxed text-[#aaa295]">
              The product is centered on iteration and learning, which changes
              how users capture ideas, how they cook through them, and how they
              decide what to try next.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {chefLabValueProps.map((item) => (
              <Card
                key={item.title}
                className="border-[#4b473e] bg-[#272320] py-0 text-[#f4efe8] shadow-none"
              >
                <CardHeader className="px-6 py-6">
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-base leading-relaxed text-[#c7c0b5]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-[#4b473e] bg-[#231f1c] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b1744f]">
                Product journey
              </p>
              <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
                A workflow that turns each cook into a better next decision
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-[#aaa295]">
              Chef Lab is built to carry momentum from idea capture to
              experiment branching, so progress compounds instead of resetting
              after every session.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {chefLabJourneySteps.map((step) => (
              <Card
                key={step.step}
                className="border-[#4b473e] bg-[#1f1b19] py-0 text-[#f4efe8] shadow-none"
              >
                <CardHeader className="px-6 py-6">
                  <CardDescription className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b1744f]">
                    Step {step.step}
                  </CardDescription>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-[#c7c0b5]">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#97a18f]">
              Core concepts
            </p>
            <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
              The product is organized around six high-value behaviors
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {chefLabFeatureCards.map((item, index) => {
              const Icon = featureIcons[index];
              return (
                <Card
                  key={item.title}
                  className="border-[#4b473e] bg-gradient-to-br from-[#2b2622] to-[#211d1b] py-0 text-[#f4efe8] shadow-none"
                >
                  <CardHeader className="px-6 py-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#97a18f]/12 text-[#97a18f]">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-base leading-relaxed text-[#c7c0b5]">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#4b473e] bg-gradient-to-b from-transparent to-[#97a18f]/5 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b1744f]">
                Current product focus
              </p>
              <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
                What the present build is already centered on
              </h2>
              <p className="text-lg leading-relaxed text-[#aaa295]">
                The current product direction is focused on the core loop:
                capture ideas, run structured cooks, evaluate what happened, and
                keep learning moving forward.
              </p>
            </div>

            <Card className="border-[#4b473e] bg-[#272320] py-0 text-[#f4efe8] shadow-none">
              <CardContent className="px-6 py-6">
                <ul className="grid gap-4 md:grid-cols-2">
                  {chefLabCurrentBuild.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#413c35] bg-[#1f1b19] p-4"
                    >
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#97a18f]/12 text-[#97a18f]">
                        <ArrowRight className="size-3.5" />
                      </div>
                      <span className="text-sm leading-relaxed text-[#ddd6cc]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="border-[#4b473e] bg-[#272320] py-0 text-[#f4efe8] shadow-none">
              <CardHeader className="px-6 py-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#97a18f]/12 text-[#97a18f]">
                  <ScanSearch className="size-6" />
                </div>
                <CardTitle className="text-3xl">
                  A niche product with a sharper workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="mb-4 text-base leading-relaxed text-[#c7c0b5]">
                  Chef Lab is a good example of how Cire Studios approaches
                  product work: start with a specific user behavior, remove the
                  noise around it, and design a system that makes progress feel
                  easier to continue.
                </p>
                <p className="text-sm leading-relaxed text-[#9f988d]">
                  {chefLabRealityNote}
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#4b473e] bg-gradient-to-br from-[#2b2622] to-[#2f261f] py-0 text-[#f4efe8] shadow-none">
              <CardHeader className="px-6 py-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b1744f]/14 text-[#e4b48d]">
                  <UtensilsCrossed className="size-6" />
                </div>
                <CardTitle className="text-3xl">
                  Want a product page that can grow into a product surface?
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="mb-6 text-base leading-relaxed text-[#ddd6cc]">
                  Chef Lab now has a standalone route inside the Cire Studios
                  site, which makes it ready to be mapped to a dedicated
                  subdomain when hosting and DNS are configured.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#97a18f] px-8 text-base font-semibold text-[#1d1a18] hover:bg-[#a6af9f]"
                  >
                    <Link href="/#contact">
                      Start a Conversation
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#5b564d] bg-[#272320] px-8 text-base text-[#f4efe8] hover:bg-[#312b27] hover:text-[#f4efe8]"
                  >
                    <Link href="/#mobile-apps">See More Mobile Work</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
