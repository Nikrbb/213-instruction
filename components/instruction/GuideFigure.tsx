"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import type { LightboxImage } from "./types";

const wrapSx = {
  borderRadius: 2,
  overflow: "hidden" as const,
  bgcolor: "grey.100",
  cursor: "pointer" as const,
  position: "relative" as const,
  "&:focus-visible": { outline: "2px solid", outlineColor: "primary.main" },
};

export type GuideFigureProps = {
  image: LightboxImage;
  onOpen: (img: LightboxImage) => void;
  step?: number;
  caption?: string;
  priority?: boolean;
  showRouteArrow?: boolean;
  routeArrowRotateDeg?: number;
  routeArrowLeftPct?: number;
  routeArrowBottomPct?: number;
};

export function GuideFigure({
  image,
  onOpen,
  step,
  caption,
  priority,
  showRouteArrow,
  routeArrowRotateDeg = 0,
  routeArrowLeftPct = 50,
  routeArrowBottomPct = 20,
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
        {showRouteArrow ? (
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              left: `${routeArrowLeftPct}%`,
              bottom: `${routeArrowBottomPct}%`,
              transform: `translateX(-50%) rotate(${routeArrowRotateDeg}deg)`,
              pointerEvents: "none",
              lineHeight: 0,
              color: "common.white",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.85))",
            }}
          >
            <ArrowUpward sx={{ fontSize: { xs: 48, sm: 56 }, opacity: 0.92 }} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
