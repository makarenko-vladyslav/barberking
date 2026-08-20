"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService = "",
}: BookingModalProps) {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    location: "pavlivska",
    service: initialService || "Професійна стрижка + борода",
    name: "",
    phone: "",
    date: "",
    time: "14:00",
    comment: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[hsl(18_12%_8%)] border border-hairline rounded-lg max-w-lg w-full p-6 sm:p-8 relative text-white space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 text-3xl flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="font-display font-extrabold text-3xl text-white uppercase">
              Дякуємо за замовлення!
            </h3>
            <p className="text-gray-300 text-sm">
              {String(t("bookingModal.success"))}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-amber-500 text-black font-display font-bold text-xl px-6 py-2 rounded mt-4"
            >
              Закрити
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
                {String(t("bookingModal.subtitle"))}
              </div>
              <h3 className="font-display font-extrabold text-3xl uppercase text-white">
                {String(t("bookingModal.title"))}
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs uppercase text-gray-400 font-bold mb-1">
                  Оберіть філію:
                </label>
                <select
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full bg-gray-900 border border-hairline rounded p-2.5 text-sm text-white focus:border-amber-500 outline-none"
                >
                  <option value="pavlivska">Лук'янівка (вул. Павлівська 18)</option>
                  <option value="great">Позняки (ЖК Great, Дніпровська наб. 15К)</option>
                  <option value="varshavsky">Виноградар (ЖК Варшавський, вул. Олеся 8А)</option>
                  <option value="urlivska">Позняки (вул. Урлівська 11/44)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase text-gray-400 font-bold mb-1">
                  Обрана послуга / примітка:
                </label>
                <input
                  type="text"
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-gray-900 border border-hairline rounded p-2.5 text-sm text-white focus:border-amber-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase text-gray-400 font-bold mb-1">
                    {String(t("bookingModal.nameLabel"))}:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Дмитро"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-900 border border-hairline rounded p-2.5 text-sm text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-gray-400 font-bold mb-1">
                    {String(t("bookingModal.phoneLabel"))}:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="095 107 92 15"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-gray-900 border border-hairline rounded p-2.5 text-sm text-white focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase text-gray-400 font-bold mb-1">
                    {String(t("bookingModal.dateLabel"))}:
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-gray-900 border border-hairline rounded p-2.5 text-sm text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-gray-400 font-bold mb-1">
                    {String(t("bookingModal.timeLabel"))}:
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-gray-900 border border-hairline rounded p-2.5 text-sm text-white focus:border-amber-500 outline-none"
                  >
                    <option value="10:00">10:00</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="16:00">16:00</option>
                    <option value="18:00">18:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-2xl py-3.5 rounded transition-all shadow-lg shadow-amber-500/20 mt-4"
            >
              {String(t("bookingModal.submit"))}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
