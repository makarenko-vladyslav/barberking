"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-neutral-950 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("video.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("video.title"))}
            </h2>
            <p className="text-neutral-400 text-base">
              {String(t("video.subtitle"))}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-video max-w-5xl mx-auto shadow-2xl bg-neutral-900">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={String(t("video.poster"))}
              className="w-full h-full object-cover filter brightness-90"
            >
              <source src={String(t("video.videoSrc"))} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent block mb-1">
                  ПРОФЕСІЙНИЙ РИТУАЛ
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-1">
                  Атмосфера Barberking Kyiv
                </h3>
                <p className="text-xs text-neutral-300">
                  {String(t("video.caption"))}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
