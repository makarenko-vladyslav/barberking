"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

interface Branch {
  name: string;
  address: string;
  metro: string;
  hours: string;
  phone: string;
  parking: string;
  features: string;
}

export default function LocationsMap() {
  const { t } = useLocale();

  const branches = (t("branches.items") as Branch[]) || [];

  return (
    <section id="branches" className="py-24 bg-neutral-950 border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("branches.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("branches.title"))}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              {String(t("branches.subtitle"))}
            </p>
          </div>
        </Reveal>

        {/* Branches Cards Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {branches.map((branch, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all">
                <div className="flex items-start justify-between mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                      {String(t("branches.branchLabel"))} №0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-white">
                      {branch.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] font-bold text-accent uppercase">
                    {String(t("branches.parkingLabel"))}: {branch.parking}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 font-semibold uppercase">{String(t("branches.addressLabel"))}:</span>
                    <span className="font-bold text-white">{branch.address} ({branch.metro})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 font-semibold uppercase">{String(t("branches.hoursLabel"))}:</span>
                    <span className="font-bold text-accent">{branch.hours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 font-semibold uppercase">{String(t("branches.phoneLabel"))}:</span>
                    <a href={`tel:${branch.phone}`} className="hover:text-accent font-bold">{branch.phone}</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 font-semibold uppercase">{String(t("branches.servicesLabel"))}:</span>
                    <span className="font-bold text-white">{branch.features}</span>
                  </div>
                </div>

                <a
                  href="#booking"
                  className="mt-6 w-full inline-flex items-center justify-center py-3 bg-neutral-950 hover:bg-accent hover:text-black border border-white/10 text-xs font-bold uppercase tracking-wider rounded transition-colors text-white"
                >
                  {String(t("branches.bookBtn"))}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Map Container */}
        <Reveal delay={0.3}>
          <div className="rounded-2xl overflow-hidden border border-white/15 aspect-[21/9] w-full bg-neutral-900 relative">
            <iframe
              src="https://www.google.com/maps?q=вул.+Січових+Стрільців,+10,+Київ&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: String(t("branches.mapFilter")) }}
              allowFullScreen={false}
              loading="lazy"
              title={String(t("branches.mapTitle"))}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
