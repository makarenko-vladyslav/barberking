"use client";

import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();
  const stats = (t("stats") as Array<{ value: string; label: string }>) || [];
  const tickerPhrases = (t("socialProof.ticker") as string[]) || [];

  return (
    <section className="bg-zinc-900 border-y border-zinc-800 py-10 relative z-20">
      {/* Infinite Marquee Strip */}
      <div className="pb-8 border-b border-zinc-800/60 mb-8">
        <Marquee items={tickerPhrases} speed={20} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-amber-400 mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-body max-w-[180px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}