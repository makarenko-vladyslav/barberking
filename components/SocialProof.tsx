"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="bg-neutral-900 border-b border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-white/10 last:border-none">
              <div className="font-display text-4xl lg:text-5xl font-extrabold text-accent tabular-nums">
                {String(t("proof.stat1_val"))}
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-2 font-medium">
                {String(t("proof.stat1_lbl"))}
              </div>
            </div>

            <div className="p-4 border-r border-white/10 last:border-none">
              <div className="font-display text-4xl lg:text-5xl font-extrabold text-white tabular-nums">
                {String(t("proof.stat2_val"))}
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-2 font-medium">
                {String(t("proof.stat2_lbl"))}
              </div>
            </div>

            <div className="p-4 border-r border-white/10 last:border-none">
              <div className="font-display text-4xl lg:text-5xl font-extrabold text-accent tabular-nums">
                {String(t("proof.stat3_val"))}
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-2 font-medium">
                {String(t("proof.stat3_lbl"))}
              </div>
            </div>

            <div className="p-4">
              <div className="font-display text-4xl lg:text-5xl font-extrabold text-white tabular-nums">
                {String(t("proof.stat4_val"))}
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-2 font-medium">
                {String(t("proof.stat4_lbl"))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
