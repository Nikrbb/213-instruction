"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LoginRounded from "@mui/icons-material/LoginRounded";
import LogoutRounded from "@mui/icons-material/LogoutRounded";
import BadgeRounded from "@mui/icons-material/BadgeRounded";
import PhotoCameraRounded from "@mui/icons-material/PhotoCameraRounded";
import SavingsRounded from "@mui/icons-material/SavingsRounded";
import GroupRounded from "@mui/icons-material/GroupRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";
import PriceCheckRounded from "@mui/icons-material/PriceCheckRounded";

type Step = {
  icon: React.ReactNode;
  title: string;
  detail: string;
  badge?: string;
};

const ARRIVAL_STEPS: Step[] = [
  {
    icon: <BadgeRounded fontSize="small" />,
    title: "Надішліть фото документа й оплатіть",
    detail: "Заселення самостійне — одразу після заїзду надішліть фото ID та здійсніть оплату.",
  },
  {
    icon: <PhotoCameraRounded fontSize="small" />,
    title: "Сфотографуйте пошкодження",
    detail: "Якщо помітили дефекти — зробіть фото одразу, щоб уникнути взаємних претензій.",
  },
  {
    icon: <SavingsRounded fontSize="small" />,
    title: "Утримуємо заставу",
    detail: "Як гарантія збереження майна на час проживання.",
    badge: "2000 ₴",
  },
];

const DEPARTURE_STEPS: Step[] = [
  {
    icon: <GroupRounded fontSize="small" />,
    title: "Якщо вас двоє",
    detail:
      "Закрийте квартиру → викличте вантажний ліфт пропуском, натисніть 1 поверх. Один тримає ліфт, другий кладе ключі у локер.",
  },
  {
    icon: <PersonRounded fontSize="small" />,
    title: "Якщо ви самі",
    detail:
      "Покладіть ключі у локер → у вантажному ліфті натисніть дзвінок і скажіть диспетчеру що виїжджаєте з подобової — охорона має вас спустити.",
  },
  {
    icon: <PriceCheckRounded fontSize="small" />,
    title: "Повернення застави",
    detail: "Протягом 12 годин після виїзду — на карту.",
  },
];

function StepRow({ step }: { step: Step }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="flex-start">
      <Box
        sx={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 0.25,
        }}
      >
        {step.icon}
      </Box>
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" sx={{ rowGap: 0.5 }}>
          <Typography variant="body2" fontWeight={600}>
            {step.title}
          </Typography>
          {step.badge ? (
            <Chip
              label={step.badge}
              size="small"
              color="primary"
              sx={{ height: 20, fontWeight: 700, fontSize: 12 }}
            />
          ) : null}
        </Stack>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25, lineHeight: 1.5 }}>
          {step.detail}
        </Typography>
      </Box>
    </Stack>
  );
}

function Section({
  label,
  icon,
  steps,
  accent,
}: {
  label: string;
  icon: React.ReactNode;
  steps: Step[];
  accent: "success" | "warning";
}) {
  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.25 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 24,
            height: 24,
            borderRadius: 1,
            bgcolor: (t) => t.palette[accent].light + "33",
            color: `${accent}.dark`,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="overline"
          fontWeight={700}
          color={`${accent}.dark`}
          sx={{ letterSpacing: 0.6, lineHeight: 1 }}
        >
          {label}
        </Typography>
      </Stack>
      <Stack spacing={1.25}>
        {steps.map((s) => (
          <StepRow key={s.title} step={s} />
        ))}
      </Stack>
    </Box>
  );
}

export function HouseRulesCard() {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent sx={{ p: { xs: 2, sm: 2.5 }, "&:last-child": { pb: { xs: 2, sm: 2.5 } } }}>
        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>
          Важливо — швидкий чек-лист
        </Typography>
        <Stack spacing={2.25}>
          <Section
            label="При заїзді"
            icon={<LoginRounded fontSize="small" />}
            steps={ARRIVAL_STEPS}
            accent="success"
          />
          <Box sx={{ borderTop: 1, borderColor: "divider" }} />
          <Section
            label="При виїзді"
            icon={<LogoutRounded fontSize="small" />}
            steps={DEPARTURE_STEPS}
            accent="warning"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
