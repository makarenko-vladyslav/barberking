"use client";

import { useLocale } from "@/lib/i18n";

export default function Team() {
  const { t } = useLocale();
  const members = t("team.members") as any[];

  return (
    <section id="team" className="py-24 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            КОМАНДА ПРОФЕСІОНАЛІВ
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide uppercase">
            ТОПОВІ БАРБЕРИ ТА ТАТУ-МАЙСТРИ
          </h2>
          <p className="text-text-muted text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Знають анатомію обличчя, форму черепа та сучасні тенденції чоловічого стилю.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border-dark p-6 flex flex-col justify-between hover:border-accent/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-dark/60">
                  <div className="w-12 h-12 rounded-xs bg-secondary border border-accent/40 flex items-center justify-center font-display font-black text-2xl text-accent">
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-[11px] font-mono text-accent uppercase px-2 py-0.5 bg-secondary border border-border-dark">
                    {member.role}
                  </span>
                </div>

                <h3 className="font-display font-bold text-3xl text-text-light mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-text-muted mb-4 font-mono">
                  ФІЛІЯ: {member.branch}
                </p>

                <p className="text-xs text-text-light font-medium mb-2 font-mono">
                  ДОСВІД: <span className="text-accent">{member.exp}</span>
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  Спеціалізація: {member.specialty}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-dark/60 flex items-center justify-between">
                <a
                  href="#contact"
                  className="font-display font-bold text-accent text-sm uppercase tracking-wider hover:underline"
                >
                  Записатися до майстра →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
