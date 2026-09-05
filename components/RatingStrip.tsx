"use client";

export default function RatingStrip() {
  return (
    <div className="py-6 bg-bg-dark border-y border-border-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <div className="font-display text-3xl font-extrabold text-accent tabular-nums">265 000+</div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Виконаних стрижок</div>
        </div>
        <div>
          <div className="font-display text-3xl font-extrabold text-text-light tabular-nums">4 філії</div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Київ: Правий та Лівий берег</div>
        </div>
        <div>
          <div className="font-display text-3xl font-extrabold text-accent tabular-nums">4.9 / 5.0</div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Google Maps рейтинг</div>
        </div>
        <div>
          <div className="font-display text-3xl font-extrabold text-text-light tabular-nums">100%</div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Власний паркінг</div>
        </div>
      </div>
    </div>
  );
}