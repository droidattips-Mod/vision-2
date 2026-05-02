"use client";

import CatalogCard from "@/app/components/CatalogCard";
import { REFERENCE_CATALOG } from "@/app/data/reference-catalog";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const CARDS_PER_PAGE = 4;
const AUTO_MS = 4000;

export default function ServicesSection() {
  const { locale } = useLanguage();
  const section = REFERENCE_CATALOG[locale];
  const actionText = locale === "ar" ? "حجز" : "Book Now";

  // Flatten all equipment cards from every category into one list
  const allCards = section.equipmentCategories.flatMap((cat) => cat.cards);
  const totalPages = Math.ceil(allCards.length / CARDS_PER_PAGE);

  const [page, setPage] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalPagesRef = useRef(totalPages);
  totalPagesRef.current = totalPages;

  const changePage = useCallback((newPage: number) => {
    const clamped = ((newPage % totalPagesRef.current) + totalPagesRef.current) % totalPagesRef.current;
    setFading(true);
    setTimeout(() => {
      setPage(clamped);
      setFading(false);
    }, 180);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      changePage((page + 1) % totalPagesRef.current);
    }, AUTO_MS);
  }, [changePage, page]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPage((p) => (p + 1) % totalPagesRef.current);
        setFading(false);
      }, 180);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (delta: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    changePage(page + delta);
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPage((p) => (p + 1) % totalPagesRef.current);
        setFading(false);
      }, 180);
    }, AUTO_MS);
  };

  const goTo = (p: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    changePage(p);
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPage((prev) => (prev + 1) % totalPagesRef.current);
        setFading(false);
      }, 180);
    }, AUTO_MS);
  };

  // Always show CARDS_PER_PAGE cards, wrapping around the list
  const start = page * CARDS_PER_PAGE;
  const pageCards = Array.from({ length: CARDS_PER_PAGE }, (_, i) =>
    allCards[(start + i) % allCards.length],
  );

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-8">
        <div className="mx-auto mb-8 w-full max-w-xl rounded-xl bg-[#0d1b3d] px-4 py-4 text-center text-white shadow-md sm:mb-10 sm:px-5">
          <h2 className="text-lg font-bold sm:text-3xl">{section.servicesSectionTitle}</h2>
          <p className="mt-1 text-xs text-white/80 sm:text-sm">
            {section.servicesSectionSubtitle}
          </p>
        </div>

        <div className="relative">
          <div
            className={`grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 transition-opacity duration-[180ms] ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            {pageCards.map((card, i) => (
              <CatalogCard
                key={`${page}-${i}`}
                title={card.title}
                imageSrc={card.imageSrc}
                fallbackImageSrc={card.fallbackImageSrc}
                actionText={actionText}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-saudi-700" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
