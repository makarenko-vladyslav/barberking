"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Locations() {
  const { t } = useLocale();
  const [activeBranch, setActiveBranch] = useState(0);

  const locations = (t("locations.items") as Array<{
    id: string;
    district: string;
    address: string;
    phone: string;
    mapUrl: string;
    desc: string;
  }>) || [];

  const current = locations[activeBranch] || locations[0];

  return (
    <section id="locations" className="py-24 bg-[hsl(0_0%_5%)] text-[hsl(0_0%_95%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("locations.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("locations.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)]">
            {String(t("locations.subtitle"))}
          </p>
        </div>

        {/* Branch Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {locations.map((loc, idx) => (
            <button
              key={loc.id}
              onClick={() => setActiveBranch(idx)}
              className={`p-5 text-left rounded-xs border transition-all flex flex-col justify-between ${
                activeBranch === idx
                  ? "bg-[hsl(0_0%_12%)] border-[hsl(38_90%_50%)] shadow-lg"
                  : "bg-[hsl(0_0%_8%)] border-[hsl(0_0%_15%)] hover:border-[hsl(0_0%_25%)]"
              }`}
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold block mb-1">
                  {loc.district}
                </span>
                <h3 className="font-['Alumni_Sans'] text-2xl font-bold uppercase text-[hsl(0_0%_95%)]">
                  {loc.address}
                </h3>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-[11px] text-[hsl(0_0%_60%)]">
                <span>{String(t("locations.parkingOpen"))}</span>
                <span className={activeBranch === idx ? "text-[hsl(38_90%_50%)] font-bold" : ""}>
                  {String(t("locations.selectedArrow"))}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Branch Map & Details */}
        {current && (
          <div className="bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_16%)] rounded-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Details Box */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-[hsl(38_90%_50%/0.12)] text-[hsl(38_90%_50%)] border border-[hsl(38_90%_50%/0.3)] text-xs font-bold uppercase tracking-wider rounded-xs mb-4">
                  {current.district}
                </div>
                <h3 className="font-['Alumni_Sans'] text-4xl font-extrabold uppercase tracking-wide text-[hsl(0_0%_95%)] mb-4">
                  {current.address}
                </h3>
                <p className="text-sm text-[hsl(0_0%_70%)] leading-relaxed mb-6">
                  {current.desc}
                </p>

                <div className="flex flex-col gap-3 text-xs text-[hsl(0_0%_85%)] mb-8 divide-y divide-[hsl(0_0%_14%)]">
                  <div className="py-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <span className="text-[hsl(0_0%_50%)] uppercase tracking-wider">{String(t("locations.labelAddress"))}</span>
                    <span className="font-semibold text-[hsl(0_0%_95%)]">Київ, {current.address}</span>
                  </div>
                  <div className="py-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <span className="text-[hsl(0_0%_50%)] uppercase tracking-wider">{String(t("locations.labelHours"))}</span>
                    <span className="font-semibold text-[hsl(38_90%_50%)]">{String(t("locations.hours"))}</span>
                  </div>
                  <div className="py-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <span className="text-[hsl(0_0%_50%)] uppercase tracking-wider">{String(t("locations.labelPhone"))}</span>
                    <a href={`tel:${current.phone.replace(/\s+/g, '')}`} className="font-bold text-[hsl(0_0%_95%)] hover:text-[hsl(38_90%_50%)]">
                      {current.phone}
                    </a>
                  </div>
                  <div className="py-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <span className="text-[hsl(0_0%_50%)] uppercase tracking-wider">{String(t("locations.labelParking"))}</span>
                    <span className="font-semibold text-[hsl(0_0%_95%)]">{String(t("locations.parkingFree"))}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#booking"
                  className="flex-1 py-3 px-4 bg-[hsl(38_90%_50%)] hover:bg-[hsl(35_95%_45%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider text-center rounded-xs transition-colors"
                >
                  {String(t("locations.bookHere"))}
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent("Київ " + current.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[hsl(0_0%_14%)] hover:bg-[hsl(0_0%_20%)] text-[hsl(0_0%_90%)] font-bold text-xs uppercase tracking-wider text-center rounded-xs transition-colors border border-[hsl(0_0%_25%)]"
                >
                  {String(t("locations.googleMap"))} →
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[380px] relative bg-[hsl(0_0%_12%)]">
              <iframe
                title={`Map for ${current.address}`}
                src={current.mapUrl}
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
