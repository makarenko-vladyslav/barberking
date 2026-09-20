"use client";

import { useEffect } from "react";

/**
 * Delivers every <form> on this site to the studio's endpoint.
 *
 * The site is a static export with no backend of its own, so a form the model
 * wrote could only pretend to send. This listens for `submit` on the document
 * in the capture phase — ahead of any handler the form carries — posts the
 * fields as a plain urlencoded body (a CORS "simple" request, no preflight)
 * and marks the form: `data-sent="sending"`, then `"true"` or `"failed"`. A
 * form may style those states; nothing else on the page needs to know.
 *
 * `_hp` is a honeypot: a filled one is a bot, answered with a silent "success".
 */
const HONEYPOT = "_hp";

export function FormBridge({ endpoint }: { endpoint: string }) {
  useEffect(() => {
    if (!endpoint) return undefined;

    const onSubmit = (event: Event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();

      const data = new FormData(form);
      if (String(data.get(HONEYPOT) ?? "").trim() !== "") {
        form.dataset.sent = "true";
        return;
      }

      const body = new URLSearchParams();
      data.forEach((value, key) => {
        if (typeof value === "string") body.append(key, value);
      });
      body.set("_page", window.location.href);

      form.dataset.sent = "sending";
      fetch(endpoint, { method: "POST", body, keepalive: true })
        .then((response) => {
          form.dataset.sent = response.ok ? "true" : "failed";
          if (response.ok) form.reset();
        })
        .catch(() => {
          form.dataset.sent = "failed";
        });
    };

    document.addEventListener("submit", onSubmit, true);
    return () => document.removeEventListener("submit", onSubmit, true);
  }, [endpoint]);

  return null;
}
