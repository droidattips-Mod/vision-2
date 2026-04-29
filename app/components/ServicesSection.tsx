"use client";

import { REFERENCE_CATALOG, cardImageFromHref } from "@/app/data/reference-catalog";
import { SITE } from "@/app/lib/site";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const { locale } = useLanguage();
  const section = REFERENCE_CATALOG[locale];
  const actionText = locale === "ar" ? "حجز" : "Book Now";

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="mx-auto w-full max-w-xl rounded-xl bg-[#0d1b3d] px-5 py-4 text-center text-white shadow-md mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl font-bold">{section.servicesSectionTitle}</h2>
          <p className="mt-1 text-[11px] sm:text-sm text-white/80">{section.servicesSectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {section.serviceCards.map((service) => (
            <article
              key={service.title}
              className="rounded-xl overflow-hidden border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <a
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className="block relative h-24 sm:h-32 w-full bg-gray-100"
              >
                <Image
                  src={cardImageFromHref(service.href)}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </a>
              <div className="p-2.5 sm:p-3 text-start">
                <h3 className="text-[11px] sm:text-sm font-semibold text-slate-800 mb-2 leading-5 line-clamp-2">
                  {service.title}
                </h3>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[11px] sm:text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle size={13} />
                  <span>{actionText}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
