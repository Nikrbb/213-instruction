"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import type { LightboxImage } from "./types";

const wrapSx = {
  borderRadius: 2,
  overflow: "hidden" as const,
  bgcolor: "grey.100",
  cursor: "pointer" as const,
  "&:focus-visible": { outline: "2px solid", outlineColor: "primary.main" },
};

export type GuideFigureProps = {
  image: LightboxImage;
  onOpen: (img: LightboxImage) => void;
  step?: number;
  caption?: string;
  priority?: boolean;
};

export function GuideFigure({
  image,
  onOpen,
  step,
  caption,
  priority,
}: GuideFigureProps) {
  const open = React.useCallback(() => {
    onOpen(image);
  }, [image, onOpen]);

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen(image);
      }
    },
    [image, onOpen],
  );

  return (
    <Box>
      {typeof step === "number" ? (
        <Chip
          label={`Крок ${step}`}
          color="primary"
          size="small"
          sx={{ fontWeight: 600, mb: 1 }}
        />
      ) : null}
      {caption ? (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, fontWeight: 600 }}
        >
          {caption}
        </Typography>
      ) : null}
      <Box
        onClick={open}
        sx={wrapSx}
        role="button"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 900px) 100vw, 900px"
          priority={priority}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
}
