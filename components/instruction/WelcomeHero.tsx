"use client";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Favorite from "@mui/icons-material/Favorite";

export function WelcomeHero() {
  return (
    <Paper
      elevation={0}
      sx={{
        px: { xs: 1.75, sm: 2.5 },
        py: { xs: 1.25, sm: 1.75 },
        mb: 2,
        borderRadius: 2,
        background:
          "linear-gradient(135deg, rgba(21,101,192,0.08) 0%, rgba(255,255,255,0.95) 100%)",
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Favorite sx={{ color: "error.light", fontSize: 18 }} />
        <Typography variant="subtitle1" component="h1" fontWeight={600}>
          Добрий день
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.25, pl: 3.25 }}
      >
        Дякуємо, що забронювали наші апартаменти
      </Typography>
    </Paper>
  );
}
