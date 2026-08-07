"use client";
import { useLocale } from "@/lib/i18n";

interface Member {
  name: string;
  role: string;
  location: string;
  exp: string;
  spec: string;
  imageUrl: string;
}

export default function TeamSection() {
  const { t } = useLocale();

  const kicker = t("team.kicker") as string;
  const title = t("team.title") as string;
  const subtitle = t("team.subtitle") as string;
  const members = (t("team.members") as Member[]) || [];

  return (
    <section id="team" className="py-20 sm:py-28 bg-[hsl(0_0%_11%)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
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

        {/* Master Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-[hsl(0_0%_7%)] border border-white/10 hover:border-[hsl(32_90%_50%/0.5)] transition-all group flex flex-col justify-between"
            >
              {/* Image Container with Dark Scrim */}
              <div className="relative h-80 overflow-hidden bg-black/40">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement?.classList.add("img-fallback");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-extrabold text-sm uppercase">
                    {member.role}
                  </span>
                  <span className="text-xs font-mono text-white/80 bg-black/60 px-2.5 py-1 rounded backdrop-blur">
                    {member.exp}
                  </span>
                </div>
              </div>

              {/* Master Info */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-3xl text-white uppercase mb-1 group-hover:text-[hsl(32_90%_50%)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[hsl(32_90%_50%)] mb-4">
                    📍 {member.location}
                  </p>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                    {member.spec}
                  </p>
                </div>

                <a
                  href="#booking"
                  className="w-full py-3 rounded bg-white/10 text-white font-display font-bold text-lg tracking-wider text-center hover:bg-[hsl(32_90%_50%)] hover:text-[hsl(0_0%_7%)] transition-colors block"
                >
                  Записатися до майстра ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}