"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import AccessTime from "@mui/icons-material/AccessTime";
import Event from "@mui/icons-material/Event";

export function StayScheduleCards() {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
              <AccessTime color="primary" />
              <Typography variant="subtitle1" fontWeight={600}>
                Час заїзду
              </Typography>
            </Stack>
            <Typography variant="h5" color="primary" fontWeight={700}>
              з 14:00
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Заселення починається о 14:00.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
              <Event color="primary" />
              <Typography variant="subtitle1" fontWeight={600}>
                Час виїзду
              </Typography>
            </Stack>
            <Typography variant="h5" color="primary" fontWeight={700}>
              до 12:00
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Будь ласка, звільніть квартиру до полудня.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
