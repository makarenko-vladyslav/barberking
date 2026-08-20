"use client";

export function LabeledHairline({ label }: { label: string }) {
  return (
    <div className="py-6 bg-[hsl(18_12%_8%)] border-y border-hairline select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
        <span className="w-12 h-[1px] bg-hairline hidden sm:block" />
        <span>{label}</span>
        <span className="w-12 h-[1px] bg-hairline hidden sm:block" />
      </div>
    </div>
  );
}

export function StatementBand({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="py-14 bg-[hsl(18_10%_12%)] border-y border-amber-500/20 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h3 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-amber-400">
          {title}
        </h3>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-300">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function RatingStrip() {
  return (
    <div className="py-4 bg-amber-500/10 border-y border-hairline-accent text-amber-400 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs font-bold uppercase tracking-wider gap-4">
        <div>ОФІЦІЙНИЙ СЕРВІС БАРБЕРШОПІВ У КИЄВІ</div>
        <div>СЕРЕДНІЙ РЕЙТИНГ: 4.8 / 5.0 · GOOGLE MAPS</div>
        <div>69,000+ ПІДТВЕРДЖЕНИХ ВІЗИТІВ</div>
      </div>
    </div>
  );
}
