"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GuideFigure } from "./GuideFigure";
import { STEP1_BUILDING } from "./constants";
import type { LightboxImage } from "./types";

export type StepOneCardProps = {
  onOpenPhoto: (image: LightboxImage) => void;
};

export function StepOneCard({ onOpenPhoto }: StepOneCardProps) {
  return (
    <Card>
      <CardContent sx={{ "&:last-child": { pb: 2 } }}>
        <GuideFigure
          step={1}
          image={STEP1_BUILDING}
          onOpen={onOpenPhoto}
          priority
        />
      </CardContent>
    </Card>
  );
}
