"use client";
import { useLocale } from "@/lib/i18n";

export default function RatingStrip() {
  const { t } = useLocale();

  return (
    <div className="py-6 bg-bg-dark border-y border-border-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <div className="font-display text-3xl font-extrabold text-accent tabular-nums">
            {String(t("ratingStrip.item1Value"))}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">
            {String(t("ratingStrip.item1Label"))}
          </div>
        </div>
        <div>
          <div className="font-display text-3xl font-extrabold text-text-light tabular-nums">
            {String(t("ratingStrip.item2Value"))}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">
            {String(t("ratingStrip.item2Label"))}
          </div>
        </div>
        <div>
          <div className="font-display text-3xl font-extrabold text-accent tabular-nums">
            {String(t("ratingStrip.item3Value"))}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">
            {String(t("ratingStrip.item3Label"))}
          </div>
        </div>
        <div>
          <div className="font-display text-3xl font-extrabold text-text-light tabular-nums">
            {String(t("ratingStrip.item4Value"))}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">
            {String(t("ratingStrip.item4Label"))}
          </div>
        </div>
      </div>
    </div>
  );
}