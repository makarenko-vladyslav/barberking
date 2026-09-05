"use client";
import { useLocale } from "@/lib/i18n";

export default function VideoAtmosphere() {
  const { t } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-bg-dark border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("videoSection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("videoSection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base">
            {String(t("videoSection.subtitle"))}
          </p>
        </div>

        {/* Video Showcase Card */}
        <div className="relative rounded overflow-hidden border border-border-dark bg-primary aspect-[16/9] max-h-[620px] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/videos/7686511/pexels-photo-7686511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/7686511/7686511-hd_1280_720_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-accent text-bg-dark font-display text-sm font-bold uppercase tracking-wider rounded mb-2">
                Атмосфера Barberking
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-text-light">
                Чоловічий клуб без метушні та зайвого шуму
              </h3>
            </div>
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-6 py-3 bg-text-light text-bg-dark font-display text-lg font-bold uppercase tracking-wider rounded hover:bg-accent transition-colors"
            >
              Забронювати візит
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
