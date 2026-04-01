"use client";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { StepOneCard } from "./StepOneCard";
import { StepTwoCourtyardCard } from "./StepTwoCourtyardCard";
import { StepThreeKeysCard } from "./StepThreeKeysCard";
import type { LightboxImage } from "./types";

export type GuideStepsSectionProps = {
  onOpenPhoto: (image: LightboxImage) => void;
};

export function GuideStepsSection({ onOpenPhoto }: GuideStepsSectionProps) {
  return (
    <>
      <Typography
        variant="overline"
        color="primary"
        fontWeight={700}
        sx={{ letterSpacing: 1.2 }}
      >
        Як дійти до квартири
      </Typography>
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: 0.5 }}>
        Маршрут покроково
      </Typography>
      <Stack spacing={3} sx={{ mb: 3 }}>
        <StepOneCard onOpenPhoto={onOpenPhoto} />
        <StepTwoCourtyardCard onOpenPhoto={onOpenPhoto} />
        <StepThreeKeysCard />
      </Stack>
    </>
  );
}
