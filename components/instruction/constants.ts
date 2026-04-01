import type { LightboxImage } from "./types";

export const MAPS_URL = "https://maps.app.goo.gl/HqF8GpGR8dSLry7E9";

export const WIFI_SSID = "213";
export const WIFI_PASSWORD = "Odessa_213";

function escapeWifiField(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/:/g, "\\:");
}

export function getWifiQrPayload(): string {
  return `WIFI:T:WPA;S:${escapeWifiField(WIFI_SSID)};P:${escapeWifiField(WIFI_PASSWORD)};H:false;;`;
}

export const STEP1_BUILDING: LightboxImage = {
  src: "/guide/gate.png",
  alt: "Житловий комплекс, вигляд будинку",
  width: 952,
  height: 184,
};

export type CourtyardPhoto = LightboxImage & { caption: string };

export const STEP2_COURTYARD_PHOTOS: CourtyardPhoto[] = [
  {
    caption: "Крок 2а — двір",
    src: "/guide/route-courtyard-1.png",
    alt: "Панорама двору житлового комплексу",
    width: 1024,
    height: 408,
  },
  {
    caption: "Крок 2б — майданчик у глибині",
    src: "/guide/route-courtyard-2.png",
    alt: "Двір з дитячим майданчиком далі по маршруту",
    width: 1024,
    height: 369,
  },
  {
    caption: "Крок 2в — парадна 1, будинок 27 «Перлина»",
    src: "/guide/building-27-entrance.png",
    alt: "Вхід у будинок: номер 27, напис Перлина, парадна 1",
    width: 1024,
    height: 426,
  },
];
