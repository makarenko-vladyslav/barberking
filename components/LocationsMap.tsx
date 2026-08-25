"use client";

import { useLocale } from "@/lib/i18n";

export default function LocationsMap() {
  const { t } = useLocale();

  const branches = (t("branches.list") as Array<{
    name: string;
    address: string;
    phone: string;
    parking: string;
    features: string;
  }>) || [];

  return (
    <section id="branches" className="py-24 bg-zinc-950 relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded">
            {t("branches.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4 mb-3">
            {t("branches.title") as string}
          </h2>
          <p className="text-zinc-400 text-base">
            {t("branches.subtitle") as string}
          </p>
        </div>

        {/* 4 Kyiv Branches Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {branches.map((b, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors"
            >
              <div>
                <div className="text-[11px] text-amber-400 font-mono uppercase tracking-wider mb-2">
                  ЛОКАЦІЯ 0{idx + 1} · {b.features}
                </div>
                <h3 className="text-2xl font-display font-bold uppercase text-white mb-3">
                  {b.name}
                </h3>
                <p className="text-xs text-zinc-300 font-body mb-4">
                  АДРЕСА: {b.address}
                </p>
                <div className="text-xs text-zinc-400 font-mono mb-4 bg-zinc-950 p-2.5 rounded border border-zinc-800/80">
                  ПАРКІНГ: {b.parking}
                </div>
              </div>

              <a
                href={`tel:${b.phone.replace(/\s+/g, "")}`}
                className="block text-center py-2.5 bg-zinc-950 hover:bg-amber-500 hover:text-zinc-950 text-amber-400 font-display font-bold uppercase tracking-wider text-base rounded border border-zinc-800 transition-colors"
              >
                {b.phone}
              </a>
            </div>
          ))}
        </div>

        {/* Map Embed */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl h-80 sm:h-96 relative">
          <iframe
            src="https://www.google.com/maps?q=вул.+Січових+Стрільців,+10,+Київ&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: t("branches.mapFilter") as string }}
            allowFullScreen
            loading="lazy"
            title={t("branches.mapTitle") as string}
          />
        </div>
      </div>
    </section>
  );
}