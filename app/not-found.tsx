"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: (t) =>
          `linear-gradient(165deg, ${t.palette.primary.light}12 0%, ${t.palette.background.default} 40%, ${t.palette.background.default} 100%)`,
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            variant="overline"
            color="primary"
            fontWeight={700}
            sx={{ letterSpacing: 2 }}
          >
            404
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={600}>
            Сторінку не знайдено
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Можливо, посилання застаріле або номер квартири вказано невірно.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
