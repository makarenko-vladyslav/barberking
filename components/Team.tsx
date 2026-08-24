"use client";
import { useLocale } from "@/lib/i18n";

export default function Team() {
  const { t } = useLocale();
  const members = (t("team.members") as Array<{
    name: string;
    role: string;
    branch: string;
    photo: string;
    spec: string;
  }>) || [];

  return (
    <section id="team" className="py-24 bg-[hsl(0_0%_7%)] border-t border-[hsl(0_0%_15%)] text-[hsl(0_0%_95%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("team.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("team.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)]">
            {String(t("team.subtitle"))}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="group bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_16%)] hover:border-[hsl(38_90%_50%/0.5)] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Master Photo / Avatar fallback */}
                <div className="relative h-72 w-full bg-[hsl(0_0%_12%)] overflow-hidden">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[hsl(0_0%_11%)]">
                      <div className="w-20 h-20 rounded-full bg-[hsl(38_90%_50%/0.12)] border border-[hsl(38_90%_50%/0.3)] flex items-center justify-center text-3xl font-extrabold text-[hsl(38_90%_50%)] font-['Alumni_Sans']">
                        {m.name.charAt(0)}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_9%)] via-transparent to-transparent opacity-90" />
                  <span className="absolute bottom-3 left-3 bg-[hsl(0_0%_5%/0.85)] backdrop-blur-sm text-[hsl(38_90%_50%)] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs border border-[hsl(38_90%_50%/0.3)]">
                    {m.role}
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-5">
                  <h3 className="font-['Alumni_Sans'] text-3xl font-bold uppercase tracking-wide text-[hsl(0_0%_95%)] group-hover:text-[hsl(38_90%_50%)] transition-colors">
                    {m.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-[hsl(0_0%_50%)] uppercase tracking-wider mb-3">
                    {m.branch}
                  </div>
                  <p className="text-xs text-[hsl(0_0%_70%)] leading-relaxed font-normal">
                    {m.spec}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center py-2.5 px-3 bg-[hsl(0_0%_14%)] group-hover:bg-[hsl(38_90%_50%)] text-[hsl(0_0%_90%)] group-hover:text-[hsl(0_0%_5%)] text-xs uppercase tracking-wider font-bold rounded-xs transition-colors text-center"
                >
                  {String(t("team.bookToPrefix"))} {m.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
