"use client";
import { useLocale } from "@/lib/i18n";

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-[hsl(18_10%_12%)] text-white border-y border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
              {String(t("video.kicker"))}
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white leading-tight">
              {String(t("video.heading"))}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {String(t("video.subheading"))}
            </p>

            <div className="pt-4 flex items-center space-x-6 border-t border-hairline">
              <div>
                <div className="font-display font-bold text-3xl text-amber-400">100%</div>
                <div className="text-xs text-gray-400 uppercase">Стерильність інструментів</div>
              </div>
              <div>
                <div className="font-display font-bold text-3xl text-amber-400">Caputo / Suavecito</div>
                <div className="text-xs text-gray-400 uppercase">Преміум косметика</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-hairline shadow-2xl bg-black">
            <video
              controls
              muted
              loop
              playsInline
              poster="https://images.pexels.com/videos/7426382/pexels-photo-7426382.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
              className="w-full h-auto aspect-video object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/7686511/7686511-hd_1280_720_24fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
