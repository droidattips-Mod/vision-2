import type { Locale } from "@/app/lib/i18n/types";

export type ReferenceCard = {
  title: string;
  imageSrc: string;
  fallbackImageSrc: string;
};

export type ReferenceCategory = {
  title: string;
  cards: ReferenceCard[];
};

type LocalizedCatalog = {
  equipmentSectionTitle: string;
  equipmentSectionSubtitle: string;
  servicesSectionTitle: string;
  servicesSectionSubtitle: string;
  equipmentCategories: ReferenceCategory[];
  serviceCards: ReferenceCard[];
};

const EQUIPMENT_FALLBACK = "/images/placeholders/equipment-fallback.jpg";
const SERVICE_FALLBACK = "/images/placeholders/service-fallback.svg";

// One SVG placeholder per card — filename matches the English equipment title.
// Replace each SVG with the real photo when ready (keep the same filename or update the path here).
const FORKLIFT_IMAGES = [
  "/images/equipment/Toyota-3-Ton-Diesel-Forklift.jp",
  "/images/equipment/Komatsu-5-Ton-Forklift.jpg",
  "/images/equipment/Linde-2.5-Ton-Electric-Fomrklift.jpg",
  "/images/equipment/Toyota-3-Ton-Diesel-Forklift-2.jpg",
] as const;

const SCISSOR_LIFT_IMAGES = [
  "/images/equipment/Genie-123m-Electric-Scissor-Lift.jpg",
  "/images/equipment/JLG-18m-Diesel-Scissor-Lift.webp",
  "/images/equipment/JLG-8m-Electric-Scissor-Lift.webp",
  "/images/equipment/Genie-12m-Diesel-Scissor-Lift.jpg",
] as const;

const CRANE_IMAGES = [
  "/images/equipment/Liebherr-100-Ton-All-Terrain.svg",
  "/images/equipment/Tadano-50-Ton-Mobile-Crane.svg",
  "/images/equipment/Tadano-50-Ton-Mobile-Crane-2.svg",
  "/images/equipment/Kato-25-Ton-Mobile-Crane.svg",
] as const;

const BOBCAT_IMAGES = [
  "/images/equipment/Bobcat-S450-Small-Projects.svg",
  "/images/equipment/Bobcat-S450-Skid-Steer.svg",
] as const;

const BACKHOE_IMAGES = [
  "/images/equipment/CAT-428-Backhoe-Loader.svg",
  "/images/equipment/3.5-Ton-Mini-Excavator.svg",
] as const;

const LOADER_IMAGES = [
  "/images/equipment/CAT-966H-Wheel-Loader.svg",
  "/images/equipment/3-Ton-Roller.svg",
] as const;

const TELEHANDLER_IMAGES = [
  "/images/equipment/JCB-540-170-Telehandler-Dammam.svg",
  "/images/equipment/Manitou-MT-X-1440.svg",
  "/images/equipment/10m-Telehandler.svg",
] as const;

const MAN_LIFT_IMAGES = [
  "/images/equipment/Genie-S65-Telescopic-Boom.svg",
  "/images/equipment/JLG-450AJ-Articulating-Boom-Dammam-Jubail.svg",
  "/images/equipment/26m-Boom-Lift.svg",
  "/images/equipment/Articulating-Boom-Lift-Rental-Dammam-Jubail-Khobar-22-42m.svg",
] as const;

const SERVICE_IMAGES = [
  "/images/services/Forklift-Rental-Dammam-Riyadh.svg",
  "/images/services/Forklifts-10Ton-For-Rent-Dammam.svg",
  "/images/services/16m-Scissor-Lift-Rental-Dammam.svg",
  "/images/services/Scissor-Lift-Rental.svg",
  "/images/services/3-Ton-Diesel-Forklift.svg",
  "/images/services/Mobile-Crane-Rental.svg",
  "/images/services/22m-Telescopic-Boom-Lift.svg",
  "/images/services/Bobcat-S450-Skid-Steer.svg",
  "/images/services/10-Ton-Flatbed-Crane-Rental-Dammam.svg",
  "/images/services/1.6-Ton-Reach-Truck-Rental-Jeddah-Riyadh.svg",
] as const;

function createCards(
  titles: string[],
  imageSources: readonly string[],
  fallbackImageSrc: string,
): ReferenceCard[] {
  return titles.map((title, index) => ({
    title,
    imageSrc: imageSources[index % imageSources.length],
    fallbackImageSrc,
  }));
}

export const REFERENCE_CATALOG: Record<Locale, LocalizedCatalog> = {
  ar: {
    equipmentSectionTitle: "جميع المعدات المتاحة",
    equipmentSectionSubtitle: "استعرض أسطولنا الكامل من المعدات الثقيلة والرافعات المتطورة",
    servicesSectionTitle: "بعض من خدماتنا",
    servicesSectionSubtitle: "نوفر لكم العديد من الخدمات المتوفرة للأيجار بشكل يومي / شهري / سنوي",
    equipmentCategories: [
      {
        title: "الرافعات الشوكية",
        cards: createCards(
          [
            "رافعة شوكية تويوتا 3 طن - ديزل",
            "رافعة شوكية كوماتسو 5 طن",
            "رافعة شوكية لنيد 2.5 طن - كهرباء",
            "رافعة شوكية تويوتا 3 طن ديزل",
          ],
          FORKLIFT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "الرافعات المقصية",
        cards: createCards(
          [
            "رافعة مقصية جيني 12 متر - كهرباء",
            "رافعة مقصية جي ال جي 18 متر - ديزل",
            "سيزر لفت جي إل جي 8 متر",
            "سيزر لفت جيني 12 متر ديزل",
          ],
          SCISSOR_LIFT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "الكرينات",
        cards: createCards(
          [
            "كرين ليبر 100 طن",
            "كرين موبايل تادانو 50 طن",
            "كرين تادانو 50 طن",
            "كرين كاتو 25 طن",
          ],
          CRANE_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "البوبكات",
        cards: createCards(
          ["بوبكات S450 للمشاريع الصغيرة", "بوبكات S450"],
          BOBCAT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "البوكلينات",
        cards: createCards(
          ["بوكلين كتربلر 428", "حفار صغير 3.5 طن"],
          BACKHOE_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "الشيولات",
        cards: createCards(
          ["شيول كتربلر 966H للأيجار في الدمام", "رصاصة أسفلت 3 طن"],
          LOADER_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "التليهندلر",
        cards: createCards(
          [
            "تلهندلر جي سي بي 17 متر للإيجار في الدمام",
            "تلهندلر مانيتو 14 متر",
            "جي سي بي تليهندر 17متر",
          ],
          TELEHANDLER_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "مان لفت",
        cards: createCards(
          [
            "بوم لفت جيني 20 متر",
            "بوم لفت مفصلي 16 متر للايجار في الدمام",
            "بوم لفت 26 متر",
            "رافعات ذراعية (مان لفت & بوم لفت)",
          ],
          MAN_LIFT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
    ],
    serviceCards: createCards(
      [
        "تأجير رافعات شوكية الدمام الرياض",
        "فوركلفت 10طن للأيجار في الدمام",
        "سيزرلفت 16متر للأيجار في الدمام",
        "تأجير رافعات مقصية",
        "رافعة شوكية ديزل 3 طن",
        "تأجير كرينات موبايل",
        "بوم لفت تلسكوبي 22 متر",
        "بوبكات S450",
        "تأجير كرين سطحة 10 طن في الدمام",
        "ريتش تراك 1.6 طن للايجار في جدة والرياض",
      ],
      SERVICE_IMAGES,
      SERVICE_FALLBACK,
    ),
  },
  en: {
    equipmentSectionTitle: "All Available Equipment",
    equipmentSectionSubtitle: "Browse our complete fleet of advanced heavy equipment and cranes",
    servicesSectionTitle: "Our Services",
    servicesSectionSubtitle: "We offer a variety of services available for daily, monthly, and yearly rental.",
    equipmentCategories: [
      {
        title: "Forklifts",
        cards: createCards(
          [
            "Toyota 3 Ton Diesel Forklift",
            "Komatsu 5 Ton Forklift",
            "Linde 2.5 Ton Electric Forklift",
            "Toyota 3-Ton Diesel Forklift",
          ],
          FORKLIFT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "Scissor Lifts",
        cards: createCards(
          [
            "Genie 12m Electric Scissor Lift",
            "JLG 18m Diesel Scissor Lift",
            "JLG 8m Electric Scissor Lift",
            "Genie 12m Diesel Scissor Lift",
          ],
          SCISSOR_LIFT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "Cranes",
        cards: createCards(
          [
            "Liebherr 100-Ton All Terrain",
            "Tadano 50 Ton Mobile Crane",
            "Tadano 50-Ton Mobile Crane",
            "Kato 25-Ton Mobile Crane",
          ],
          CRANE_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "Bobcats",
        cards: createCards(
          ["Bobcat S450 for Small Projects", "Bobcat S450 Skid Steer"],
          BOBCAT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "Backhoe Loaders",
        cards: createCards(
          ["CAT 428 Backhoe Loader", "3.5 Ton Mini Excavator"],
          BACKHOE_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "Loaders",
        cards: createCards(
          ["CAT 966H Wheel Loader", "3 Ton Roller"],
          LOADER_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "Telehandlers",
        cards: createCards(
          [
            "JCB 540-170 Telehandler in Dammam",
            "Manitou MT-X 1440",
            "10m Telehandler",
          ],
          TELEHANDLER_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
      {
        title: "Man Lifts",
        cards: createCards(
          [
            "Genie S-65 Telescopic Boom",
            "JLG 450AJ Articulating Boom Dammam & Jubail",
            "26m Boom Lift",
            "Articulating & Boom Lift Rental in Dammam, Jubail & Khobar | 22-42m",
          ],
          MAN_LIFT_IMAGES,
          EQUIPMENT_FALLBACK,
        ),
      },
    ],
    serviceCards: createCards(
      [
        "Forklift Rental Dammam Riyadh",
        "Forklifts 10Ton For Rent Dammam",
        "16m Scissor Lift for Rental in Dammam",
        "Scissor Lift Rental",
        "3 Ton Diesel Forklift",
        "Mobile Crane Rental",
        "22m Telescopic Boom Lift",
        "Bobcat S450 Skid Steer",
        "10 Ton Flatbed Crane For rental Dammam",
        "1.6 Ton Reach Truck for rental Jeddah and Riyadh",
      ],
      SERVICE_IMAGES,
      SERVICE_FALLBACK,
    ),
  },
};
