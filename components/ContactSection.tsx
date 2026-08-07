"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useLocale();

  const kicker = (t("booking.kicker") as string) || "ОНЛАЙН-БРОНЮВАННЯ";
  const title = (t("booking.title") as string) || "ЗАПИШИСЯ ДО СВОГО МАЙСТРА В ОДИН КЛІК";
  const subtitle = (t("booking.subtitle") as string) || "";

  const locationLabel = (t("booking.form.locationLabel") as string) || "Оберіть локацію";
  const serviceLabel = (t("booking.form.serviceLabel") as string) || "Оберіть послугу";
  const namePlaceholder = (t("booking.form.namePlaceholder") as string) || "Ваше ім'я";
  const phonePlaceholder = (t("booking.form.phonePlaceholder") as string) || "Номер телефону (095...)";
  const dateLabel = (t("booking.form.dateLabel") as string) || "Бажана дата";
  const submitBtn = (t("booking.form.submitBtn") as string) || "Підтвердити запис онлайн";
  const submittingText = (t("booking.form.submitting") as string) || "Записуємо...";
  const successTitle = (t("booking.form.successTitle") as string) || "Запис успішно оформлено!";
  const successDesc = (t("booking.form.successDesc") as string) || "";

  const [location, setLocation] = useState("Павлівська 18 (Лук'янівка)");
  const [service, setService] = useState("Чоловіча стрижка");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[hsl(0_0%_11%)] text-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none aria-hidden overflow-hidden">
        <span className="font-display font-extrabold text-[18vw] text-white/[0.02] tracking-tighter block leading-none">
          BOOKING
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Booking Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[hsl(0_0%_7%)] border border-white/10 shadow-2xl">
            {status === "success" ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] flex items-center justify-center font-bold text-2xl mb-4">
                  ОК
                </div>
                <h3 className="font-display font-extrabold text-3xl text-white uppercase mb-2">
                  {successTitle}
                </h3>
                <p className="text-white/70 font-light max-w-md">
                  {successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="text-xs font-mono text-[hsl(32_90%_50%)] uppercase block mb-2">
                    {locationLabel}
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/15 text-white font-body focus:outline-none focus:border-[hsl(32_90%_50%)]"
                  >
                    <option className="bg-[hsl(0_0%_11%)]" value="Павлівська 18 (Лук'янівка)">
                      Лук'янівка / Центр (вул. Павлівська, 18)
                    </option>
                    <option className="bg-[hsl(0_0%_11%)]" value="ЖК Great (Позняки)">
                      Позняки · ЖК Great (вул. Дніпровська наб., 15К)
                    </option>
                    <option className="bg-[hsl(0_0%_11%)]" value="ЖК Варшавський (Виноградар)">
                      Виноградар · ЖК Варшавський (вул. О. Олеся, 8А)
                    </option>
                    <option className="bg-[hsl(0_0%_11%)]" value="Урлівська 11/44 (Позняки)">
                      Позняки · Осокорки (вул. Урлівська, 11/44)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-[hsl(32_90%_50%)] uppercase block mb-2">
                    {serviceLabel}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/15 text-white font-body focus:outline-none focus:border-[hsl(32_90%_50%)]"
                  >
                    <option className="bg-[hsl(0_0%_11%)]" value="Чоловіча стрижка">
                      Чоловіча стрижка Grand Barber (від 750 грн)
                    </option>
                    <option className="bg-[hsl(0_0%_11%)]" value="Стрижка + Борода">
                      Комплекс: Стрижка + Моделювання бороди (від 1 150 грн)
                    </option>
                    <option className="bg-[hsl(0_0%_11%)]" value="Гоління бритвою">
                      Гоління небезпечною бритвою (від 500 грн)
                    </option>
                    <option className="bg-[hsl(0_0%_11%)]" value="Батько і син">
                      Батько та син (від 1 150 грн)
                    </option>
                    <option className="bg-[hsl(0_0%_11%)]" value="Tattoo Room">
                      Консультація Tattoo Room
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(32_90%_50%)]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder={phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(32_90%_50%)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-white/60 block mb-2">
                    {dateLabel}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[hsl(32_90%_50%)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-extrabold text-2xl tracking-wider hover:bg-[hsl(28_95%_45%)] transition-colors shadow-xl"
                >
                  {status === "submitting" ? submittingText : submitBtn}
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact & Mini-Table (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[hsl(0_0%_7%)] border border-white/10 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-[hsl(32_90%_50%)] uppercase block mb-4">
                — ПРЯМИЙ ЗВ'ЯЗОК ТА ГОДИНИ
              </span>

              {/* Hours Mini Table */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <span className="text-xs font-mono text-white/50 block mb-2">Графік роботи:</span>
                <div className="flex flex-col gap-1.5 text-sm font-mono text-white/90">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Пн — Пт:</span>
                    <span className="text-[hsl(32_90%_50%)] font-bold">10:00 — 21:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Сб — Нд:</span>
                    <span className="text-[hsl(32_90%_50%)] font-bold">10:00 — 21:00</span>
                  </div>
                  <div className="text-xs text-white/50 pt-1">Без вихідних та обідніх перерв</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-base text-white/80 font-light mb-6">
                <div>
                  <span className="text-xs font-mono text-white/40 block">Телефон:</span>
                  <a href="tel:0951079215" className="font-display font-bold text-2xl text-[hsl(32_90%_50%)] hover:underline">
                    095 107 92 15
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-white/40 block">Електронна пошта:</span>
                  <a href="mailto:barberking.kv1@gmail.com" className="hover:underline">
                    barberking.kv1@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-white/40 block">Центральна філія:</span>
                  <span>м. Київ, вул. Павлівська, 18</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50">
              Без передоплати · Власне паркування біля кожної локації
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
