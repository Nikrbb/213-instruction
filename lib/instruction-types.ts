export type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CourtyardPhoto = LightboxImage & {
  caption?: string;
  showRouteArrow?: boolean;
  routeArrowRotateDeg?: number;
  routeArrowLeftPct?: number;
  routeArrowBottomPct?: number;
};

export type InstructionDTO = {
  apartmentId: string;
  metadata: { title: string; description: string };
  appBar: { title: string; subtitle: string };
  mapsUrl: string;
  locationAddress: string;
  wifi: { ssid: string; password: string };
  schedule: {
    checkInTime: string;
    checkInDetail: string;
    checkOutTime: string;
    checkOutDetail: string;
  };
  guideStep1: LightboxImage;
  guideStep2: {
    title: string;
    intro: string;
    bullets: string[];
    photos: CourtyardPhoto[];
  };
  guideStep3: {
    residenceName: string;
    paradeName: string;
    securityInstruction: string;
    securityInstructionNoGuard?: string;
    lockerCode: string;
    lockerHint: string;
    closing: string;
  };
};
