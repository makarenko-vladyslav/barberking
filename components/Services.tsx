"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

interface ServiceItem {
  id: string;
  category: string;
  name: string;
  price: string;
  desc: string;
  duration: string;
  badge?: string;
  img: string;
}

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<string>("combo");

  const items = (t("services.items") as ServiceItem[]) || [];
  const filteredItems = items.filter((item) => item.category === activeTab);

  return (
    <section id="services" className="py-24 bg-neutral-950 border-b border-white/10 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("services.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("services.title"))}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              {String(t("services.subtitle"))}
            </p>
          </div>
        </Reveal>

        {/* Highlighted Signature Item Box */}
        <Reveal delay={0.1}>
          <div className="mb-12 bg-neutral-900 border border-accent/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 bg-accent/20 border border-accent/40 text-accent text-[10px] font-bold uppercase tracking-widest rounded">
                {String(t("services.signatureLabel"))}
              </span>
              <h3 className="font-display text-3xl font-extrabold uppercase text-white">
                {String(t("services.signatureTitle"))}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {String(t("services.signatureDesc"))}
              </p>
            </div>
            <div className="flex flex-col items-end gap-3 shrink-0">
              <span className="font-display text-4xl font-extrabold text-accent tabular-nums">
                {String(t("services.signaturePrice"))}
              </span>
              <a
                href="#booking"
                className="px-6 py-3 bg-accent hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
              >
                {String(t("services.bookNow"))}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-white/10 pb-6">
          <button
            onClick={() => setActiveTab("combo")}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all ${
              activeTab === "combo"
                ? "bg-accent text-black font-bold shadow-md shadow-amber-500/20"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            {String(t("services.tabs.combo"))}
          </button>
          <button
            onClick={() => setActiveTab("barber")}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all ${
              activeTab === "barber"
                ? "bg-accent text-black font-bold shadow-md shadow-amber-500/20"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            {String(t("services.tabs.barber"))}
          </button>
          <button
            onClick={() => setActiveTab("top")}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all ${
              activeTab === "top"
                ? "bg-accent text-black font-bold shadow-md shadow-amber-500/20"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            {String(t("services.tabs.top"))}
          </button>
          <button
            onClick={() => setActiveTab("grand")}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all ${
              activeTab === "grand"
                ? "bg-accent text-black font-bold shadow-md shadow-amber-500/20"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            {String(t("services.tabs.grand"))}
          </button>
          <button
            onClick={() => setActiveTab("subs")}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all ${
              activeTab === "subs"
                ? "bg-accent text-black font-bold shadow-md shadow-amber-500/20"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            {String(t("services.tabs.subs"))}
          </button>
        </div>

        {/* Offer Rows with Dotted Leader & Tabular Price */}
        <Stagger className="space-y-4">
          {filteredItems.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-accent/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full sm:w-48 aspect-[4/3] shrink-0 overflow-hidden bg-neutral-800">
                    <img
                      src={service.img}
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                  </div>
                  <div className="p-5 sm:p-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      {service.badge && (
                        <span className="px-2 py-0.5 bg-accent text-black text-[9px] font-bold uppercase tracking-wider rounded">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-0 sm:pr-6 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest shrink-0">
                    {String(t("services.durationLabel"))}: {service.duration}
                  </span>
                  <span className="font-display text-2xl font-extrabold text-accent shrink-0 tabular-nums">
                    {service.price}
                  </span>
                  <a
                    href="#booking"
                    className="px-4 py-2 bg-neutral-950 border border-white/20 hover:border-accent text-white hover:text-accent rounded text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
                  >
                    {String(t("services.bookBtn"))}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footnote Line & Secondary CTA */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 max-w-2xl">
            {String(t("services.footnote"))}
          </p>
          <a
            href="#booking"
            className="text-xs uppercase font-bold tracking-widest text-accent hover:text-white transition-colors shrink-0"
          >
            {String(t("services.secondaryCta"))}
          </a>
        </div>
      </div>
    </section>
  );
}
