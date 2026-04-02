"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GuideFigure } from "./GuideFigure";
import type { LightboxImage } from "./types";

export type StepOneCardProps = {
  step1Image: LightboxImage;
  onOpenPhoto: (image: LightboxImage) => void;
};

export function StepOneCard({ step1Image, onOpenPhoto }: StepOneCardProps) {
  return (
    <Card>
      <CardContent sx={{ "&:last-child": { pb: 2 } }}>
        <GuideFigure
          step={1}
          image={step1Image}
          onOpen={onOpenPhoto}
          priority
        />
      </CardContent>
    </Card>
  );
}
