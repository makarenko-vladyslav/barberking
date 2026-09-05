"use client";
import { useLocale } from "@/lib/i18n";

export default function TeamSection() {
  const { t } = useLocale();

  const team = [
    {
      name: "ДАНІЕЛ (DINO)",
      role: "GRAND BARBER",
      branch: "вул. Павлівська 18 (Центр)",
      exp: "7+ років досвіду",
      spec: "Складні класичні стрижки, ідеальне зведення fade та окантовка небезпечним лезом.",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2026/03/dyno-e1774703810461-904x1024.webp"
    },
    {
      name: "АНДРІЙ (АРТ)",
      role: "TATTOO ARTIST",
      branch: "вул. Павлівська 18 (Тату-зона)",
      exp: "6+ років досвіду",
      spec: "Графіка, чіткий лайнворк, реалістичні ескізи та безпечне перекриття.",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2026/06/img_4703-e1782466384832-759x1024.webp"
    },
    {
      name: "ДМИТРО",
      role: "TOP BARBER",
      branch: "вул. Дніпровська набережна 15К (Позняки)",
      exp: "5 років досвіду",
      spec: "Моделювання довгої бороди, камуфляж сивини, робота з жорстким кучерявим волоссям.",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2025/04/photo_2025-04-26-15.12.24-768x1024.webp"
    }
  ];

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
                    className="w-full py-2.5 text-center font-display text-lg uppercase tracking-wider font-bold text-text-light hover:text-accent block transition-colors"
                  >
                    Записатися до майстра →
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
