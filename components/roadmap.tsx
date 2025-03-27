import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Award, CreditCard, Dot } from "lucide-react";
import React from "react";
import { SectionLayout } from "./section-layout";

export const Roadmap = () => {
  const items: Array<{
    title: string;
    icon: React.JSX.Element;
    releaseTime: string;
    features: string[];
  }> = [
    {
      title: "Fee Management",
      releaseTime: "Mid-Q2, 2025",
      icon: <CreditCard />,
      features: [
        "Generate Invoices",
        "Track payments and outstanding balances",
        "Issue receipts",
      ],
    },
    {
      title: "Examination System",
      releaseTime: "Late-Q2 to Early-Q3, 2025",
      icon: <Award />,
      features: [
        "Create and schedule exams",
        "Record and calculate results",
        "Generate report cards",
      ],
    },
  ];

  return (
    <SectionLayout sx={{ bgcolor: "#f2fbf9" }} id="roadmap">
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Product Roadmap
        </Typography>
        <Typography color="text.secondary">
          We are constantly improving our system. Here's what's coming next.
        </Typography>
      </Box>
      <Box mt={3} />
      <Grid2 container spacing={4} mt={4}>
        {items.map(({ title, icon, releaseTime, features }) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={title}>
            <Card>
              <CardHeader
                avatar={
                  <Box
                    sx={{
                      backgroundColor: "#e0f2fe",
                      borderRadius: "10px",
                      padding: "5px",
                    }}
                  >
                    <Avatar sx={{ bgcolor: "transparent", color: "#1e88e5" }}>
                      {icon}
                    </Avatar>
                  </Box>
                }
                title={
                  <Typography variant="h6" fontWeight={600}>
                    {title}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color={blue[800]}>
                    {releaseTime}
                  </Typography>
                }
              />
              <CardContent sx={{ textAlign: "left" }}>
                <List dense disablePadding>
                  {features.map((feature) => (
                    <ListItem key={feature} disablePadding>
                      <ListItemIcon sx={{ minWidth: 0 }}>
                        <Dot />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography>{feature}</Typography>}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </SectionLayout>
  );
};
