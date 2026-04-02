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
import type { CourtyardPhoto } from "@/lib/instruction-types";
import type { LightboxImage } from "./types";

export type StepTwoCourtyardCardProps = {
  title: string;
  intro: string;
  bullets: string[];
  photos: CourtyardPhoto[];
  onOpenPhoto: (image: LightboxImage) => void;
};

export function StepTwoCourtyardCard({
  title,
  intro,
  bullets,
  photos,
  onOpenPhoto,
}: StepTwoCourtyardCardProps) {
  return (
    <Card>
      <CardContent>
        <Chip
          label="Крок 2"
          color="primary"
          size="small"
          sx={{ fontWeight: 600, mb: 1 }}
        />
        <Typography variant="h6" fontWeight={600} sx={{ mb: intro.trim() ? 1 : 2 }}>
          {title}
        </Typography>
        {intro.trim() ? (
          <Typography variant="body1" color="text.secondary" paragraph>
            {intro}
          </Typography>
        ) : null}
        {bullets.length > 0 ? (
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
            {bullets.map((primary) => (
              <ListItem key={primary} sx={{ px: 0 }}>
                <ListItemText primary={primary} />
              </ListItem>
            ))}
          </List>
        ) : null}
        {photos.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            Фото маршруту з’являться тут після оновлення інструкції.
          </Typography>
        ) : (
          <Stack spacing={2.5}>
            {photos.map((item) => (
              <GuideFigure
                key={item.src}
                caption={item.caption}
                showRouteArrow={item.showRouteArrow}
                routeArrowRotateDeg={item.routeArrowRotateDeg}
                routeArrowLeftPct={item.routeArrowLeftPct}
                routeArrowBottomPct={item.routeArrowBottomPct}
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
        )}
      </CardContent>
    </Card>
  );
}
