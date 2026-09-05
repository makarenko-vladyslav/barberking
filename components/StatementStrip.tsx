"use client";

export default function StatementStrip() {
  return (
    <div className="relative py-12 bg-primary border-y border-border-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-baseline justify-between gap-6">
        <div>
          <div className="text-accent font-display text-xs tracking-widest uppercase mb-1">
            КИЇВСЬКИЙ СТАНДАРТ ЧОЛОВІЧОЇ ФОРМИ
          </div>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-text-light leading-tight">
            ЧІТКИЙ FADE БЕЗ СХОДИНОК · БОРОДА ЗА АНАТОМІЄЮ · ВЛАСНИЙ ПАРКІНГ
          </p>
        </div>
        <div className="shrink-0">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-dark font-display text-lg font-bold uppercase tracking-wider rounded hover:bg-accent-deep transition-colors duration-200 ease-out"
          >
            Обрати філію →
          </a>
        </div>
      </div>
    </div>
  );
}