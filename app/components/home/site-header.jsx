import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT } from "@/app/lib/site-content";
import { BrandLogo } from "./brand";

const NAVIGATION = [
  ["Services", "#services"],
  ["SmartLink", "#smartlink"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["About", "#about"],
  ["Contact", "#enquiry"],
];

export function SiteHeader({ menuOpen, onMenuToggle, onNavigate }) {
  return (
    <header className="header">
      <a className="logo official-logo" href="#home" aria-label="Bhanova Technologies home">
        <BrandLogo />
      </a>

      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        {NAVIGATION.map(([label, href]) => (
          <a href={href} onClick={onNavigate} key={href}>
            {label}
          </a>
        ))}
        <a
          className="nav-button"
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
        >
          Start a project <ArrowUpRight size={16} />
        </a>
      </nav>

      <button
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
