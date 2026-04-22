import {
  CalendarDays,
  CheckCircle2,
  MapPinned,
  Route,
  UsersRound,
} from "lucide-react";

const tiles = [
  {
    icon: UsersRound,
    label: "People",
    value: "Invite app users and keep externals in the loop",
    accent: "text-[#C75B39]",
    tone: "bg-[#FFF5F1] border-[#F0D1C8]",
  },
  {
    icon: CalendarDays,
    label: "Dates",
    value: "Compare availability before anything is locked",
    accent: "text-[#2D5F5D]",
    tone: "bg-[#F1F7F6] border-[#D4E3E2]",
  },
  {
    icon: Route,
    label: "Flow",
    value: "Move from planning into prep with more clarity",
    accent: "text-[#E8A838]",
    tone: "bg-[#FFF8E7] border-[#ECD9A8]",
  },
];

export default function CaravanShowcaseVisual() {
  return (
    <div className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-[#E8E4DE] bg-[linear-gradient(180deg,#F7F3EE_0%,#EEE6DC_100%)] p-6 shadow-[0_30px_100px_rgba(28,28,30,0.10)]">
      <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-[#C75B39]/12 blur-3xl" />
      <div className="absolute -right-8 bottom-4 h-44 w-44 rounded-full bg-[#2D5F5D]/12 blur-3xl" />
      <div className="absolute right-10 top-10 rounded-full border border-[#ECD9A8] bg-[#FFF8E7] px-4 py-2 text-sm font-semibold text-[#8A6517] shadow-sm">
        Active planning
      </div>

      <div className="relative flex h-full items-center justify-center">
        <div className="absolute left-0 top-10 hidden w-48 rounded-[1.75rem] border border-[#F0D1C8] bg-[#FFF5F1] p-4 lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A5A47]">
            Group pulse
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1C1C1E]">
            See who is in before every detail is final.
          </p>
        </div>

        <div className="absolute bottom-10 right-0 hidden w-52 rounded-[1.75rem] border border-[#D4E3E2] bg-[#F1F7F6] p-4 lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2D5F5D]">
            Date fit
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1C1C1E]">
            Compare options before the plan stalls out.
          </p>
        </div>

        <div className="relative w-full max-w-[23rem] rounded-[2.75rem] border-[10px] border-[#1C1C1E] bg-[#1C1C1E] p-2 shadow-[0_35px_90px_rgba(28,28,30,0.24)]">
          <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#1C1C1E]" />
          <div className="overflow-hidden rounded-[2.15rem] bg-[#FAFAF7]">
            <div className="bg-[linear-gradient(180deg,#2D5F5D_0%,#234B49_100%)] px-5 pb-6 pt-7 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                    Caravan
                  </p>
                  <p className="mt-2 text-[1.6rem] font-black leading-none">
                    Go places,
                    <br />
                    together.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/12 px-3 py-2 text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Focus
                  </p>
                  <p className="text-sm font-semibold">Private groups</p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/68">
                      Weekend plan
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      Spring canyon trip
                    </p>
                  </div>
                  <div className="rounded-full bg-[#E8A838] px-3 py-1 text-xs font-semibold text-[#1C1C1E]">
                    Planning
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/10 px-3 py-2">
                    <p className="text-white/65">People</p>
                    <p className="mt-1 font-semibold">8 invited</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-3 py-2">
                    <p className="text-white/65">Dates</p>
                    <p className="mt-1 font-semibold">3 options open</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-5">
              <div className="rounded-[1.6rem] border border-[#EDE9E3] bg-white p-4 shadow-[0_14px_30px_rgba(28,28,30,0.05)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FFF5F1] p-3 text-[#C75B39]">
                    <UsersRound className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1C1C1E]">
                      Start with your people
                    </p>
                    <p className="text-sm text-[#6B6B6F]">
                      Invite now, even if not everyone is in the app yet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[#EDE9E3] bg-[#F3F0EB] p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#F1F7F6] p-3 text-[#2D5F5D]">
                    <CalendarDays className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1C1C1E]">
                      Compare date fit
                    </p>
                    <p className="text-sm text-[#6B6B6F]">
                      See which days work best before picking the final dates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[#EDE9E3] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#FFF8E7] p-3 text-[#B88312]">
                      <MapPinned className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1C1C1E]">
                        Keep the plan readable
                      </p>
                      <p className="text-sm text-[#6B6B6F]">
                        Organize places, events, and next steps in one view.
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="size-5 shrink-0 text-[#34A853]" />
                </div>
              </div>

              <div className="grid gap-3">
                {tiles.map(({ icon: Icon, label, value, accent, tone }) => (
                  <div
                    key={label}
                    className={`rounded-[1.4rem] border px-4 py-3 ${tone}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`rounded-xl bg-white/80 p-2 ${accent}`}>
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6F]">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-6 text-[#1C1C1E]">
                          {value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
