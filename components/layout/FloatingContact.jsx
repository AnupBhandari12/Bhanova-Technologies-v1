"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { CONTACT } from "@/config/site";
import styles from "./FloatingContact.module.css";

export function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const contact = document.getElementById("contact");
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    if (contact) observer.observe(contact);
    function onFocus(event) {
      setTyping(Boolean(event.target.closest("input,textarea,select")));
    }
    function onBlur(event) {
      setTyping(Boolean(event.relatedTarget?.closest("input,textarea,select")));
    }
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
    };
  }, []);
  if (!visible || typing) return null;
  return (
    <div className={styles.bar}>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Discuss your project on WhatsApp"
      >
        <MessageCircle size={19} />
        <span>Have a project in mind?</span>
        <strong>Let's talk</strong>
        <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
