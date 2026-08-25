"use client";

import { useLocale } from "@/lib/i18n";

export default function ServerInterstitials() {
  const { t } = useLocale();

  return (
    <div className="w-full bg-zinc-950 border-y border-zinc-800 py-6 text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">
        <span>{t("interstitials.mapGoogle") as string}</span>
        <span className="text-amber-500">·</span>
        <span>{t("interstitials.mapReviews") as string}</span>
        <span className="text-amber-500">·</span>
        <span>{t("interstitials.mapLocations") as string}</span>
      </div>
    </div>
  );
}