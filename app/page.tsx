"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  PhotoLightbox,
  InstructionAppBar,
  WelcomeHero,
  StayScheduleCards,
  HouseRulesCard,
  LocationCard,
  GuideStepsSection,
  WifiCard,
  type LightboxImage,
} from "@/components/instruction";

export default function Home() {
  const [lightbox, setLightbox] = React.useState<LightboxImage | null>(null);

  return (
    <>
      <PhotoLightbox image={lightbox} onClose={() => setLightbox(null)} />
      <InstructionAppBar />
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
          <StayScheduleCards />
          <HouseRulesCard />
          <LocationCard />
          <GuideStepsSection onOpenPhoto={setLightbox} />
          <WifiCard />
          <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 4 }}>
            Гарного проживання і спокійного відпочинку!
          </Typography>
        </Container>
      </Box>
    </>
  );
}
