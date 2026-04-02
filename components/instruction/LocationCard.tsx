"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Map from "@mui/icons-material/Map";
import Place from "@mui/icons-material/Place";

export type LocationCardProps = {
  address: string;
  mapsUrl: string;
};

export function LocationCard({ address, mapsUrl }: LocationCardProps) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Place color="primary" sx={{ mt: 0.5 }} />
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Адреса
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {address}
              </Typography>
            </Box>
          </Stack>
          <Button
            variant="contained"
            size="large"
            startIcon={<Map />}
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ alignSelf: { xs: "stretch", sm: "center" } }}
          >
            Відкрити в Google Maps
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
