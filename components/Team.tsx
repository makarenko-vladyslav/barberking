"use client";

import { useLocale } from "@/lib/i18n";

export default function Team() {
  const { t } = useLocale();
  const members = (t("team.members") as Array<{
    name: string;
    role: string;
    branch: string;
    exp: string;
    spec: string;
    photo: string;
  }>) || [];

  return (
    <section id="team" className="py-20 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
            {t("team.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4 mb-3">
            {t("team.title") as string}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t("team.subtitle") as string}
          </p>
        </div>

        {/* Real Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="group bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 bg-amber-500 text-zinc-950 px-3 py-1 rounded text-xs font-display font-bold uppercase tracking-wider shadow">
                  {member.role}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-baseline justify-between border-b border-zinc-800 pb-2">
                  <h3 className="text-2xl font-display font-bold uppercase text-white group-hover:text-amber-400 transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs text-amber-400 font-mono font-semibold">{member.exp}</span>
                </div>

                <p className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                  <span>📍</span> {member.branch}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-body">
                  {member.spec}
                </p>

                <div className="pt-2">
                  <a
                    href="#booking"
                    className="block w-full text-center py-2.5 bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 border border-zinc-800 font-display font-bold uppercase tracking-wider text-base rounded transition-colors"
                  >
                    Записатися до майстра
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
