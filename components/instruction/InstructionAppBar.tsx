"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Apartment from "@mui/icons-material/Apartment";

export type InstructionAppBarProps = {
  title: string;
  subtitle: string;
};

export function InstructionAppBar({ title, subtitle }: InstructionAppBarProps) {
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
      <Toolbar sx={{ gap: 1 }}>
        <Apartment color="primary" />
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {subtitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
