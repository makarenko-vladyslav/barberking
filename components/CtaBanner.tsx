"use client";
import { useLocale } from "@/lib/i18n";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export default function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 text-black relative overflow-hidden">
      
      {/* Decorative Background Text Watermark Layer */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="font-display font-black text-[22vw] leading-none uppercase text-black/[0.06] whitespace-nowrap">
          BOOK NOW
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        {/* Layer 1: Kicker */}
        <div className="inline-block bg-black/10 border border-black/20 px-4 py-1.5 rounded-full text-black text-xs font-extrabold uppercase tracking-widest">
          ШВИДКИЙ ОНЛАЙН-ЗАПИС 24/7
        </div>

        {/* Layer 2: Invitation Heading (Never brand name) */}
        <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl mx-auto leading-none">
          ОБЕРІТЬ СВІЙ БАРБЕРШОП ТА ЗРУЧНИЙ ЧАС
        </h2>

        {/* Layer 3: Lede */}
        <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto text-black/85">
          {String(t("ctaBanner.subtitle"))}
        </p>

        {/* Layer 4: Primary CTA + Tel Text-Link */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onOpenBooking}
            className="bg-black hover:bg-gray-900 text-amber-400 font-display font-extrabold text-3xl px-10 py-4 rounded transition-all transform hover:scale-[1.02] shadow-2xl active:scale-95"
          >
            {String(t("ctaBanner.btn"))}
          </button>
          
          <a
            href={String(t("brand.phoneRaw"))}
            className="font-display font-bold text-2xl text-black hover:underline uppercase tracking-wider"
          >
            або зателефонувати: {String(t("brand.phone"))}
          </a>
        </div>

        {/* Layer 5: Structured Hours Mini-Table & Layer 6: Address & Map Line */}
        <div className="pt-8 border-t border-black/15 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wider text-black/80">
          <div className="bg-black/5 p-3 rounded">
            ГРАФІК РОБОТИ: ЩОДНЯ 09:00 — 21:00
          </div>
          <div className="bg-black/5 p-3 rounded">
            КИЇВ: ЛУК'ЯНІВКА · ПОЗНЯКИ · ВИНОГРАДАР · ЖК GREAT
          </div>
        </div>

        {/* Layer 7: Trust Micro-Line */}
        <div className="text-xs font-semibold text-black/70">
          * Безкоштовне скасування візиту · Власна безкоштовна парковка біля кожної філії
        </div>

      </div>
    </section>
  );
}
