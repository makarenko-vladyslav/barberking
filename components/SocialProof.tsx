"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();

  const highlights = [
    String(t("social.item1")),
    String(t("social.item2")),
    String(t("social.item3")),
    String(t("social.item4")),
    String(t("social.item5")),
    String(t("social.item6")),
    String(t("social.item7"))
  ];

  return (
    <div className="bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] py-3 font-display font-bold text-lg uppercase tracking-widest border-y border-[hsl(32_95%_40%)]">
      <Marquee speed={30}>
        {highlights.map((item, idx) => (
          <span key={idx} className="flex items-center gap-6 whitespace-nowrap px-4">
            <span>{item}</span>
            <span className="text-[hsl(24_15%_9%/0.4)]">★</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}