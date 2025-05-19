import React from "react";
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

type RequestInfoProps = {
  items: Array<{ heading: string; content: string }>;
  title: string;
  subtitle: string;
};
export const RequestInfo: React.FC<RequestInfoProps> = ({
  items,
  title,
  subtitle,
}) => {
  return (
    <Box component={Paper} p={3}>
      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
      <Box mt={2} />
      <List dense>
        {items.map(({ heading, content }, index) => (
          <ListItem key={heading} disablePadding>
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: blue[50],
                  color: blue[700],
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography fontWeight={600}>{heading}</Typography>}
              secondary={
                <Typography color="text.secondary">{content}</Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
