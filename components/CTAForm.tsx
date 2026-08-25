"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function CTAForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    branch: t("bookingForm.branch1") as string,
    master: t("bookingForm.grandBarberDaniel") as string,
    service: t("bookingForm.haircutPlusBeard") as string,
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="booking" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Non-neutral ground background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsl(36_85%_50%/0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-zinc-950 border border-amber-500/30 rounded-3xl p-8 sm:p-14 shadow-2xl relative">
          
          {/* Layer 1: Kicker */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded">
              {t("bookingForm.kicker") as string}
            </span>

            {/* Layer 2: Invitation Heading (Never brand name) */}
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4 mb-2">
              {t("bookingForm.title") as string}
            </h2>

            {/* Layer 3: Lede */}
            <p className="text-sm sm:text-base text-zinc-400">
              {t("bookingForm.subtitle") as string}
            </p>
          </div>

          {submitted ? (
            <div className="bg-amber-500/20 border border-amber-500 p-8 rounded-2xl text-center space-y-4">
              <div className="text-3xl font-mono text-amber-400 font-bold">{t("bookingForm.successTitle") as string}</div>
              <h3 className="text-2xl font-display font-bold uppercase text-white">
                Запис підтверджено
              </h3>
              <p className="text-sm text-zinc-300">
                {t("bookingForm.successMsg") as string}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-mono font-semibold text-zinc-400 mb-1">
                    {t("bookingForm.selectBranch") as string}
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full p-3.5 bg-zinc-900 border border-zinc-800 text-white rounded text-sm focus:border-amber-500 focus:outline-none"
                  >
                    <option>{t("bookingForm.branch1") as string}</option>
                    <option>{t("bookingForm.branch2") as string}</option>
                    <option>{t("bookingForm.branch3") as string}</option>
                    <option>{t("bookingForm.branch4") as string}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-semibold text-zinc-400 mb-1">
                    {t("bookingForm.selectMaster") as string}
                  </label>
                  <select
                    value={formData.master}
                    onChange={(e) => setFormData({ ...formData, master: e.target.value })}
                    className="w-full p-3.5 bg-zinc-900 border border-zinc-800 text-white rounded text-sm focus:border-amber-500 focus:outline-none"
                  >
                    <option>{t("bookingForm.master1") as string}</option>
                    <option>{t("bookingForm.master2") as string}</option>
                    <option>{t("bookingForm.master3") as string}</option>
                    <option>{t("bookingForm.master4") as string}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono font-semibold text-zinc-400 mb-1">
                  {t("bookingForm.selectService") as string}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-3.5 bg-zinc-900 border border-zinc-800 text-white rounded text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option>{t("bookingForm.service1") as string}</option>
                  <option>{t("bookingForm.service2") as string}</option>
                  <option>{t("bookingForm.service3") as string}</option>
                  <option>{t("bookingForm.service4") as string}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder={t("bookingForm.namePlaceholder") as string}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 bg-zinc-900 border border-zinc-800 text-white rounded text-sm focus:border-amber-500 focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder={t("bookingForm.phonePlaceholder") as string}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3.5 bg-zinc-900 border border-zinc-800 text-white rounded text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Layer 4: Primary CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wider text-xl rounded shadow-xl transition-all"
              >
                {t("bookingForm.submitBtn") as string}
              </button>
            </form>
          )}

          {/* Layer 5: Secondary Telephone Text Link */}
          <div className="mt-6 text-center text-xs font-mono">
            <span className="text-zinc-500">{t("bookingForm.altPhonePrefix") as string} </span>
            <a href="tel:0951079215" className="text-amber-400 font-bold hover:underline">
              095 107 92 15
            </a>
          </div>

          {/* Layer 6: Structured Hours Mini-table */}
          <div className="mt-8 pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
            <div>
              <span className="text-white font-semibold">{t("bookingForm.hoursLabel") as string}</span> {t("bookingForm.hoursVal") as string}
            </div>
            <div>
              <span className="text-white font-semibold">{t("bookingForm.addressLabel") as string}</span> {t("bookingForm.addressVal") as string}
            </div>
          </div>

          {/* Layer 7: Trust Micro-line */}
          <div className="mt-4 text-center text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            БЕЗ ПРЕ ДОПЛАТИ · БЕЗКОШТОВНЕ СКАСУВАННЯ ЗА 2 ГОДИНИ · 100% СТЕРИЛЬНІСТЬ
          </div>
        </div>
      </div>
    </section>
  );
}