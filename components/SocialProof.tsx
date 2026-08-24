"use client";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();
  const stats = (t("stats") as Array<{ value: string; label: string }>) || [];

  const tickerPhrases = [
    String(t("socialProof.p1")),
    "—",
    String(t("socialProof.p2")),
    "—",
    String(t("socialProof.p3")),
    "—",
    String(t("socialProof.p4")),
    "—",
    String(t("socialProof.p5")),
    "—",
    String(t("socialProof.p6")),
    "—",
    String(t("socialProof.p7")),
    "—"
  ];

  return (
    <section className="bg-[hsl(0_0%_6%)] border-y border-[hsl(0_0%_15%)] py-8 overflow-hidden">
      {/* Ticker marquee strip using Marquee component */}
      <div className="relative w-full overflow-hidden whitespace-nowrap mb-8 opacity-75 select-none">
        <Marquee speed={40} className="text-xs font-bold uppercase tracking-widest text-[hsl(38_90%_50%)] gap-8">
          {tickerPhrases.map((phrase, idx) => (
            <span key={idx} className="mx-4">{phrase}</span>
          ))}
        </Marquee>
      </div>

      {/* Stats Counter Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_15%)] rounded-xs"
            >
              <div className="font-['Alumni_Sans'] text-4xl sm:text-5xl font-extrabold text-[hsl(0_0%_95%)] mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-[11px] text-[hsl(0_0%_60%)] uppercase tracking-wider font-semibold max-w-[200px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
