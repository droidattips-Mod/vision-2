import type { Locale } from "@/app/lib/i18n/types";

export type ReferenceCard = {
  title: string;
  href: string;
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

const THUMIO = "https://image.thum.io/get/width/900/noanimate/";

export function cardImageFromHref(href: string): string {
  return `${THUMIO}${encodeURI(href)}`;
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
        cards: [
          {
            title: "رافعة شوكية تويوتا 3 طن - ديزل",
            href: "https://raffat-alsami.wuaze.com/ar/equipment/%D8%B1%D8%A7%D9%81%D8%B9%D8%A9-%D8%B4%D9%88%D9%83%D9%8A%D8%A9-%D8%AA%D9%88%D9%8A%D9%88%D8%AA%D8%A7-3-%D8%B7%D9%86-%D8%AF%D9%8A%D8%B2%D9%84?i=2",
          },
          {
            title: "رافعة شوكية كوماتسو 5 طن",
            href: "https://raffat-alsami.wuaze.com/ar/equipment/%D8%B1%D8%A7%D9%81%D8%B9%D8%A9-%D8%B4%D9%88%D9%83%D9%8A%D8%A9-%D9%83%D9%88%D9%85%D8%A7%D8%AA%D8%B3%D9%88-5-%D8%B7%D9%86?i=2",
          },
          {
            title: "رافعة شوكية لنيد 2.5 طن - كهرباء",
            href: "https://raffat-alsami.wuaze.com/ar/equipment/%D8%B1%D8%A7%D9%81%D8%B9%D8%A9-%D8%B4%D9%88%D9%83%D9%8A%D8%A9-%D9%84%D9%86%D9%8A%D8%AF-2-5-%D8%B7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1?i=2",
          },
          {
            title: "رافعة شوكية تويوتا 3 طن ديزل",
            href: "https://raffat-alsami.wuaze.com/ar/equipment/rafaa-shoky-toyota-3-tn-dyzl?i=2",
          },
        ],
      },
      {
        title: "الرافعات المقصية",
        cards: [
          { title: "رافعة مقصية جيني 12 متر - كهرباء", href: "https://raffat-alsami.wuaze.com/ar/equipment/rafaa-mksy-jyny-12-mtr-khrbaa?i=2" },
          { title: "رافعة مقصية جي ال جي 18 متر - ديزل", href: "https://raffat-alsami.wuaze.com/ar/equipment/rafaa-mksy-jy-al-jy-18-mtr-dyzl?i=2" },
          { title: "سيزر لفت جي إل جي 8 متر", href: "https://raffat-alsami.wuaze.com/ar/equipment/syzr-lft-jy-al-jy-8-mtr?i=2" },
          { title: "سيزر لفت جيني 12 متر ديزل", href: "https://raffat-alsami.wuaze.com/ar/equipment/syzr-lft-jyny-12-mtr-dyzl?i=2" },
        ],
      },
      {
        title: "الكرينات",
        cards: [
          { title: "كرين ليبر 100 طن", href: "https://raffat-alsami.wuaze.com/ar/equipment/kryn-lybr-100-tn?i=2" },
          { title: "كرين موبايل تادانو 50 طن", href: "https://raffat-alsami.wuaze.com/ar/equipment/kryn-mobayl-tadano-50-tn?i=2" },
          { title: "كرين تادانو 50 طن", href: "https://raffat-alsami.wuaze.com/ar/equipment/kryn-tadano-50-tn?i=2" },
          { title: "كرين كاتو 25 طن", href: "https://raffat-alsami.wuaze.com/ar/equipment/kryn-kato-25-tn?i=2" },
        ],
      },
      {
        title: "البوبكات",
        cards: [
          { title: "بوبكات S450 للمشاريع الصغيرة", href: "https://raffat-alsami.wuaze.com/ar/equipment/bobkat-s450-llmsharyaa-alsghyr?i=2" },
          { title: "بوبكات S450", href: "https://raffat-alsami.wuaze.com/ar/equipment/bobkat-s450?i=2" },
        ],
      },
      {
        title: "البوكلينات",
        cards: [
          { title: "بوكلين كتربلر 428", href: "https://raffat-alsami.wuaze.com/ar/equipment/boklyn-ktrblr-428?i=2" },
          { title: "حفار صغير 3.5 طن", href: "https://raffat-alsami.wuaze.com/ar/equipment/hfar-sghyr-35-tn?i=2" },
        ],
      },
      {
        title: "الشيولات",
        cards: [
          { title: "شيول كتربلر 966H للأيجار في الدمام", href: "https://raffat-alsami.wuaze.com/ar/equipment/shyol-ktrblr-966h-llaygar-fy-aldmam?i=2" },
          { title: "رصاصة أسفلت 3 طن", href: "https://raffat-alsami.wuaze.com/ar/equipment/rsas-alsflt-3-tn?i=2" },
        ],
      },
      {
        title: "التليهندلر",
        cards: [
          { title: "تلهندلر جي سي بي 17 متر للإيجار في الدمام", href: "https://raffat-alsami.wuaze.com/ar/equipment/tlhndlr-jy-sy-by-17-mtr-llaygar-fy-aldmam?i=2" },
          { title: "تلهندلر مانيتو 14 متر", href: "https://raffat-alsami.wuaze.com/ar/equipment/tlhndlr-manyto-14-mtr?i=2" },
          { title: "جي سي بي تليهندر 17متر", href: "https://raffat-alsami.wuaze.com/ar/equipment/jy-sy-by-tlyhndr-17mtr?i=2" },
        ],
      },
      {
        title: "مان لفت",
        cards: [
          { title: "بوم لفت جيني 20 متر", href: "https://raffat-alsami.wuaze.com/ar/equipment/bom-lft-jyny-20-mtr?i=2" },
          { title: "بوم لفت مفصلي 16 متر للايجار في الدمام", href: "https://raffat-alsami.wuaze.com/ar/equipment/bom-lft-mfsly-16-mtr-llaygar-fy-aldmam?i=2" },
          { title: "بوم لفت 26 متر", href: "https://raffat-alsami.wuaze.com/ar/equipment/bom-lft-26-mtr?i=2" },
          { title: "رافعات ذراعية (مان لفت & بوم لفت)", href: "https://raffat-alsami.wuaze.com/ar/equipment/rafaaat-thraaayy-man-lft-bom-lft-llaygar-aldmam-aljbyl-alkhbr-22-42-mtr-yomy-shhry?i=2" },
        ],
      },
    ],
    serviceCards: [
      { title: "تأجير رافعات شوكية الدمام الرياض", href: "https://raffat-alsami.wuaze.com/ar/services/%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1-%D8%B1%D8%A7%D9%81%D8%B9%D8%A7%D8%AA-%D8%B4%D9%88%D9%83%D9%8A%D8%A9?i=2" },
      { title: "فوركلفت 10طن للأيجار في الدمام", href: "https://raffat-alsami.wuaze.com/ar/services/%D9%81%D9%88%D8%B1%D9%83%D9%84%D9%81%D8%AA-10%D8%B7%D9%86-%D9%84%D9%84%D8%A3%D9%8A%D8%AC%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85?i=2" },
      { title: "سيزرلفت 16متر للأيجار في الدمام", href: "https://raffat-alsami.wuaze.com/ar/services/%D8%B3%D9%8A%D8%B2%D8%B1%D9%84%D9%81%D8%AA-16%D9%85%D8%AA%D8%B1-%D9%84%D9%84%D8%A3%D9%8A%D8%AC%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85?i=2" },
      { title: "تأجير رافعات مقصية", href: "https://raffat-alsami.wuaze.com/ar/services/%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1-%D8%B1%D8%A7%D9%81%D8%B9%D8%A7%D8%AA-%D9%85%D9%82%D8%B5%D9%8A%D8%A9?i=2" },
      { title: "رافعة شوكية ديزل 3 طن", href: "https://raffat-alsami.wuaze.com/ar/services/rafaa-shoky-dyzl-3-tn?i=2" },
      { title: "تأجير كرينات موبايل", href: "https://raffat-alsami.wuaze.com/ar/services/%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1-%D9%83%D8%B1%D9%8A%D9%86%D8%A7%D8%AA-%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84?i=2" },
      { title: "بوم لفت تلسكوبي 22 متر", href: "https://raffat-alsami.wuaze.com/ar/services/bom-lft-tlskoby-22-mtr?i=2" },
      { title: "بوبكات S450", href: "https://raffat-alsami.wuaze.com/ar/services/bobkat-s450?i=2" },
      { title: "تأجير كرين سطحة 10 طن في الدمام", href: "https://raffat-alsami.wuaze.com/ar/services/kryn-sth-10-tn?i=2" },
      { title: "ريتش تراك 1.6 طن للايجار في جدة والرياض", href: "https://raffat-alsami.wuaze.com/ar/services/rytsh-trak-16-tn?i=2" },
    ],
  },
  en: {
    equipmentSectionTitle: "All Available Equipment",
    equipmentSectionSubtitle: "Browse our complete fleet of advanced heavy equipment and cranes",
    servicesSectionTitle: "Our Services",
    servicesSectionSubtitle: "We offer a variety of services available for daily, monthly, and yearly rental.",
    equipmentCategories: [
      { title: "Forklifts", cards: [
        { title: "Toyota 3 Ton Diesel Forklift", href: "https://raffat-alsami.wuaze.com/en/equipment/toyota-3-ton-diesel-forklift?i=2" },
        { title: "Komatsu 5 Ton Forklift", href: "https://raffat-alsami.wuaze.com/en/equipment/komatsu-5-ton-forklift?i=2" },
        { title: "Linde 2.5 Ton Electric Forklift", href: "https://raffat-alsami.wuaze.com/en/equipment/linde-25-ton-electric-forklift?i=2" },
        { title: "Toyota 3-Ton Diesel Forklift", href: "https://raffat-alsami.wuaze.com/en/equipment/toyota-3-ton-diesel-forklift-8?i=2" },
      ] },
      { title: "Scissor Lifts", cards: [
        { title: "Genie 12m Electric Scissor Lift", href: "https://raffat-alsami.wuaze.com/en/equipment/genie-12m-electric-scissor-lift?i=2" },
        { title: "JLG 18m Diesel Scissor Lift", href: "https://raffat-alsami.wuaze.com/en/equipment/jlg-18m-diesel-scissor-lift?i=2" },
        { title: "JLG 8m Electric Scissor Lift", href: "https://raffat-alsami.wuaze.com/en/equipment/jlg-8m-electric-scissor-lift?i=2" },
        { title: "Genie 12m Diesel Scissor Lift", href: "https://raffat-alsami.wuaze.com/en/equipment/genie-12m-diesel-scissor-lift?i=2" },
      ] },
      { title: "Cranes", cards: [
        { title: "Liebherr 100-Ton All Terrain", href: "https://raffat-alsami.wuaze.com/en/equipment/liebherr-100-ton-all-terrain?i=2" },
        { title: "Tadano 50 Ton Mobile Crane", href: "https://raffat-alsami.wuaze.com/en/equipment/tadano-50-ton-mobile-crane?i=2" },
        { title: "Tadano 50-Ton Mobile Crane", href: "https://raffat-alsami.wuaze.com/en/equipment/tadano-50-ton-mobile-crane-1?i=2" },
        { title: "Kato 25-Ton Mobile Crane", href: "https://raffat-alsami.wuaze.com/en/equipment/kato-25-ton-mobile-crane?i=2" },
      ] },
      { title: "Bobcats", cards: [
        { title: "Bobcat S450 for Small Projects", href: "https://raffat-alsami.wuaze.com/en/equipment/bobcat-s450-for-small-projects?i=2" },
        { title: "Bobcat S450 Skid Steer", href: "https://raffat-alsami.wuaze.com/en/equipment/bobcat-s450?i=2" },
      ] },
      { title: "Backhoe Loaders", cards: [
        { title: "CAT 428 Backhoe Loader", href: "https://raffat-alsami.wuaze.com/en/equipment/cat-428-backhoe-loader?i=2" },
        { title: "3.5 Ton Mini Excavator", href: "https://raffat-alsami.wuaze.com/en/equipment/35-ton-mini-excavator?i=2" },
      ] },
      { title: "Loaders", cards: [
        { title: "CAT 966H Wheel Loader", href: "https://raffat-alsami.wuaze.com/en/equipment/cat-966h-wheel-loader?i=2" },
        { title: "3 Ton Roller", href: "https://raffat-alsami.wuaze.com/en/equipment/3-ton-roller?i=2" },
      ] },
      { title: "Telehandlers", cards: [
        { title: "JCB 540-170 Telehandler in Dammam", href: "https://raffat-alsami.wuaze.com/en/equipment/jcb-540-170-telehandler-in-dammam?i=2" },
        { title: "Manitou MT-X 1440", href: "https://raffat-alsami.wuaze.com/en/equipment/manitou-mt-x-1440?i=2" },
        { title: "10m Te", href: "https://raffat-alsami.wuaze.com/en/equipment/10m-te?i=2" },
      ] },
      { title: "Man Lifts", cards: [
        { title: "Genie S-65 Telescopic Boom", href: "https://raffat-alsami.wuaze.com/en/equipment/genie-s-65-telescopic-boom?i=2" },
        { title: "JLG 450AJ Articulating Boom Dammam & Jubail", href: "https://raffat-alsami.wuaze.com/en/equipment/jlg-450aj-articulating-boom?i=2" },
        { title: "26m Boom Lift", href: "https://raffat-alsami.wuaze.com/en/equipment/26m-boom-lift?i=2" },
        { title: "Articulating & Boom Lift Rental in Dammam, Jubail & Khobar | 22-42m", href: "https://raffat-alsami.wuaze.com/en/equipment/articulating-boom-lift-rental?i=2" },
      ] },
    ],
    serviceCards: [
      { title: "Forklift Rental Dammam Riyadh", href: "https://raffat-alsami.wuaze.com/en/services/forklift-rental?i=2" },
      { title: "Forklifts 10Ton For Rent Dammam", href: "https://raffat-alsami.wuaze.com/en/services/forklifts-10ton-for-rent-dammam?i=2" },
      { title: "16m Scissor Lift for Rental in Dammam", href: "https://raffat-alsami.wuaze.com/en/services/16m-scissor-lift-for-rental-in-dammam?i=2" },
      { title: "Scissor Lift Rental", href: "https://raffat-alsami.wuaze.com/en/services/scissor-lift-rental?i=2" },
      { title: "3 Ton Diesel Forklift", href: "https://raffat-alsami.wuaze.com/en/services/3-ton-diesel-forklift?i=2" },
      { title: "Mobile Crane Rental", href: "https://raffat-alsami.wuaze.com/en/services/mobile-crane-rental?i=2" },
      { title: "22m Telescopic Boom Lift", href: "https://raffat-alsami.wuaze.com/en/services/22m-telescopic-boom-lift?i=2" },
      { title: "Bobcat S450 Skid Steer", href: "https://raffat-alsami.wuaze.com/en/services/bobcat-s450-skid-steer?i=2" },
      { title: "10 Ton Flatbed Crane For rental Dammam", href: "https://raffat-alsami.wuaze.com/en/services/10-ton-flatbed-crane?i=2" },
      { title: "1.6 Ton Reach Truck for rental Jeddah and Riyadh", href: "https://raffat-alsami.wuaze.com/en/services/16-ton-reach-truck?i=2" },
    ],
  },
};
