"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Apartment from "@mui/icons-material/Apartment";
import Place from "@mui/icons-material/Place";
import Map from "@mui/icons-material/Map";

export type InstructionAppBarProps = {
  title: string;
  subtitle: string;
  address: string;
  mapsUrl: string;
};

export function InstructionAppBar({ title, subtitle, address, mapsUrl }: InstructionAppBarProps) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 1, minHeight: { xs: 56, sm: 56 } }}>
        <Place color="primary" fontSize="small" />
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {address}
        </Typography>
        <IconButton
          color="primary"
          size="small"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Відкрити в Google Maps"
          sx={{
            flexShrink: 0,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            "&:hover": { bgcolor: "primary.dark" },
            display: { xs: "inline-flex", sm: "none" },
          }}
        >
          <Map fontSize="small" />
        </IconButton>
        <Button
          variant="contained"
          size="small"
          startIcon={<Map />}
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ flexShrink: 0, display: { xs: "none", sm: "inline-flex" } }}
        >
          Google Maps
        </Button>
      </Toolbar>
      <Box
        sx={{
          px: { xs: 2, sm: 3 },
          py: 0.75,
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.default",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Apartment color="primary" fontSize="small" />
          <Typography variant="body2" component="span" fontWeight={600} sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Box>
    </AppBar>
  );
}
