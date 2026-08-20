"use client";
import { useLocale } from "@/lib/i18n";

interface TattooStudioProps {
  onOpenBooking: (service?: string) => void;
}

export default function TattooStudio({ onOpenBooking }: TattooStudioProps) {
  const { t } = useLocale();

  return (
    <section id="tattoo" className="py-20 bg-[hsl(18_10%_12%)] text-white border-y border-hairline scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-amber-500/10 border border-hairline-accent px-3 py-1 rounded text-amber-400 text-xs font-bold uppercase tracking-widest">
              {String(t("tattoo.kicker"))}
            </div>

            <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white leading-tight">
              {String(t("tattoo.heading"))}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {String(t("tattoo.subheading"))}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-gray-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{String(t("tattoo.feature1"))}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{String(t("tattoo.feature2"))}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{String(t("tattoo.feature3"))}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking("Tattoo Room")}
                className="bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-2xl px-8 py-3.5 rounded transition-all shadow-xl shadow-amber-500/20"
              >
                {String(t("tattoo.cta"))}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-hairline bg-gray-900 shadow-2xl relative">
              <img
                src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg"
                alt="Tattoo Room Barberking"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="text-amber-400 font-display font-bold text-2xl uppercase">
                  ТА ТУЮВАННЯ НА ПАВЛІВСЬКІЙ 18
                </div>
                <div className="text-gray-300 text-xs">
                  Окремий кабінет з дотриманням усіх санітарних норм МОЗ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
