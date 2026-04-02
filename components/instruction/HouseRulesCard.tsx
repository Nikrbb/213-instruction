"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MeetingRoom from "@mui/icons-material/MeetingRoom";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Savings from "@mui/icons-material/Savings";
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
              <MeetingRoom color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Заселення"
              secondary="Заселення відбувається самостійно. Одразу після заїзду надішліть фото документа, що посвідчує особу, та здійсніть оплату."
            />
          </ListItem>
          <Divider component="li" variant="inset" />
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
              <Savings color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Застава"
              secondary="На час проживання утримується застава 2000 ₴ як гарантія збереження апартаментів і майна."
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem alignItems="flex-start" sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <VpnKey color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Ключі та виїзд"
              secondary="Коли виїжджаєте, залиште ключі на видному місці в квартирі або покладіть їх у локер і зачиніть його. У ліфті натисніть кнопку виклику й повідомте диспетчера, що завершуєте посуточне проживання — вам відкриють вихід з будинку. Заставу повертаємо на картку протягом 12 годин після виїзду."
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
