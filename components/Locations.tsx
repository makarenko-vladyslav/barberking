"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface LocationItem {
  id: string;
  name: string;
  address: string;
  subway: string;
  hours: string;
  parking: string;
  phone: string;
  badge: string;
  mapQuery: string;
}

export default function Locations() {
  const { t } = useLocale();

  const kicker = (t("locations.kicker") as string) || "ГЕОГРАФІЯ КОМФОРТУ";
  const title = (t("locations.title") as string) || "4 ЛОКАЦІЇ НА ПРАВОМУ ТА ЛІВОМУ БЕРЕЗІ";
  const subtitle = (t("locations.subtitle") as string) || "";
  const items = (t("locations.items") as LocationItem[]) || [];

  const [activeId, setActiveId] = useState<string>(items[0]?.id || "lukyanivka");
  const activeLocation = items.find((item) => item.id === activeId) || items[0];

  return (
    <section id="locations" className="py-20 sm:py-28 bg-[hsl(0_0%_7%)] text-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none aria-hidden overflow-hidden">
        <span className="font-display font-extrabold text-[20vw] text-white/[0.02] tracking-tighter block leading-none">
          KYIV
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[hsl(32_90%_50%)] uppercase mb-2 block">
            — {kicker}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light">
            {subtitle}
          </p>
        </div>

        {/* Locations List + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {items.map((loc) => {
              const isActive = loc.id === activeId;
              return (
                <div
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-[hsl(32_90%_50%)] shadow-xl shadow-[hsl(32_90%_50%/0.1)] scale-[1.01]"
                      : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/8"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded text-xs font-mono bg-[hsl(32_90%_50%/0.2)] text-[hsl(32_90%_50%)] border border-[hsl(32_90%_50%/0.3)]">
                      {loc.badge}
                    </span>
                    <span className="text-xs font-mono text-white/50">
                      {loc.hours}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mb-2">
                    {loc.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/80 font-light mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono text-[hsl(32_90%_50%)]">Адреса:</span>
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono text-[hsl(32_90%_50%)]">Метро:</span>
                      <span>{loc.subway}</span>
                    </div>
                    <div className="flex items-baseline gap-2 sm:col-span-2">
                      <span className="text-xs font-mono text-[hsl(32_90%_50%)]">Паркінг:</span>
                      <span>{loc.parking}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <a
                      href={`tel:${loc.phone}`}
                      className="text-xs font-mono text-white/80 hover:text-[hsl(32_90%_50%)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Тел: {loc.phone}
                    </a>
                    <a
                      href="#booking"
                      className="px-4 py-2 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-bold text-base tracking-wider hover:bg-[hsl(28_95%_45%)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Записатись сюди ↗
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-5 h-[28rem] sm:h-[34rem] rounded-xl overflow-hidden border border-white/15 bg-white/5 relative flex flex-col">
            <div className="p-4 bg-[hsl(0_0%_11%)] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[hsl(32_90%_50%)] uppercase block">
                  Активна філія:
                </span>
                <span className="font-display font-bold text-xl text-white">
                  {activeLocation.name}
                </span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activeLocation.mapQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[hsl(32_90%_50%)] underline hover:text-white"
              >
                Маршрут Google Maps
              </a>
            </div>

            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                activeLocation.mapQuery
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title={`Map of ${activeLocation.name}`}
              className="w-full flex-1 filter grayscale invert-[0.95] contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
