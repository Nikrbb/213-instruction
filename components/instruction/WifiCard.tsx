"use client";

import * as React from "react";
import { QRCodeSVG } from "qrcode.react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Wifi from "@mui/icons-material/Wifi";
import QrCode2 from "@mui/icons-material/QrCode2";
import ContentCopy from "@mui/icons-material/ContentCopy";
import {
  WIFI_SSID,
  WIFI_PASSWORD,
  getWifiQrPayload,
} from "./constants";

export function WifiCard() {
  const [open, setOpen] = React.useState(false);
  const [snack, setSnack] = React.useState<string | null>(null);

  const copy = React.useCallback(async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setSnack(`${label}: скопійовано`);
    } catch {
      setSnack("Не вдалося скопіювати");
    }
  }, []);

  const qrValue = React.useMemo(() => getWifiQrPayload(), []);

  return (
    <>
      <Card>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Wifi color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Wi‑Fi
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="caption" color="text.secondary" display="block">
                  Назва мережі (SSID)
                </Typography>
                <Typography variant="h6" fontWeight={700} sx={{ wordBreak: "break-all" }}>
                  {WIFI_SSID}
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="caption" color="text.secondary" display="block">
                  Пароль
                </Typography>
                <Typography variant="h6" fontWeight={700} sx={{ wordBreak: "break-all" }}>
                  {WIFI_PASSWORD}
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<QrCode2 />}
                onClick={() => setOpen(true)}
              >
                Підключитися
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Підключення до Wi‑Fi</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Alert severity="info">
              Сайт у браузері не може сам знайти мережі чи ввести пароль у системі — це обмеження
              безпеки. Відскануйте QR стандартною камерою телефона: з’явиться запрошення підключитися
              до «{WIFI_SSID}».
            </Alert>
            <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: "background.paper" }}>
                <QRCodeSVG value={qrValue} size={216} level="M" includeMargin />
              </Paper>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Або скопіюйте дані та додайте мережу вручну в налаштуваннях Wi‑Fi.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ContentCopy />}
                onClick={() => copy("SSID", WIFI_SSID)}
              >
                Копіювати назву
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ContentCopy />}
                onClick={() => copy("Пароль", WIFI_PASSWORD)}
              >
                Копіювати пароль
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpen(false)}>Закрити</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snack !== null}
        autoHideDuration={2800}
        onClose={() => setSnack(null)}
        message={snack ?? ""}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}
