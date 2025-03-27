import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Check, Clock, Users } from "lucide-react";
import { useMemo } from "react";

export const DemoInfo = () => {
  const items: Array<{
    title: string;
    subtitle: string;
    icon: React.JSX.Element;
  }> = useMemo(
    () => [
      {
        title: "Our demo lasts 20-30 minutes.",
        subtitle:
          "We keep our demos concise but comprehensive, designed to respect your time.",
        icon: <Clock size={20} color="#2563eb" />,
      },
      {
        title:
          "We'll walk you through the key features and answer your questions.",
        subtitle:
          "The demo focuses on the aspects most relevant to your needs.",
        icon: <Users size={20} color="#2563eb" />,
      },
      {
        title: "No commitment required!",
        subtitle:
          "Our demos are pressure-free. We're here to show you what's possible, not to push you into a decision.",
        icon: <Check size={20} color="#2563eb" />,
      },
    ],
    []
  );

  return (
    <Box component={Paper} p={3}>
      <Typography variant="h5" fontWeight={600}>
        What to Expect
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Here&apos; what happens after you submit your request
      </Typography>
      <Box mt={2} />
      <List dense>
        {items.map(({ title, subtitle, icon }) => (
          <ListItem key={title} disablePadding>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[50] }}>{icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography fontWeight={600}>{title}</Typography>}
              secondary={
                <Typography color="text.secondary">{subtitle}</Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
