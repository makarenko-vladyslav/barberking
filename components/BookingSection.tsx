"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function BookingSection() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: pricingData.branches[0].name,
    service: pricingData.services[0].name,
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(String(t("contactForm.error")));
      return;
    }
    setErrorMsg("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-primary border-b border-border-dark scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6">
            <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
              {String(t("ctaSection.kicker"))}
            </div>
            <h2 className="text-3xl sm:text-6xl font-display font-extrabold uppercase leading-[0.95] text-text-light">
              {String(t("ctaSection.title"))}
            </h2>
            <p className="mt-4 text-text-muted text-base sm:text-lg">
              {String(t("ctaSection.subtitle"))}
            </p>

            {/* Structured Hours Mini-Table */}
            <div className="mt-8 p-4 rounded bg-bg-dark/80 border border-border-dark">
              <div className="text-xs uppercase tracking-widest text-accent font-display mb-3">
                {String(t("ctaSection.hoursTitle"))}
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-text-light">
                  <span>{String(t("ctaSection.daysWeekdays"))}</span>
                  <span className="text-accent tabular-nums">{String(t("ctaSection.hoursDailyTime"))}</span>
                </div>
                <div className="flex justify-between text-text-light border-t border-border-dark/60 pt-2">
                  <span>{String(t("ctaSection.daysWeekends"))}</span>
                  <span className="text-accent tabular-nums">{String(t("ctaSection.hoursDailyTime"))}</span>
                </div>
                <div className="flex justify-between text-text-muted border-t border-border-dark/60 pt-2">
                  <span>{String(t("ctaSection.workMode"))}</span>
                  <span className="text-text-light">{String(t("ctaSection.hoursNote"))}</span>
                </div>
              </div>
            </div>

            {/* Address Line & Trust Line */}
            <div className="mt-6 space-y-2 text-xs text-text-muted">
              <div className="flex items-start gap-2">
                <span className="text-accent font-bold">●</span>
                <span className="text-text-light">{String(t("ctaSection.addressLine"))}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent font-bold">●</span>
                <span>{String(t("ctaSection.trustLine"))}</span>
              </div>
            </div>

            {/* CTA Phone Pair with Compact Single-Line Target */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="tel:0951079215"
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-3.5 bg-accent text-bg-dark font-display text-xl font-bold uppercase tracking-wider rounded hover:bg-accent-deep transition-colors duration-200 ease-out whitespace-nowrap shadow-sm"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>{String(t("ctaSection.phoneBtn"))}</span>
              </a>
              <a
                href="#branches"
                className="min-h-[44px] inline-flex items-center text-xs uppercase tracking-wider text-text-light hover:text-accent font-semibold border-b border-border-dark pb-1 transition-colors duration-200 ease-out"
              >
                {String(t("ctaSection.viewBranchesMap"))}
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 bg-bg-dark p-6 sm:p-10 rounded border border-border-dark shadow-2xl">
            <div className="text-accent font-display text-sm tracking-widest uppercase mb-1">
              {String(t("contactForm.kicker"))}
            </div>
            <h3 className="font-display text-3xl font-bold uppercase text-text-light mb-6">
              {String(t("contactForm.title"))}
            </h3>

            {submitted ? (
              <div className="p-6 rounded bg-primary border border-accent text-center">
                <div className="font-display text-3xl font-bold text-accent uppercase mb-2">
                  {String(t("ctaSection.bookingSuccess"))}
                </div>
                <p className="text-sm text-text-light">
                  {String(t("contactForm.success"))}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    {String(t("contactForm.nameLabel"))}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={String(t("contactForm.namePlaceholder"))}
                    className="w-full min-h-[44px] px-4 py-3 bg-bg-surface border border-border-dark rounded text-text-light placeholder:text-text-muted/60 focus:border-accent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    {String(t("contactForm.phoneLabel"))}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={String(t("contactForm.phonePlaceholder"))}
                    className="w-full min-h-[44px] px-4 py-3 bg-bg-surface border border-border-dark rounded text-text-light placeholder:text-text-muted/60 focus:border-accent text-sm font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                      {String(t("contactForm.branchLabel"))}
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-3 bg-bg-surface border border-border-dark rounded text-text-light focus:border-accent text-sm"
                    >
                      {pricingData.branches.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                      {String(t("contactForm.serviceLabel"))}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-3 bg-bg-surface border border-border-dark rounded text-text-light focus:border-accent text-sm"
                    >
                      {pricingData.services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    {String(t("contactForm.dateLabel"))}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full min-h-[44px] px-4 py-3 bg-bg-surface border border-border-dark rounded text-text-light focus:border-accent text-sm font-mono"
                  />
                </div>

                {errorMsg && (
                  <div className="text-xs text-red-400 font-medium">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full min-h-[44px] py-4 bg-accent text-bg-dark font-display text-2xl font-bold uppercase tracking-wider rounded hover:bg-accent-deep transition-colors duration-200 ease-out mt-2"
                >
                  {loading ? String(t("contactForm.sending")) : String(t("contactForm.submit"))}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}