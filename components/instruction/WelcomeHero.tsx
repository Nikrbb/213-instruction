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
        p: { xs: 2.5, sm: 4 },
        mb: 3,
        borderRadius: 3,
        background:
          "linear-gradient(135deg, rgba(21,101,192,0.08) 0%, rgba(255,255,255,0.95) 100%)",
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ mb: 1 }}>
        <Favorite sx={{ color: "error.light", mt: 0.25 }} />
        <Typography variant="h4" component="h1" fontWeight={600}>
          Добрий день
        </Typography>
      </Stack>
      <Typography
        variant="h6"
        color="text.secondary"
        fontWeight={400}
        sx={{ pl: { xs: 0, sm: 4 } }}
      >
        Дякуємо, що забронювали наші апартаменти
      </Typography>
    </Paper>
  );
}
