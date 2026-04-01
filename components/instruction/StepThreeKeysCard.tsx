"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Apartment from "@mui/icons-material/Apartment";
import Shield from "@mui/icons-material/Shield";
import Lock from "@mui/icons-material/Lock";

export function StepThreeKeysCard() {
  return (
    <Card sx={{ border: 2, borderColor: "primary.light" }}>
      <CardContent>
        <Chip
          label="Крок 3"
          color="primary"
          size="small"
          sx={{ fontWeight: 600, mb: 1 }}
        />
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Apartment color="primary" />
          <Typography variant="h6" fontWeight={600}>
            Будинок і ключі
          </Typography>
        </Stack>
        <Typography variant="body1" paragraph>
          У нас <strong>27 Перлина</strong>, <strong>1-ша парадна</strong> (як на останньому фото вище).
        </Typography>
        <Stack spacing={1.5} sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <Shield color="action" sx={{ mt: 0.25 }} />
            <Typography variant="body1">
              На охороні попросіть підняти вас у{" "}
              <strong>апартаменти 213 на 22-му поверсі</strong>.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Lock color="action" />
            <Typography variant="body1" component="span">
              Біля квартири є локер (сейф). Код:
            </Typography>
            <Chip
              label="1213"
              color="secondary"
              sx={{ fontWeight: 700, fontSize: "1rem" }}
            />
          </Stack>
          <Typography variant="body1" color="text.secondary">
            Введіть код, відчиніть локер, беріть ключі та заходьте в квартиру.
          </Typography>
        </Stack>
        <Typography variant="body1" fontWeight={500} color="primary">
          Гарного відпочинку!
        </Typography>
      </CardContent>
    </Card>
  );
}
