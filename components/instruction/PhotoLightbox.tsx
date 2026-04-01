"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import type { LightboxImage } from "./types";

export type PhotoLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

export function PhotoLightbox({ image, onClose }: PhotoLightboxProps) {
  return (
    <Dialog
      fullScreen
      open={image !== null}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            bgcolor: "rgba(0,0,0,0.92)",
            backgroundImage: "none",
          },
        },
      }}
    >
      <IconButton
        aria-label="Закрити"
        onClick={onClose}
        sx={{
          position: "fixed",
          right: 8,
          top: 8,
          zIndex: 2,
          color: "common.white",
          bgcolor: "rgba(255,255,255,0.12)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
        }}
      >
        <Close />
      </IconButton>
      <Box
        onClick={onClose}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 1, sm: 2 },
          boxSizing: "border-box",
        }}
      >
        {image ? (
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{ position: "relative", maxWidth: "100%", maxHeight: "100%" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="100vw"
              style={{
                maxWidth: "min(100vw - 16px, 100%)",
                maxHeight: "calc(100dvh - 24px)",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        ) : null}
      </Box>
    </Dialog>
  );
}
