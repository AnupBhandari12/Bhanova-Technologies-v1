"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT, NAVIGATION } from "@/config/site";
import { BrandLogo } from "@/components/shared/Brand";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }

    function handleOutsideClick(event) {
      if (!header.current?.contains(event.target)) setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="header" ref={header}>
      <a className="logo official-logo" href="/" aria-label="Bhanova Technologies home">
        <BrandLogo />
      </a>
      <nav
        id="primary-navigation"
        className={menuOpen ? "nav open" : "nav"}
        aria-label="Primary navigation"
      >
        {NAVIGATION.map(({ label, href }) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-button"
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Start a project <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
      <button
        className="menu-button"
        type="button"
        ref={menuButton}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}
