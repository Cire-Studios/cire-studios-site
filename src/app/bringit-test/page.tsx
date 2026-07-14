import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Download,
  MailCheck,
  MessageCircleHeart,
  PartyPopper,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Test BringIt on Android | Cire Studios",
  description:
    "Join the BringIt Android tester group, get test access, and install the latest test build from Google Play.",
};

const testerGroupUrl =
  process.env.NEXT_PUBLIC_BRINGIT_TESTER_GROUP_URL ??
  "https://groups.google.com/u/1/g/bringit-android-testers";
const testAccessUrl =
  process.env.NEXT_PUBLIC_BRINGIT_TEST_ACCESS_URL ??
  "https://play.google.com/apps/testing/app.cirestudios.bringit";
const playStoreUrl =
  process.env.NEXT_PUBLIC_BRINGIT_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=app.cirestudios.bringit";

const steps = [
  {
    number: "01",
    title: "Join the tester group",
    description:
      "Open the BringIt Google Group and choose “Join group.” This adds your Google account to the approved tester list.",
    action: "Join the tester group",
    href: testerGroupUrl,
    icon: Users,
    accent: "persimmon",
  },
  {
    number: "02",
    title: "Become a tester",
    description:
      "After joining the group, open the test page and choose “Become a tester.”",
    action: "Open the test page",
    href: testAccessUrl,
    icon: ShieldCheck,
    accent: "forest",
  },
  {
    number: "03",
    title: "Install BringIt",
    description:
      "Once you have opted in, open the BringIt listing to install the app—or update it if it is already on your phone.",
    action: "Open in Google Play",
    href: playStoreUrl,
    icon: Download,
    accent: "gold",
  },
] as const;

const accentStyles = {
  persimmon: {
    icon: "bg-[#FBE3D7] text-[#C44A28]",
    button: "bg-[#E2613C] text-white hover:bg-[#C44A28]",
  },
  forest: {
    icon: "bg-[#DCEBE0] text-[#2F6B4F]",
    button: "bg-[#2F6B4F] text-white hover:bg-[#24543E]",
  },
  gold: {
    icon: "bg-[#FBEFD3] text-[#9A6D1A]",
    button: "bg-[#E0A43B] text-[#2A2420] hover:bg-[#C9852E]",
  },
} as const;

export default function BringItTestPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF6EE] text-[#2A2420]">
      <section className="relative border-b border-[#E9DECB]">
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#FBE3D7] blur-3xl" />
        <div className="absolute -right-24 top-4 h-96 w-96 rounded-full bg-[#DCEBE0] blur-3xl" />
        <div className="container relative mx-auto grid items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2613C]/20 bg-white/70 px-4 py-2 text-sm font-bold text-[#C44A28] shadow-sm backdrop-blur">
              <PartyPopper className="h-4 w-4" />
              Android early access
            </div>
            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-[#2A2420] sm:text-5xl md:text-6xl">
              Help make every gathering easier to bring together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B5249] md:text-xl">
              Join the BringIt test crew and try the Android app before its
              wider release. Your feedback will help us make planning food,
              RSVPs, and shared events feel effortless.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#5B5249]">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#2F6B4F]" /> Free to test
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#2F6B4F]" /> About 2 minutes
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#2F6B4F]" /> Android only
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rotate-3 rounded-[3rem] bg-[#E2613C]/15" />
            <div className="relative rounded-[2.5rem] border border-[#E9DECB] bg-white/90 p-6 shadow-[0_28px_80px_rgba(89,66,46,0.16)] backdrop-blur sm:p-8">
              <div className="flex items-center gap-5">
                <Image
                  src="/bringit-icon.png"
                  alt="BringIt app icon"
                  width={112}
                  height={112}
                  className="h-24 w-24 rounded-[1.7rem] shadow-lg"
                  priority
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E2613C]">
                    BringIt
                  </p>
                  <p className="mt-2 text-2xl font-black leading-tight">
                    Good food. Great people. Nothing forgotten.
                  </p>
                </div>
              </div>
              <div className="mt-7 rounded-3xl bg-[#F3EADB] p-5">
                <div className="flex items-start gap-3">
                  <MailCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6B4F]" />
                  <div>
                    <p className="font-bold">Use one Google account</p>
                    <p className="mt-1 text-sm leading-6 text-[#5B5249]">
                      Join the group and open Google Play with the same account
                      so your tester access is recognized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E2613C]">
            Three quick steps
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Join, opt in, and install.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5B5249]">
            Complete these in order. Keep this page open so it is easy to come
            back for the next step.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
          {steps.map((step) => {
            const styles = accentStyles[step.accent];
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="flex h-full flex-col rounded-[2rem] border border-[#E9DECB] bg-white p-6 shadow-[0_14px_40px_rgba(89,66,46,0.07)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm font-bold tracking-[0.2em] text-[#94897C]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-black tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-[#5B5249]">
                  {step.description}
                </p>
                <Link
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-center font-bold shadow-sm transition-colors ${styles.button}`}
                >
                  {step.action}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#E9DECB] bg-[#F3EADB]">
        <div className="container mx-auto grid gap-8 px-6 py-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE3D7] text-[#C44A28]">
              <MessageCircleHeart className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight">
              Found something odd? Tell us.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-[#5B5249]">
              Bugs, confusing moments, and small delights all help. Share what
              happened, what you expected, and your phone model if you know it.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="mailto:cirestudios.dev@gmail.com?subject=BringIt%20Android%20test%20feedback"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2A2420] px-6 py-3 font-bold text-white transition-colors hover:bg-black"
            >
              Send test feedback
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.getbringit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D8C9B2] bg-white px-6 py-3 font-bold transition-colors hover:bg-[#FBF6EE]"
            >
              Visit BringIt
              <Smartphone className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF6EE] px-6 py-10 text-center text-sm text-[#94897C]">
        <p>
          Test builds may change often and can include unfinished features.
          Thanks for helping BringIt grow.
        </p>
      </section>
    </main>
  );
}
