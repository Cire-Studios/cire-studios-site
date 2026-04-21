import {
  CalendarDays,
  MapPinned,
  MessageSquareMore,
  Route,
  UsersRound,
} from "lucide-react";

const statCards = [
  {
    icon: UsersRound,
    label: "Group view",
    value: "See who is in and where things stand",
  },
  {
    icon: CalendarDays,
    label: "Date fit",
    value: "Compare the days that work best",
  },
  {
    icon: Route,
    label: "Plan flow",
    value: "Move from rough idea to ready-to-go",
  },
  {
    icon: MapPinned,
    label: "Shared details",
    value: "Keep places, events, and next steps clear",
  },
];

export default function CaravanShowcaseVisual() {
  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] border border-[#5BC0EB]/20 bg-[radial-gradient(circle_at_top_left,_rgba(91,192,235,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.14),_transparent_34%),linear-gradient(180deg,_#07111B_0%,_#050912_100%)] p-6">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[#5BC0EB]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full bg-[#F59E0B]/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-[#5BC0EB]/30 bg-[#5BC0EB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#BFE8FF]">
            Caravan
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#08121D]/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#8FD9FF]">
                  Caravan flow
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Coordination that keeps moving
                </p>
              </div>
              <div className="rounded-2xl border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-3 py-2 text-right">
                <p className="text-xs text-[#FCD48B]">Current focus</p>
                <p className="text-sm font-semibold text-white">
                  Private-group planning
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <UsersRound className="h-5 w-5 text-[#5BC0EB]" />
                  <div>
                    <p className="font-semibold text-white">Start with your people</p>
                    <p className="text-sm text-[#A6B5C7]">
                      Bring in app users, save externals, and keep the group moving before every detail is settled.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-[#5BC0EB]" />
                  <div>
                    <p className="font-semibold text-white">See date fit clearly</p>
                    <p className="text-sm text-[#A6B5C7]">
                      Compare availability, watch momentum build, and choose dates the group can actually commit to.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <MessageSquareMore className="h-5 w-5 text-[#5BC0EB]" />
                  <div>
                    <p className="font-semibold text-white">Keep the plan readable</p>
                    <p className="text-sm text-[#A6B5C7]">
                      Organize events, responsibilities, and important details so updates do not disappear into chat noise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {statCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-[#0A1522]/85 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-sm"
            >
              <div className="mb-3 inline-flex rounded-xl bg-[#5BC0EB]/15 p-2 text-[#BFE8FF]">
                <Icon className="size-4" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8FD9FF]/75">{label}</p>
              <p className="mt-2 text-base font-medium text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
