"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface CalculatorProps {
  onOpenBooking: (details?: string) => void;
}

export default function Calculator({ onOpenBooking }: CalculatorProps) {
  const { t } = useLocale();

  const [rank, setRank] = useState<number>(1.0); // 1.0 = Barber, 1.25 = Top, 1.5 = Grand
  const [selectedServices, setSelectedServices] = useState<
    Array<{ id: string; name: string; basePrice: number; time: number }>
  >([
    { id: "haircut", name: "Професійна стрижка", basePrice: 750, time: 45 },
    { id: "beard", name: "Стрижка та окантовка бороди", basePrice: 550, time: 30 },
  ]);

  const availableServices = [
    { id: "haircut", name: "Професійна чоловіча стрижка", basePrice: 750, time: 45 },
    { id: "beard", name: "Стрижка та окантовка бороди", basePrice: 550, time: 30 },
    { id: "shave", name: "Королівське гоління", basePrice: 600, time: 45 },
    { id: "camo_beard", name: "Камуфляж сивини бороди", basePrice: 550, time: 25 },
    { id: "black_mask", name: "Чорна маска очищення обличчя", basePrice: 350, time: 20 },
    { id: "waxing", name: "Воскова депіляція (ніс/вуха)", basePrice: 150, time: 15 },
  ];

  const toggleService = (srv: typeof availableServices[0]) => {
    if (selectedServices.some((s) => s.id === srv.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== srv.id));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const totalPrice = Math.round(
    selectedServices.reduce((acc, s) => acc + s.basePrice, 0) * rank
  );
  const totalTime = selectedServices.reduce((acc, s) => acc + s.time, 0);

  const getRankName = () => {
    if (rank === 1.0) return "Barber";
    if (rank === 1.25) return "Top Barber";
    return "Grand Barber";
  };

  return (
    <section id="calculator" className="py-20 bg-[hsl(18_12%_8%)] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
            {String(t("calculator.kicker"))}
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white">
            {String(t("calculator.heading"))}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {String(t("calculator.subheading"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[hsl(18_10%_12%)] border border-hairline rounded-lg p-6 sm:p-10 shadow-2xl">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Rank Selection */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-amber-500 font-bold mb-3">
                {String(t("calculator.selectRank"))}
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setRank(1.0)}
                  className={`py-3 px-2 rounded font-display font-bold text-xl text-center border transition-all ${
                    rank === 1.0
                      ? "bg-amber-500 text-black border-amber-500"
                      : "bg-gray-800 text-gray-300 border-hairline hover:bg-gray-700"
                  }`}
                >
                  Barber
                </button>
                <button
                  type="button"
                  onClick={() => setRank(1.25)}
                  className={`py-3 px-2 rounded font-display font-bold text-xl text-center border transition-all ${
                    rank === 1.25
                      ? "bg-amber-500 text-black border-amber-500"
                      : "bg-gray-800 text-gray-300 border-hairline hover:bg-gray-700"
                  }`}
                >
                  Top Barber
                </button>
                <button
                  type="button"
                  onClick={() => setRank(1.5)}
                  className={`py-3 px-2 rounded font-display font-bold text-xl text-center border transition-all ${
                    rank === 1.5
                      ? "bg-amber-500 text-black border-amber-500"
                      : "bg-gray-800 text-gray-300 border-hairline hover:bg-gray-700"
                  }`}
                >
                  Grand Barber
                </button>
              </div>
            </div>

            {/* Service Checkboxes */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-amber-500 font-bold mb-3">
                {String(t("calculator.selectServices"))}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.some((s) => s.id === srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-3 rounded border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? "bg-amber-500/10 border-amber-500 text-white"
                          : "bg-gray-800/60 border-hairline text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <span className="font-semibold text-sm">{srv.name}</span>
                      <span className="text-amber-400 font-bold text-sm ml-2">
                        {isChecked ? "✓" : "+"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Display Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-gray-900 to-[hsl(18_12%_8%)] border border-hairline rounded-lg p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-hairline pb-4">
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  Обрано послуг: {selectedServices.length} · Мастер: {getRankName()}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  {String(t("calculator.totalPrice"))}
                </div>
                <div className="font-display font-extrabold text-6xl text-amber-400">
                  {totalPrice} UAH
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  {String(t("calculator.totalTime"))}
                </div>
                <div className="font-display font-bold text-3xl text-white">
                  ~ {totalTime} {String(t("calculator.minutes"))}
                </div>
              </div>

              {selectedServices.length > 0 && (
                <div className="text-xs text-gray-400 space-y-1 border-t border-hairline pt-3">
                  <div className="font-semibold text-gray-300">Включено у візит:</div>
                  <ul className="list-disc list-inside space-y-0.5">
                    {selectedServices.map((s) => (
                      <li key={s.id}>{s.name}</li>
                    ))}
                    <li>Безкоштовний кава / віскі бар</li>
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() =>
                onOpenBooking(
                  `Розрахунок (${getRankName()}): ${selectedServices
                    .map((s) => s.name)
                    .join(", ")} = ${totalPrice} UAH`
                )
              }
              disabled={selectedServices.length === 0}
              className="mt-8 w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-display font-extrabold text-2xl py-4 rounded transition-all shadow-xl shadow-amber-500/20"
            >
              {String(t("calculator.bookNow"))}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
