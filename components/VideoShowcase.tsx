"use client";
import { useLocale } from "@/lib/i18n";

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-[hsl(0_0%_5%)] text-[hsl(0_0%_95%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("videoShowcase.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("videoShowcase.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)]">
            {String(t("videoShowcase.subtitle"))}
          </p>
        </div>

        {/* Video Player Frame with Dark Scrim */}
        <div className="relative rounded-xs overflow-hidden border border-[hsl(0_0%_20%)] max-w-5xl mx-auto aspect-video shadow-2xl bg-[hsl(0_0%_8%)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={String(t("videoShowcase.poster"))}
            className="w-full h-full object-cover filter brightness-90"
          >
            <source
              src={String(t("videoShowcase.videoSrc"))}
              type="video/mp4"
            />
          </video>
        </div>

        {/* Standalone Statement Band */}
        <div className="mt-12 text-center py-6 border-y border-[hsl(0_0%_15%)]">
          <span className="font-['Alumni_Sans'] text-3xl sm:text-5xl font-extrabold uppercase tracking-widest text-[hsl(38_90%_50%)]">
            {String(t("videoShowcase.statement"))}
          </span>
        </div>
      </div>
    </section>
  );
}