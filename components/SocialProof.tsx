"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();
  const items = (t("socialProof") as string[]) || [];

  return (
    <section className="bg-[hsl(0_0%_5%)] text-white">
      <Marquee items={items} speed={30} />
    </section>
  );
}
