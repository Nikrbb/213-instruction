"use client";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { StepOneCard } from "./StepOneCard";
import { StepTwoCourtyardCard } from "./StepTwoCourtyardCard";
import { StepThreeKeysCard } from "./StepThreeKeysCard";
import type { InstructionDTO } from "@/lib/instruction-types";
import type { LightboxImage } from "./types";

export type GuideStepsSectionProps = {
  guide: Pick<InstructionDTO, "guideStep1" | "guideStep2" | "guideStep3">;
  onOpenPhoto: (image: LightboxImage) => void;
};

export function GuideStepsSection({ guide, onOpenPhoto }: GuideStepsSectionProps) {
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
        <StepOneCard step1Image={guide.guideStep1} onOpenPhoto={onOpenPhoto} />
        <StepTwoCourtyardCard
          title={guide.guideStep2.title}
          intro={guide.guideStep2.intro}
          bullets={guide.guideStep2.bullets}
          photos={guide.guideStep2.photos}
          onOpenPhoto={onOpenPhoto}
        />
        <StepThreeKeysCard
          residenceName={guide.guideStep3.residenceName}
          paradeName={guide.guideStep3.paradeName}
          securityInstruction={guide.guideStep3.securityInstruction}
          securityInstructionNoGuard={guide.guideStep3.securityInstructionNoGuard}
          lockerCode={guide.guideStep3.lockerCode}
          lockerHint={guide.guideStep3.lockerHint}
          closing={guide.guideStep3.closing}
        />
      </Stack>
    </>
  );
}
