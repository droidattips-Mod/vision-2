"use client";

import CatalogCard from "@/app/components/CatalogCard";
import { REFERENCE_CATALOG } from "@/app/data/reference-catalog";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function ServicesSection() {
  const { locale } = useLanguage();
  const section = REFERENCE_CATALOG[locale];
  const actionText = locale === "ar" ? "حجز" : "Book Now";

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-8">
        <div className="mx-auto mb-8 w-full max-w-xl rounded-xl bg-[#0d1b3d] px-4 py-4 text-center text-white shadow-md sm:mb-10 sm:px-5">
          <h2 className="text-lg font-bold sm:text-3xl">{section.servicesSectionTitle}</h2>
          <p className="mt-1 text-xs text-white/80 sm:text-sm">
            {section.servicesSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {section.serviceCards.map((service) => (
            <CatalogCard
              key={service.title}
              title={service.title}
              imageSrc={service.imageSrc}
              fallbackImageSrc={service.fallbackImageSrc}
              actionText={actionText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
