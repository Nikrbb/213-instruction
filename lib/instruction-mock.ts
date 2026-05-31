import fs from "node:fs";
import path from "node:path";
import type { CourtyardPhoto, InstructionDTO, LightboxImage } from "./instruction-types";

const IMAGE_EXTS = [".png", ".jpg", ".jpeg", ".webp", ".avif"];

function resolveSrc(src: string): string {
  if (!src.startsWith("/")) return src;
  const publicRoot = path.join(process.cwd(), "public");
  if (fs.existsSync(path.join(publicRoot, src))) return src;
  const ext = path.extname(src).toLowerCase();
  const base = ext ? src.slice(0, -ext.length) : src;
  for (const candidate of IMAGE_EXTS) {
    if (candidate === ext) continue;
    if (fs.existsSync(path.join(publicRoot, base + candidate))) {
      return base + candidate;
    }
  }
  return src;
}

function withResolvedSrc<T extends LightboxImage>(img: T): T {
  return { ...img, src: resolveSrc(img.src) };
}

const GATE_IMAGE_KAMANINA: LightboxImage = {
  src: "/guide/kamanina/gate.png",
  alt: "Вхід у двір на вул. Самофалова (Каманіна), 16а — вигляд будинку з боку алеї та огорожі",
  width: 1024,
  height: 773,
};

const GATE_IMAGE_FRANCUZSKY: LightboxImage = {
  src: "/guide/francuzsky/gate.png",
  alt: "В'їзд у двір на Французькому бульварі, 60Б: КПП із шлагбаумом, знак STOP та хвіртка з домофоном",
  width: 5712,
  height: 4284,
};

const MOCK_213: InstructionDTO = {
  apartmentId: "213",
  metadata: {
    title: "Заселення · квартира 213",
    description:
      "Інструкція з заселення: час, адреса, маршрут, ключі та Wi‑Fi.",
  },
  appBar: {
    title: "Заселення · квартира 213",
    subtitle: "22 поверх · Перлина 27",
  },
  mapsUrl: "https://maps.app.goo.gl/HqF8GpGR8dSLry7E9",
  locationAddress: "вул. Валерія Самофалова, 16а (Каманіна)",
  wifi: { ssid: "213", password: "Odessa_213" },
  schedule: {
    checkInTime: "з 14:00",
    checkInDetail: "Заселення починається о 14:00.",
    checkOutTime: "до 12:00",
    checkOutDetail: "Будь ласка, звільніть квартиру до полудня.",
  },
  guideStep1: GATE_IMAGE_KAMANINA,
  guideStep2: {
    title: "Двір і парадна",
    intro: "",
    bullets: [],
    photos: [
      {
        showRouteArrow: true,
        routeArrowRotateDeg: 45,
        routeArrowLeftPct: 75,
        src: "/guide/apt213/route-01.png",
        alt: "Фасад будинку зі стоматологічною клінікою Dr. Dymov",
        width: 1024,
        height: 768,
      },
      {
        showRouteArrow: true,
        routeArrowRotateDeg: -20,
        src: "/guide/apt213/route-02.png",
        alt: "Пішохідна зона житлового комплексу з візерунковою укладкою плитки",
        width: 1024,
        height: 768,
      },
      {
        showRouteArrow: true,
        routeArrowRotateDeg: -35,
        routeArrowBottomPct: 25,
        src: "/guide/apt213/route-03.png",
        alt: "Шлях до входу в будинок із темним цоколем та скляними дверима",
        width: 1024,
        height: 768,
      },
      {
        showRouteArrow: true,
        routeArrowRotateDeg: -15,
        routeArrowLeftPct: 45,
        routeArrowBottomPct: 35,
        src: "/guide/apt213/route-04.png",
        alt: "Двір із номером 27 на фасаді та дитячим майданчиком",
        width: 1024,
        height: 768,
      },
      {
        showRouteArrow: true,
        src: "/guide/apt213/route-05.png",
        alt: "Дитячий майданчик у формі корабля біля будинку 27",
        width: 1024,
        height: 768,
      },
      {
        showRouteArrow: true,
        routeArrowLeftPct: 90,
        src: "/guide/apt213/route-06.png",
        alt: "Вхід у будинок 27 Жемчужина з пандусом і написом Парадна",
        width: 1024,
        height: 768,
      },
    ] satisfies CourtyardPhoto[],
  },
  guideStep3: {
    residenceName: "27 Перлина",
    paradeName: "1-ша парадна",
    securityInstruction:
      "Зверніться на пост охорони й попросіть доставити вас до апартаментів 213 на 22-му поверсі.",
    securityInstructionNoGuard:
      "Якщо пост порожній — пройдіть до ліфта, натисніть кнопку виклику та повідомте диспетчера, що заселяєтесь у квартиру 213. Вам відкриють доступ і піднімуть на поверх.",
    lockerCode: "1213",
    lockerHint: "Введіть код, відчиніть локер, беріть ключі та заходьте в квартиру.",
    closing: "Гарного відпочинку!",
  },
};

const MOCK_384: InstructionDTO = {
  apartmentId: "384",
  metadata: {
    title: "Заселення · квартира 384",
    description: "Інструкція з заселення: час, адреса, маршрут, ключі та Wi‑Fi.",
  },
  appBar: {
    title: "Заселення · квартира 384",
    subtitle: "15 поверх · Перлина 27 · 2-га парадна",
  },
  mapsUrl: "https://maps.app.goo.gl/HqF8GpGR8dSLry7E9",
  locationAddress: "вул. Валерія Самофалова, 16а (Каманіна)",
  wifi: { ssid: "384", password: "Odessa_384" },
  schedule: {
    checkInTime: "з 14:00",
    checkInDetail: "Заселення починається о 14:00.",
    checkOutTime: "до 12:00",
    checkOutDetail: "Будь ласка, звільніть квартиру до полудня.",
  },
  guideStep1: GATE_IMAGE_KAMANINA,
  guideStep2: {
    title: "Двір і парадна",
    intro: "",
    bullets: [],
    photos: [
      {
        showRouteArrow: true,
        routeArrowLeftPct: 25,
        routeArrowBottomPct: 20,
        routeArrowRotateDeg: -45,
        src: "/guide/apt384/route-01.png",
        alt: "Стоматологія DENTAL CLINIC BY DR. DYMOV біля вежі житлового комплексу",
        width: 1024,
        height: 768,
      },
      {
        showRouteArrow: true,
        routeArrowLeftPct: 40,
        routeArrowBottomPct: 35,
        routeArrowRotateDeg: 50,
        src: "/guide/apt384/route-02.png",
        alt: "Алея до будинку 27 з комерційними приміщеннями",
        width: 1024,
        height: 768,
      },
      {
        showRouteArrow: true,
        routeArrowLeftPct: 32,
        routeArrowBottomPct: 25,
        routeArrowRotateDeg: 15,
        src: "/guide/apt384/route-03.png",
        alt: "Вхід у будинок 27 Перлина, 2-га парадна",
        width: 1024,
        height: 768,
      },
    ] satisfies CourtyardPhoto[],
  },
  guideStep3: {
    residenceName: "27 Перлина",
    paradeName: "2-га парадна",
    securityInstruction:
      "Зверніться на пост охорони й попросіть доставити вас до апартаментів 384 на 15-му поверсі.",
    securityInstructionNoGuard:
      "Якщо пост порожній — пройдіть до ліфта, натисніть кнопку виклику та повідомте диспетчера, що заселяєтесь у квартиру 384. Вам відкриють доступ і піднімуть на поверх.",
    lockerCode: "2384",
    lockerHint: "Введіть код, відчиніть локер, беріть ключі та заходьте в квартиру.",
    closing: "Гарного відпочинку!",
  },
};

const MOCK_150: InstructionDTO = {
  apartmentId: "150",
  metadata: {
    title: "Заселення · квартира 150",
    description: "Інструкція з заселення: час, адреса, маршрут, ключі та Wi‑Fi.",
  },
  appBar: {
    title: "Заселення · квартира 150",
    subtitle: "20 поверх · 8 Перлина · 1-ша парадна",
  },
  mapsUrl: "https://maps.app.goo.gl/wC5sVAp8nVs9FH4f7",
  locationAddress: "Французький бульвар, 60Б, Одеса",
  wifi: { ssid: "150", password: "56042542" },
  schedule: {
    checkInTime: "з 14:00",
    checkInDetail: "Заселення починається о 14:00.",
    checkOutTime: "до 11:00",
    checkOutDetail: "Будь ласка, звільніть квартиру до 11:00.",
  },
  guideStep1: GATE_IMAGE_FRANCUZSKY,
  guideStep2: {
    title: "Двір і парадна",
    intro: "",
    bullets: [],
    photos: [
      {
        src: "/guide/apt150/route-01.png",
        alt: "Маршрут до 1-ї парадної ЖК 8 Перлина, крок 1",
        width: 5712,
        height: 4284,
      },
      {
        src: "/guide/apt150/route-02.png",
        alt: "Маршрут до 1-ї парадної ЖК 8 Перлина, крок 2",
        width: 5712,
        height: 4284,
      },
      {
        src: "/guide/apt150/route-03.png",
        alt: "Маршрут до 1-ї парадної ЖК 8 Перлина, крок 3",
        width: 5712,
        height: 4284,
      },
      {
        src: "/guide/apt150/route-04.png",
        alt: "Маршрут до 1-ї парадної ЖК 8 Перлина, крок 4",
        width: 5712,
        height: 4284,
      },
    ] satisfies CourtyardPhoto[],
  },
  guideStep3: {
    residenceName: "8 Перлина",
    paradeName: "1-ша парадна",
    securityInstruction:
      "Зверніться на пост охорони й попросіть доставити вас до апартаментів 150 на 20-му поверсі.",
    securityInstructionNoGuard:
      "Якщо пост порожній — пройдіть до ліфта, натисніть кнопку виклику та повідомте диспетчера, що заселяєтесь у квартиру 150. Вам відкриють доступ і піднімуть на поверх.",
    lockerCode: "1305",
    lockerHint: "Введіть код, відчиніть локер, беріть ключі та заходьте в квартиру.",
    closing: "Гарного відпочинку!",
  },
};

const BY_ID: Record<string, InstructionDTO> = {
  "150": MOCK_150,
  "213": MOCK_213,
  "384": MOCK_384,
};

export function getInstructionMock(apartmentId: string): InstructionDTO | null {
  const mock = BY_ID[apartmentId];
  if (!mock) return null;
  return {
    ...mock,
    guideStep1: withResolvedSrc(mock.guideStep1),
    guideStep2: {
      ...mock.guideStep2,
      photos: mock.guideStep2.photos.map(withResolvedSrc),
    },
  };
}

export async function fetchInstructionByApartmentId(
  apartmentId: string,
): Promise<InstructionDTO | null> {
  await Promise.resolve();
  return getInstructionMock(apartmentId);
}
