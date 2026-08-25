"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface BookingContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingContactModal({ isOpen, onClose }: BookingContactModalProps) {
  const { t } = useLocale();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(String(t("modal.loc1")));
  const [master, setMaster] = useState(String(t("modal.tier2")));
  const [service, setService] = useState(String(t("modal.serviceCombo")));
  const [date, setDate] = useState("2026-03-30T14:00");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[hsl(24_16%_8%/0.9)] backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[hsl(24_14%_13%)] border-2 border-[hsl(32_95%_50%)] rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[hsl(36_8%_65%)] hover:text-white text-xl font-bold min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          ✕
        </button>

        <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold block mb-1">
          ШВИДКИЙ ОНЛАЙН ЗАПИС
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-[hsl(36_10%_92%)] mb-2">
          Barberking Kyiv
        </h2>
        <p className="text-xs text-[hsl(36_8%_70%)] mb-6">
          Заповніть контактні дані і ми зафіксуємо зручний час у календарі.
        </p>

        {submitted ? (
          <div className="p-6 bg-[hsl(32_95%_50%/0.2)] border border-[hsl(32_95%_50%)] rounded text-center space-y-2">
            <span className="text-3xl">✓</span>
            <h3 className="font-display font-bold text-xl uppercase text-white">
              ЗАПИС УСПІШНО ПРИЙНЯТО!
            </h3>
            <p className="text-xs text-[hsl(36_8%_80%)]">
              Адміністратор обраної філії зателефонує вам протягом 5 хвилин для підтвердження.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[hsl(36_8%_70%)] mb-1">
                Ваше Ім'я:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Олександр"
                className="w-full bg-[hsl(24_16%_8%)] border border-[hsl(36_10%_22%)] rounded px-3.5 py-2.5 text-xs text-white focus:border-[hsl(32_95%_50%)] outline-none min-h-[44px]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[hsl(36_8%_70%)] mb-1">
                Номер телефону:
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+380 (95) 000-00-00"
                className="w-full bg-[hsl(24_16%_8%)] border border-[hsl(36_10%_22%)] rounded px-3.5 py-2.5 text-xs text-white focus:border-[hsl(32_95%_50%)] outline-none min-h-[44px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-[hsl(36_8%_70%)] mb-1">
                  Локація:
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[hsl(24_16%_8%)] border border-[hsl(36_10%_22%)] rounded px-2.5 py-2 text-xs text-white outline-none min-h-[44px]"
                >
                  <option>{String(t("modal.loc1"))}</option>
                  <option>{String(t("modal.loc2"))}</option>
                  <option>{String(t("modal.loc3"))}</option>
                  <option>{String(t("modal.loc4"))}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[hsl(36_8%_70%)] mb-1">
                  Категорія:
                </label>
                <select
                  value={master}
                  onChange={(e) => setMaster(e.target.value)}
                  className="w-full bg-[hsl(24_16%_8%)] border border-[hsl(36_10%_22%)] rounded px-2.5 py-2 text-xs text-white outline-none min-h-[44px]"
                >
                  <option>{String(t("modal.tier1"))}</option>
                  <option>{String(t("modal.tier2"))}</option>
                  <option>{String(t("modal.tier3"))}</option>
                  <option>{String(t("modal.tier4"))}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[hsl(36_8%_70%)] mb-1">
                Бажаний дата та час:
              </label>
              <input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[hsl(24_16%_8%)] border border-[hsl(36_10%_22%)] rounded px-3 py-2 text-xs text-white outline-none min-h-[44px]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[hsl(32_95%_50%)] hover:bg-[hsl(35_100%_44%)] text-[hsl(24_15%_9%)] font-display font-bold text-sm uppercase tracking-widest py-3.5 rounded shadow-lg transition-all mt-2 min-h-[44px]"
            >
              Підтвердити бронювання
            </button>
          </form>
        )}
      </div>
    </div>
  );
}