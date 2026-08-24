"use client";

export function StatementStrip({ text }: { text: string }) {
  return (
    <div className="py-8 bg-[hsl(0_0%_6%)] border-y border-[hsl(0_0%_15%)] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <span className="font-['Alumni_Sans'] text-2xl sm:text-4xl font-extrabold uppercase tracking-widest text-[hsl(38_90%_50%)]">
          {text}
        </span>
      </div>
    </div>
  );
}

export function LabeledHairline({ label }: { label: string }) {
  return (
    <div className="py-6 bg-[hsl(0_0%_5%)] flex items-center justify-center gap-4 px-4">
      <div className="flex-1 max-w-xs h-[1px] bg-[hsl(0_0%_18%)]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[hsl(0_0%_50%)] whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 max-w-xs h-[1px] bg-[hsl(0_0%_18%)]" />
    </div>
  );
}
