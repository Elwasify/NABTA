import { Icon } from "@iconify/react";
import { useLanguage } from "../context/useLanguage";

const ingredientIcons = [
  "ph:recycle-duotone",
  "ph:stack-duotone",
  "ph:flame-duotone",
  "ph:mountains-duotone",
  "ph:bird-duotone",
  "ph:grains-duotone",
  "ph:atom-duotone",
];

const fallbackIcon = "ph:plant-duotone";

export default function Ingredients() {
  const { t } = useLanguage();
  return (
    <section
      id="ingredients"
      className="surface surface-ingredients py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div
          className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16"
          data-reveal
        >
          <div>
            <p className="section-kicker mb-4">{t.ingredients.label}</p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.ingredients.title}
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-nabta-lime to-forest-800" />
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:max-w-md lg:justify-self-end">
            {t.ingredients.description}
          </p>
        </div>
        <div
          className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-5"
          data-reveal="stagger"
        >
          {t.ingredients.items.map((name, index) => (
            <article
              key={name}
              className="group min-w-0 basis-[calc(50%-0.375rem)] rounded-2xl border border-line bg-white/90 p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-forest-700/30 hover:shadow-lg sm:basis-[calc(33.333%-0.84rem)] sm:p-6 lg:basis-[calc(25%-0.95rem)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-nabta-lime-soft to-white text-forest-900 ring-1 ring-forest-700/10 transition-transform duration-300 group-hover:scale-110">
                <Icon
                  icon={ingredientIcons[index] || fallbackIcon}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mt-4 break-words text-sm font-semibold leading-snug text-navy-900 sm:text-base">
                {name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
