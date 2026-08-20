"use client";
import { useLocale } from "@/lib/i18n";

interface TeamProps {
  onOpenBooking: (masterName?: string) => void;
}

export default function Team({ onOpenBooking }: TeamProps) {
  const { t } = useLocale();

  const masters = [
    {
      name: "ДАНІЕЛ (DINO)",
      role: "GRAND BARBER",
      location: "вул. Павлівська 18",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2026/03/dyno-e1774703810461-904x1024.webp",
      desc: "Спеціаліст із подовженого волосся та геометричних стрижок. Досвід 7+ років.",
    },
    {
      name: "ДМИТРО",
      role: "GRAND BARBER",
      location: "вул. Павлівська 18",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2025/04/photo_2025-04-26-15.12.24-768x1024.webp",
      desc: "Майстер королівського гоління та класичного Fade. Досвід 6+ років.",
    },
    {
      name: "ЄВГЕНІЙ",
      role: "GRAND BARBER",
      location: "вул. Павлівська 18",
      photo: null,
      initials: "ЄВ",
      desc: "Експерт із моделювання бороди будь-якої складності.",
    },
    {
      name: "ОЛЕКСАНДР",
      role: "GRAND BARBER",
      location: "вул. Дніпровська Набережна 15к",
      photo: null,
      initials: "ОЛ",
      desc: "Топ-фахівець філії на Позняках. Понад 3,000 виконаних стрижок.",
    },
    {
      name: "РУСЛАН",
      role: "TOP BARBER",
      location: "вул. Олександра Олеся 8А",
      photo: null,
      initials: "РУ",
      desc: "Майстер сучасних чоловічих форм та укладок.",
    },
    {
      name: "АНДРІЙ",
      role: "TATTOO ARTIST",
      location: "Tattoo Room (Павлівська 18)",
      photo: null,
      initials: "АН",
      desc: "Художні татуювання будь-якої складності, авторські ескізи.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-[hsl(18_12%_8%)] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
            {String(t("team.kicker"))}
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white">
            {String(t("team.heading"))}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {String(t("team.subheading"))}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {masters.map((master, idx) => (
            <div
              key={idx}
              className="bg-[hsl(18_10%_12%)] border border-hairline rounded-lg overflow-hidden flex flex-col justify-between group hover:border-amber-500/50 transition-all"
            >
              <div>
                <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden flex items-center justify-center">
                  {master.photo ? (
                    <img
                      src={master.photo}
                      alt={master.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-amber-500/10 border-2 border-amber-500 flex items-center justify-center font-display font-extrabold text-4xl text-amber-400">
                      {master.initials}
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-amber-400 text-xs font-bold uppercase tracking-wider border border-hairline">
                    {master.role}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-display font-extrabold text-3xl uppercase text-white">
                    {master.name}
                  </h3>
                  <div className="text-xs text-amber-500 font-semibold uppercase">
                    📍 {master.location}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed pt-1">
                    {master.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(`До майстра: ${master.name}`)}
                  className="w-full bg-gray-800 hover:bg-amber-500 hover:text-black text-gray-200 font-display font-bold text-xl py-2.5 rounded transition-all border border-hairline"
                >
                  {String(t("team.bookMaster"))}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
