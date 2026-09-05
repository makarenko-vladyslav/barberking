"use client";
import { useLocale } from "@/lib/i18n";

interface TeamMember {
  name: string;
  role: string;
  branch: string;
  exp: string;
  spec: string;
  photo: string;
}

export default function TeamSection() {
  const { t } = useLocale();
  const rawTeam = t("teamSection.members");
  const team: TeamMember[] = Array.isArray(rawTeam) ? (rawTeam as TeamMember[]) : [];

  return (
    <section id="team" className="py-20 sm:py-28 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("teamSection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("teamSection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            {String(t("teamSection.subtitle"))}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-bg-surface rounded overflow-hidden border border-border-dark hover:border-accent transition-colors flex flex-col"
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-primary relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-bg-dark/85 px-3 py-1 rounded text-xs font-display tracking-wider uppercase text-accent border border-border-dark">
                  {member.role}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-text-light">
                    {member.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-text-muted mt-1">
                    {member.branch}
                  </div>
                  <div className="font-mono text-xs text-accent mt-1">
                    {member.exp}
                  </div>
                  <p className="mt-4 text-sm text-text-muted leading-relaxed">
                    {member.spec}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-dark">
                  <a
                    href="#booking"
                    className="w-full min-h-[44px] py-2.5 text-center font-display text-lg uppercase tracking-wider font-bold text-text-light hover:text-accent inline-flex items-center justify-center transition-colors"
                  >
                    {String(t("teamSection.cardCta"))}
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