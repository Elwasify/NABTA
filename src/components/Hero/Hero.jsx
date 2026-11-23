import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/useLanguage";

const disciplineIcons = [
  "ph:drop-duotone",
  "ph:plant-duotone",
  "ph:leaf-duotone",
  "ph:atom-duotone",
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home">
      <div className="hero-stage hero-field">
        <img
          src="/nabta-hero.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <div className="hero-content relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 pb-12 pt-24 sm:px-8 sm:pb-14 lg:px-10">
          <div className="hero-copy max-w-5xl" data-reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/85 sm:text-sm">
              <Icon
                icon="ph:plant-duotone"
                width={18}
                height={18}
                className="me-2 inline-block align-[-3px] text-nabta-lime"
              />
              {t.hero.label}
            </p>

            <h1 className="max-w-4xl font-body text-5xl font-medium uppercase leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-[clamp(5rem,8.4vw,8.5rem)]">
              <span className="block">{t.hero.titleStart}</span>
              <span className="block">{t.hero.titleHighlight}</span>
            </h1>
          </div>

          <div className="hero-bottom mt-12 flex flex-col gap-8 sm:mt-16 lg:mt-auto lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pt-16">
            <div className="hero-actions flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-forest-950 transition-all hover:-translate-y-0.5 hover:bg-mist-100 hover:shadow-lg sm:px-6"
              >
                {t.hero.primaryButton}
                <Icon
                  icon="ph:arrow-up-right-bold"
                  width={17}
                  height={17}
                  className="rtl:-scale-x-100"
                />
              </a>
              <a
                href="#order"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/65 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15 sm:px-6"
              >
                <Icon icon="ph:package-duotone" width={20} height={20} />
                {t.hero.secondaryButton}
              </a>
            </div>

            <div className="hero-description max-w-xl lg:text-end" data-reveal>
              <p className="text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">
                {t.hero.description}
              </p>
              <p className="mt-4 text-sm font-medium text-white/75 sm:text-base">
                {t.hero.byline}
              </p>
            </div>
          </div>

          <p className="hero-caption mt-9 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 lg:absolute lg:bottom-5 lg:start-10 lg:mt-0">
            {t.hero.imageCaption}
          </p>
        </div>
      </div>

      <div className="discipline-strip border-b border-mist-200">
        <div
          className="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-5 px-4 py-6 sm:gap-x-5 sm:gap-y-6 sm:px-5 sm:py-8 lg:grid-cols-4 lg:px-8"
          data-reveal="stagger"
        >
          {disciplineIcons.map((icon, index) => (
            <div
              key={icon}
              className="group flex min-w-0 items-center justify-center gap-3 text-center text-forest-900"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-1 ring-forest-700/10 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                <Icon icon={icon} width={26} height={26} />
              </span>
              <span className="text-xs font-medium leading-snug sm:text-sm">
                {t.hero.disciplines[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
