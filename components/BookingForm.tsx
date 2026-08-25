
"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function BookingForm() {
  const { t } = useLocale();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: t("bookingForm.defaultBranch") as string,
    service: t("bookingForm.defaultService") as string,
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const kicker = t("bookingForm.kicker") as string;
  const title = t("bookingForm.title") as string;
  const subtitle = t("bookingForm.subtitle") as string;
  const freeParkingLabel = t("bookingForm.freeParking") as string;
  const branch1 = t("bookingForm.branch1") as string;
  const branch2 = t("bookingForm.branch2") as string;
  const branch3 = t("bookingForm.branch3") as string;
  const branch4 = t("bookingForm.branch4") as string;
  const service1 = t("bookingForm.service1") as string;
  const service2 = t("bookingForm.service2") as string;
  const service3 = t("bookingForm.service3") as string;
  const service4 = t("bookingForm.service4") as string;
  const service5 = t("bookingForm.service5") as string;
  const service6 = t("bookingForm.service6") as string;
  const service7 = t("bookingForm.service7") as string;
  const notesPlaceholder = t("bookingForm.notesPlaceholder") as string;

  return (
    <section id="booking" className="py-24 bg-[hsl(0_0%_8%)] text-white relative border-b border-[hsl(0_0%_14%)]">
      {/* Background Decorative Type */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="font-display font-extrabold text-[22vw] leading-none uppercase text-white/[0.02] tracking-tight">
          RESERVATION
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Layer 1-3: Kicker, Invitation Heading, Lede */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] text-[hsl(38_88%_52%)] uppercase block mb-3">
              {kicker}
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
              {title}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[hsl(0_0%_75%)] text-base sm:text-lg font-light mb-6">
              {subtitle}
            </p>
          </Reveal>

          {/* Structured Hours Mini-Table */}
          <Reveal className="inline-flex flex-wrap justify-center gap-4 p-3 bg-[hsl(0_0%_12%)] rounded-xl border border-[hsl(0_0%_20%)] text-xs font-mono text-[hsl(0_0%_70%)]">
            <div>{t("bookingForm.hoursRow1") as string} <strong className="text-white">10:00 — 21:00</strong></div>
            <span>·</span>
            <div>{t("bookingForm.hoursRow2") as string} <strong className="text-white">10:00 — 21:00</strong></div>
            <span>·</span>
            <div className="text-[hsl(38_88%_52%)] font-bold">{freeParkingLabel}</div>
          </Reveal>
        </div>

        {/* Solid Opaque Booking Form Card */}
        <div className="bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_18%)] p-8 sm:p-12 rounded-2xl shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[hsl(38_88%_52%/0.2)] text-[hsl(38_88%_52%)] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="font-display text-4xl font-extrabold uppercase text-white">
                {t("bookingForm.successTitle") as string}
              </h3>
              <p className="text-[hsl(0_0%_75%)] max-w-lg mx-auto font-light leading-relaxed text-base">
                {t("bookingForm.successMsg") as string}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 min-h-[44px] bg-[hsl(0_0%_20%)] hover:bg-[hsl(0_0%_30%)] text-white font-display uppercase tracking-wider font-bold rounded"
              >
                {t("bookingForm.resetBtn") as string}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[hsl(0_0%_70%)] mb-2 font-mono">
                    {t("bookingForm.nameLabel") as string} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("bookingForm.namePlaceholder") as string}
                    className="w-full px-4 py-3 bg-[hsl(0_0%_11%)] border border-[hsl(0_0%_22%)] rounded-lg text-white focus:border-[hsl(38_88%_52%)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[hsl(0_0%_70%)] mb-2 font-mono">
                    {t("bookingForm.phoneLabel") as string} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t("bookingForm.phonePlaceholder") as string}
                    className="w-full px-4 py-3 bg-[hsl(0_0%_11%)] border border-[hsl(0_0%_22%)] rounded-lg text-white focus:border-[hsl(38_88%_52%)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[hsl(0_0%_70%)] mb-2 font-mono">
                    {t("bookingForm.branchLabel") as string}
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-4 py-3 bg-[hsl(0_0%_11%)] border border-[hsl(0_0%_22%)] rounded-lg text-white focus:border-[hsl(38_88%_52%)] focus:outline-none transition-colors"
                  >
                    <option>{branch1}</option>
                    <option>{branch2}</option>
                    <option>{branch3}</option>
                    <option>{branch4}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[hsl(0_0%_70%)] mb-2 font-mono">
                    {t("bookingForm.serviceLabel") as string}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[hsl(0_0%_11%)] border border-[hsl(0_0%_22%)] rounded-lg text-white focus:border-[hsl(38_88%_52%)] focus:outline-none transition-colors"
                  >
                    <option>{service1}</option>
                    <option>{service2}</option>
                    <option>{service3}</option>
                    <option>{service4}</option>
                    <option>{service5}</option>
                    <option>{service6}</option>
                    <option>{service7}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[hsl(0_0%_70%)] mb-2 font-mono">
                    {t("bookingForm.dateLabel") as string}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[hsl(0_0%_11%)] border border-[hsl(0_0%_22%)] rounded-lg text-white focus:border-[hsl(38_88%_52%)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[hsl(0_0%_70%)] mb-2 font-mono">
                    {t("bookingForm.adminPhoneLabel") as string}
                  </label>
                  <a
                    href="tel:0951079215"
                    className="w-full block text-center px-4 py-3 min-h-[44px] flex items-center justify-center bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_25%)] rounded-lg text-[hsl(38_88%_52%)] font-mono font-bold hover:bg-[hsl(0_0%_18%)] transition-colors"
                  >
                    {t("common.phone") as string}
                  </a>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[hsl(0_0%_70%)] mb-2 font-mono">
                  {t("bookingForm.notesLabel") as string}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={notesPlaceholder}
                  className="w-full px-4 py-3 bg-[hsl(0_0%_11%)] border border-[hsl(0_0%_22%)] rounded-lg text-white focus:border-[hsl(38_88%_52%)] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 min-h-[44px] flex items-center justify-center bg-[hsl(38_88%_52%)] hover:bg-[hsl(35_92%_44%)] text-[hsl(0_0%_5%)] font-display text-xl uppercase font-extrabold tracking-wider rounded transition-transform active:scale-98 shadow-xl"
              >
                {t("bookingForm.submitBtn") as string}
              </button>

              <div className="text-center text-xs text-[hsl(0_0%_55%)] font-mono">
                {t("bookingForm.guaranteeText") as string}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
