"use client";

import { SITE } from "@/app/lib/site";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type CatalogCardProps = {
  title: string;
  imageSrc: string;
  fallbackImageSrc: string;
  actionText: string;
  imageSizes?: string;
};

export default function CatalogCard({
  title,
  imageSrc,
  fallbackImageSrc,
  actionText,
  imageSizes = "(max-width: 359px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw",
}: CatalogCardProps) {
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  useEffect(() => {
    setCurrentImageSrc(imageSrc);
  }, [imageSrc]);

  return (
    <article className="overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        <Image
          src={currentImageSrc}
          alt={title}
          fill
          sizes={imageSizes}
          className="object-cover"
          onError={() => {
            if (currentImageSrc !== fallbackImageSrc) {
              setCurrentImageSrc(fallbackImageSrc);
            }
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-3 text-start sm:p-4">
        <h3 className="mb-3 text-sm font-semibold leading-6 text-slate-800 sm:text-[15px]">
          {title}
        </h3>

        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${actionText} - ${title}`}
          className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100 sm:text-sm"
        >
          <MessageCircle size={14} />
          <span>{actionText}</span>
        </a>
      </div>
    </article>
  );
}
