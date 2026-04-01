"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { GuideFigure } from "./GuideFigure";
import { STEP2_COURTYARD_PHOTOS } from "./constants";
import type { LightboxImage } from "./types";

export type StepTwoCourtyardCardProps = {
  onOpenPhoto: (image: LightboxImage) => void;
};

export function StepTwoCourtyardCard({ onOpenPhoto }: StepTwoCourtyardCardProps) {
  return (
    <Card>
      <CardContent>
        <Chip
          label="Крок 2"
          color="primary"
          size="small"
          sx={{ fontWeight: 600, mb: 1 }}
        />
        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
          Двір і парадна
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Ідіть прямо до дитячого майданчика з кораблем. Трохи лівіше — наша парадна.
          Орієнтуйтесь за фото нижче.
        </Typography>
        <List
          dense
          sx={{
            py: 0,
            mb: 2,
            bgcolor: "grey.50",
            borderRadius: 2,
            px: 2,
          }}
        >
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary="Йдемо прямо до дитячого «Корабля»" />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary="Трохи лівіше знаходиться наша парадна" />
          </ListItem>
        </List>
        <Stack spacing={2.5}>
          {STEP2_COURTYARD_PHOTOS.map((item) => (
            <GuideFigure
              key={item.src}
              caption={item.caption}
              image={{
                src: item.src,
                alt: item.alt,
                width: item.width,
                height: item.height,
              }}
              onOpen={onOpenPhoto}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
