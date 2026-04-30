"use client";

import CatalogCard from "@/app/components/CatalogCard";
import { REFERENCE_CATALOG } from "@/app/data/reference-catalog";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function PopularItemsSection() {
  const { locale } = useLanguage();
  const section = REFERENCE_CATALOG[locale];
  const actionText = locale === "ar" ? "حجز" : "Book Now";

  return (
    <section id="equipment" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-8">
        <div className="mx-auto mb-8 w-full max-w-xl rounded-xl bg-[#0d1b3d] px-4 py-4 text-center text-white shadow-md sm:mb-10 sm:px-5">
          <h2 className="text-lg font-bold sm:text-3xl">{section.equipmentSectionTitle}</h2>
          <p className="mt-1 text-xs text-white/80 sm:text-sm">
            {section.equipmentSectionSubtitle}
          </p>
        </div>

        {section.equipmentCategories.map((category) => (
          <div key={category.title} className="mb-8">
            <h3 className="mb-3 text-sm font-bold text-slate-800 sm:text-base">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {category.cards.map((card) => (
                <CatalogCard
                  key={`${category.title}-${card.title}`}
                  title={card.title}
                  imageSrc={card.imageSrc}
                  fallbackImageSrc={card.fallbackImageSrc}
                  actionText={actionText}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
