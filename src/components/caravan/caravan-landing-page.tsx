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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  { label: "Built for", value: "Trips, dinners, and group outings" },
  { label: "Core loop", value: "Invite, align, and prep" },
  { label: "Current focus", value: "Private-group planning" },
];

export default function CaravanLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFAF7] text-[#1C1C1E]">
      <section className="relative overflow-hidden border-b border-[#E8E4DE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,91,57,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(45,95,93,0.18),transparent_34%),linear-gradient(180deg,#FAFAF7_0%,#F5F0EA_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8A838]/60 to-transparent" />
        <div className="container relative mx-auto px-6 py-20 sm:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <Badge className="rounded-full border-0 bg-[#C75B39] px-4 py-1.5 text-white">
                  Caravan
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border-[#D8D1C7] bg-white/80 px-4 py-1.5 text-[#6B6B6F]"
                >
                  In active development
                </Badge>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2D5F5D]">
                Group coordination product
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#1C1C1E] sm:text-6xl lg:text-7xl">
                Go places,
                <br />
                together.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4C4C50] sm:text-xl">
                Coordinate trips, dinners, and everything in between without
                turning the whole plan into a scavenger hunt through group chat.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#6B6B6F]">
                Caravan is built for the messy middle of planning: before dates
                are settled, while people are still deciding, and when someone
                needs to keep the group moving.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {caravanHeroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E1D9CF] bg-white/80 px-4 py-2 text-sm font-medium text-[#4C4C50]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-[#C75B39] px-7 text-base font-semibold text-white hover:bg-[#B24E30]"
                >
                  <Link
                    href="https://calendly.com/cirestudios-dev/30min"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Talk to Cire Studios
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-[#D9D1C6] bg-white/80 px-7 text-base font-semibold text-[#1C1C1E] hover:bg-[#F3F0EB]"
                >
                  <Link href="/#mobile-apps">Explore the portfolio</Link>
                </Button>
              </div>
            </div>
            <CaravanShowcaseVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E4DE] bg-white/70 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-[1.75rem] border px-6 py-5 ${
                  index === 0
                    ? "border-[#F0D1C8] bg-[#FFF5F1]"
                    : index === 1
                      ? "border-[#D4E3E2] bg-[#F1F7F6]"
                      : "border-[#ECD9A8] bg-[#FFF8E7]"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B6B6F]">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-[#1C1C1E]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2D5F5D]">
              Why Caravan exists
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1C1C1E] sm:text-5xl">
              Real group plans do not begin in a tidy, final state.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4C4C50]">
              People are figuring out dates, asking who is in, saving links,
              comparing options, and trying not to lose momentum. Caravan is
              designed for that stage.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caravanProblems.map((problem, index) => {
              const Icon = problemIcons[index] ?? Compass;

              return (
                <div
                  key={problem.title}
                  className="rounded-[2rem] border border-[#E8E4DE] bg-white p-7 shadow-[0_18px_50px_rgba(28,28,30,0.05)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F0EB] text-[#C75B39]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1C1C1E]">
                    {problem.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#4C4C50]">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E8E4DE] bg-[#F3F0EB] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C75B39]">
              How it feels to use
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1C1C1E] sm:text-5xl">
              One place for the moving parts of the plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4C4C50]">
              Caravan is organized around the actual sequence of group
              coordination, from rough idea to clear prep.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caravanJourneySteps.map((item, index) => {
              const Icon = workflowIcons[index] ?? CheckCircle2;

              return (
                <div
                  key={item.step}
                  className="rounded-[2rem] border border-[#E0D8CD] bg-[#FAFAF7] p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-2xl bg-[#2D5F5D] p-3 text-white">
                      <Icon className="size-5" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6B6B6F]">
                      Step {item.step}
                    </p>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#1C1C1E]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4C4C50]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2D5F5D]">
              Who it is for
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1C1C1E] sm:text-5xl">
              Made for the people actually carrying the plan.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caravanAudiences.map((audience, index) => (
              <div
                key={audience.title}
                className={`rounded-[2rem] border p-7 ${
                  index === 0
                    ? "border-[#F0D1C8] bg-[#FFF5F1]"
                    : index === 1
                      ? "border-[#D4E3E2] bg-[#F1F7F6]"
                      : "border-[#ECD9A8] bg-[#FFF8E7]"
                }`}
              >
                <div className="mb-5 inline-flex rounded-2xl bg-white/80 p-3 text-[#1C1C1E]">
                  <UsersRound className="size-5" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1C1C1E]">
                  {audience.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#4C4C50]">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E8E4DE] bg-[#1F4745] py-24 text-white">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F4D48E]">
              What Caravan is
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              A coordination product for people and plans.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/82">
              Caravan helps groups align on timing, place, participation,
              responsibilities, and expectations as a real plan comes together.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#163634] p-8">
            <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-[#F4D48E]">
              <ShieldCheck className="size-5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              What it is not
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Not a booking marketplace or payment layer.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/78">
              The value is in helping people stay aligned and keep moving. The
              product is intentionally centered on coordination rather than
              escrow, refunds, or marketplace mechanics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C75B39]">
                Current build
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1C1C1E] sm:text-5xl">
                Honest scope, grounded in the product today.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#4C4C50]">
                {caravanRealityNote}
              </p>
            </div>
            <div className="grid gap-4">
              {caravanCurrentBuild.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.5rem] border px-5 py-4 text-sm leading-7 ${
                    index % 3 === 0
                      ? "border-[#F0D1C8] bg-[#FFF5F1]"
                      : index % 3 === 1
                        ? "border-[#D4E3E2] bg-[#F1F7F6]"
                        : "border-[#ECD9A8] bg-[#FFF8E7]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E4DE] bg-[#F3F0EB] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2D5F5D]">
              Product principles
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1C1C1E] sm:text-5xl">
              Clear boundaries make the product stronger.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caravanPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-[2rem] border border-[#E0D8CD] bg-[#FAFAF7] p-7"
              >
                <h3 className="text-2xl font-semibold text-[#1C1C1E]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#4C4C50]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1C1C1E] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,168,56,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(199,91,57,0.22),transparent_30%)]" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur-sm sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F4D48E]">
              Cire Studios
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Products feel better when the plan stays clear.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Caravan reflects the kind of product thinking Cire Studios brings
              to client work: strong boundaries, clear user value, and interfaces
              built around how people actually behave.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#C75B39] px-7 text-base font-semibold text-white hover:bg-[#B24E30]"
              >
                <Link
                  href="https://calendly.com/cirestudios-dev/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Talk to Cire Studios
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10"
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
