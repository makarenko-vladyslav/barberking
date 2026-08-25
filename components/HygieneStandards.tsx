"use client";

import { useLocale } from "@/lib/i18n";

export default function HygieneStandards() {
  const { t } = useLocale();
  const items = (t("hygiene.items") as Array<{ title: string; desc: string }>) || [];

  return (
    <section id="hygiene" className="py-20 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
            {t("hygiene.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4">
            {t("hygiene.title") as string}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-colors flex gap-6"
            >
              <div className="shrink-0 text-amber-400 font-display text-4xl font-extrabold font-mono">
                0{idx + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold uppercase text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
