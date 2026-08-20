"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface LocationsProps {
  onOpenBooking: (locationId?: string) => void;
}

export default function Locations({ onOpenBooking }: LocationsProps) {
  const { t } = useLocale();
  const list = (t("locations.list") as Array<{
    id: string;
    name: string;
    address: string;
    metro: string;
    phone: string;
    hours: string;
    features: string[];
    mapQuery: string;
  }>) || [];

  const [activeTab, setActiveTab] = useState(list[0]?.id || "pavlivska");
  const selected = list.find((item) => item.id === activeTab) || list[0];

  return (
    <section id="locations" className="py-20 bg-[hsl(18_12%_8%)] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
            {String(t("locations.kicker"))}
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white">
            {String(t("locations.heading"))}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            {String(t("locations.subheading"))}
          </p>
        </div>

        {/* Location Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {list.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(loc.id)}
              className={`p-4 rounded border text-left transition-all ${
                activeTab === loc.id
                  ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20"
                  : "bg-[hsl(18_10%_12%)] text-gray-300 border-hairline hover:border-gray-600"
              }`}
            >
              <div className="font-display font-extrabold text-2xl uppercase leading-tight">
                {loc.name}
              </div>
              <div
                className={`text-xs mt-1 ${
                  activeTab === loc.id ? "text-black/80" : "text-gray-400"
                }`}
              >
                {loc.metro}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Location Details & Embed Map */}
        {selected && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[hsl(18_10%_12%)] border border-hairline rounded-lg p-6 sm:p-8">
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block bg-amber-500/10 text-amber-400 border border-hairline-accent px-3 py-1 rounded text-xs font-bold uppercase">
                  {selected.metro}
                </div>

                <h3 className="font-display font-extrabold text-4xl uppercase text-white">
                  {selected.name}
                </h3>

                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold text-lg">📍</span>
                    <div>
                      <div className="text-gray-400 text-xs">Адреса:</div>
                      <div className="font-semibold text-white">{selected.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold text-lg">🕒</span>
                    <div>
                      <div className="text-gray-400 text-xs">Графік роботи:</div>
                      <div className="font-semibold text-white">{selected.hours}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 font-bold text-lg">📞</span>
                    <div>
                      <div className="text-gray-400 text-xs">Прямий телефон:</div>
                      <a
                        href={String(t("brand.phoneRaw"))}
                        className="font-semibold text-amber-400 hover:underline"
                      >
                        {selected.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs uppercase text-gray-400 font-bold mb-2">
                    Зручності у цій філії:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.features.map((feat, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-200 text-xs px-2.5 py-1 rounded border border-hairline"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-hairline">
                <button
                  onClick={() => onOpenBooking(selected.id)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-2xl py-3 rounded transition-all shadow-lg shadow-amber-500/20"
                >
                  {String(t("locations.bookThis"))} →
                </button>
              </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-7 min-h-[320px] rounded-md overflow-hidden border border-hairline relative bg-gray-900">
              <iframe
                title={`Map of ${selected.name}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${selected.mapQuery}&output=embed`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
