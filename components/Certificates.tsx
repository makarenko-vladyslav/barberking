"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function Certificates() {
  const { t } = useLocale();
  const points = (t("certificates.points") as string[]) || [];

  return (
    <section id="certificates" className="py-24 bg-neutral-900 border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                {String(t("certificates.kicker"))}
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-6">
                {String(t("certificates.title"))}
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed mb-8">
                {String(t("certificates.subtitle"))}
              </p>

              <div className="space-y-4 mb-8">
                {points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-amber-400 text-black font-bold uppercase tracking-widest text-xs rounded-lg transition-all shadow-lg shadow-amber-500/20"
              >
                {String(t("certificates.btn"))}
              </a>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-amber-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
                <img
                  src={String(t("certificates.img"))}
                  alt={String(t("certificates.imgAlt"))}
                  loading="lazy"
                  className="relative rounded-xl border border-white/20 shadow-2xl w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
