"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Apartment from "@mui/icons-material/Apartment";
import Shield from "@mui/icons-material/Shield";
import Lock from "@mui/icons-material/Lock";

export type StepThreeKeysCardProps = {
  residenceName: string;
  paradeName: string;
  securityInstruction: string;
  securityInstructionNoGuard?: string;
  lockerCode: string;
  lockerHint: string;
  closing: string;
};

export function StepThreeKeysCard({
  residenceName,
  paradeName,
  securityInstruction,
  securityInstructionNoGuard,
  lockerCode,
  lockerHint,
  closing,
}: StepThreeKeysCardProps) {
  const hasBuilding = residenceName.length > 0 && paradeName.length > 0;
  const hasLocker = lockerCode.length > 0;

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
        {hasBuilding ? (
          <Typography variant="body1" paragraph>
            У нас <strong>{residenceName}</strong>, <strong>{paradeName}</strong> (як на останньому фото
            маршруту вище).
          </Typography>
        ) : (
          <Typography variant="body1" color="text.secondary" paragraph>
            Дані про будинок і парадну додамо разом із фото маршруту.
          </Typography>
        )}
        <Stack spacing={1.5} sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <Shield color="action" sx={{ mt: 0.25 }} />
            <Stack spacing={1}>
              <Typography variant="body1">{securityInstruction}</Typography>
              {securityInstructionNoGuard?.trim() ? (
                <Typography variant="body1" color="text.secondary">
                  {securityInstructionNoGuard}
                </Typography>
              ) : null}
            </Stack>
          </Stack>
          {hasLocker ? (
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
                label={lockerCode}
                color="secondary"
                sx={{ fontWeight: 700, fontSize: "1rem" }}
              />
            </Stack>
          ) : null}
          <Typography variant="body1" color="text.secondary">
            {lockerHint}
          </Typography>
        </Stack>
        <Typography variant="body1" fontWeight={500} color="primary">
          {closing}
        </Typography>
      </CardContent>
    </Card>
  );
}
