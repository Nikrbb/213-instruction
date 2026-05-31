"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import AccessTime from "@mui/icons-material/AccessTime";
import Event from "@mui/icons-material/Event";

export type StayScheduleCardsProps = {
  checkInTime: string;
  checkInDetail: string;
  checkOutTime: string;
  checkOutDetail: string;
};

export function StayScheduleCards({
  checkInTime,
  checkInDetail,
  checkOutTime,
  checkOutDetail,
}: StayScheduleCardsProps) {
  return (
    <Grid container spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: 3 }}>
      <Grid size={6}>
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ p: { xs: 1.5, sm: 2 }, "&:last-child": { pb: { xs: 1.5, sm: 2 } } }}>
            <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mb: 1 }}>
              <AccessTime color="primary" fontSize="small" />
              <Typography variant="subtitle2" fontWeight={600}>
                Час заїзду
              </Typography>
            </Stack>
            <Typography variant="h6" color="primary" fontWeight={700}>
              {checkInTime}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: "block" }}>
              {checkInDetail}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={6}>
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ p: { xs: 1.5, sm: 2 }, "&:last-child": { pb: { xs: 1.5, sm: 2 } } }}>
            <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mb: 1 }}>
              <Event color="primary" fontSize="small" />
              <Typography variant="subtitle2" fontWeight={600}>
                Час виїзду
              </Typography>
            </Stack>
            <Typography variant="h6" color="primary" fontWeight={700}>
              {checkOutTime}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: "block" }}>
              {checkOutDetail}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
