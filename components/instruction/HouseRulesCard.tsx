"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VpnKey from "@mui/icons-material/VpnKey";

export function HouseRulesCard() {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
          Важливо перед заїздом і виїздом
        </Typography>
        <List disablePadding>
          <ListItem alignItems="flex-start" sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PhotoCamera color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Фіксація стану"
              secondary="При заїзді зніміть відео чи фото наявних дефектів, щоб уникнути взаємних претензій."
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem alignItems="flex-start" sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <VpnKey color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Ключі та застава"
              secondary="При виїзді залиште ключі у видимому місці в квартирі. Заставу повернемо на картку після прибирання та огляду."
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
