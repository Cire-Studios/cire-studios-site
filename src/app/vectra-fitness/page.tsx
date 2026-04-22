import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarRange,
  CheckCircle2,
  ClipboardCheck,
  Dumbbell,
  Layers,
  MessageSquare,
  Sparkles,
  Target,
  TimerReset,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  vectraCurrentBuild,
  vectraRealityNote,
} from "@/content/vectra-fitness";

export const metadata: Metadata = {
  title: "Vectra Fitness | Cire Studios",
  description:
    "App-style landing page for Vectra Fitness, an AI-guided training product from Cire Studios.",
};

const featureCards = [
  {
    title: "Tell it what you are training for",
    description:
      "Vectra starts with your goal, your schedule, your equipment, your workout preferences, and anything the plan should account for.",
    icon: Target,
  },
  {
    title: "Get a real block, not random workouts",
    description:
      "The app generates a focused 2-week phase instead of throwing disconnected sessions at you day after day.",
    icon: Layers,
  },
  {
    title: "Let the next phase earn its way in",
    description:
      "Workouts, session feedback, and block evaluation shape what comes next, whether that means pushing, consolidating, or backing off.",
    icon: ClipboardCheck,
  },
];

const flowSteps = [
  {
    title: "Onboarding",
    description:
      "Choose your goal, workout days, schedule style, start date, available equipment, and the kind of training you want to do.",
    icon: Target,
  },
  {
    title: "Program Generation",
    description:
      "Vectra builds the first 2-week block around your inputs. If your real start date is later, it can ease you in with prep sessions first.",
    icon: Sparkles,
  },
  {
    title: "Guided Workouts",
    description:
      "Each workout moves through warm-up, sets, timers, cooldown, and simple in-session adjustments when the day changes.",
    icon: Dumbbell,
  },
  {
    title: "Feedback",
    description:
      "After sessions, you can log how the workout felt. During the block, check-ins help capture energy, mood, stress, or weight when they matter.",
    icon: MessageSquare,
  },
  {
    title: "Evaluation",
    description:
      "At the end of the block, Vectra evaluates how the phase landed and uses that to generate the next one with a clear intent.",
    icon: CalendarRange,
  },
];

const productSurfaces = [
  {
    eyebrow: "Home timeline",
    title: "Open the app and know what today is",
    copy:
      "The home experience is built around a focused daily timeline: today’s workout, a rest day, a completed session, or your next evaluation.",
    accent: "Today’s workout",
  },
  {
    eyebrow: "Workout runtime",
    title: "Stay in the session without losing momentum",
    copy:
      "Warm-up, sets, timers, cooldown, and quick adjustments are all designed to keep the user inside the workout instead of bouncing between tools.",
    accent: "Rest • 60s",
  },
  {
    eyebrow: "Coach layer",
    title: "Get context-aware help without breaking the plan",
    copy:
      "Coach chat and exercise adjustments live inside the product, but the app keeps formal program changes inside the evaluation cycle.",
    accent: "Coach online",
  },
  {
    eyebrow: "Block progression",
    title: "See what the phase meant and what comes next",
    copy:
      "The loop does not end at workout completion. Session feel and adherence feed an end-of-block evaluation that shapes the next phase.",
    accent: "Next phase ready",
  },
];

export default function VectraFitnessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#040707] text-white">
      <section className="relative overflow-hidden border-b border-[#14302C]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(0,229,204,0.16),_transparent_24%),radial-gradient(circle_at_88%_18%,_rgba(0,229,204,0.08),_transparent_22%),linear-gradient(180deg,_#091110_0%,_#040707_82%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(0,229,204,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,204,0.14)_1px,transparent_1px)] [background-size:84px_84px]" />
        <div className="absolute left-[10%] top-28 h-44 w-44 rounded-full bg-[#00E5CC]/10 blur-3xl" />
        <div className="absolute right-[8%] top-24 h-60 w-60 rounded-full bg-[#00E5CC]/8 blur-3xl" />

        <div className="container relative mx-auto px-6 py-20 md:py-28">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.34em] text-[#6EE7D7]">
            <span>Vectra Fitness // Your AI training protocol</span>
            <span className="text-[#3FA498]">
              Dark, focused, coach-led product direction
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5CC]/30 bg-[#00E5CC]/10 px-4 py-2 text-sm font-medium text-[#7EF8E8] shadow-[0_0_0_1px_rgba(0,229,204,0.08)]">
                <Sparkles className="h-4 w-4" />
                AI-guided mobile fitness product
              </div>

              <div className="mt-8">
                <p className="font-mono text-sm uppercase tracking-[0.42em] text-[#61DACA]">
                  VECTRA
                </p>
                <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                  The workout app that keeps the whole plan in view.
                </h1>
                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#D2E3E0] md:text-[1.65rem]">
                  Train inside a system that starts with your goal, builds your
                  next two weeks, guides the session, and decides what should
                  change next.
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8FA8A4]">
                  Vectra Fitness is designed as a focused AI coaching product,
                  not a content feed. The current build already centers the app
                  around onboarding, block generation, workouts, feedback, and
                  end-of-block evaluation.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="bg-[#00E5CC] text-[#04110F] hover:bg-[#38F1E0] shadow-[0_18px_50px_rgba(0,229,204,0.18)]"
                  size="lg"
                >
                  <Link href="/#mobile-apps">
                    Back to mobile work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#1D5B54] bg-transparent text-[#E0F3EF] hover:bg-[#0B1918] hover:text-white"
                >
                  <Link
                    href="https://calendly.com/cirestudios-dev/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk to Cire Studios
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] border border-[#0D2421] bg-[#04100E]/40 blur-2xl" />
              <div className="relative rounded-[2.2rem] border border-[#173530] bg-[#071211]/95 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <div className="rounded-[1.7rem] border border-[#15322E] bg-[linear-gradient(180deg,_rgba(9,20,19,0.98),_rgba(6,14,13,0.98))] p-5">
                  <div className="flex items-center justify-between border-b border-[#12302C] pb-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#6EE7D7]">
                        Home // The void
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        What do I do now?
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#00E5CC]/20 bg-[#00E5CC]/10 px-3 py-2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7EF8E8]">
                        Block 01
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Foundation phase
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4">
                    <div className="rounded-2xl border border-[#163A36] bg-[#091716] p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#72E9DA]">
                            Today
                          </p>
                          <p className="mt-2 text-xl font-bold text-white">
                            Lower Body Build
                          </p>
                        </div>
                        <div className="rounded-full border border-[#204B46] bg-[#0C2120] px-3 py-1 font-mono text-xs text-[#8AEEDF]">
                          45 min
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-[#1A4742] bg-[#0A1E1C] px-3 py-1 text-sm text-[#D7E8E4]">
                          Warm-up
                        </span>
                        <span className="rounded-full border border-[#1A4742] bg-[#0A1E1C] px-3 py-1 text-sm text-[#D7E8E4]">
                          Main sets
                        </span>
                        <span className="rounded-full border border-[#1A4742] bg-[#0A1E1C] px-3 py-1 text-sm text-[#D7E8E4]">
                          Cooldown
                        </span>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#163A36] bg-[#081514] p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#72E9DA]">
                            Coach
                          </p>
                          <Bot className="h-4 w-4 text-[#00E5CC]" />
                        </div>
                        <p className="mt-3 text-base font-semibold text-white">
                          Feeling tired?
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#8DA8A3]">
                          Quick adjustments stay inside the workout instead of
                          breaking the session flow.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#163A36] bg-[#081514] p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#72E9DA]">
                            Evaluation
                          </p>
                          <ClipboardCheck className="h-4 w-4 text-[#00E5CC]" />
                        </div>
                        <p className="mt-3 text-base font-semibold text-white">
                          Next phase is earned
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#8DA8A3]">
                          The next block responds to how the phase actually
                          landed, not just to the passage of time.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#163A36] bg-[#071312] p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#72E9DA]">
                        Timeline snapshot
                      </p>
                      <div className="mt-4 flex items-center gap-2 overflow-hidden rounded-full border border-[#153833] bg-[#081716] p-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Eval"].map(
                          (day, index) => (
                            <div
                              key={day}
                              className={`flex h-12 min-w-0 flex-1 items-center justify-center rounded-full text-sm font-semibold ${
                                index === 2
                                  ? "bg-[#00E5CC] text-[#04110F]"
                                  : index === 5
                                    ? "border border-[#00E5CC]/40 bg-[#00E5CC]/10 text-[#7EF8E8]"
                                    : "bg-[#0B1D1B] text-[#D7E8E4]"
                              }`}
                            >
                              {day}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#102925] bg-[#050C0B] py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#66DECF]">
              Why it lands differently
            </p>
            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Built to feel like a coach, not a content feed.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#8FA8A4]">
              The product direction is simple: reduce clutter, keep the user
              anchored in the current phase, and make each workout feel like it
              belongs to a bigger progression.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[1.9rem] border border-[#153732] bg-[#081514] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#18453F] bg-[#0A2220]">
                    <Icon className="h-5 w-5 text-[#00E5CC]" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#9CB4B0]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#66DECF]">
              The loop
            </p>
            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              One focused rhythm from setup to next phase.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#8FA8A4]">
              Vectra is easiest to understand when you see the whole motion: set
              up the plan, live inside the workout, record how it felt, then let
              the next block respond.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-[1.8rem] border border-[#153732] bg-[linear-gradient(180deg,_rgba(9,20,19,0.98),_rgba(6,14,13,0.98))] p-6"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#66DECF]">
                      0{index + 1}
                    </p>
                    <Icon className="h-5 w-5 text-[#00E5CC]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#9CB4B0]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#102925] bg-[#06100F] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#66DECF]">
              Inside the product
            </p>
            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              The app surfaces are all built around the same question.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#8FA8A4]">
              What should the user do right now, and how does that fit into the
              plan they are actually on?
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {productSurfaces.map((surface) => (
              <div
                key={surface.title}
                className="rounded-[2rem] border border-[#153732] bg-[#081514] p-8"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#66DECF]">
                    {surface.eyebrow}
                  </p>
                  <span className="rounded-full border border-[#1A4742] bg-[#0A1F1D] px-3 py-1 text-sm text-[#7EF8E8]">
                    {surface.accent}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-bold text-white">
                  {surface.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#9CB4B0]">
                  {surface.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#66DECF]">
                Current product scope
              </p>
              <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                The current build already covers the core coaching loop.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#8FA8A4]">
                This landing page is intentionally grounded in what is already
                represented in the canonical Vectra repo, not an imagined future
                release.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {vectraCurrentBuild.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#153732] bg-[#081514] px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00E5CC]" />
                    <span className="text-[#D8E6E3]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[#153732] bg-[#081514] p-8">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[#00E5CC]" />
                  <h3 className="text-2xl font-bold text-white">
                    Current product focus
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#9CB4B0]">
                  The current product effort is centered on the loop that makes
                  the app feel legitimate: onboarding, block generation,
                  workouts, feedback, evaluations, and next-phase progression.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#153732] bg-[#081514] p-8">
                <div className="flex items-center gap-3">
                  <TimerReset className="h-6 w-6 text-[#00E5CC]" />
                  <h3 className="text-2xl font-bold text-white">
                    Grounded product note
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#9CB4B0]">
                  {vectraRealityNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.2rem] border border-[#173C38] bg-[linear-gradient(135deg,_rgba(0,229,204,0.1),_rgba(255,255,255,0.015))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.32)] md:p-12">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#66DECF]">
              Cire Studios
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black text-white md:text-5xl">
              Want this level of product clarity for your own app?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#D7E7E3]">
              Vectra is a good example of how we like to build: strong product
              framing, tight interaction loops, and a visual system that feels
              like the product, not a template wrapped around it.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-[#00E5CC] text-[#04110F] hover:bg-[#38F1E0] shadow-[0_18px_50px_rgba(0,229,204,0.18)]"
                size="lg"
              >
                <Link
                  href="https://calendly.com/cirestudios-dev/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1D5B54] bg-transparent text-[#E0F3EF] hover:bg-[#0B1918] hover:text-white"
              >
                <Link href="/">Return to Cire Studios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
