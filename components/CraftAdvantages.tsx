"use client";
import { useLocale } from "@/lib/i18n";

export default function CraftAdvantages() {
  const { t } = useLocale();
  const items = (t("craft.items") as Array<{
    num: string;
    title: string;
    desc: string;
  }>) || [];

  return (
    <section id="craft" className="py-20 bg-[hsl(18_10%_12%)] text-white border-y border-hairline scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Layer 1: Kicker, Heading, Lede */}
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
            {String(t("craft.kicker"))} — СТАНДАРТ ЯКОСТІ
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white">
            {String(t("craft.heading"))}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {String(t("craft.subheading"))}
          </p>
        </div>

        {/* Layer 2: Oversized Pull-Quote Statement Line */}
        <div className="bg-[hsl(18_12%_8%)] border-l-4 border-amber-500 border-y border-r border-hairline p-8 rounded-r-lg max-w-4xl mx-auto">
          <blockquote className="font-display font-bold text-2xl sm:text-4xl text-amber-400 uppercase leading-snug tracking-tight">
            «Якість чоловічої стрижки вимірюється не хвилинами у кріслі, а стабільністю та точністю результату при кожному візиті»
          </blockquote>
          <div className="mt-4 flex items-center space-x-4 text-xs uppercase tracking-wider text-gray-400 font-semibold">
            <span>ДАНІЕЛ (DINO) — GRAND BARBER & АРТ-ДИРЕКТОР</span>
            <span>·</span>
            <span>BARBERKING КИЇВ</span>
          </div>
        </div>

        {/* Layer 3: 2-Photo Cluster + Photo Caption with Rule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-hairline shadow-xl">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6955-1024x682.jpg"
                alt="Процес стрижки у Barberking"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-amber-500/30 shadow-2xl transform translate-y-6">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-1024x683.jpg"
                alt="Оформлення бороди у Barberking"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 pt-8 text-xs text-gray-400 border-t border-hairline flex items-center space-x-3">
              <span className="text-amber-500 font-bold">—</span>
              <span>Залаштунки філії на Павлівській 18: гарячий компрес та робота з класичним силуетом бороди</span>
            </div>
          </div>

          {/* Layer 4: Stat Row of 4 Real Numerals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-6 bg-[hsl(18_12%_8%)] p-6 rounded-lg border border-hairline">
              <div className="space-y-1">
                <div className="font-display font-extrabold text-5xl text-amber-400">10</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">РОКІВ ДОСВІДУ В КИЄВІ</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-5xl text-white">4</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">ФІЛІЇ В СТОЛИЦІ</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-5xl text-white">69K+</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">ЗАДОВОЛЕНИХ ГОСТЕЙ</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-5xl text-amber-400">16</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">GRAND ТА TOP МАЙСТРІВ</div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Кожен майстер мережі Barberking проходить піврічну атестацію та дотримується внутрішнього стандарту симетрії, розпарювання шкіри та стерилізації інструментів.
            </p>
          </div>
        </div>

        {/* Layer 5: 4 Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[hsl(18_12%_8%)] border border-hairline hover:border-amber-500/50 rounded-lg p-6 flex flex-col justify-between transition-all group hover:translate-y-[-4px]"
            >
              <div className="space-y-4">
                <span className="font-display font-extrabold text-5xl text-amber-500/30 group-hover:text-amber-400 transition-colors">
                  {item.num}
                </span>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-hairline mt-6 flex justify-end">
                <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
                  Barberking Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
