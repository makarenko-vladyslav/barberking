"use client";
import { useLocale } from "@/lib/i18n";

interface StepItem {
  index: string;
  name: string;
  desc: string;
}

export default function Workflow() {
  const { t } = useLocale();
  const rawSteps = t("workflow.steps");
  const steps: StepItem[] = Array.isArray(rawSteps) ? (rawSteps as StepItem[]) : [];

  return (
    <section className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("workflow.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("workflow.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            {String(t("workflow.subtitle"))}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.index}
              className="p-6 rounded bg-bg-dark border border-border-dark flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-4xl font-extrabold text-accent/40 mb-4">
                  {step.index}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-text-light leading-snug">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-dark text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Етап {step.index} / 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
