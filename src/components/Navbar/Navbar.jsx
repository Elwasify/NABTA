import { useState } from "react";
import { Icon } from "@iconify/react";
import Brand from "../Brand";
import { repositoryUrl } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

const navIcons = {
  "#about": "ph:info-duotone",
  "#research-areas": "ph:microscope-duotone",
  "#ingredients": "ph:leaf-duotone",
  "#order": "ph:package-duotone",
  "#team": "ph:users-three-duotone",
};

export default function Navbar({ overlay = false }) {
  const [open, setOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();
  const navigation = t.nav.filter((item) =>
    ["#about", "#research-areas", "#ingredients", "#order", "#team"].includes(
      item.href,
    ),
  );

  const light = overlay;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        light
          ? "border-white/15 bg-[#3f5a54] text-white"
          : "border-line bg-paper/95 text-ink shadow-sm shadow-forest-950/5 backdrop-blur-md"
      } ${overlay ? "" : "!sticky"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-5 lg:px-8">
        <Brand light={light} />

        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                light
                  ? "text-white/90 hover:text-white"
                  : "text-ink-soft hover:text-forest-800"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.meta.languageButtonLabel}
            className={`inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border px-2 text-[11px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 sm:px-3 sm:text-sm xl:px-4 ${
              light
                ? "border-white/45 bg-white/10 text-white hover:bg-white/20"
                : "border-forest-700/30 bg-white/70 text-forest-950 hover:bg-mist-100"
            }`}
          >
            <Icon icon="ph:translate-duotone" width={18} height={18} />
            {t.meta.languageButton}
          </button>

          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md xl:inline-flex 2xl:px-5 ${
              light
                ? "bg-white text-forest-950 hover:bg-mist-100"
                : "bg-forest-900 text-white hover:bg-forest-800"
            }`}
          >
            <Icon icon="ph:folder-open-duotone" width={18} height={18} />
            {t.navbar.repositoryButton}
            <Icon
              icon="ph:arrow-up-right-bold"
              width={16}
              height={16}
              className="rtl:-scale-x-100"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t.meta.toggleMenu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors xl:hidden ${
              light
                ? "text-white hover:bg-white/15"
                : "text-forest-900 hover:bg-nabta-lime-soft"
            }`}
          >
            <Icon
              icon={open ? "ph:x-bold" : "ph:list-bold"}
              width={22}
              height={22}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`max-h-[calc(100dvh-4rem)] overflow-y-auto border-t xl:hidden ${
            light
              ? "border-white/15 bg-[#3f5a54] text-white"
              : "border-line bg-paper text-ink"
          }`}
        >
          <nav
            id="mobile-navigation"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-5 sm:py-4"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-medium transition-colors ${
                  light
                    ? "text-white hover:bg-white/10"
                    : "text-ink hover:bg-mist-100 hover:text-forest-800"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${
                    light
                      ? "bg-white/10 text-white ring-white/20"
                      : "bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-forest-700/10"
                  }`}
                >
                  <Icon
                    icon={navIcons[item.href] || "ph:circle-duotone"}
                    width={22}
                    height={22}
                  />
                </span>
                {item.label}
              </a>
            ))}
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                light
                  ? "bg-white text-forest-950 hover:bg-mist-100"
                  : "bg-forest-900 text-white hover:bg-forest-800"
              }`}
            >
              <Icon icon="ph:folder-open-duotone" width={18} height={18} />
              {t.navbar.repositoryButtonMobile}
              <Icon
                icon="ph:arrow-up-right-bold"
                width={16}
                height={16}
                className="rtl:-scale-x-100"
              />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
