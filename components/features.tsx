import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
} from "@mui/material";
import { Bell, Calendar, ClipboardList, Users } from "lucide-react";
import React, { useMemo } from "react";
import { SectionLayout } from "./section-layout";

export const Features = () => {
  const items: Array<{
    name: string;
    icon: React.JSX.Element;
    description: string;
  }> = useMemo(
    () => [
      {
        name: "Role-Based Access",
        icon: <Users />,
        description:
          "Separate portals for administrators, teachers, students, and parents with appropriate permissions.",
      },
      {
        name: "Attendance & Leave",
        icon: <Calendar />,
        description:
          "Track student and staff attendance, manage leave applications and approvals.",
      },
      {
        name: "Academic Management",
        icon: <ClipboardList />,
        description:
          "Set up academic years, levels, periods, classes, sections, and assign teachers.",
      },
      {
        name: "Notice Board",
        icon: <Bell />,
        description:
          "Share announcements with specific groups or the entire school community.",
      },
    ],
    []
  );

  return (
    <SectionLayout sx={{ bgcolor: "#f7f2f4" }} id="features">
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Comprehensive Features
        </Typography>
        <Typography color="text.secondary">
          Everything you need to manage your school effeciently in one platform.
        </Typography>
        <Grid2 container spacing={4} mt={4}>
          {items.map(({ name, icon, description }) => (
            <Grid2 size={{ xs: 12, md: 6 }} key={name}>
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
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  {name}
                </Typography>
                <Typography>{description}</Typography>
              </CardContent>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </SectionLayout>
  );
};
