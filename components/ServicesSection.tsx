"use client";
import { useLocale } from "@/lib/i18n";

export default function ServicesSection() {
  const { t } = useLocale();

  // Highlighted signature services with real prices and descriptions
  const catalog = [
    {
      title: "Професійна чоловіча стрижка",
      price: "від 750 грн",
      time: "45–60 хв",
      desc: "Індивідуальний підбір форми з урахуванням росту волосся, геометрії обличчя та образу. Включає подвійне миття голови, точну окантовку бритви та укладку професійною глиною.",
      tag: "Найпопулярніша",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6955-1024x682.jpg"
    },
    {
      title: "Стрижка + оформлення бороди",
      price: "від 1 150 грн",
      time: "75–90 хв",
      desc: "Комплексний сеанс повного перезавантаження. Гармонійне зведення скроневих зон у лінію бороди, розпарювання гарячим рушником та підбір геометрії вусів.",
      tag: "Вибір клієнтів",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-1024x683.jpg"
    },
    {
      title: "Королівське гоління небезпечною бритвою",
      price: "від 500 грн",
      time: "45 хв",
      desc: "Традиційний ритуал чистого гоління з підготовкою шкіри ефірними оліями, компресом гарячим рушником та делікатним доглядом після гоління охолоджувальним бальзамом.",
      tag: "Традиція",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5902-2-1024x683.jpg"
    },
    {
      title: "Стрижка машинкою (2 насадки)",
      price: "від 550 грн",
      time: "35 хв",
      desc: "Мінімалістична та чітка чоловіча форма з ідеальним зведенням fade. Включає промивання шкіри голови та детальне вирівнювання крайової лінії шиї.",
      tag: "Експрес",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6059-1024x683.jpg"
    },
    {
      title: "Передвесільний комплекс для нареченого",
      price: "від 1 500 грн",
      time: "100 хв",
      desc: "Повний сеанс підготовки до важливої події: професійна стрижка, моделювання бороди або чисте гоління, очищення пор Black Mask та воскова корекція.",
      tag: "Преміум",
      photo: "https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_5183.jpg"
    },
    {
      title: "Батько та син (до 10 років)",
      price: "від 1 150 грн",
      time: "75 хв",
      desc: "Одночасний спільний візит двох поколінь. Уважний підхід до наймолодших клієнтів без сліз та комфортне крісло для батька з фірмовою кавою.",
      tag: "Сімейний",
      photo: "https://images.pexels.com/photos/18301169/pexels-photo-18301169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    }
  ];

  const [featuredService, ...otherServices] = catalog;

  return (
    <section id="services" className="py-20 sm:py-28 bg-bg-light text-text-main border-y border-border-light scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block with Editorial Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border-light">
          <div>
            <div className="text-accent-deep font-display text-sm tracking-widest uppercase mb-2 font-bold">
              {String(t("servicesSection.kicker"))}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-main">
              {String(t("servicesSection.title"))}
            </h2>
            <p className="mt-3 text-text-main/70 max-w-xl text-base">
              {String(t("servicesSection.subtitle"))}
            </p>
          </div>
          <a
            href="#prices"
            className="inline-flex items-center text-accent-deep hover:text-text-main font-display text-xl uppercase tracking-wider font-bold transition-colors duration-200 ease-out"
          >
            {String(t("servicesSection.fullPriceCta"))}
          </a>
        </div>

        {/* Asymmetrical Editorial Composition: Lead Hero Banner */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-card-light rounded border border-border-light overflow-hidden shadow-sm hover:border-accent transition-[border-color] duration-300 ease-out">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-primary">
              <img
                src={featuredService.photo}
                alt={featuredService.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-bg-dark/90 text-accent font-display text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                {featuredService.tag}
              </div>
            </div>
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono uppercase text-text-main/60 mb-3">
                  <span>Головна позиція меню</span>
                  <span>{featuredService.time}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-text-main leading-tight">
                  {featuredService.title}
                </h3>
                <div className="font-display text-4xl font-black text-accent-deep mt-2 mb-4">
                  {featuredService.price}
                </div>
                <p className="text-sm text-text-main/75 leading-relaxed">
                  {featuredService.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-wider text-text-main/60 font-semibold">
                  {String(t("servicesSection.consultLabel"))}
                </span>
                <a
                  href="#booking"
                  className="px-6 py-3 bg-bg-dark text-text-light font-display text-lg font-bold uppercase tracking-wider rounded text-center hover:bg-accent hover:text-bg-dark transition-colors duration-200 ease-out"
                >
                  {String(t("servicesSection.bookCardCta"))}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining 5 Cards in Asymmetrical Staggered Editorial Layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-card-light rounded overflow-hidden border border-border-light hover:border-accent transition-[border-color,box-shadow] duration-300 ease-out shadow-sm"
            >
              {/* Card Photo */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-primary">
                <img
                  src={service.photo}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-bg-dark/85 px-2.5 py-1 rounded text-xs font-display tracking-wider uppercase text-accent border border-border-dark">
                  {service.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-bg-dark/85 px-2.5 py-1 rounded text-xs font-medium text-text-light">
                  {service.time}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-text-main leading-snug">
                    {service.title}
                  </h3>
                  <div className="font-display text-2xl font-extrabold text-accent-deep my-2">
                    {service.price}
                  </div>
                  <p className="text-sm text-text-main/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-text-main/60">
                    {String(t("servicesSection.consultLabel"))}
                  </span>
                  <a
                    href="#booking"
                    className="font-display text-lg font-bold uppercase tracking-wider text-text-main group-hover:text-accent-deep transition-colors duration-200 ease-out"
                  >
                    {String(t("servicesSection.bookCardCta"))}
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