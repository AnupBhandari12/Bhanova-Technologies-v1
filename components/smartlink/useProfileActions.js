"use client";

import { useRef, useState } from "react";
import { createBhanovaVCard, createDemoVCard } from "@/lib/vcard";
import { downloadTextFile } from "@/lib/download";

export function useProfileActions(profile) {
  const [activeAction, setActiveAction] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [manualShareUrl, setManualShareUrl] = useState("");
  const actionTrigger = useRef(null);

  function clearFeedback() {
    setFeedback("");
    setManualShareUrl("");
  }

  function handleAction(item, trigger) {
    if (item.action !== "save-contact") {
      actionTrigger.current = trigger;
      setActiveAction(item);
      return;
    }
    clearFeedback();
    const origin = window.location.origin;
    const contents = profile.isDemo
      ? createDemoVCard(profile, origin)
      : createBhanovaVCard(origin);
    downloadTextFile(
      contents,
      profile.isDemo ? `${profile.slug}-demo-contact.vcf` : "Bhanova-Technologies.vcf",
      "text/vcard;charset=utf-8",
    );
    setFeedback(
      profile.isDemo
        ? `Sample contact for ${profile.name} downloaded. It is labelled Demo and contains no real phone or email.`
        : "Contact file ready. Open it on your device to add Bhanova Technologies.",
    );
  }

  async function shareProfile() {
    clearFeedback();
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: profile.name, url });
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setFeedback("Profile link copied.");
    } catch {
      setManualShareUrl(url);
      setFeedback("Select and copy the profile link below.");
    }
  }

  return {
    activeAction,
    setActiveAction,
    actionTrigger,
    feedback,
    manualShareUrl,
    handleAction,
    shareProfile,
    clearFeedback,
  };
}
