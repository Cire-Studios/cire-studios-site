export default function InDevelopmentPanel({
  label = "In Development",
}: {
  label?: string | null;
}) {
  return (
    <div className="relative h-full w-full min-h-[220px] overflow-hidden border border-zinc-800 bg-zinc-950">
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 42%), linear-gradient(315deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2"
        aria-hidden
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.07), transparent 70%)",
          boxShadow: "inset -1px 0 0 rgba(255,255,255,0.12)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2"
        aria-hidden
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
          background:
            "linear-gradient(315deg, rgba(255,255,255,0.06), transparent 70%)",
          boxShadow: "inset 1px 0 0 rgba(255,255,255,0.1)",
        }}
      />
      <div className="relative z-10 flex h-full min-h-[220px] items-center justify-center">
        {label ? (
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] uppercase text-zinc-500">
            {label}
          </p>
        ) : null}
      </div>
    </div>
  );
}
