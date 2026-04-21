import Link from "next/link";
import {
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  Compass,
  Map,
  MapPinned,
  Route,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  caravanAudiences,
  caravanCurrentBuild,
  caravanHeroTags,
  caravanJourneySteps,
  caravanPrinciples,
  caravanProblems,
  caravanRealityNote,
} from "@/content/caravan";
import CaravanShowcaseVisual from "./caravan-showcase-visual";

const workflowIcons = [Compass, CalendarRange, MapPinned, CheckCircle2];
const problemIcons = [Map, Route, UsersRound, CalendarRange];
const heroStats = [
  { label: "Core loop", value: "Invite to prep" },
  { label: "Planning mode", value: "Trips, dinners, group outings" },
  { label: "Current focus", value: "Private-group coordination" },
];

export default function CaravanLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#040912] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,192,235,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_34%),linear-gradient(180deg,#07111B_0%,#040912_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="container relative mx-auto px-6 py-24 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <Badge className="border border-[#5BC0EB]/20 bg-[#5BC0EB]/10 text-[#BFE8FF]">
                  Product Spotlight
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/15 bg-white/5 text-gray-200"
                >
                  In Active Development
                </Badge>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8FD9FF]/85">
                Group coordination product
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                Keep real-world group plans moving.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                Caravan is built for the messy middle of group coordination: before the details are settled, while the schedule is still shifting, and when everyone needs a clear picture of what is happening next.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#DCC48A]">
                The current build is focused on private group coordination for trips, dinners, and shared outings.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {caravanHeroTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-[#5BC0EB] px-7 text-base font-semibold text-[#07111B] hover:bg-[#84D1F2]"
                >
                  <Link href="https://calendly.com/cirestudios-dev/30min" target="_blank" rel="noreferrer">
                    Talk to Cire Studios
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-[#274256] bg-transparent px-7 text-base font-semibold text-[#E3F5FF] hover:bg-[#0C1623]"
                >
                  <Link href="/#mobile-apps">Back to the portfolio</Link>
                </Button>
              </div>
            </div>
            <CaravanShowcaseVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#07111B] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/8 bg-[#0A1522] p-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#8FD9FF]">
                  {stat.label}
                </p>
                <p className="mt-2 text-base font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,27,0.96),rgba(4,9,18,1))]" />
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8FD9FF]">What Caravan solves</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Built for group plans that are still taking shape.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caravanProblems.map((problem, index) => {
              const Icon = problemIcons[index] ?? Compass;

              return (
                <Card
                  key={problem.title}
                  className="border-white/10 bg-white/[0.04] py-0 text-white shadow-none"
                >
                  <CardHeader className="px-7 py-7">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5BC0EB]/10 text-[#BFE8FF]">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-2xl">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-7 pb-7">
                    <p className="text-base leading-8 text-gray-200">{problem.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8FD9FF]">Who it serves</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Made for people coordinating together in the real world.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caravanAudiences.map((audience) => (
              <div key={audience.title} className="rounded-[2rem] border border-white/10 bg-[#08111D] p-7">
                <div className="mb-5 inline-flex rounded-2xl bg-[#5BC0EB]/10 p-3 text-[#BFE8FF]">
                  <UsersRound className="size-5" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{audience.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8FD9FF]">Core workflow</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              A product flow designed around how group plans actually unfold.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caravanJourneySteps.map((item, index) => {
              const Icon = workflowIcons[index] ?? CheckCircle2;

              return (
                <div key={item.step} className="rounded-[2rem] border border-white/10 bg-[#07111B] p-7">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-2xl bg-[#F59E0B]/12 p-3 text-[#F6C66E]">
                      <Icon className="size-5" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E6C98A]/80">
                      {item.step}
                    </p>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#07111B] py-24">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[#5BC0EB]/20 bg-[#5BC0EB]/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D7F1FF]">What Caravan is</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              A coordination product for people and plans.
            </h2>
            <p className="mt-5 text-lg leading-8 text-emerald-50/85">
              Caravan helps groups align on timing, place, participation, responsibilities, and expectations as a real plan comes together.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#0A1522] p-8">
            <div className="mb-4 inline-flex rounded-2xl bg-white/5 p-3 text-[#F6C66E]">
              <ShieldCheck className="size-5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-300">What it is not</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Not a booking marketplace or payment layer.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              The product is designed to keep people aligned and moving together. It is intentionally centered on coordination rather than enforcement, escrow, or refunds.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8FD9FF]">Product principles</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Product choices shaped around real coordination.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caravanPrinciples.map((principle) => (
              <div key={principle.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-2xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-transparent to-[#5BC0EB]/5 py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] px-8 py-10 sm:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8FD9FF]">Current build</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  What the product is focused on right now.
                </h2>
                <p className="mt-6 text-base leading-7 text-gray-300">{caravanRealityNote}</p>
              </div>
              <div className="grid gap-4">
                {caravanCurrentBuild.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#08111D] px-5 py-4 text-sm leading-7 text-gray-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(91,192,235,0.16),_transparent_35%)]" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl rounded-[2.25rem] border border-white/10 bg-white/[0.04] px-8 py-12 text-center sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8FD9FF]">Cire Studios</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Building products that make complex coordination feel simple.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Caravan reflects the kind of product thinking Cire Studios brings to client work: clear user value, strong product boundaries, and a serious respect for how people actually behave.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#5BC0EB] px-7 text-base font-semibold text-[#07111B] hover:bg-[#84D1F2]"
              >
                <Link href="https://calendly.com/cirestudios-dev/30min" target="_blank" rel="noreferrer">
                  Talk to Cire Studios
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-[#274256] bg-transparent px-7 text-base font-semibold text-white hover:bg-[#0C1623]"
              >
                <Link href="/#mobile-apps">Back to the portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
