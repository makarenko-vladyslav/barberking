"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

interface Member {
  name: string;
  role: string;
  location: string;
  exp: string;
  spec: string;
  img?: string;
}

export default function Team() {
  const { t } = useLocale();

  const members = (t("team.items") as Member[]) || [];

  return (
    <section id="masters" className="py-24 bg-neutral-900 border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("team.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("team.title"))}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              {String(t("team.subtitle"))}
            </p>
          </div>
        </Reveal>

        {/* 5 Member Cards with Tall 3:4 Portrait Photos & explicit object-top */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-neutral-950 border border-white/10 rounded-xl overflow-hidden group hover:border-accent/50 transition-all duration-300">
                <div className="aspect-[3/4] w-full overflow-hidden relative bg-neutral-800">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display text-6xl font-bold text-accent">
                      {member.name.substring(0, 2)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-white/10 text-[10px] font-bold uppercase text-accent tracking-wider">
                    {member.exp}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs font-bold text-accent uppercase">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-4 font-medium">
                    Локація: {member.location}
                  </p>

                  <p className="text-xs text-neutral-300 leading-relaxed border-t border-white/10 pt-3">
                    {member.spec}
                  </p>

                  <a
                    href="#booking"
                    className="mt-6 w-full inline-flex items-center justify-center py-2.5 bg-neutral-900 hover:bg-accent hover:text-black border border-white/10 text-xs font-bold uppercase tracking-wider rounded transition-colors text-white"
                  >
                    Записатися до {member.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
