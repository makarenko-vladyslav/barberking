"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function BookingWidget() {
  const { t } = useLocale();
  const [selectedBranch, setSelectedBranch] = useState("вул. Павлівська, 18");
  const [selectedBarber, setSelectedBarber] = useState("Будь-який вільний майстер");
  const [selectedService, setSelectedService] = useState("Професійна стрижка + стрижка бороди");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("2026-03-30");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-neutral-900 border-b border-white/10 scroll-mt-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("booking.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("booking.title"))}
            </h2>
            <p className="text-neutral-400 text-base max-w-xl mx-auto">
              {String(t("booking.subtitle"))}
            </p>
          </div>
        </Reveal>

        {/* 7-Element Booking Container on NON-NEUTRAL ground */}
        <Reveal delay={0.2}>
          <div className="bg-neutral-950 border border-accent/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                  {String(t("booking.successSub"))}
                </span>
                <h3 className="font-display text-3xl font-bold uppercase text-white mb-2">
                  {String(t("booking.successTitle"))}
                </h3>
                <p className="text-neutral-300 max-w-md mx-auto text-sm mb-6">
                  {String(t("booking.successMessagePart1"))} {name}! {String(t("booking.successMessagePart2"))} <span className="text-accent">{phone}</span> {String(t("booking.successMessagePart3"))}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  {String(t("booking.newBookingBtn"))}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Structured Hours Mini-Table & Location Line */}
                <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300 mb-6">
                  <div>
                    <span className="font-bold text-accent uppercase block mb-1">{String(t("booking.hoursHeader"))}</span>
                    <p>{String(t("booking.hoursWeekdays"))}</p>
                    <p>{String(t("booking.hoursWeekend"))}</p>
                  </div>
                  <div>
                    <span className="font-bold text-accent uppercase block mb-1">{String(t("booking.addressHeader"))}</span>
                    <p className="line-clamp-2">{String(t("booking.addressLine"))}</p>
                  </div>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-accent mb-2">
                      {String(t("booking.step1"))}
                    </label>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                    >
                      <option value="вул. Павлівська, 18">{String(t("booking.optBranch1"))}</option>
                      <option value="вул. Дніпровська набережна, 15К">{String(t("booking.optBranch2"))}</option>
                      <option value="вул. Олександра Олеся, 8А">{String(t("booking.optBranch3"))}</option>
                      <option value="вул. Урлівська, 11/44">{String(t("booking.optBranch4"))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-accent mb-2">
                      {String(t("booking.step2"))}
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                    >
                      <option value="Професійна стрижка + стрижка бороди">{String(t("booking.optService1"))}</option>
                      <option value="Професійна чоловіча стрижка">{String(t("booking.optService2"))}</option>
                      <option value="Королівське гоління">{String(t("booking.optService3"))}</option>
                      <option value="Батько та син (до 10 років)">{String(t("booking.optService4"))}</option>
                      <option value="Стрижка машинкою">{String(t("booking.optService5"))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-accent mb-2">
                      {String(t("booking.step3"))}
                    </label>
                    <select
                      value={selectedBarber}
                      onChange={(e) => setSelectedBarber(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                    >
                      <option value="Будь-який вільний майстер">{String(t("booking.optBarberAny"))}</option>
                      <option value="Даніел (Dino) — Grand Barber">{String(t("booking.optBarber1"))}</option>
                      <option value="Евгеній — Grand Barber">{String(t("booking.optBarber2"))}</option>
                      <option value="Максим — Top Barber">{String(t("booking.optBarber3"))}</option>
                      <option value="Дмитро — Top Barber">{String(t("booking.optBarber4"))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-accent mb-2">
                      {String(t("booking.dateLabel"))}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-accent mb-2">
                      {String(t("contact.nameLabel"))} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={String(t("contact.namePlaceholder"))}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-accent mb-2">
                      {String(t("contact.phoneLabel"))} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="095 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-left">
                    <span className="text-xs text-neutral-400 block font-semibold">
                      {String(t("booking.guarantee"))}
                    </span>
                    <a href="tel:0951079215" className="text-xs text-accent hover:underline font-bold block">
                      {String(t("booking.telTextLink"))}
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-accent hover:bg-amber-400 text-black font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-amber-500/20"
                  >
                    {String(t("booking.submit"))}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
