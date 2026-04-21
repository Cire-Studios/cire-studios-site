import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  CalendarRange,
  ClipboardCheck,
  Dumbbell,
  Gauge,
  MessageSquare,
  Sparkles,
  Target,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  vectraCurrentBuild,
  vectraHeroTags,
  vectraJourneySteps,
  vectraPlanningCards,
  vectraRealityNote,
  vectraValueProps,
} from "@/content/vectra-fitness";

export const metadata: Metadata = {
  title: "Vectra Fitness | Cire Studios",
  description:
    "A dedicated landing page for Vectra Fitness, the AI-guided training product from Cire Studios.",
};

const heroStats = [
  { label: "Core loop", value: "Onboarding to next block" },
  { label: "Planning rhythm", value: "2-week training blocks" },
  { label: "Coaching layer", value: "Chat, feedback, evaluations" },
];

const controlPanels = [
  {
    label: "Onboarding",
    value: "Goals, schedule, equipment, start timing",
    icon: Target,
  },
  {
    label: "Program engine",
    value: "Personalized 2-week block generation",
    icon: CalendarRange,
  },
  {
    label: "Workout runtime",
    value: "Warm-up, sets, timers, cooldown, adjustments",
    icon: Dumbbell,
  },
  {
    label: "Feedback loop",
    value: "Session feel, check-ins, evaluation, next phase",
    icon: ClipboardCheck,
  },
];

const runtimeSignals = [
  "Workout days and duration",
  "Program style: scheduled or flexible",
  "Available equipment and workout types",
  "Health considerations that shape the plan",
  "Post-session difficulty, energy, enjoyment, and length",
];

export default function VectraFitnessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030807] text-white">
      <section className="relative overflow-hidden border-b border-[#14312D]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,229,204,0.2),_transparent_28%),radial-gradient(circle_at_15%_20%,_rgba(18,87,81,0.22),_transparent_26%),linear-gradient(180deg,_#06100F_0%,_#030807_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(0,229,204,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,204,0.12)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5CC] to-transparent opacity-80" />
        <div className="absolute left-[8%] top-40 h-52 w-52 rounded-full bg-[#00E5CC]/10 blur-3xl" />
        <div className="absolute bottom-16 right-[10%] h-64 w-64 rounded-full bg-[#0F6F67]/10 blur-3xl" />

        <div className="container relative mx-auto px-6 py-20 md:py-28">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.34em] text-[#72E9DB]">
            <span className="font-mono">Vectra Fitness // AI training protocol</span>
            <span className="font-mono text-[#3FA79C]">
              Product page grounded in the canonical repo
            </span>
          </div>

          <div className="grid items-start gap-16 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00E5CC]/30 bg-[#00E5CC]/10 px-4 py-2 text-sm font-medium text-[#7EF7E7] shadow-[0_0_0_1px_rgba(0,229,204,0.08)]">
                <Sparkles className="h-4 w-4" />
                AI-guided mobile fitness product
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Vectra Fitness
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#D2E3E0] md:text-[1.7rem]">
                A dark, cinematic training product built to feel more like a
                coach-led system than a pile of disconnected workouts.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#91ABA6]">
                Vectra is designed around personalized 2-week training blocks
                that adapt to the user&apos;s goals, equipment, schedule, and
                real session outcomes. The current build focuses on making that
                core loop feel structured, credible, and coach-like from the
                first block forward.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {vectraHeroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1C403C] bg-[#081514] px-4 py-2 text-sm text-[#D8E5E2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-[#173A36] bg-[#071312]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#65DCCC]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="bg-[#00E5CC] text-[#041110] hover:bg-[#31F0DE] shadow-[0_16px_40px_rgba(0,229,204,0.18)]"
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
                  className="border-[#1D5C55] bg-transparent text-[#DDF7F2] hover:bg-[#0D1F1D] hover:text-white"
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
              <div className="absolute -inset-4 rounded-[2.5rem] border border-[#0D2623] bg-[#04100E]/40 blur-2xl" />
              <div className="relative mx-auto max-w-xl rounded-[2rem] border border-[#1C3A37] bg-[#071211]/95 p-5 shadow-[0_35px_120px_rgba(0,0,0,0.48)] backdrop-blur">
                <div className="rounded-[1.55rem] border border-[#173432] bg-[linear-gradient(180deg,_rgba(8,20,19,0.98),_rgba(6,14,13,0.98))] p-5">
                  <div className="flex items-center justify-between border-b border-[#13312D] pb-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#67DCCD]">
                        Vectra control surface
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        Mission control for training progression
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#00E5CC]/20 bg-[#00E5CC]/10 px-3 py-2 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#79F8E8]">
                        Current focus
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        The core training loop
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {controlPanels.map((panel) => {
                      const Icon = panel.icon;
                      return (
                        <div
                          key={panel.label}
                          className="rounded-2xl border border-[#14332F] bg-[#071615] p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#70E7D8]">
                                {panel.label}
                              </p>
                              <p className="mt-3 text-sm leading-6 text-white">
                                {panel.value}
                              </p>
                            </div>
                            <div className="rounded-xl border border-[#17433D] bg-[#0A211F] p-2">
                              <Icon className="h-4 w-4 text-[#00E5CC]" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="rounded-2xl border border-[#14332F] bg-[#061313] p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#70E7D8]">
                          Session runtime
                        </p>
                        <Gauge className="h-4 w-4 text-[#00E5CC]" />
                      </div>
                      <div className="mt-4 space-y-3">
                        <div className="rounded-xl border border-[#183D38] bg-[#081816] p-3">
                          <p className="text-sm font-semibold text-white">
                            Warm-up, workout, cooldown
                          </p>
                          <p className="mt-1 text-sm text-[#8EA9A4]">
                            Guided session flow instead of a bare checklist.
                          </p>
                        </div>
                        <div className="rounded-xl border border-[#183D38] bg-[#081816] p-3">
                          <p className="text-sm font-semibold text-white">
                            Set logging and timers
                          </p>
                          <p className="mt-1 text-sm text-[#8EA9A4]">
                            The product tracks what the user actually did, not
                            just what was prescribed.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#14332F] bg-[#061313] p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#70E7D8]">
                          Coach layer
                        </p>
                        <MessageSquare className="h-4 w-4 text-[#00E5CC]" />
                      </div>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3 rounded-xl border border-[#183D38] bg-[#081816] px-3 py-3">
                          <Activity className="h-4 w-4 text-[#00E5CC]" />
                          <span className="text-sm text-white">
                            Mid-workout adjustments
                          </span>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-[#183D38] bg-[#081816] px-3 py-3">
                          <Wind className="h-4 w-4 text-[#00E5CC]" />
                          <span className="text-sm text-white">
                            Session feel and recovery signals
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#102A27] bg-[#050D0C] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-[#67DCCD]">
              What it is
            </p>
            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Built for progression, not random workout churn
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#9BB2AE]">
              Vectra is positioned as an AI-guided fitness product that behaves
              more like a training system than a content feed. The product is
              meant to help users understand what they are doing now, why they
              are doing it, and what happens next.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {vectraValueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#153732] bg-[#081413] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#67DCCD]">
                  Vector // capability
                </p>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#A9BCB8]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5CC]/60 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-[#67DCCD]">
              Training flow
            </p>
            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              How the product experience moves from setup to next phase
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#9BB2AE]">
              The real product loop is already centered on the relationship
              between setup, execution, feedback, and evaluation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {vectraJourneySteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-[#153732] bg-[linear-gradient(180deg,_rgba(9,20,19,0.96),_rgba(6,14,13,0.96))] p-6"
              >
                <p className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#67DCCD]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#A7BBB7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#102A27] bg-[#06100F] py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-[#67DCCD]">
                Current product scope
              </p>
              <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                The current build is focused on the coaching loop itself
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#9BB2AE]">
                What is already represented in the product is the heart of the
                experience: getting someone into the right plan, guiding them
                through sessions, collecting the right signals, and using those
                signals to shape what comes next.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {vectraCurrentBuild.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#153732] bg-[#081514] px-5 py-4 text-[#D7E5E2]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-[#1B3F3A] bg-[#091716] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-[#00E5CC]" />
                  <h3 className="text-2xl font-bold text-white">
                    Designed to feel coach-led
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#A8BCB8]">
                  Vectra is not positioned as a library of disconnected
                  exercises. The user-facing promise is that the product knows
                  where the user is in the plan, what happened in the block, and
                  how the next phase should respond.
                </p>
              </div>

              {vectraPlanningCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#153732] bg-[#081514] p-8"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#67DCCD]">
                    Phase logic
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#A8BCB8]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-[2rem] border border-[#173C38] bg-[linear-gradient(135deg,_rgba(0,229,204,0.1),_rgba(255,255,255,0.015))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:p-12">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-[#67DCCD]">
              Grounded product note
            </p>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#D8E7E3]">
              {vectraRealityNote}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#153732] bg-[#081514] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#67DCCD]">
                  On the site side
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#C9DBD7]">
                  This route is structured to work now as a standard page and
                  later as the destination a Vectra subdomain can point at.
                </p>
              </div>
              <div className="rounded-2xl border border-[#153732] bg-[#081514] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#67DCCD]">
                  In the product
                </p>
                <ul className="mt-3 space-y-2 text-base text-[#C9DBD7]">
                  {runtimeSignals.map((signal) => (
                    <li key={signal} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00E5CC]" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-[#00E5CC] text-[#041110] hover:bg-[#31F0DE]"
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
                className="border-[#1D5C55] bg-transparent text-[#DDF7F2] hover:bg-[#0D1F1D] hover:text-white"
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
