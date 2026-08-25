"use client";

import { useLocale } from "@/lib/i18n";

export default function CertificatesSubscriptions() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
              {t("certificates.kicker") as string}
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white leading-none">
              {t("certificates.title") as string}
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed">
              {t("certificates.desc") as string}
            </p>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-4">
              <h3 className="text-xl font-display font-bold uppercase text-amber-400">
                {t("certificates.subTitle") as string}
              </h3>
              <div className="space-y-2 text-sm text-zinc-200 font-mono">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-zinc-800 pb-2">
                  <span>{t("certificates.sub1") as string}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-zinc-800 pb-2">
                  <span>{t("certificates.sub2") as string}</span>
                </div>
              </div>
            </div>

            <a
              href="#booking"
              className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wider text-xl rounded shadow-xl"
            >
              {t("certificates.btnOrder") as string}
            </a>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 hover:scale-105 transition-transform duration-500">
              <img
                src={t("certificates.cardImg") as string}
                alt={t("certificates.cardAlt") as string}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}