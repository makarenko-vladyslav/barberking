"use client";

interface InterstitialProps {
  type: "watermark" | "statement" | "hairline";
  text?: string;
  subText?: string;
}

export default function Interstitial({ type, text, subText }: InterstitialProps) {
  if (type === "watermark") {
    return (
      <div className="py-8 bg-[hsl(0_0%_7%)] border-t border-b border-white/10 overflow-hidden relative select-none pointer-events-none aria-hidden">
        <div className="text-center">
          <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[11rem] text-white/[0.04] tracking-tighter whitespace-nowrap block leading-none uppercase">
            {text || "KYIV CRAFT BARBERS"}
          </span>
        </div>
      </div>
    );
  }

  if (type === "statement") {
    return (
      <div className="py-12 px-4 bg-[hsl(0_0%_11%)] border-y border-white/10 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-mono tracking-[0.25em] text-[hsl(32_90%_50%)] uppercase block mb-3">
            — {subText || "РЕЗУЛЬТАТ ТА ДОВІРА"} —
          </span>
          <p className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
            {text || "69 000+ КЛІЄНТІВ ОБРАЛИ BARBERKING З 2014 РОКУ"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 bg-[hsl(0_0%_7%)] border-y border-white/10 text-center">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <div className="h-[1px] bg-white/10 flex-1" />
        <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase whitespace-nowrap">
          — {text || "СТАНДАРТИ ТА ТАЙМІНГ"} —
        </span>
        <div className="h-[1px] bg-white/10 flex-1" />
      </div>
    </div>
  );
}
