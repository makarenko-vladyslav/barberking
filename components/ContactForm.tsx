"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLocale();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("вул. Павлівська, 18 (Центр)");
  const [service, setService] = useState("Стрижка + Борода");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hoursTable = (t("bookingForm.hoursTable") as Array<{ days: string; time: string }>) || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="booking" className="py-24 bg-[hsl(0_0%_7%)] border-t border-[hsl(0_0%_15%)] text-[hsl(0_0%_95%)] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("bookingForm.kicker"))}
          </span>
          {/* Invitation Heading */}
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("bookingForm.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)]">
            {String(t("bookingForm.subtitle"))}
          </p>
        </div>

        {/* Form Container on Distinct Card Ground */}
        <div className="bg-[hsl(0_0%_9%)] border border-[hsl(38_90%_50%/0.3)] p-6 sm:p-10 rounded-xs shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <span className="font-['Alumni_Sans'] text-5xl font-extrabold text-[hsl(38_90%_50%)] block mb-2">
                {String(t("bookingForm.successTitle"))}
              </span>
              <h3 className="font-['Alumni_Sans'] text-3xl font-bold uppercase text-[hsl(0_0%_95%)] mb-2">
                {String(t("bookingForm.successSubtitle"))}
              </h3>
              <p className="text-xs text-[hsl(0_0%_70%)] max-w-md mx-auto">
                {String(t("bookingForm.successMsg"))}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Form Side */}
              <form onSubmit={handleSubmit} className="lg:col-span-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[hsl(0_0%_70%)] font-bold mb-1.5">
                      {String(t("bookingForm.nameLabel"))} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={String(t("bookingForm.namePlaceholder"))}
                      className="w-full px-4 py-3 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_20%)] focus:border-[hsl(38_90%_50%)] text-[hsl(0_0%_95%)] text-xs rounded-xs outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[hsl(0_0%_70%)] font-bold mb-1.5">
                      {String(t("bookingForm.phoneLabel"))} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={String(t("bookingForm.phonePlaceholder"))}
                      className="w-full px-4 py-3 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_20%)] focus:border-[hsl(38_90%_50%)] text-[hsl(0_0%_95%)] text-xs rounded-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[hsl(0_0%_70%)] font-bold mb-1.5">
                      {String(t("bookingForm.branchLabel"))}
                    </label>
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full px-4 py-3 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_20%)] focus:border-[hsl(38_90%_50%)] text-[hsl(0_0%_95%)] text-xs rounded-xs outline-none transition-colors"
                    >
                      <option value="вул. Павлівська, 18 (Центр)">{String(t("bookingForm.optPavlovska"))}</option>
                      <option value="вул. Дніпровська набережна, 15К (Позняки)">{String(t("bookingForm.optDnieper"))}</option>
                      <option value="вул. Олександра Олеся, 8А (Виноградар)">{String(t("bookingForm.optOlesya"))}</option>
                      <option value="вул. Урлівська, 11/44 (Позняки)">{String(t("bookingForm.optUrlivska"))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[hsl(0_0%_70%)] font-bold mb-1.5">
                      {String(t("bookingForm.dateLabel"))}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_20%)] focus:border-[hsl(38_90%_50%)] text-[hsl(0_0%_95%)] text-xs rounded-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[hsl(0_0%_70%)] font-bold mb-1.5">
                    {String(t("bookingForm.serviceLabel"))}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_20%)] focus:border-[hsl(38_90%_50%)] text-[hsl(0_0%_95%)] text-xs rounded-xs outline-none transition-colors"
                  >
                    <option value="Стрижка + Борода">{String(t("bookingForm.svcCombo"))}</option>
                    <option value="Чоловіча стрижка">{String(t("bookingForm.svcHaircut"))}</option>
                    <option value="Королівське гоління">{String(t("bookingForm.svcRazor"))}</option>
                    <option value="Батько та син">{String(t("bookingForm.svcFatherSon"))}</option>
                    <option value="Тату консультація">{String(t("bookingForm.svcTattoo"))}</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[hsl(38_90%_50%)] hover:bg-[hsl(35_95%_45%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-lg"
                  >
                    {String(t("bookingForm.submitBtn"))}
                  </button>
                </div>
              </form>

              {/* Booking Info Side (Hours Table & Direct Contacts) */}
              <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[hsl(0_0%_16%)] pt-6 lg:pt-0 lg:pl-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold block mb-3">
                    {String(t("bookingForm.hoursHeader"))}
                  </span>
                  
                  {/* Structured Hours Table */}
                  <div className="flex flex-col gap-2 text-xs mb-6 border-b border-[hsl(0_0%_16%)] pb-4">
                    {hoursTable.map((row, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-[hsl(0_0%_80%)]">
                        <span>{row.days}</span>
                        <span className="font-bold text-[hsl(38_90%_50%)] tabular-nums">{row.time}</span>
                      </div>
                    ))}
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-[hsl(0_0%_50%)] font-bold block mb-2">
                    {String(t("bookingForm.directContact"))}
                  </span>
                  <a
                    href="tel:0951079215"
                    className="text-sm font-bold text-[hsl(0_0%_95%)] hover:text-[hsl(38_90%_50%)] transition-colors block mb-6 py-1"
                  >
                    {String(t("bookingForm.telLinkText"))}
                  </a>

                  <div className="text-[11px] text-[hsl(0_0%_60%)] leading-relaxed mb-4">
                    {String(t("bookingForm.addressLine"))}
                  </div>
                </div>

                {/* Trust Micro Line */}
                <div className="p-3 bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_16%)] text-[10px] font-semibold uppercase tracking-wider text-[hsl(38_90%_50%)] rounded-xs">
                  {String(t("bookingForm.trustMicro"))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
