"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "pavlovska",
    service: "haircut",
    date: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-card border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
              ШВИДКИЙ ЗАПИС
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide mb-4 uppercase">
              ЗАБРОНЮВАТИ КРІСЛО ТА ЧАС
            </h2>
            <p className="text-text-muted text-base mb-8 font-normal leading-relaxed">
              Оберіть зручну філію та бажану дату. Адміністратор підтвердить запис за 3 хвилини.
            </p>

            {/* Structured Hours & Contacts Table */}
            <div className="space-y-3 text-xs text-text-light w-full font-mono">
              <div className="p-4 bg-bg-dark border border-border-dark flex items-center justify-between">
                <span>ГАРЯЧА ЛІНІЯ:</span>
                <a href="tel:0951079215" className="font-display font-bold text-accent text-lg">
                  095 107 92 15
                </a>
              </div>
              <div className="p-4 bg-bg-dark border border-border-dark flex items-center justify-between">
                <span>ГРАФІК РОБОТИ:</span>
                <span className="font-semibold">ЩОДНЯ 10:00 — 21:00</span>
              </div>
              <div className="p-4 bg-bg-dark border border-border-dark flex items-center justify-between">
                <span>EMAIL:</span>
                <span className="text-text-muted">barberking.kv1@gmail.com</span>
              </div>
            </div>

            <p className="text-[11px] font-mono text-accent mt-6">
              Підтвердження запису протягом 3 хвилин • Без передоплати
            </p>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-bg-dark border border-border-dark p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-accent text-bg-dark font-display font-black text-3xl rounded-xs mx-auto flex items-center justify-center">
                  OK
                </div>
                <h3 className="font-display font-bold text-3xl text-text-light uppercase">
                  ЗАПИС УСПІШНО СТВОРЕНО!
                </h3>
                <p className="text-xs text-text-muted max-w-md mx-auto font-mono">
                  Ми зателефонуємо вам на вказаний номер протягом 3 хвилин для підтвердження візиту.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-secondary border border-border-dark text-accent font-display font-bold px-6 py-2 uppercase text-sm"
                >
                  Створити ще один запис
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-medium text-text-muted mb-2 font-mono">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("contact.form.name_ph")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-secondary border border-border-dark text-text-light px-4 py-3 text-sm focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-text-muted mb-2 font-mono">
                      {t("contact.form.phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t("contact.form.phone_ph")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-secondary border border-border-dark text-text-light px-4 py-3 text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-medium text-text-muted mb-2 font-mono">
                      {t("contact.form.location")}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-secondary border border-border-dark text-text-light px-4 py-3 text-sm focus:border-accent focus:outline-none font-mono"
                    >
                      <option value="pavlovska">Лук'янівка (вул. Павлівська 18)</option>
                      <option value="great">Позняки (вул. Дніпровська набережна 15К)</option>
                      <option value="varshavsky">Виноградар (вул. Олександра Олеся 8А)</option>
                      <option value="urlivska">Позняки (вул. Урлівська 11/44)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-text-muted mb-2 font-mono">
                      {t("contact.form.date")}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-secondary border border-border-dark text-text-light px-4 py-3 text-sm focus:border-accent focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent text-bg-dark font-display font-extrabold py-4 text-xl uppercase tracking-wider hover:bg-accent-hover transition-colors disabled:opacity-50"
                >
                  {submitting ? t("contact.form.submitting") : t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
