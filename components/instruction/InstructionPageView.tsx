"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { InstructionDTO } from "@/lib/instruction-types";
import { PhotoLightbox } from "./PhotoLightbox";
import { InstructionAppBar } from "./InstructionAppBar";
import { WelcomeHero } from "./WelcomeHero";
import { StayScheduleCards } from "./StayScheduleCards";
import { HouseRulesCard } from "./HouseRulesCard";
import { LocationCard } from "./LocationCard";
import { GuideStepsSection } from "./GuideStepsSection";
import { WifiCard } from "./WifiCard";
import type { LightboxImage } from "./types";

export type InstructionPageViewProps = {
  data: InstructionDTO;
};

export function InstructionPageView({ data }: InstructionPageViewProps) {
  const [lightbox, setLightbox] = React.useState<LightboxImage | null>(null);
  const guide = React.useMemo(
    () => ({
      guideStep1: data.guideStep1,
      guideStep2: data.guideStep2,
      guideStep3: data.guideStep3,
    }),
    [data.guideStep1, data.guideStep2, data.guideStep3],
  );

  return (
    <>
      <PhotoLightbox image={lightbox} onClose={() => setLightbox(null)} />
      <InstructionAppBar title={data.appBar.title} subtitle={data.appBar.subtitle} />
      <Box
        sx={{
          background: (t) =>
            `linear-gradient(165deg, ${t.palette.primary.light}15 0%, ${t.palette.background.default} 45%, ${t.palette.background.default} 100%)`,
          minHeight: "100vh",
          pb: 6,
        }}
      >
        <Container maxWidth="md" sx={{ py: { xs: 3, sm: 4 } }}>
          <WelcomeHero />
          <StayScheduleCards
            checkInTime={data.schedule.checkInTime}
            checkInDetail={data.schedule.checkInDetail}
            checkOutTime={data.schedule.checkOutTime}
            checkOutDetail={data.schedule.checkOutDetail}
          />
          <HouseRulesCard />
          <LocationCard address={data.locationAddress} mapsUrl={data.mapsUrl} />
          <GuideStepsSection guide={guide} onOpenPhoto={setLightbox} />
          <WifiCard ssid={data.wifi.ssid} password={data.wifi.password} />
          <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 4 }}>
            Гарного проживання і спокійного відпочинку!
          </Typography>
        </Container>
      </Box>
    </>
  );
}
