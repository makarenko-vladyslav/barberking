"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function ContactForm() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-neutral-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                {String(t("contact.kicker"))}
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-6">
                {String(t("contact.title"))}
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed mb-8">
                {String(t("contact.subtitle"))}
              </p>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-neutral-900 border border-white/10">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest block mb-1">
                    {String(t("contact.phoneHeader"))}
                  </span>
                  <a href="tel:0951079215" className="font-display text-3xl font-bold text-accent hover:underline">
                    095 107 92 15
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-white/10">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest block mb-1">
                    {String(t("contact.emailHeader"))}
                  </span>
                  <a href="mailto:barberking.kv1@gmail.com" className="font-display text-xl font-bold text-white hover:text-accent">
                    barberking.kv1@gmail.com
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-white/10">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest block mb-1">
                    {String(t("contact.mainBranchHeader"))}
                  </span>
                  <span className="font-display text-xl font-bold text-white">
                    {String(t("contact.mainBranchAddress"))}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-3xl font-bold uppercase text-white mb-6">
                {String(t("contact.formTitle"))}
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert(String(t("contact.successMsg"))); }} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-neutral-400 mb-1">
                    {String(t("contact.nameLabel"))}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={String(t("contact.namePlaceholder"))}
                    className="w-full bg-neutral-950 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-neutral-400 mb-1">
                    {String(t("contact.phoneLabel"))}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="095 123 45 67"
                    className="w-full bg-neutral-950 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-neutral-400 mb-1">
                    {String(t("contact.branchLabel"))}
                  </label>
                  <select className="w-full bg-neutral-950 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:border-accent focus:outline-none">
                    <option>{String(t("contact.branchOpt1"))}</option>
                    <option>{String(t("contact.branchOpt2"))}</option>
                    <option>{String(t("contact.branchOpt3"))}</option>
                    <option>{String(t("contact.branchOpt4"))}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent hover:bg-amber-400 text-black font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-amber-500/20"
                >
                  {String(t("contact.btnSubmit"))}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
