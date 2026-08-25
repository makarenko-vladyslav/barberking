"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BeforeAfterShowcase() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-20 bg-[hsl(24_16%_8%)] border-t border-[hsl(36_10%_22%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold mb-2 block">
            ТОЧНІСТЬ FADE В ДЕТАЛЯХ
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] mb-3">
            ТОЧНЕ ОФОРМЛЕННЯ ТА ТРАНСФОРМАЦІЯ
          </h2>
          <p className="text-sm text-[hsl(36_8%_70%)]">
            Порівняйте рівність зрізу, окантовку бороди та чистий скронь після відвідин Barberking.
          </p>
        </div>

        {/* Before After Interactive Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[380px] sm:h-[500px] rounded-lg overflow-hidden border-2 border-[hsl(36_10%_22%)] select-none">
            {/* After Image (Full width background) */}
            <img
              src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5902-2-300x200.jpg"
              alt={String(t("ba.afterAlt"))}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] font-display font-bold text-sm uppercase px-3 py-1 rounded shadow">
              ПІСЛЯ ВІЗИТУ (РЕЗУЛЬТАТ)
            </div>

            {/* Before Image (Clipped top layer) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-300x200.jpg"
                alt={String(t("ba.beforeAlt"))}
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                style={{ width: "100%", maxWidth: "none" }}
              />
              <div className="absolute top-4 left-4 bg-[hsl(24_14%_13%)] text-[hsl(36_10%_92%)] font-display font-bold text-sm uppercase px-3 py-1 rounded shadow border border-[hsl(36_10%_22%)]">
                ДО СТРИЖКИ
              </div>
            </div>

            {/* Divider Line Slider */}
            <div
              className="absolute inset-y-0 w-1 bg-[hsl(32_95%_50%)] cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] flex items-center justify-center font-bold text-xs shadow-xl">
                ↔
              </div>
            </div>

            {/* Invisible Range Input for drag */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
            />
          </div>
          <p className="text-center text-xs font-mono text-[hsl(36_8%_60%)] mt-3">
            ← Потягніть слайдер для порівняння результату →
          </p>
        </div>
      </div>
    </section>
  );
}