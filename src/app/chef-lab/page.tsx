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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  chefLabCurrentBuild,
  chefLabFeatureCards,
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(151,161,143,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(177,116,79,0.16),transparent_28%),linear-gradient(180deg,#1f1b19_0%,#181514_100%)]" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#97a18f]/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-16 h-80 w-80 rounded-full bg-[#b1744f]/10 blur-3xl" />

        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4b473e] bg-[#272320]">
                  <Image
                    src="/chef-lab/icon.svg"
                    alt="Chef Lab icon"
                    width={34}
                    height={34}
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#f4efe8]">Chef Lab</p>
                  <p className="text-sm uppercase tracking-[0.28em] text-[#97a18f]">
                    Culinary R&amp;D
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Badge className="border border-[#97a18f]/25 bg-[#97a18f]/12 text-[#dfe5d7]">
                  In development
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#6e6a62] bg-[#2a2522]/70 text-[#d5cec4]"
                >
                  Structured experiments
                </Badge>
              </div>

              <h1 className="mt-8 text-5xl font-black tracking-tight text-[#f4efe8] md:text-6xl lg:text-7xl">
                Recipe development, with a clearer record of what changed and
                what to try next.
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-[#c7c0b5] md:text-2xl">
                Capture ideas, shape variants, cook with focus, score outcomes,
                save what you learned, and keep the next hypothesis attached to
                the work instead of scattered around it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Recipes", "Cook", "Knowledge", "AI"].map((label) => (
                  <div
                    key={label}
                    className="rounded-full border border-[#4b473e] bg-[#272320] px-4 py-2 text-sm font-medium text-[#ddd6cc]"
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                  <Link href="#features">Explore the workflow</Link>
                </Button>
              </div>

              <div className="mt-10 rounded-r-3xl border border-[#4b473e] border-l-[4px] border-l-[#d7a13f] bg-[#272320]/90 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a13f]">
                  Next Hypothesis
                </p>
                <p className="mt-3 text-lg font-medium leading-relaxed text-[#e4ddd3]">
                  Keep the next change attached to the cook while the details
                  are still fresh.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-10 hidden rounded-2xl border border-[#4b473e] bg-[#272320]/95 px-4 py-3 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] xl:block">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#97a18f]">
                  Show Evolution
                </p>
                <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-[#d5cec4]">
                  See what changed across attempts without losing the previous
                  context.
                </p>
              </div>

              <div className="absolute -right-4 top-28 hidden rounded-2xl border border-[#4b473e] bg-[#272320]/95 px-4 py-3 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] xl:block">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b1744f]">
                  Cook This
                </p>
                <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-[#d5cec4]">
                  Move from draft into a focused cooking session with steps and
                  timers close at hand.
                </p>
              </div>

              <div className="relative rounded-[2.4rem] border border-[#4b473e] bg-[#272320]/95 p-4 shadow-[0_40px_140px_rgba(0,0,0,0.42)] backdrop-blur">
                <div className="overflow-hidden rounded-[1.9rem] border border-[#4b473e] bg-[#211d1b]">
                  <div className="flex items-center justify-between gap-4 border-b border-[#4b473e] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#97a18f]/12">
                        <Image
                          src="/chef-lab/icon.svg"
                          alt="Chef Lab icon"
                          width={22}
                          height={22}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#f4efe8]">Chef Lab</p>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#97a18f]">
                          Current experiment
                        </p>
                      </div>
                    </div>
                    <div className="hidden items-center gap-2 sm:flex">
                      <div className="rounded-full border border-[#4b473e] bg-[#26211d] px-3 py-1 text-xs text-[#d8d1c7]">
                        Recipes
                      </div>
                      <div className="rounded-full border border-[#4b473e] bg-[#26211d] px-3 py-1 text-xs text-[#d8d1c7]">
                        Variants
                      </div>
                      <div className="rounded-full border border-[#4b473e] bg-[#26211d] px-3 py-1 text-xs text-[#d8d1c7]">
                        Evaluation
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] border-b border-[#4b473e]">
                    <Image
                      src="/chef-lab/preview.svg"
                      alt="Chef Lab product preview illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="grid gap-3 bg-[#1d1a18] px-5 py-5 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
                    <div className="rounded-2xl border border-[#3d3932] bg-[#26211d] px-4 py-4 text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a13f]">
                        Evaluation
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#d5cec4]">
                        Save scores, notes, and observations while the result is
                        still easy to judge.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#3d3932] bg-[#26211d] px-4 py-4 text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#97a18f]">
                        Knowledge
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#d5cec4]">
                        Turn useful discoveries into something you can return to
                        later.
                      </p>
                    </div>
                    <div className="rounded-r-2xl border border-[#3d3932] border-l-[4px] border-l-[#d7a13f] bg-[#26211d] px-4 py-4 text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a13f]">
                        Attempt New Hypothesis
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#d5cec4]">
                        Start the next branch without losing the story of this
                        one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#97a18f]">
                Built for iteration
              </p>
              <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
                Recipe development needs a workspace, not another place to save
                finished recipes.
              </h2>
              <p className="text-lg leading-relaxed text-[#aaa295]">
                Chef Lab is designed for cooks who test, compare, adjust, and
                repeat. Instead of burying progress across notes, screenshots,
                and duplicate recipes, it keeps each attempt connected to what
                came before and what should happen next.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#4b473e] bg-[#272320] p-7">
              <div className="grid gap-4 md:grid-cols-3">
                {chefLabValueProps.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border p-5 ${
                      index === 1
                        ? "border-[#6f675b] bg-[#2f2925]"
                        : "border-[#4b473e] bg-[#1f1b19]"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a13f]">
                      {index === 0
                        ? "Develop"
                        : index === 1
                          ? "Compare"
                          : "Remember"}
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-[#f4efe8]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#c7c0b5]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative border-y border-[#4b473e] bg-[#231f1c] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b1744f]">
                Product highlights
              </p>
              <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
                Everything you need to move an idea from rough concept to
                stronger next version.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-[#aaa295]">
              Chef Lab brings capture, cook guidance, evaluation, and learning
              into one flow so the work keeps moving while the details are
              still fresh.
            </p>
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

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#97a18f]">
              From first spark to next attempt
            </p>
            <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
              Stay in a development loop instead of starting over every time.
            </h2>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#5b564d] to-transparent lg:block" />
            {chefLabJourneySteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-[1.6rem] border border-[#4b473e] bg-[#272320] p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1d1a18] text-lg font-bold text-[#97a18f]">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-[#f4efe8]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#c7c0b5]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#4b473e] bg-gradient-to-b from-transparent to-[#97a18f]/5 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b1744f]">
                Currently in development
              </p>
              <h2 className="text-4xl font-black text-[#f4efe8] md:text-5xl">
                The current build is centered on the core kitchen workflow.
              </h2>
              <p className="text-lg leading-relaxed text-[#aaa295]">
                Chef Lab is being shaped around the moments that matter most:
                capturing direction, staying grounded during a cook, recording
                what happened, and making the next iteration easier to start.
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
                  For cooks who learn by making
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="mb-4 text-base leading-relaxed text-[#c7c0b5]">
                  Chef Lab is aimed at people who do not want to lose momentum
                  between one attempt and the next. The product keeps each cook
                  useful by making observations, scores, photos, and follow-up
                  ideas part of the workflow.
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
                  Follow Chef Lab as the product takes shape.
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="mb-6 text-base leading-relaxed text-[#ddd6cc]">
                  This page introduces the current product direction and the
                  problems Chef Lab is built to solve, while leaving room for a
                  dedicated product presence as it grows.
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
