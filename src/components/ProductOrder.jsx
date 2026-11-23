import { Icon } from "@iconify/react";
import nabtaProduct from "../assets/nabta-product.webp";
import { useLanguage } from "../context/useLanguage";

const groups = [
  {
    key: "home",
    icon: "ph:house-line-duotone",
    sizes: ["250 gm", "500 gm", "1000 gm"],
  },
  {
    key: "field",
    icon: "ph:tractor-duotone",
    sizes: ["5 kg"],
  },
];

export default function ProductOrder() {
  const { t } = useLanguage();

  return (
    <section
      id="order"
      className="surface surface-order py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div
        className="surface-content mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-5 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-8"
        data-reveal
      >
        <figure className="overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-xl shadow-forest-950/10">
          <img
            src={nabtaProduct}
            alt={t.order.productAlt}
            className="mx-auto aspect-square w-full max-w-md object-contain"
          />
        </figure>
        <div>
          <p className="section-kicker">{t.order.label}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {t.order.title}
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-nabta-lime to-forest-800" />
          <p className="mt-6 text-base leading-relaxed text-ink-soft">{t.order.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {groups.map((group) => (
              <div
                key={group.key}
                className="rounded-2xl border border-line bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-forest-950">
                  <Icon icon={group.icon} width={24} height={24} />
                  {t.order[group.key]}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.sizes.map((value) => (
                    <span
                      key={value}
                      className="rounded-lg border border-forest-700/15 bg-mist-50 px-3 py-1.5 text-sm font-semibold text-forest-900"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
